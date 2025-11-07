import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const Header: React.FC = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="cursor-pointer font-bold text-xl">Amer Al-Khatib</a>
      </div>
      <div className="flex-none">
        <LanguageSwitcher />
          
      </div>
    </div>
  );
};

export default Header;
