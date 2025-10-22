import { ArrowRight, Flame, Shield, Star, Award } from "lucide-react";
import { NavLink } from "react-router";
import { Routes } from "../constants/Routes";
import img1 from "../assets/images/40758827_1105871969564599_6886492763649274568_n.jpg";
import img2 from "../assets/images/25007129_515339782167657_2829785245019013120_n.jpg";
import img3 from "../assets/images/20181066_712927082246344_2683651250515345408_n.jpg";
import mainImg from "../assets/images/Home-Welcome-1.jpg";

export function HomePage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Порошковая покраска
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 mt-2">
                высшего качества
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Профессиональная порошковая окраска металлических изделий.
              Долговечное покрытие с гарантией качества.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <NavLink
                to={Routes.CONTACT}
                className="group bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg shadow-red-900/50"
              >
                <span>Получить консультацию</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </NavLink>
              <NavLink
                to={Routes.PRICING}
                className="border-2 border-gray-700 hover:border-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
              >
                Узнать цены
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Что такое порошковая покраска?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Порошковая покраска — современная технология нанесения
                защитно-декоративного покрытия на металлические изделия.
                Порошковая краска наносится электростатическим способом и затем
                полимеризуется в специальной печи при температуре 180-220°C.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Такое покрытие обладает высокой прочностью, устойчивостью к
                коррозии, ультрафиолету и механическим повреждениям. Срок службы
                покрытия — более 15 лет.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-950/30 to-black/50 rounded-2xl p-8 border border-red-900/30">
              <img
                src={mainImg}
                alt="Порошковая покраска металла"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Защита от коррозии
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Надежная защита металла от ржавчины на 15+ лет
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Эстетичный вид
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Равномерное покрытие с богатой палитрой цветов
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Flame className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Экологичность
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Без растворителей и вредных испарений
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Наши преимущества
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-red-700 transition-all hover:transform hover:scale-105">
              <div className="bg-red-950/30 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-900/40 transition-colors">
                <Flame className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Современное оборудование
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Используем полимеризационные печи последнего поколения,
                обеспечивающие равномерное и качественное покрытие.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-red-700 transition-all hover:transform hover:scale-105">
              <div className="bg-red-950/30 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-900/40 transition-colors">
                <Award className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Опытные специалисты
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Команда профессионалов с многолетним опытом работы. Гарантируем
                высокое качество на каждом этапе.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-red-700 transition-all hover:transform hover:scale-105">
              <div className="bg-red-950/30 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-900/40 transition-colors">
                <Shield className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Гарантия качества
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Предоставляем гарантию на все виды работ. Используем только
                сертифицированные материалы.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Примеры наших работ
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src={img1}
                alt="Окрашенные металлические изделия"
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-semibold">Металлоконструкции</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src={img2}
                alt="Порошковая окраска деталей"
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-semibold">Автомобильные детали</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src={img3}
                alt="Окрашенные изделия"
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-semibold">Буры</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
