import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  const pageLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/gallery", label: "Gallery" },
    { to: "/blog", label: "Blog" },
    { to: "/contacts", label: "Contacts" },
    { to: "/privacy", label: "Privacy" },
    { to: "/terms", label: "Terms" },
  ];

  // Разделяем ссылки на колонки по 4 элемента
  const columns: { to: string; label: string }[][] = [];
  for (let i = 0; i < pageLinks.length; i += 4) {
    columns.push(pageLinks.slice(i, i + 4));
  }

  return (
    <footer className="bg-gray-800 text-white w-full py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-8">
        {/* Страницы слева */}
        <div className="flex gap-8">
          {columns.map((col, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              {col.map((link) => (
                <Link key={link.to} to={link.to} className="hover:underline">
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Контакты справа */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg">Contact</h3>
          <a href="mailto:info@example.com" className="hover:underline">info@example.com</a>
          <a href="tel:+34123456789" className="hover:underline">+1 234 567 890</a>
          <span>123 Learning Street, EduCity, Spain</span>
          <div className="flex gap-4 mt-2">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; 2025 Educational Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
