import type { VercelRequest, VercelResponse } from "@vercel/node";

import nodemailer from "nodemailer";

// Создаем transporter один раз
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_PORT === "465",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, // Для локального тестирования
  },
});

// Валидация email
const isValidEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Rate limiting
const rateLimit = new Map();

const checkRateLimit = (ip: string | string[] | undefined) => {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 минута
  const maxRequests = 10;

  if (!rateLimit.has(ip)) {
    rateLimit.set(ip, { count: 1, startTime: now });
    return true;
  }

  const data = rateLimit.get(ip);

  if (now - data.startTime > windowMs) {
    rateLimit.set(ip, { count: 1, startTime: now });
    return true;
  }

  if (data.count >= maxRequests) {
    return false;
  }

  data.count++;
  return true;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Разрешаем только POST запросы
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  // Получаем IP для rate limiting
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  // Проверяем rate limit
  if (!checkRateLimit(ip)) {
    return res.status(429).json({
      success: false,
      message: "Too many requests. Please try again later.",
    });
  }

  try {
    const { message, phone, name, email } = req.body.formData;
    console.log(req.body.formData);

    // Валидация обязательных полей
    if (!phone || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: phone, email, message",
      });
    }

    // Валидация email
    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }

    const templateForOwner = (data: {
      text: string;
      phone: string;
      email: string;
      name?: string;
    }) => {
      return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Новое сообщение с сайта crasim.ru</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 5px;">
            <p><strong>От:</strong> ${data.name} (${data.email})</p>
            <p><strong>Телефон:</strong> ${data.phone}</p>
            <div style="background: white; padding: 15px; margin: 15px 0; border-left: 4px solid #007bff;">
              <p style="white-space: pre-wrap; margin: 0;">Текст сообщения:${
                data.text
              }</p>
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            ${new Date().toLocaleString()}
          </p>
        </div>
      `;
    };
    const templateForUser = (data: { text: string }) => {
      return `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Новое сообщение с сайта crasim.ru</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 5px;">
          <p style="white-space: pre-wrap; margin: 0;">Спасибо что связались с нами, копия вашего обращения снизу</p>
            <p><strong>Телефон для обратной связи:</strong>+7 (929) 667-99-93</p>
            <div style="background: white; padding: 15px; margin: 15px 0; border-left: 4px solid #007bff;">
              <p style="white-space: pre-wrap; margin: 0;">Текст сообщения:${
                data.text
              }</p>
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            ${new Date().toLocaleString()}
          </p>
        </div>
      `;
    };

    // Получаем HTML из шаблона или используем переданный
    const emailHtmlForOwner = templateForOwner({
      ...req.body,
      text: message,
      name: name,
      phone,
      email,
    });
    // Получаем HTML из шаблона или используем переданный
    const emailHtmlForUser = templateForUser({
      text: message,
    });

    // Настройки письма
    const mailOptionsToUser = {
      from: `"${process.env.SMTP_FROM_NAME || "App"}" <${
        process.env.SMTP_USER
      }>`,
      to: email,
      subject: email,
      text: message,
      html: emailHtmlForUser,
    };
    const mailOptionsToOwner = {
      from: `"${process.env.SMTP_FROM_NAME || "App"}" <${
        process.env.SMTP_USER
      }>`,
      to: process.env.SMTP_USER,
      subject: email,
      text: message,
      html: emailHtmlForOwner,
    };

    // Отправка письма
    const infoForUser = await transporter.sendMail(mailOptionsToUser);
    const infoForOwner = await transporter.sendMail(mailOptionsToOwner);

    // // Логирование успешной отправки
    console.log("Email sent:", {
      email,
      phone,
      messageId: infoForUser.messageId,
      timestamp: new Date().toISOString(),
      ip,
    });

    // Логирование успешной отправки
    console.log("Email sent:", {
      email,
      phone,
      messageId: infoForOwner.messageId,
      timestamp: new Date().toISOString(),
      ip,
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
      messageId: infoForOwner.messageId,
    });
  } catch (error: any) {
    console.error("Error sending email:", error);

    // Детализированные ошибки
    let errorMessage = "Failed to send email";
    let statusCode = 500;

    if (error.code === "EAUTH") {
      errorMessage = "Authentication failed. Check email credentials.";
      statusCode = 401;
    } else if (error.code === "EENVELOPE") {
      errorMessage = "Invalid email address";
      statusCode = 400;
    }

    return res.status(statusCode).json({
      success: false,
      message: errorMessage,
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}

// Конфигурация для Vercel
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};
