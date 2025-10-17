import { Flame, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Flame className="w-6 h-6 text-red-600" />
              <span className="text-lg font-bold text-white">crasim.ru</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Профессиональная порошковая покраска металлических изделий с
              гарантией качества и долговечности покрытия.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <a
                href="tel:+79296679993"
                className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+7 (929) 667-99-93</span>
              </a>
              <a
                href="mailto:mail@crasim.ru"
                className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                <span>mail@crasim.ru</span>
              </a>
              <div className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>г. Мытищи 1-й Силикатный пер, д. 12</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Режим работы</h3>
            <div className="text-gray-400 text-sm space-y-1">
              <p>Пн-Пт: 9:00 - 18:00</p>
              <p>Сб: 10:00 - 15:00</p>
              <p>Вс: выходной</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2009 crasim.ru. Все права защищены.
            </div>
            <div className="text-gray-500 text-sm">
              Создано с заботой о качестве
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
