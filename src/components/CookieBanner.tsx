import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  // Prüfe localStorage beim Laden
  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50 border-t-2 border-purple-500">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          <p className="text-gray-700 font-medium mb-1">🍪 Cookie-Einwilligung</p>
          <p className="text-gray-600">
            Wir verwenden Cookies, um deine Erfahrung zu verbessern. 
            Durch die Nutzung unserer Website stimmst du der Verwendung zu.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={handleReject}
            className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-50 transition text-sm font-medium whitespace-nowrap"
          >
            Ablehnen
          </button>
          <button
            onClick={handleAccept}
            className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition text-sm font-medium whitespace-nowrap"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;