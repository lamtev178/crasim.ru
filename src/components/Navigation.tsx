import { Flame, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";
import { Routes } from "../constants/Routes";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="font-normal fixed top-0 w-full bg-black/90 backdrop-blur-lg border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink
            to={Routes.HOME}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Flame className="w-8 h-8 text-red-600" />
            <span className="text-xl font-bold text-white">crasim.ru</span>
          </NavLink>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to={Routes.HOME}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? "text-red-500" : "text-gray-300 hover:text-white"
                }`
              }
            >
              Главная
            </NavLink>
            <NavLink
              to={Routes.PRICING}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? "text-red-500" : "text-gray-300 hover:text-white"
                }`
              }
            >
              Расценки
            </NavLink>
            <NavLink
              to={Routes.PROCCESS}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? "text-red-500" : "text-gray-300 hover:text-white"
                }`
              }
            >
              Наш подход
            </NavLink>
            <NavLink
              to={Routes.CONTACT}
              className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white px-6 py-2 rounded-lg transition-all transform hover:scale-105"
            >
              Контакты
            </NavLink>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            <NavLink
              to={Routes.HOME}
              className={({ isActive }) =>
                `block w-full text-left transition-colors ${
                  isActive ? "text-red-500" : "text-gray-300 hover:text-white"
                }`
              }
            >
              Главная
            </NavLink>
            <NavLink
              to={Routes.PRICING}
              className={({ isActive }) =>
                `block w-full text-left transition-colors ${
                  isActive ? "text-red-500" : "text-gray-300 hover:text-white"
                }`
              }
            >
              Расценки
            </NavLink>
            <NavLink
              to={Routes.PROCCESS}
              className={({ isActive }) =>
                `block w-full text-left transition-colors ${
                  isActive ? "text-red-500" : "text-gray-300 hover:text-white"
                }`
              }
            >
              Наш подход
            </NavLink>
            <NavLink
              to={Routes.CONTACT}
              className="w-full block bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white px-6 py-2 rounded-lg transition-colors text-left"
            >
              Контакты
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
