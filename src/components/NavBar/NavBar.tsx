"use client";

import menuCloseIcon from "@assets/icons/icon-close-menu.svg";
import menuIcon from "@assets/icons/icon-menu.svg";

import logoImg from "@assets/website-logo.svg";
import { NAV_LINKS } from "@lib/nav-links";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavBarProps {
  activeRoute: string;
}

export const NavBar = ({ activeRoute }: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position
      if (window.scrollY > 16) {
        // ✨ magic number ✨ because i decided so
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`w-screen ${
          isTransparent ? "bg-white/0" : "bg-white"
        } transition-colors duration-300 ease-in-out`}>
        <div className="container max-w-6xl mx-auto p-8 lg:py-6 flex justify-between items-center lg:items-start">
          <Link href="/">
            <Image src={logoImg} alt="website logo" priority />
          </Link>

          <nav>
            <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
              <Image priority src={menuIcon} alt="open menu icon" />
            </button>

            <ul className="py-4 hidden md:flex justify-stretch">
              {NAV_LINKS.map((navLink, idx) => (
                <li
                  key={idx}
                  className={`px-8 text-body2 uppercase tracking-widest hover:text-verdigris transition-colors ${activeRoute == navLink.path ? "text-verdigris" : "text-tuna"}`}>
                  <Link href={navLink.path}>{navLink.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <div
        className={`${isMenuOpen ? "right-0" : "-right-[120%]"} transition-[right] top-0 fixed bg-eggshell w-screen h-screen duration-700 ease-in-out overflow-hidden z-50`}>
        <div className="h-full flex flex-col justify-between">
          <div className="flex justify-between">
            <Link href="/" className="p-8">
              <Image src={logoImg} alt="website logo" priority />
            </Link>
            <button className="p-8" onClick={() => setIsMenuOpen(false)}>
              <Image priority src={menuCloseIcon} alt="close menu icon" />
            </button>
          </div>

          <ul>
            {NAV_LINKS.map((navLink, idx) => (
              <li
                key={idx}
                onClick={() => setIsMenuOpen(false)}
                className={`w-full py-4 text-center text-body2 uppercase tracking-widest hover:text-verdigris transition-colors ${activeRoute == navLink.path ? "text-verdigris" : "text-tuna"}`}>
                <Link href={navLink.path} className="block">
                  {navLink.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="text-body2 text-center text-tuna my-2">
            Implemented by Jadurani Davalos ♥️
          </div>
        </div>
      </div>
    </>
  );
};
