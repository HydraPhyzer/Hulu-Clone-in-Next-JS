import React, { useEffect, useState } from "react";
import Image from "next/image";
import { SunIcon } from "@heroicons/react/solid";
import Link from "next/link";

const DisplayCategory = ({ Request, Name }) => {
  let [State, setState] = useState([]);
  let [Loader, setLoader] = useState(false);

  useEffect(() => {
    let GetData = async () => {
      setLoader(true);
      await fetch(Request)
        .then((Res) => {
          return Res.json();
        })
        .then((Data) => {
          setLoader(false);
          setState(Data.results);
        });
    };
    GetData();
  }, [Request]);

  return Loader ? (
    <button
      type="button"
      className="justify-center mx-auto w-[100%] bg-green-500 flex items-center py-5"
      disabled
    >
      <SunIcon className="animate-spin h-5 mr-3" viewBox="0 0 24 24" />
      Processing...
    </button>
  ) : (
    <div className="w-max flex gap-2 items-center rounded-sm">
      {State.map((El, Ind) => {
        return Name == "Popular : " ? (
          <Link href={`/movie/${El.id}`} key={Ind}>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${El.poster_path}`}
              height={230}
              width={170}
              objectFit="cover"
              className="rounded-sm hover:scale-105 transition-all duration-500"
              key={Ind}
            />
          </Link>
        ) : (
          <Link href={`/movie/${El.id}`} key={Ind}>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${El.poster_path}`}
              height={200}
              width={130}
              objectFit="cover"
              className="rounded-sm hover:scale-110 transition-all duration-500"
              key={Ind}
            />
          </Link>
        );
      })}
    </div>
  );
};
export default DisplayCategory;
