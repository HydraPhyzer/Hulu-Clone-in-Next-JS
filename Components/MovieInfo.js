import React from "react";
import Image from "next/image";
import MovieCredits from "./MovieCredits";

const MovieInfo = ({ Data }) => {
  return (
    <>
      <div className="flex justify-between sm:items-center flex-col sm:flex-row">
        <div>
          <div className="min-w-[50vw] flex space-x-4 my-4 overflow-x-scroll Each">
            {Data?.genres
              ? Data?.genres?.map((Elem , Ind) => {
                  return (
                    <>
                      <p key={Ind} className="border-gray-500 text-xs sm:text-sm px-3 py-1 rounded-full border-[2px] bg-transparent">
                        {Elem?.name}
                      </p>
                    </>
                  );
                })
              : ""}
          </div>

          <div className="space-y-5">
            <section className="pb-3 flex space-x-5 border-b-2 border-gray-500">
              <label htmlFor="">Released Date : </label>
              <p>{Data?.release_date}</p>
            </section>

            <section className="pb-3 flex space-x-5 border-b-2 border-gray-500">
              <label htmlFor="">Revenue $ : </label>
              <p>{Data?.revenue}</p>
            </section>

            <section className="pb-3 flex space-x-5 border-b-2 border-gray-500">
              <label htmlFor="">Language&nbsp;:&nbsp;</label>
              <p className="flex space-x-2 Each overflow-x-scroll">
                {Data?.spoken_languages
                  ? Data?.spoken_languages.map((Ele,Ind) => {
                      return <span key={Ind}>{Ele.english_name}</span>;
                    })
                  : ""}
              </p>
            </section>
          </div>

          <div className="my-5 flex justify-between Design py-2 px-2 rounded-sm">
            <div className="flex justify-between">
              <p>Rating : &nbsp;</p>
              <p>{Data?.vote_average}</p>
            </div>
            <span>Out Of :&nbsp; {Data?.vote_count} Pople</span>
          </div>
        </div>

        <div className="overflow-x-scroll max-w-[95vw] Each flex space-x-5 mx-auto Design px-3 rounded-md py-1 self-center">
          {Data.production_companies
            ? Data.production_companies.map((Company , Ind) => {
                return (
                  <div key={Ind} className="relative h-[100px] w-[100px]">
                    <Image
                      src={`https://image.tmdb.org/t/p/original${Company.logo_path}`}
                      layout="fill"
                      className="object-contain"
                    />
                  </div>
                );
              })
            : ""}
        </div>
      </div>

      <hr className="my-5 border-gray-500 border-b-2 "/>

      <div className="overflow-x-scroll Each">
        <MovieCredits Id={Data.id} />
      </div>

      <hr className="mt-5 border-gray-500 border-b-2 p-0"/>
    </>
  );
};
export default MovieInfo;
