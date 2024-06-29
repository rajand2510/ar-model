import * as React from "react";
import { useState } from "react";


const NavItem = ({ children }) => (
  <div className="cursor-pointer">{children}</div>
);

const Button = ({ children, className }) => (
  <button className={`justify-center px-6 py-[3px] rounded-2xl border border-solid backdrop-blur-[13.5px] bg-white bg-opacity-40 border-white border-opacity-70 max-md:px-5 ${className}`}>
    {children}
  </button>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "Products", "About Us"];
  const buttons = [
    { text: "Log in", className: "px-8" },
    { text: "Sign up", className: "" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-green-950 text-white px-16 text-lg">
      <div className="flex gap-5 justify-between w-full max-w-[1473px] max-md:flex-wrap max-md:max-w-full">
       <img
  loading="lazy"
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e800b5428dbb95e38bbe22bf88730878a81bed744fdff047b9ad821fb1d51bb?apiKey=980db322e33a4a39a5052caa449e1da6&"
  alt=""
  className={`shrink-0 max-w-full aspect-[2.78] w-[200px] max-md:w-[150px] ${isMenuOpen? 'hidden' : ''}`}
/>
        <nav className="flex gap-5 justify-between my-auto max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-8 justify-between my-auto">
            <button className="md:hidden" onClick={toggleMenu}>
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
            <div className={`flex gap-8 justify-between my-auto md:flex ${isMenuOpen ? 'block' : 'hidden'} max-md:flex-col max-md:items-center`}>
              {navItems.map((item, index) => (
                <NavItem key={index}>{item}</NavItem>
              ))}
              <div className="flex flex-col gap-6 font-semibold mt-4 md:hidden">
                {buttons.map((button, index) => (
                  <Button key={index} className={button.className}>
                    {button.text}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:flex gap-6 font-semibold">
            {buttons.map((button, index) => (
              <Button key={index} className={button.className}>
                {button.text}
              </Button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
