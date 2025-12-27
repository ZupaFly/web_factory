import React, { useState } from "react";

type Article = {
  id: string;
  title: string;
  shortDescription: string;
  fullContent: string;
  image: string;
};

interface BlogProps {
  data: {
    content: {
      sections: Article[];
    };
    images: string[];
  };
}

const Blog: React.FC<BlogProps> = ({ data }) => {
  const [openArticle, setOpenArticle] = useState<Article | null>(null);

  const IMAGE_BASE = "/images";

  return (
    <div className="w-full flex flex-col items-center gap-8 px-4 mb-10 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        Blog Articles
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {data.content.sections.map((article) => (
          <div
            key={article.id}
            className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
          >
            <img
              src={`${IMAGE_BASE}/${article.image}`}
              alt={article.title}
              className="w-full h-48 object-cover rounded mb-4"
            />

            <h3 className="text-lg font-semibold mb-2">{article.title}</h3>

            <p className="text-sm mb-4 line-clamp-5">
              {article.shortDescription}
            </p>

            <button
              className="mt-auto text-blue-600 hover:underline self-start"
              onClick={() => setOpenArticle(article)}
            >
              Learn more
            </button>
          </div>
        ))}
      </div>

      {openArticle && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-auto">
          <div className="bg-white rounded-lg p-6 max-w-3xl w-full relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
              onClick={() => setOpenArticle(null)}
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4">
              {openArticle.title}
            </h2>

            <img
              src={`/images/${openArticle.image}`}
              alt={openArticle.title}
              className="w-full h-64 object-cover rounded mb-4"
            />

            <p className="whitespace-pre-line">
              {openArticle.fullContent}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
