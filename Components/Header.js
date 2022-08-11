import React from "react";
import { SearchIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div className="flex items-center space-x-5">
      <SearchIcon className="h-6" />

      <nav>
        <ul className="flex space-x-5 items-center ">
          <li className="Active Link px-3 py-1 rounded-sm hover:cursor-pointer">
            Home
          </li>
          <li className="Link px-3 py-1 rounded-sm hover:cursor-pointer">
            My Stuff
          </li>
          <li className="Link px-3 py-1 rounded-sm hover:cursor-pointer">
            My Liked
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
