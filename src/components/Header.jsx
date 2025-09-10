import React from "react";
import CodeIcon from "../icons/CodeIcon";
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {
  return (
    <header className="flex items-center h-14 px-4 lg:px-8 bg-muted">
      <div className="flex items-center justify-center">
        <CodeIcon size={24} className="text-black " />
        <span className="text-zinc-800 text-md font-semibold px-4">
          Vite Developer
        </span>
      </div>

      <nav className="ml-auto flex gap-4 sm:gap-6">
        <div className="text-sm font-medium hover:underline underline-offset-4">
          Home
        </div>
        <div className="text-sm font-medium hover:underline underline-offset-4">
          Projects
        </div>
        <div className="text-sm font-medium hover:underline underline-offset-4">
          Skills
        </div>
        <div className="text-sm font-medium hover:underline underline-offset-4">
          Contact Us
        </div>
      </nav>
    </header>
  );
};

export default Header;
