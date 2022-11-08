import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const seeNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed left-0 top-0 w-full z-10 ease-in duration-280  bg-green ">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-3">
        <Link href="/">
          <h1 className="text-3xl p-5  hover:bg-purple hover:font-bold cursor-pointer rounded-full">
            Petras Portfolio!
          </h1>
        </Link>
        <ul className="hidden md:flex">
          <li className="p-4 text-xl focus:bg-purple hover:bg-purple hover:scale-110 rounded-2xl hover:translate-y-1 transition-color duration-200 delay-180">
            {" "}
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 text-xl focus:bg-purple hover:bg-purple hover:scale-110 rounded-2xl hover:translate-y-1 transition-color duration-200 delay-180">
            {" "}
            <Link href="/about-me">About Me</Link>
          </li>
          <li className="p-4 text-xl focus:bg-purple hover:bg-purple hover:scale-110 rounded-2xl hover:translate-y-1 transition-color duration-200 delay-180">
            {" "}
            <Link href="/cv">My CV</Link>
          </li>
          <li className="p-4 text-xl focus:bg-purple hover:bg-purple hover:scale-110 rounded-2xl hover:translate-y-1 transition-color duration-200 delay-180">
            {" "}
            <Link href="/projects">Projects</Link>
          </li>
          <li className="p-4 text-xl focus:bg-purple hover:bg-purple hover:scale-110 rounded-2xl hover:translate-y-1 transition-color duration-200 delay-180">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/*
         If scrensize is bigger than md:800px this nav is hidden
         */}
        <div className="flex flex-col  md:hidden z-30" onClick={seeNav}>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <div
          className={
            nav
              ? "md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-green text-5xl ease-in duration-400"
              : "md:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-green text-5xl ease-in duration-400"
          }
        >
          <ul onClick={seeNav}>
            <li className="p-5" >
              <Link href="/">Home</Link>
            </li>
            <li className="p-5" >
              <Link href="/about-me">About Me</Link>
            </li>
            <li className="p-5">
              <Link href="/cv">My CV</Link>
            </li>
            <li className="p-5" >
              <Link href="/contact">Contact </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
