import React from "react";

type AboutSection = {
  id: string;
  title: string;
  text: string;
  image: string;
};

interface AboutProps {
  data: {
    content: {
      title: string;
      subtitle: string;
      sections: AboutSection[];
    };
  };
}

const About: React.FC<AboutProps> = ({ data }) => {
  const { title, subtitle, sections } = data.content;
  const IMAGE_BASE = import.meta.env.BASE_URL + "/images";

  return (
    <section className="w-full max-w-7xl mx-auto py-10 flex flex-col gap-20">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-700">{subtitle}</p>
      </div>

      {sections.map((section, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <div
            key={section.id}
            className={`
              grid grid-cols-1 lg:grid-cols-2 gap-12 items-center
              ${isReversed ? "lg:flex-row-reverse" : ""}
            `}
          >
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-semibold">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed">
                {section.text}
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={`${IMAGE_BASE}/${section.image}`}
                alt={section.title}
                className="
                  w-full h-80 object-cover
                  transition-transform duration-500
                  group-hover:scale-110
                "
              />
              <div
                className="
                  absolute inset-0 bg-black/0
                  group-hover:bg-black/20
                  transition-colors duration-500
                "
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default About;
