import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Firebase";

const Header = () => {
  let [Show, Hide] = useState(false);
  let [User, setUser] = useState(null);

  auth.onAuthStateChanged((Use) => {
    setUser(Use);
  });

  let SignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        alert("Error Occurred While Authencation");
      });
  };
  return (
    <>
      <div className="sm:text-lg text-xs flex items-center justify-between">
        <div className="Left flex items-center sm:space-x-5 space-x-2">
          <SearchIcon
            onClick={() => {
              Hide(!Show);
            }}
            className="h-6 text-green-500"
          />
          {Show ? (
            <input
              type="text"
              className=" bg-transparent border-[#16a085] border-[1px] h-full py-1 outline-none focus:outline-none px-2 hidden sm:block"
            />
          ) : (
            ""
          )}
          <nav>
            <ul className="flex space-x-1 items-center ">
              <li className="Active Link px-2 py-1  hover:cursor-pointer">
                Home
              </li>
              <li className="Link px-2 py-1  hover:cursor-pointer">My Stuff</li>
              <li className="Link px-2 py-1  hover:cursor-pointer">My Liked</li>
            </ul>
          </nav>
        </div>

        <div className="Right flex items-center space-x-5">
          <div className="P1 flex items-center justify-center sm:h-[50px] sm:w-[50px] h-[30px] w-[30px]">
            {User ? (
              <Image
                src={User.photoURL}
                height={100}
                width={100}
                objectFit="contain"
                className="rounded-full"
                onClick={() => {
                  auth.signOut();
                }}
              />
            ) : (
              <h1
                onClick={() => {
                  SignIn();
                }}
                className="bg-green-500 px-[5px] py-1"
              >
                SignIn
              </h1>
            )}
          </div>
          <div className="P2 flex items-center sm:h-[50px] sm:w-[50px] h-[30px] w-[30px]">
            <Link href="/">
              <Image
                src={"/Logo.png"}
                height={100}
                width={100}
                objectFit="contain"
                className="cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>

      {Show ? (
        <input
          type="text"
          className="px-2 text-xs py-1 w-[100%] my-2 bg-transparent border-[#16a085] border-[1px] outline-none focus:ou sm:hidden"
        />
      ) : (
        ""
      )}
    </>
  );
};
export default Header;
