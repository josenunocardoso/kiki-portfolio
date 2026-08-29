import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="p-6 mt-10 text-center text-xs text-gray-400 uppercase tracking-widest border-t border-gray-100">
      &copy; {new Date().getFullYear()} Kiki Portfolio
    </footer>
  );
};

export default Footer;
