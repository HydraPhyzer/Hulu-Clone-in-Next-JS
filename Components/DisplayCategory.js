import React, { useEffect, useState } from "react";
import Image from "next/image";

const DisplayCategory = ({ Request,Name }) => {
  let [State, setState] = useState([]);
  console.log(Name)

  useEffect(() => {
    let GetData = async () => {
      await fetch(Request)
        .then((Res) => {
          return Res.json();
        })
        .then((Data) => {
          setState(Data.results);
        });
    };
    GetData();
  }, [Request]);

  return (
    <div className="w-max flex gap-2 items-center rounded-sm">
      {State.map((El,Ind) => {
        return (
          Name=="Popular : "?
            <Image
              src={`https://image.tmdb.org/t/p/w500/${El.poster_path}`}
              height={230}
              width={170}
              objectFit="cover"
              className="rounded-sm hover:scale-105 transition-all duration-500"
            />:
            <Image
              src={`https://image.tmdb.org/t/p/w500/${El.poster_path}`}
              height={200}
              width={130}
              objectFit="cover"
              className="rounded-sm hover:scale-110 transition-all duration-500"
            />
        );
      })}
    </div>
  );
};
export default DisplayCategory;
