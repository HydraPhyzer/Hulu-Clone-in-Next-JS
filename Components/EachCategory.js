import React from 'react'
import DisplayCategory from './DisplayCategory'
const EachCategory = ({Props}) => {
  return (
    <div className='flex-col space-y-5 my-5'>
        <p className='uppercase'>{Props.Title}</p>
        <div className="overflow-x-scroll Each rounded-sm">
          <DisplayCategory Name={Props.Title} Request={Props.Request}/>
        </div>
    </div>
  )
}

export default EachCategory