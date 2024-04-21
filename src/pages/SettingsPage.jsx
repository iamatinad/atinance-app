import React, { useState } from "react";
import Footer from "../components/landing/Footer";
import { useUser } from "../components/context/Usercontext";
import Sidenav from "../components/navigation/Sidenav";

function SettingsPage() {
  const { currentUser } = useUser();
  const [language, setLanguage] = useState(
    currentUser ? currentUser.language : "en"
  );
  const [theme, setTheme] = useState(currentUser ? currentUser.theme : "dark");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // Here you can save the language preference to the user settings
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    // Here you can save the theme preference to the user settings
  };

  return (
    <>
      <div className="flex">
        <Sidenav />
        <div className="flex-1 bg-black-100 min-h-screen flex items-center justify-center">
          <div className="bg-black rounded-lg shadow-md p-8 max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Settings</h2>
            <div className="mb-4">
              <label
                htmlFor="language"
                className="block text-sm font-medium text-gray-700"
              >
                Language
              </label>
              <select
                id="language"
                value={language}
                onChange={handleLanguageChange}
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              >
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
                {/* Add more language options as needed */}
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="theme"
                className="block text-sm font-medium text-gray-700"
              >
                Theme
              </label>
              <select
                id="theme"
                value={theme}
                onChange={handleThemeChange}
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              >
                <option value="dark">Dark</option>
                <option value="light">Light</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SettingsPage;
