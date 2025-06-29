"use client";
import { useEffect, useState } from "react";

export default function ClientCookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShowBanner(!localStorage.getItem("cookieConsent"));
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-teal-700 text-white p-4 flex flex-col sm:flex-row items-center justify-center gap-4 z-50 shadow-lg">
      <span className="text-sm">
        This site uses cookies for basic analytics and to enhance your experience. By using this site, you agree to our <a href="/privacy" className="underline text-white font-semibold">Privacy Policy</a>.
      </span>
      <button
        className="bg-white text-teal-700 font-bold px-4 py-2 rounded hover:bg-teal-100 transition-colors"
        onClick={acceptCookies}
      >
        Accept
      </button>
    </div>
  );
} 