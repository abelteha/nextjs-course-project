import Link from "next/link";
import React from "react";

const MainNavigation = () => {
  return (
    <header className="bg-gray-600 flex justify-between items-center px-[5%] py-5">
      <Link href="/">
        <h1 className="text-[2rem] font-bold text-gray-200">
          ABEL&apos; NEXT BLOG
        </h1>
      </Link>

      <nav>
        <ul className="flex gap-10 text-gray-300 text-xl">
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
