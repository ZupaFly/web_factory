import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/gallery", label: "Gallery" },
    { to: "/blog", label: "Blog" },
    { to: "/contacts", label: "Contacts" },
    { to: "/privacy", label: "Privacy" },
    { to: "/terms", label: "Terms" },
  ];

  return (
  <header className="fixed top-0 left-0 w-full h-16 backdrop-blur-md text-black z-50">
    <div className="max-w-7xl mx-auto h-full flex items-center justify-center px-4">
          <nav className="flex space-x-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative group cursor-pointer"
              >
                <span className="transition-colors duration-200 group-hover:text-yellow-300">
                  {link.label}
                </span>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
