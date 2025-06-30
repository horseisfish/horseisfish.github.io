"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./button";
import { ThemeToggle } from "./theme-toggle";

const navItems = {
  '/': {
    name: 'Home',
  },
  '/research': {
    name: 'Research',
  },
  '/publications': {
    name: 'Publications',
  },
  '/contact': {
    name: 'Contact',
  },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ path, name }: { path: string; name: string }) => {
    return (
      <Link
        href={path}
        className="group relative py-2 px-4 overflow-hidden"
        onClick={() => setIsOpen(false)}
      >
        <span className="relative z-10 text-[#213448]/70 dark:text-[#94B4C1] group-hover:text-[#213448] dark:group-hover:text-[#ECEFCA] transition-colors duration-200">
          {name}
        </span>
        <div className="absolute inset-0 bg-[#547792]/10 dark:bg-[#547792]/20 backdrop-blur-sm opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out rounded-lg" />
      </Link>
    );
  };

  return (
    <nav className={`
      fixed left-1/2 top-0 z-50 mt-7 flex w-11/12 max-w-7xl -translate-x-1/2 flex-col items-center 
      ${isOpen ? 'md:rounded-full rounded-lg' : 'md:rounded-full rounded-xl'}
      bg-[#547792]/5 dark:bg-[#547792]/5 backdrop-blur-md border border-[#213448]/20 dark:border-[#94B4C1]/20
      transition-all duration-300 ease-in-out
    `}>
      <div className="flex w-full items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src="/images/logo.svg"
                  alt="Horse Music Chip Logo"
                  className="w-full h-full dark:invert"
                />
              </div>
              <span className="font-semibold text-lg hidden sm:block text-[#213448] dark:text-[#ECEFCA]">Shih-Yu Ma</span>
            </div>
          </Link>
        </div>

        <div className="hidden gap-4 md:flex items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <NavLink key={path} path={path} name={name} />
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button 
            onClick={() => setIsOpen(!isOpen)} 
            variant="ghost" 
            size="icon"
            className="transition-transform duration-300"
          >
            <Menu className={`size-4 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
          </Button>
        </div>
      </div>

      <div 
        className={`
          w-full md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-64 opacity-100 border-t border-[#213448]/10 dark:border-[#94B4C1]/10' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="flex flex-col items-center justify-center gap-2 px-4 py-3">
          {Object.entries(navItems).map(([path, { name }]) => (
            <NavLink key={path} path={path} name={name} />
          ))}
        </div>
      </div>
    </nav>
  );
}
