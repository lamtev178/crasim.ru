import { Flame, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-lg border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Flame className="w-8 h-8 text-red-600" />
            <span className="text-xl font-bold text-white">crasim.ru</span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors ${
                currentPage === 'home' ? 'text-red-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => handleNavClick('pricing')}
              className={`transition-colors ${
                currentPage === 'pricing' ? 'text-red-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              Расценки
            </button>
            <button
              onClick={() => handleNavClick('process')}
              className={`transition-colors ${
                currentPage === 'process' ? 'text-red-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              Наш подход
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white px-6 py-2 rounded-lg transition-all transform hover:scale-105"
            >
              Контакты
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => handleNavClick('home')}
              className={`block w-full text-left transition-colors ${
                currentPage === 'home' ? 'text-red-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => handleNavClick('pricing')}
              className={`block w-full text-left transition-colors ${
                currentPage === 'pricing' ? 'text-red-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              Расценки
            </button>
            <button
              onClick={() => handleNavClick('process')}
              className={`block w-full text-left transition-colors ${
                currentPage === 'process' ? 'text-red-500' : 'text-gray-300 hover:text-white'
              }`}
            >
              Наш подход
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white px-6 py-2 rounded-lg transition-colors text-left"
            >
              Контакты
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
