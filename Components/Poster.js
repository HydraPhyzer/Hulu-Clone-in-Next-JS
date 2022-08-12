import React, { useState } from "react";
import Image from "next/dist/client/image";
import { HeartIcon } from "@heroicons/react/solid";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { useEffect } from "react";

const Poster = ({ Data }) => {
  let [YTId, setYTId] = useState(null);

  useEffect(() => {
    window.addEventListener("click", () => {
      setYTId("");
    });
  }, []);

  let Options = {
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  let YoutubeId =async () => {
    let VGet;
    try
    {
      await movieTrailer(Data?.original_title)
        .then((Res) => {
          const Param = new URLSearchParams(new URL(Res).search);
          VGet = Param.get("v");
        })
        .then(() => {
          setYTId(VGet);
        })
    }
    catch
    {
      alert("The trailer is not Available Right Now")
    }
  };
  return (
    <>
      <div className="h-[60vh] sm:h-[80vh] relative my-2">
        {!YTId ? (
          <div>
            <Image
              src={`https://image.tmdb.org/t/p/original${Data.backdrop_path}`}
              layout="fill"
              objectFit="cover"
              className="bg-blend-screen rounded-sm sm:rounded-md"
            />
            <div className="absolute Background opacity-40 h-[100%] w-[100%]"></div>

            <div className="absolute w-[90%] sm:w-[40%] left-[5%] sm:left-[10%] flex flex-col justify-center h-[100%] space-y-5">
              <h1 className="text-2xl sm:text-4xl font-bold">
                {Data?.original_title}
              </h1>
              <p className="Blur text-sm sm:text-lg">
                {Data?.overview?.length > 150
                  ? Data?.overview.slice(0, 150).concat("...")
                  : Data?.overview}
              </p>

              <div className="Buttons flex items-center space-x-2">
                <button
                  onClick={() => {
                    YoutubeId();
                  }}
                  className="bg-green-500 px-4 py-1 rounded-sm"
                >
                  Play
                </button>
                <button className="bg-green-500 px-4 py-1 rounded-sm">
                  Add to Stuff
                </button>
                <button className="bg-gradient-to-b from-yellow-500 to-pink-500 py-1 rounded-sm px-2">
                  <HeartIcon className="hover:animate-bounce h-6 text-white" />
                </button>
              </div>
            </div>
          </div>
        ) : YTId !== "" ? (
          <div className="h-[60vh] sm:h-[80vh] relative">
            <YouTube className="object-contain" videoId={`${YTId}`} opts={Options} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Poster;
