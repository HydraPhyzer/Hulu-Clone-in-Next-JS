import React, { useState, useEffect } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../Firebase";
import { useRouter } from "next/router";

const Header = () => {
  let Router=useRouter()
  let [Show, setShow] = useState(1);
  let [User, setUser] = useState(null);
  let [SearchMovies, setSearchMovies] = useState([]);

  useEffect(()=>
  {
    var btnContainer = document.getElementsByClassName("Dad");
  
    var btns = btnContainer[0].getElementsByClassName("Son");
    
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("Active");
        current[0].className = current[0].className.replace("Active", "");
        this.className= "Active";
      });
    }
  })


  auth.onAuthStateChanged((Use) => {
    setUser(Use);
  });

  useEffect(() => {
    window.addEventListener("click", () => {
      Write("");
    });
  }, []);

  let Write = async (Text) => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=512f02bfeaad808b483c6f3bb546db74&query=${Text}`
    )
      .then((Res) => {
        return Res.json();
      })
      .then((Data) => {
        setSearchMovies(Data?.results);
      });
  };

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
          <div>
            <SearchIcon className="h-6 text-green-500" />
          </div>
          {Show ? (
            <div className="relative hidden sm:block">
              <input
                type="text"
                className=" bg-transparent border-[#16a085] border-[1px] h-full py-1 outline-none focus:outline-none px-2"
                onChange={(E) => {
                  Write(E.target.value);
                }}
              />
              <div className="space-y-2 absolute z-10 min-h-fit max-h-[250px] w-[100%] bg-black overflow-y-scroll Each">
                {SearchMovies?.map((GetMovie) => {
                  return (
                    <Link href={`/movie/${GetMovie?.id}`}>
                      <span
                        onClick={() => {
                          Write("");
                        }}
                        className="flex cursor-pointer p-2"
                      >
                        <div className=" P1 sm:min-w-[40%] m-2 ml-0 flex items-center justify-center sm:h-[70px] sm:w-[70px] h-[30px] w-[30px]">
                          <Image
                            src={`https://image.tmdb.org/t/p/w500/${GetMovie?.poster_path}`}
                            height={100}
                            width={100}
                            objectFit="cover"
                            className="rounded-sm"
                          />
                        </div>
                        <span className="text-sm overflow-y-scroll Each">
                          {GetMovie?.title}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
          <nav>
            <ul className="flex space-x-1 items-center Dad">
              <Link href="/">
                <li className="Link Son">
                  <p className={`${Router.route=='/'?"Active px-2 py-1 cursor-pointer":"px-2 py-1 cursor-pointer"}`}>
                    Home
                  </p>
                </li>
              </Link>
              <Link href="/mystuff">
                <li className="Link Son">
                  <p className={`${Router.route=='/mystuff'?"Active px-2 py-1 cursor-pointer":"px-2 py-1 cursor-pointer"}`}>
                    My Stuff
                  </p>
                </li>
              </Link>
              <Link href="/myliked">
                <li className="Link Son">
                  <p className={`${Router.route=='/myliked'?"Active px-2 py-1 cursor-pointer":"px-2 py-1 cursor-pointer"}`}>
                    My Liked
                  </p>
                </li>
              </Link>
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
        <div className="relative sm:hidden">
          <input
            type="text"
            className="px-2 text-xs py-1 w-[100%] my-2 bg-transparent border-[#16a085] border-[1px] outline-none focus:ou "
            onChange={(E) => {
              Write(E.target.value);
            }}
          />
          <div className="absolute z-10 min-h-fit max-h-[300px] w-[100%] bg-black overflow-y-scroll Each px-2">
            {SearchMovies?.map((GetMovie) => {
              return (
                <Link href={`/movie/${GetMovie?.id}`}>
                  <span
                    onClick={() => {
                      Write("");
                    }}
                    className="flex cursor-pointer p-2 Blur my-2"
                  >
                    <div className="mr-2 ml-0 flex items-center justify-center h-[70px] w-[70px]">
                      <Image
                        src={`https://image.tmdb.org/t/p/w500/${GetMovie?.poster_path}`}
                        height={100}
                        width={100}
                        objectFit="cover"
                        className="rounded-sm"
                      />
                    </div>
                    <span className="text-sm overflow-y-scroll Each items-center flex">
                      {GetMovie?.title}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default Header;
