import React from "react";


const Box = (props) => {

  let {country} = props;

  return (
    <div className="box">
      <h1>{country?.name}</h1>
      <div>
        <h4>Capital:</h4>
        <h6>{country?.capital || <>No Capital</>}</h6>
      </div>

      <div>
        <h4>Population:</h4>
        <h6>{country?.population}</h6>
      </div>

      <div>
        <h4>Area:</h4>
        <h6>{country?.area}</h6>
      </div>

      <div>
        <h4>Currency:</h4>
        <h6>{country?.currencies?.[0].name || <>No Currency</>}</h6>
      </div>
    </div>
  );
};

export default Box;
