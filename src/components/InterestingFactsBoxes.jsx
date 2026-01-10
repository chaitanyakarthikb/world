import React, { useEffect } from "react";
import Box from "./Box";
import { useCountriesContext } from "../store/CountriesContext";
import {useNavigate} from 'react-router-dom';
const InterestingFactsBoxes = () => {
    const context = useCountriesContext();
    const {countries,isLoading,isError} = context;
    const navigate = useNavigate();
    useEffect(()=>{
      if(isError){
        navigate('/error')
      }

    },[isError])
  return (
    <>
      <h1>Here are the interesting facts we're proud of.</h1>

      <div className="box--lists">
        {isLoading && <h1>Loading...</h1>}
        {isError && <h1>Looks like something went wrong...</h1>}
        {countries.slice(0,10)?.map((country)=>{
          return <Box country={country}/>
        })}
       
      </div>
    </>
  );
};

export default InterestingFactsBoxes;
