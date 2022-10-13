import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center w-50 p-10 mt-20 ">
      <h2 className="text-3xl my-4">Hey you! I'm Petra</h2>
      <p className="sm:max-w-[50%] text-center">
        an aspiring frontend developer coming straight from the service business
        with the ambition to create user friendly, but still exciting,
        excperiences!
      </p>

      <div className="flex flex-col p-4">
        <button className="text-white bg-purple hover:bg-white hover:text-purple p-2 rounded my-3">
          <Link href="/cv">Check out my CV</Link>
        </button>

        <button className="text-white bg-purple hover:bg-white hover:text-purple p-2 rounded my-3">
          <a href="https://github.com/Petra-Johansson">
            <p>Check out my GitHub!</p>
          </a>
        </button>
      </div>
    </div>
  );
}
