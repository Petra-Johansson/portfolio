import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center w-50 p-10 mt-20">
      <h2 className="text-3xl">Hey you! I'm Petra</h2>
      <p>
        an aspiring frontend developer coming straight from the service business
        with the ambition to create user friendly, but still exciting,
        excperiences!
      </p>

      <div className="flex flex-col p-4">
        <button className="btn p-2 my-2 bg-green">
          <Link href="/cv">Check out my CV</Link>
        </button>

        <button className="btn p-2 my-2 bg-green">
          <a href="https://github.com/Petra-Johansson">
            <p>Check out my GitHub!</p>
          </a>
        </button>
      </div>
    </div>
  );
}
