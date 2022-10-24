import React from 'react'
import useState  from "react";


const Search = () => {
const [data, setData] = useState();

  return (
    <div className='Search'>
        <input type='text' placeholder='Search...' className='search'/>
        <ul className='list'>

        {data.map((data) => (
          <li className='listItem'>{data.color}</li>
          
        ))}
          


        </ul>
    </div>
  )
}

export default Search