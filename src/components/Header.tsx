import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX, HiSearch } from "react-icons/hi";
import logo from "../images/expansion.svg";

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const siteLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/gallery", label: "Gallery" },
    { to: "/blog", label: "Blog" },
    { to: "/contacts", label: "Contacts" },
    { to: "/privacy", label: "Privacy" },
    { to: "/terms", label: "Terms" },
  ];

  const expansionLinks = [
    "Mercados",
    "Ahorro",
    "Empresas",
    "Economía",
    "Empleo",
    "Jurídico",
    "Fiscal",
    "Más",
  ];

  return (
    <>
      {searchOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setSearchOpen(false)}
        />
      )}

      <header className="relative flex-1 w-full px-4 sm:px-6 md:px-6 2xl:px-100 lg:px-0 bg-amber-50 flex flex-col z-50">
        <div className="flex justify-between items-center">
          <div className="flex flex-row">
            <Link to="https://www.expansion.com/" className="shrink-0">
              <img src={logo} alt="Expansión" className="h-13 translate-y-5.5" />
            </Link>

            <div className="lg:border-b-8 border-transparent lg:border-[#285595] relative flex-1">
              <div className="max-w-7xl flex items-center h-16 px-4 gap-6 translate-y-2">

                <nav className="hidden lg:flex gap-6 text-[15px] font-semibold translate-y-2">
                  {expansionLinks.map(item => (
                    <Link key={item} to="https://www.expansion.com/micuenta/v1/es/auth?view=login" className="hover:text-[#386ab0]">
                      {item}
                    </Link>
                  ))}
                </nav>

                <div className="flex items-center gap-4">

                  <div className="relative">
                    <button
                      onClick={() => setSearchOpen(v => !v)}
                      className="text-xl translate-y-3 relative z-50"
                    >
                      <HiSearch />
                    </button>

                    {searchOpen && (
                      <div className="absolute right-0 top-full mt-2 h-12 bg-white border border-gray-300 rounded shadow flex items-center overflow-hidden z-50 transition-all">
                        <input
                          type="text"
                          placeholder="Buscar..."
                          className="w-48 sm:w-64 px-3 py-2 border-none outline-none"
                          autoFocus
                        />
                        <button
                          onClick={() => setSearchOpen(false)}
                          className="text-xl px-3"
                        >
                          <HiX />
                        </button>
                      </div>
                    )}
                  </div>

                  <a
                    href="https://www.expansion.com/ed/premium.html"
                    target="_blank"
                    rel="noreferrer"
                    className="hidden md:flex h-full px-6 bg-[#fcaf33] rounded-b-[50%] flex-col justify-center items-center leading-none font-bold text-black"
                  >
                    <span className="text-xs">SUSCRÍBASE</span>
                    <span className="text-lg">24€</span>
                    <span className="text-xs">AÑO</span>
                  </a>

                  <a
                    href="https://www.expansion.com/micuenta/v1/es/auth?view=login"
                    target="_blank"
                    rel="noreferrer"
                    className="hidden md:block font-semibold hover:text-[#386ab0]"
                  >
                    Inicie sesión
                  </a>

                  <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden text-2xl translate-y-2"
                  >
                    {mobileOpen ? <HiX /> : <HiMenu />}
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[rgb(255,253,250)] border-b border-[#e2d8cb]">
          <div className="flex gap-4 px-4 py-2 overflow-x-auto text-sm font-medium whitespace-nowrap">
            {siteLinks.map((link, index) => (
              <div key={link.to} className="flex items-center">
                <Link to={link.to} className="hover:text-[#386ab0]">
                  {link.label}
                </Link>
                {index < siteLinks.length - 1 && (
                  <span className="mx-2 h-[1em] border-r border-[#e2d8cb]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-b border-[#e2d8cb] p-4 flex flex-col gap-4 bg-[rgb(255,253,250)]">
            {expansionLinks.map(item => (
              <Link key={item} to="/news" className="font-semibold">
                {item}
              </Link>
            ))}

            <a
              href="https://www.expansion.com/ed/premium.html"
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex justify-center items-center py-3 bg-[#fcaf33] font-bold text-black rounded"
            >
              SUSCRÍBASE 24€ / AÑO
            </a>

            <a
              href="https://www.expansion.com/micuenta/v1/es/auth?view=login"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center py-3 border border-[#386ab0] text-[#386ab0] font-semibold rounded"
            >
              Inicie sesión
            </a>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
