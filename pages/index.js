import React from "react";
import Header from "../Components/Header";
import CategoryWise from "../Components/CategoryWise";

const Home = () => {
  return (
    <div className= "p-2 min-h-[100vh] Background sm:p-[2rem] text-white">
      <Header/>
      <CategoryWise/>
    </div>
  ) 
};

export default Home;
