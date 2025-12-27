import React, { useState } from "react";
import PageTemplate from "./PageTemplate";

interface GalleryItem {
  id: string;
  image: string;
  description: string;
}

interface GalleryProps {
  data: {
    content: {
      title: string;
      sections: GalleryItem[];
    };
  };
}

const Gallery: React.FC<GalleryProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = data.content.sections;

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <PageTemplate data={data}>
      <div className="w-full flex flex-col items-center gap-6">

      <div className="relative w-full max-w-5xl h-[60vh] sm:h-[70vh] bg-gray-100 flex items-center justify-center rounded">
        <img
          src={`/images/${items[currentIndex].image}`}
          alt={items[currentIndex].description}
          className="w-full h-full object-cover rounded"
        />

        <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
          <button
            onClick={handlePrev}
            className="pointer-events-auto bg-blue-600 p-2 rounded-full shadow-lg hover:bg-blue-700 transition cursor-pointer"
          >
            <img
              src="/images/arrow-left.png"
              alt="Previous"
              className="w-6 h-6"
            />
          </button>
          <button
            onClick={handleNext}
            className="pointer-events-auto bg-blue-600 p-2 rounded-full shadow-lg hover:bg-blue-700 transition cursor-pointer"
          >
            <img
              src="/images/arrow-right.png"
              alt="Next"
              className="w-6 h-6"
            />
          </button>
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded text-sm">
          {items[currentIndex].description}
        </div>
      </div>

        <div className="flex gap-2 overflow-x-auto max-w-5xl py-2">
          {items.map((item, index) => (
            <img
              key={item.id}
              src={`/images/${item.image}`}
              alt={item.description}
              className={`w-20 h-20 object-cover rounded cursor-pointer transition transform ${
                currentIndex === index ? "ring-2 ring-blue-500 scale-105" : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>
    </PageTemplate>
  );
};

export default Gallery;
