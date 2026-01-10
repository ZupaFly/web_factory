import React from "react";
import type { NewsProps } from "../types/news";
import { Link } from "react-router-dom";

const IMAGE_BASE = import.meta.env.BASE_URL + "/images";

const KEYWORDS = ["Adipex Embudo 8.0", "250 €", "9.730 €"];

const News: React.FC<NewsProps> = ({ data }) => {
  const { title, subtitle, date, readTime, blocks } = data.content;

  const scrollToCTA = () => {
    const element = document.getElementById("cta-button");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-10 flex flex-col gap-8">
      <div className="border-b pb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
        <p className="text-gray-600 mb-2">{subtitle}</p>
        <div className="text-sm text-gray-400">
          {date} · {readTime}
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {blocks.map((block, index) => {
          switch (block.type) {
            case "paragraph":
              { const text = block.text || "";
              const parts = text.split(
                new RegExp(`(${KEYWORDS.join("|")})`, "g")
              );

              return (
                <p key={index} className="text-gray-700 leading-relaxed text-lg">
                  {parts.map((part, i) =>
                    KEYWORDS.includes(part) ? (
                      <span
                        key={i}
                        onClick={scrollToCTA}
                        className="text-blue-600 font-semibold cursor-pointer hover:underline"
                      >
                        {part}
                      </span>
                    ) : (
                      part
                    )
                  )}
                </p>
              ); }

            case "image":
              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl shadow-lg w-full"
                >
                  <img
                    src={`${IMAGE_BASE}/${block.src}`}
                    alt=""
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              );

            case "highlight":
              return (
                <p key={index} className="text-lg">
                  <span
                    onClick={scrollToCTA}
                    className="text-blue-600 font-semibold cursor-pointer hover:underline"
                  >
                    {block.text}
                  </span>
                </p>
              );

            case "cta":
              return (
                <div
                  key={index}
                  className="flex justify-center pt-6"
                  id="cta-button"
                >
                  <Link
                    to="/chatbot"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-10 py-4 rounded-full shadow-lg transition w-full max-w-xs md:max-w-sm cursor-pointer"
                  >
                    Acceder a la plataforma
                  </Link>
                </div>
              );

            default:
              return null;
          }
        })}
      </div>
    </section>
  );
};

export default News;
