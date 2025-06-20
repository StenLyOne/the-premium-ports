"use client";
import { useState } from "react";
import Button from "../ui/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Product", "Pricing", "Locations", "FAQ"];
  return (
    <header className="fixed top-0 right-0 left-0 z-[100] bg-[#00143B]/90 px-[16px] md:px-[40px]">
      <div className="max-w-[1328px] mx-auto flex justify-between items-center py-[24px]  gap-[16px] md:gap-[24px]">
        <div className="flex-shrink min-w-0 max-[500px]:w-[60%] min-[500]:w-max">
          <img
            src="/svg/logo-white.svg"
            alt="Logo"
            className="max-w-full h-auto object-contain z-100 relative"
          />
        </div>
        

        {/* Desktop nav */}
        <nav className="hidden xl:flex gap-[24px]">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white text-[22px] font-Futo font-[700]"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop button */}

        <div className="flex-1 min-w-0 md:hidden">
          <div className="flex justify-center">
            <button
              className=" w-full max-w-[200px] min-w-[90px] py-[8px] px-[20px] text-white text-[10px] font-bold rounded-[20px]"
              style={{
                background:
                  "linear-gradient(90deg, #00C5FF 0%, #153BFF 54%, #CAB7FC 98%)",
              }}
            >
              GET DEAL
            </button>
          </div>
        </div>

        {/* Burger */}
        <div className="flex gap-[24px] items-center justify-center">
          <div className="hidden md:flex gap-[24px]">
            <Button text="GET DEAL" color="gradient" link="/" size={true} />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="group xl:hidden z-[110] relative w-[18px]  h-[14px] flex flex-col justify-between items-center"
          >
            <span
              className={`h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                isOpen ? "scale-x-0 opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`xl:hidden fixed top-0 left-0 w-full bg-[#00143B] text-white transition-all duration-500 ease-in-out z-[99] ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col items-center pt-[100px] pb-[40px] gap-[24px]">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-[22px] font-Futo font-[700]"
            >
              {item}
            </a>
          ))}
          <Button text="GET DEAL" color="gradient" link="/" size={true} />
        </div>
      </div>
    </header>
  );
}
