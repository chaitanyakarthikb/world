import React from 'react'

const BoxWithFlag = ({country}) => {
  return (
    <div className='boxWithFlag'>
      <div className="flag">
        <img src={country?.flags?.svg} alt="flag" />
      </div>
      <h1>{country?.name}</h1>
      <div className='item--row'>
        <h2>Population</h2>
        <h4>{country?.population}</h4>
      </div>

      <div className='item--row'>
        <h2>Region</h2>
        <h4>{country?.region}</h4>
      </div>

      <div className='item--row'>
        <h2>Capital</h2>
        <h4>{country?.capital}</h4>
      </div>

      <div className='item--button'>
        <button>Read More</button>
      </div>

      
    </div>
  )
}

export default BoxWithFlag
