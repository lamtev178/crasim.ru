import { CheckCircle, Flame } from "lucide-react";
import { NavLink } from "react-router";
import { Routes } from "../constants/Routes";

export function ProcessPage() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Наш подход к работе
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Мы придерживаемся строгих стандартов качества на каждом этапе
            производства
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Полимеризационная печь"
              className="w-full h-96 object-cover rounded-2xl"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Технология порошковой покраски
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Процесс порошковой покраски состоит из нескольких этапов, каждый
              из которых критически важен для получения качественного
              результата.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Мы используем современное оборудование и материалы ведущих
              производителей, что гарантирует долговечность и эстетичность
              покрытия.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Этапы работы
          </h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-8 hover:border-red-700 transition-all">
              <div className="flex items-start space-x-6">
                <div className="bg-red-950/30 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-red-500">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Приёмка изделия
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Детальный осмотр изделия, оценка его состояния и определение
                    необходимых подготовительных работ. Согласование цвета
                    покрытия по каталогу RAL.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-8 hover:border-red-700 transition-all">
              <div className="flex items-start space-x-6">
                <div className="bg-red-950/30 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-red-500">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Подготовка поверхности
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Очистка от загрязнений, обезжиривание и удаление старого
                    покрытия при необходимости. Пескоструйная обработка для
                    создания идеальной поверхности. Это критически важный этап,
                    определяющий качество финального покрытия.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-8 hover:border-red-700 transition-all">
              <div className="flex items-start space-x-6">
                <div className="bg-red-950/30 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-red-500">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Нанесение порошковой краски
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Электростатическое напыление порошковой краски в специальной
                    камере. Частицы краски получают отрицательный заряд и
                    равномерно покрывают заземлённое изделие, создавая
                    однородный слой нужной толщины.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-8 hover:border-red-700 transition-all">
              <div className="flex items-start space-x-6">
                <div className="bg-red-950/30 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <Flame className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Полимеризация в печи
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Изделие помещается в полимеризационную печь, где при
                    температуре 180-220°C происходит оплавление и отверждение
                    краски. В результате образуется прочное, монолитное покрытие
                    с отличными защитными свойствами.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-8 hover:border-red-700 transition-all">
              <div className="flex items-start space-x-6">
                <div className="bg-red-950/30 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-red-500">5</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Охлаждение и контроль качества
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    После полимеризации изделие охлаждается естественным путём.
                    Проводится тщательный визуальный контроль покрытия на
                    предмет дефектов, проверка толщины и равномерности слоя.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 p-8 hover:border-red-700 transition-all">
              <div className="flex items-start space-x-6">
                <div className="bg-red-950/30 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Упаковка и выдача
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Готовое изделие аккуратно упаковывается для предотвращения
                    повреждений при транспортировке. Выдача заказчику с полным
                    комплектом документов и гарантией.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-red-950/30 to-black/50 rounded-2xl p-8 border border-red-900/30">
            <h3 className="text-2xl font-bold text-white mb-6">
              Преимущества нашего подхода
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Строгий контроль на каждом этапе производства
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Использование сертифицированных материалов
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Современное оборудование от ведущих производителей
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Квалифицированный персонал с большим опытом
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Гарантия качества на все виды работ
                </span>
              </li>
            </ul>
          </div>

          <div>
            <img
              src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Результат порошковой покраски"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-900 to-red-700 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Качество, проверенное временем
          </h3>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Наши покрытия служат более 15 лет, сохраняя первоначальный вид и
            защитные свойства
          </p>
          <NavLink
            to={Routes.CONTACT}
            className="inline-block bg-white hover:bg-gray-100 text-red-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
          >
            Заказать услугу
          </NavLink>
        </div>
      </div>
    </div>
  );
}
