import React from "react";
import Image from "next/image";
import Link from "next/link";

const MyStuffMovie = ({ Movie }) => {
  console.log(Movie);
  return (
    <div className="gap-2 items-center rounded-sm">
      <Link href={`/movie/${Movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${Movie.poster_path}`}
          height={200}
          width={130}
          objectFit="cover"
          className="rounded-sm hover:scale-110 transition-all duration-500"
        />
      </Link>
    </div>
  );
};
export default MyStuffMovie;
