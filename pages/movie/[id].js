import React, { useState } from 'react'
import Poster from '../../Components/Poster';
import MovieInfo from '../../Components/MovieInfo';

const SpecificMovie = ({Data}) => {

  return (
    <div>
      <Poster Data={Data}/>
      <MovieInfo Data={Data}/>
    </div>
  )
}

export async function getServerSideProps({query})
{
  let Name=await fetch(`https://api.themoviedb.org/3/movie/${query.id}?api_key=512f02bfeaad808b483c6f3bb546db74`)
  let Data=await Name.json();
  return {
    props:{
      Data
    }
  }
}
export default SpecificMovie