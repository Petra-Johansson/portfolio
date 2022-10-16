import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center w-50 p-10 mt-20 ">
      <h2 className="text-3xl my-4 font-bold">Hey you! I am Petra</h2>
      <p className="sm:max-w-[60ch] text-center mb-7">
        an aspiring frontend developer coming straight from the service business
        with the ambition to create user friendly, but still exciting,
        excperiences!
      </p>
      <p className="sm:max-w-[60ch] text-center mb-7">
        I am currently looking for a great place to do my internship at, as a part of my current education to becoming a
        frontend developer!
        </p>
        <p className="sm:max-w-[60ch] text-center mb-7">
        If you work at a company that could benefit from a curious, driven and 
      </p>

      <div className="flex flex-col p-4 text-xl text-white">
        <button className=" bg-purple hover:bg-white hover:text-purple hover:translate-x-2 transition-color duration-200 delay-180 p-2 rounded my-3 ">
          <Link href="/cv">Check out my CV &rarr;</Link>
        </button>

        <button className=" bg-purple hover:bg-white hover:text-purple hover:translate-x-2 transition-color duration-200 delay-180 p-2 rounded my-3">
          <a href="https://github.com/Petra-Johansson">
            <p>Check out my GitHub! &rarr;</p>
          </a>
        </button>
      </div>
    </div>
  );
}
