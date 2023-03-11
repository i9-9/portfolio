import Link from "next/link";
import React, { useState, useEffect } from "react";

const NavbarHome = () => {
  const [color, setColor] = useState("transparent");
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 40) {
        setColor("#5226AA");
      } else {
        setColor("transparent");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div>
      <header
        style={{ backgroundColor: `${color}` }}
        className="hidden grid-cols-2 md:grid items-center border-t-verde border-b-verde border-solid border-t-[1px] border-b-[1px] py-1 text-verde px-1 text-xl sticky top-0 z-10 transition duration-1000  "
      >
        <div className="">
          <Link href="/">
            <h2 className="font-black text-4xl">
              I<span className="animate-pulse mx-2">/</span>N
            </h2>
          </Link>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col items-start">
            <Link href="/">
              <button className="hover-underline-animation">INDEX</button>
            </Link>
            <button className="hover-underline-animation">WORK</button>
            <Link href="/info">
              <button className="hover-underline-animation">INFO</button>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/digital-garden">
              <h4 className="hover-underline-animation cursor-pointer">
                DIGITAL GARDEN
              </h4>
            </Link>
          </div>
          <div className="self-center justify-end bg-transparent">
            <Link href="/contact">
              <button className="p-2 border-solid border-verde border-[1px] hover:bg-[#0E0E0E]/30 hover:text-violeta hover:bg-verde transition-all duration-700">
                CONTACT
              </button>
            </Link>
          </div>
        </div>
      </header>

    </div>

  );
};

export default NavbarHome;
