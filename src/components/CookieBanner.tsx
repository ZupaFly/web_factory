import { useState } from "react";

export const CookieBanner = () => {
  const [visible, setVisible] = useState(!localStorage.getItem("cookies"));

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 bg-white border shadow-lg rounded-lg p-4 max-w-md">
      <p className="text-sm text-gray-700 mb-3">
        We use cookies to improve user experience.
      </p>
      <div className="flex gap-2">
        <button
          className="flex-1 bg-blue-600 text-white text-sm py-2 rounded hover:bg-blue-700"
          onClick={() => {
            localStorage.setItem("cookies", "all");
            setVisible(false);
          }}
        >
          Accept all
        </button>
        <button
          className="flex-1 bg-gray-200 text-sm py-2 rounded hover:bg-gray-300"
          onClick={() => {
            localStorage.setItem("cookies", "none");
            setVisible(false);
          }}
        >
          Reject
        </button>
      </div>
    </div>
  );
};
