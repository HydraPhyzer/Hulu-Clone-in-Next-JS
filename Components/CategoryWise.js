import React from "react";
import EachCategory from "./EachCategory";
import MoviesObj from "./TMDB";

const CategoryWise = () => {
  return (
    <div className="">
      {MoviesObj.map((Obj, Ind) => {
        return <EachCategory Props={Obj} key={Ind} />;
      })}
    </div>
  );
};

export default CategoryWise;
