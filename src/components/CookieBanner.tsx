import React, { useState } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">
          Wir verwenden Cookies, um deine Erfahrung zu verbessern. 
          Durch die Nutzung unserer Website stimmst du der Verwendung von Cookies zu.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => setShowBanner(false)}
            className="bg-pink-400 text-white px-6 py-2 rounded-full hover:bg-pink-500 transition text-sm"
          >
            Akzeptieren
          </button>
          <button
            onClick={() => setShowBanner(false)}
            className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-50 transition text-sm"
          >
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;