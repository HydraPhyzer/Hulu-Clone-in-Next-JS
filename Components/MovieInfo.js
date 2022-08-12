import React from "react";

const MovieInfo = ({ Data }) => {
  return (
    <>
      <div className="sm:w-[50%]">
        <div className="flex space-x-4 my-4 overflow-x-scroll Each">
          {Data?.genres.map((Elem) => {
            return (
              <>
                <p className="border-gray-500 text-xs sm:text-sm px-3 py-1 rounded-full border-[2px] bg-transparent">
                  {Elem?.name}
                </p>
              </>
            );
          })}
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
            <label htmlFor="">Languages : </label>
            <p className="flex space-x-2">
              {Data?.spoken_languages.map((Ele) => {
                return <span>{Ele.english_name}</span>;
              })}
            </p>
          </section>
        </div>

        <div className="my-5 flex justify-between Design py-2 px-2 rounded-sm">
          <div className="flex justify-between">
            <p>Rating : &nbsp;</p>
            <p>{Data?.vote_average}</p>
          </div>
          <span>Out Of :&nbsp; {Data?.vote_count}</span>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
