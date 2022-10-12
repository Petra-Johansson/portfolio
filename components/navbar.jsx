import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const seeNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in dudration-280 bg-green bg-opacity-25 mb-10">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-3">
        <Link href="/">
          <h1 className="text-3xl p-5 hover:text-light-grey hover:bg-green cursor-pointer rounded-full">
            Petras Portfolio!
          </h1>
        </Link>
        <ul className="hidden sm:flex">
          <li className="p-4 hover:text-light-grey hover:bg-green rounded-2xl">
            {" "}
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 hover:text-light-grey hover:bg-green rounded-2xl">
            {" "}
            <Link href="/about-me">About Me</Link>
          </li>
          <li className="p-4 hover:text-light-grey hover:bg-green rounded-2xl">
            {" "}
            <Link href="/cv">My CV</Link>
          </li>
          <li className="p-4  hover:text-light-grey hover:bg-green rounded-2xl">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/*
         If scrensize is bigger than sm=640px, this menu is hidden
         otherwise it's set to block 
         */}
        <div className="block sm:hidden z-10" onClick={seeNav}>
          {nav ? <AiOutlineClose size={18} /> : <AiOutlineMenu size={18} />}
        </div>
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-green text-5xl ease-in duration-400"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-green text-5xl ease-in duration-400"
          }
        >
          <ul>
            <li className="p-5">
              <Link href="/">Home</Link>
            </li>
            <li className="p-5">
              <Link href="/about-me">About Me</Link>
            </li>
            <li className="p-5">
              <Link href="/cv">My CV</Link>
            </li>
            <li className="p-5">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
