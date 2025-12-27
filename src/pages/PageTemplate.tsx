/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

export interface PageProps {
  data: any;
  children?: React.ReactNode;
  hideContent?: boolean;
}

const PageTemplate: React.FC<PageProps> = ({ data, children, hideContent }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 flex flex-col gap-2">
      {!hideContent && (
        <>
          {data.content.title && (
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-center">
              {data.content.title}
            </h1>
          )}
          {data.content.subtitle && (
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 text-center">
              {data.content.subtitle}
            </h2>
          )}

          {data.content.sections?.map((section: any, index: number) => (
            <div key={index} className="flex flex-col gap-2">
              {section.heading && (
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                  {section.heading}
                </h3>
              )}
              {section.paragraph && (
                <p className="text-gray-600">{section.paragraph}</p>
              )}
              {section.list && (
                <ul className="list-disc list-inside text-gray-600">
                  {section.list.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </>
      )}

      {children && <div>{children}</div>}
    </div>
  );
};

export default PageTemplate;
