
import { useState } from "react";

function Navbar1() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-pink-500 to-purple-600">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

          {/* Botón del menú móvil */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-pink-100 hover:bg-pink-400 hover:text-white"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>

              {menuOpen ? (
                <svg
                  className="size-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="size-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 6h18M3 12h18m-18 6h18"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">

            <div className="flex shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                alt="Logo"
              />
            </div>

            {/* Links */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">

                <a
                  href="/"
                  className="rounded-md bg-purple-700 px-3 py-2 text-sm font-medium text-white"
                >
                  Home
                </a>

                <a
                  href="/login"
                  className="rounded-md px-3 py-2 text-sm font-medium text-pink-100 hover:bg-purple-700 hover:text-white"
                >
                  Login
                </a>

                <a
                  href="/register"
                  className="rounded-md px-3 py-2 text-sm font-medium text-pink-100 hover:bg-purple-700 hover:text-white"
                >
                  Register
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">

            <a
              href="/"
              className="block rounded-md bg-purple-700 px-3 py-2 text-base font-medium text-white"
            >
              Home
            </a>

            <a
              href="/login"
              className="block rounded-md px-3 py-2 text-base font-medium text-pink-100 hover:bg-purple-700 hover:text-white"
            >
              Login
            </a>

            <a
              href="/register"
              className="block rounded-md px-3 py-2 text-base font-medium text-pink-100 hover:bg-purple-700 hover:text-white"
            >
              Register
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar1;
