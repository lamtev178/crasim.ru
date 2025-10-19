import { NavLink } from "react-router";
import { Routes } from "../constants/Routes";

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
                Окраска профильных труб
              </h2>
              <p className="text-red-100 mt-2">Цены указаны за погонный метр</p>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-4 px-4 text-white font-semibold">
                        Размер профиля
                      </th>
                      <th className="text-left py-4 px-4 text-white font-semibold">
                        Цена (руб/м.п.)
                      </th>
                      <th className="text-left py-4 px-4 text-white font-semibold">
                        Срок выполнения
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                      <td className="py-4 px-4 text-gray-300">20×20 мм</td>
                      <td className="py-4 px-4 text-white font-semibold">80</td>
                      <td className="py-4 px-4 text-gray-300">2-3 дня</td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                      <td className="py-4 px-4 text-gray-300">25×25 мм</td>
                      <td className="py-4 px-4 text-white font-semibold">95</td>
                      <td className="py-4 px-4 text-gray-300">2-3 дня</td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                      <td className="py-4 px-4 text-gray-300">30×30 мм</td>
                      <td className="py-4 px-4 text-white font-semibold">
                        110
                      </td>
                      <td className="py-4 px-4 text-gray-300">2-3 дня</td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                      <td className="py-4 px-4 text-gray-300">40×40 мм</td>
                      <td className="py-4 px-4 text-white font-semibold">
                        140
                      </td>
                      <td className="py-4 px-4 text-gray-300">2-3 дня</td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                      <td className="py-4 px-4 text-gray-300">50×50 мм</td>
                      <td className="py-4 px-4 text-white font-semibold">
                        175
                      </td>
                      <td className="py-4 px-4 text-gray-300">3-4 дня</td>
                    </tr>
                    <tr className="hover:bg-gray-900/50 transition-colors">
                      <td className="py-4 px-4 text-gray-300">60×60 мм</td>
                      <td className="py-4 px-4 text-white font-semibold">
                        210
                      </td>
                      <td className="py-4 px-4 text-gray-300">3-4 дня</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden">
            <div className="bg-gradient-to-r from-red-900 to-red-700 px-8 py-6">
              <h2 className="text-3xl font-bold text-white">
                Окраска листового металла
              </h2>
              <p className="text-red-100 mt-2">
                Цены указаны за квадратный метр
              </p>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-4 px-4 text-white font-semibold">
                        Толщина листа
                      </th>
                      <th className="text-left py-4 px-4 text-white font-semibold">
                        Цена (руб/м²)
                      </th>
                      <th className="text-left py-4 px-4 text-white font-semibold">
                        Срок выполнения
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                      <td className="py-4 px-4 text-gray-300">1-2 мм</td>
                      <td className="py-4 px-4 text-white font-semibold">
                        450
                      </td>
                      <td className="py-4 px-4 text-gray-300">2-3 дня</td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                      <td className="py-4 px-4 text-gray-300">3-4 мм</td>
                      <td className="py-4 px-4 text-white font-semibold">
                        520
                      </td>
                      <td className="py-4 px-4 text-gray-300">2-3 дня</td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                      <td className="py-4 px-4 text-gray-300">5-6 мм</td>
                      <td className="py-4 px-4 text-white font-semibold">
                        590
                      </td>
                      <td className="py-4 px-4 text-gray-300">3-4 дня</td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                      <td className="py-4 px-4 text-gray-300">7-8 мм</td>
                      <td className="py-4 px-4 text-white font-semibold">
                        660
                      </td>
                      <td className="py-4 px-4 text-gray-300">3-4 дня</td>
                    </tr>
                    <tr className="hover:bg-gray-900/50 transition-colors">
                      <td className="py-4 px-4 text-gray-300">9-10 мм</td>
                      <td className="py-4 px-4 text-white font-semibold">
                        730
                      </td>
                      <td className="py-4 px-4 text-gray-300">4-5 дней</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden">
            <div className="bg-gradient-to-r from-red-900 to-red-700 px-8 py-6">
              <h2 className="text-3xl font-bold text-white">
                Окраска металлоконструкций
              </h2>
              <p className="text-red-100 mt-2">
                Цены зависят от сложности изделия
              </p>
            </div>
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-4 px-4 text-white font-semibold">
                        Тип изделия
                      </th>
                      <th className="text-left py-4 px-4 text-white font-semibold">
                        Цена (руб)
                      </th>
                      <th className="text-left py-4 px-4 text-white font-semibold">
                        Срок выполнения
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                      <td className="py-4 px-4 text-gray-300">
                        Ворота распашные (стандарт)
                      </td>
                      <td className="py-4 px-4 text-white font-semibold">
                        от 8 000
                      </td>
                      <td className="py-4 px-4 text-gray-300">3-5 дней</td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                      <td className="py-4 px-4 text-gray-300">Калитка</td>
                      <td className="py-4 px-4 text-white font-semibold">
                        от 3 500
                      </td>
                      <td className="py-4 px-4 text-gray-300">2-3 дня</td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                      <td className="py-4 px-4 text-gray-300">Перила (п.м.)</td>
                      <td className="py-4 px-4 text-white font-semibold">
                        от 1 200
                      </td>
                      <td className="py-4 px-4 text-gray-300">3-4 дня</td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                      <td className="py-4 px-4 text-gray-300">
                        Забор (секция 2м)
                      </td>
                      <td className="py-4 px-4 text-white font-semibold">
                        от 2 800
                      </td>
                      <td className="py-4 px-4 text-gray-300">4-5 дней</td>
                    </tr>
                    <tr className="border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
                      <td className="py-4 px-4 text-gray-300">
                        Лестница металлическая
                      </td>
                      <td className="py-4 px-4 text-white font-semibold">
                        от 12 000
                      </td>
                      <td className="py-4 px-4 text-gray-300">5-7 дней</td>
                    </tr>
                    <tr className="hover:bg-gray-900/50 transition-colors">
                      <td className="py-4 px-4 text-gray-300">
                        Козырек (навес)
                      </td>
                      <td className="py-4 px-4 text-white font-semibold">
                        от 6 500
                      </td>
                      <td className="py-4 px-4 text-gray-300">3-5 дней</td>
                    </tr>
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
