import React from "react";
import Contact from "../Contact";

const Footer: React.FC = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-100 text-base-content rounded p-10">
      <Contact />
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Amer Al-Khatib
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
