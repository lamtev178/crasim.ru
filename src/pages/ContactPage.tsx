import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState, FormEvent } from "react";
import { supabase } from "../lib/supabase";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const { error } = await supabase.from("contact_requests").insert([
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Контакты</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы ответим на все ваши
            вопросы
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">
              Оставьте заявку
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
                  placeholder="Иван Иванов"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
                  placeholder="+7 (929) 667-99-93"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
                  placeholder="example@mail.ru"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 font-medium"
                >
                  Сообщение *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors resize-none"
                  placeholder="Опишите, что вы хотите покрасить..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg shadow-red-900/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? "Отправка..." : "Отправить заявку"}</span>
                <Send className="w-5 h-5" />
              </button>

              {submitStatus === "success" && (
                <div className="bg-green-900/30 border border-green-700 rounded-lg p-4 text-green-300">
                  Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в
                  ближайшее время.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-900/30 border border-red-700 rounded-lg p-4 text-red-300">
                  Произошла ошибка при отправке. Пожалуйста, попробуйте позже
                  или свяжитесь с нами по телефону.
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Контактная информация
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-950/30 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Телефон</h3>
                    <a
                      href="tel:+79296679993"
                      className="text-gray-300 hover:text-red-500 transition-colors"
                    >
                      +7 (929) 667-99-93
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-950/30 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:mail@crasim.ru"
                      className="text-gray-300 hover:text-red-500 transition-colors"
                    >
                      mail@crasim.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-950/30 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Адрес</h3>
                    <p className="text-gray-300">
                      г. Мытищи 1-й Силикатный пер, д. 12
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-950/30 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Режим работы
                    </h3>
                    <p className="text-gray-300">
                      Пн-Пт: 9:00 - 18:00
                      <br />
                      Сб: 10:00 - 15:00
                      <br />
                      Вс: выходной
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-950/30 to-black/50 rounded-2xl p-6 border border-red-900/30">
              <h3 className="text-xl font-bold text-white mb-4">
                Бесплатная консультация
              </h3>
              <p className="text-gray-300 mb-4">
                Не знаете, подходит ли порошковая покраска для вашего изделия?
                Позвоните нам, и мы бесплатно проконсультируем по всем вопросам.
              </p>
              <a
                href="tel:+79296679993"
                className="inline-block bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Позвонить сейчас
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-800">
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A64b1d7b8baf6fd9d3e3b6c3c9f5d2a3c5f6e7d8c9b0a1f2e3d4c5b6a7989&amp;source=constructor"
            width="100%"
            height="500"
            frameBorder="0"
            className="w-full"
            title="Карта проезда"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
