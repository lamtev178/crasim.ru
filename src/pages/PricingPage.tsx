import { NavLink } from "react-router";
import { Routes } from "../constants/Routes";
import {
  FlatProducts,
  LongProducts,
  SmallSizeProducts,
  WheelsProducts,
} from "../constants/PricingData";

export function PricingPage() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Расценки на услуги
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Прозрачные цены на все виды работ. Точную стоимость уточняйте при
            заказе.
          </p>
        </div>

        <div className="space-y-12">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden">
            <div className="bg-gradient-to-r from-red-900 to-red-700 px-8 py-6">
              <h2 className="text-3xl font-bold text-white">
                Расчет стоимости плоских изделий
              </h2>
              <p className="text-red-100 mt-2">
                При расчёте стоимости покраски сборного изделия и изделия
                сложной конфигурации общая площадь изделия расчитывается как
                сумма площадей его частей. Минимальный прогон камеры 3,6 м.
                -2500 руб., 7,2 м - 5000 руб.
              </p>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      {FlatProducts.headers.map((header) => (
                        <th className="text-left py-4 px-4 text-white font-semibold">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {FlatProducts.data.map((row) => (
                      <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                        {row.map((el) => (
                          <td className="py-4 px-4 text-gray-300">{el}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden">
            <div className="bg-gradient-to-r from-red-900 to-red-700 px-8 py-6">
              <h2 className="text-3xl font-bold text-white">
                Расчет стоимости профиля и длинномерных изделий
              </h2>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      {LongProducts.headers.map((header) => (
                        <th className="text-left py-4 px-4 text-white font-semibold">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {LongProducts.data.map((row) => (
                      <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                        {row.map((el) => (
                          <td className="py-4 px-4 text-gray-300">{el}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden">
            <div className="bg-gradient-to-r from-red-900 to-red-700 px-8 py-6">
              <h2 className="text-3xl font-bold text-white">
                Штучные и маломерные изделия
              </h2>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      {SmallSizeProducts.headers.map((header) => (
                        <th className="text-left py-4 px-4 text-white font-semibold">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {SmallSizeProducts.data.map((row) => (
                      <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                        {row.map((el) => (
                          <td className="py-4 px-4 text-gray-300">{el}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden">
            <div className="bg-gradient-to-r from-red-900 to-red-700 px-8 py-6">
              <h2 className="text-3xl font-bold text-white">Колесные диски</h2>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {WheelsProducts.data.map((row) => (
                      <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                        {row.map((el) => (
                          <td className="py-4 px-4 text-gray-300">{el}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-red-950/30 to-black/50 rounded-2xl p-8 border border-red-900/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            Дополнительная информация
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Минимальный заказ — 3000 рублей</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>
                Предварительная подготовка поверхности включена в стоимость
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Доступна доставка по городу и области</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>
                Срочные заказы обсуждаются индивидуально (наценка +30%)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-3 mt-1">•</span>
              <span>Для постоянных клиентов действует система скидок</span>
            </li>
          </ul>
        </div>

        <div className="mt-12 text-center">
          <NavLink
            to={Routes.CONTACT}
            className="inline-block bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-red-900/50"
          >
            Получить точный расчёт стоимости
          </NavLink>
        </div>
      </div>
    </div>
  );
}
