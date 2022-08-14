import React, { useEffect, useState } from "react";
import Image from "next/image";

const MovieCredits = ({ Id }) => {
  let [Credits, setCredits] = useState(null);

  let GetCredits = async () => {
    let Name = await fetch(
      `https://api.themoviedb.org/3/movie/${Id}/credits?api_key=512f02bfeaad808b483c6f3bb546db74`
    );
    let Data = await Name.json();

    setCredits(Data);
  };
  useEffect(() => {
    GetCredits();
  }, [Id]);
  return (
    <div className="flex space-x-5 text-center my-5">
      {Credits?.cast?.map((Get,Ind) => {
        return (
          <div key={Ind}>
            <div className="relative h-[100px] w-[100px] rounded-full object-contain">
              <Image
                src={`https://image.tmdb.org/t/p/original${Get.profile_path}`}
                layout="fill"
                className="object-cover rounded-full"
              />
            </div>
            <p>{Get?.name}</p>
            <p className="text-gray-400">{Get?.character}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCredits;
