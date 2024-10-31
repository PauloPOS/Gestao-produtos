import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-gray-300 bg-blue-600 dark:bg-blue-900 dark:border-blue-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-blue-200">
            Infnet - Pós Graduação
          </span>
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-blue-300 dark:hover:bg-blue-700 dark:focus:ring-blue-500"
          aria-controls="navbar-solid-bg"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-blue-500 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-blue-800 md:dark:bg-transparent dark:border-blue-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-blue-700 md:hover:bg-transparent md:hover:text-yellow-300 dark:text-blue-100 dark:hover:text-yellow-400 dark:hover:bg-blue-700"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/cadastro"
                className="block py-2 px-3 md:p-0 text-white rounded hover:bg-blue-700 md:hover:bg-transparent md:hover:text-yellow-300 dark:text-blue-100 dark:hover:text-yellow-400 dark:hover:bg-blue-700"
              >
                Cadastro
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
