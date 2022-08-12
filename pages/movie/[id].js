import React from 'react'
import Poster from '../../Components/Poster';

const SpecificMovie = ({Data}) => {
  return (
    <div>
      <Poster Data={Data}/>
    </div>
  )
}

export async function getServerSideProps({query})
{
  let Data;
  let Name=await fetch(`https://api.themoviedb.org/3/movie/${query.id}?api_key=512f02bfeaad808b483c6f3bb546db74`)
  Data=await Name.json();
  return {
    props:{
      Data
    }
  }
}
export default SpecificMovie