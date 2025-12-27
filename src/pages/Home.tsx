/* eslint-disable @typescript-eslint/no-explicit-any */

const IMAGE_BASE = "/images";
const Home = ({ data }: any) => {
  const { title, subtitle, sections } = data.content;
  const images = data.images || [];

  return (
    <section className="w-full flex flex-col items-center px-4 py-10 gap-10">
      <div className="max-w-5xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-gray-600 text-lg">
          {subtitle}
        </p>
      </div>

      <div className="w-full max-w-7xl flex flex-col gap-10">
        {sections.map((section: any, index: number) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
                isReversed ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={`flex flex-col gap-4 ${isReversed ? "md:order-2" : ""}`}>
                <h2 className="text-2xl font-semibold">
                  {section.heading}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {section.paragraph}
                </p>
              </div>

              <div className={`${isReversed ? "md:order-1" : ""} overflow-hidden rounded-lg h-64 md:h-80`}>
                {images[index] && (
                  <img
                    src={`${IMAGE_BASE}/${images[index]}`}
                    alt={section.heading}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
