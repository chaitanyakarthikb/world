import React, { useContext, useEffect, useState } from "react";
import BoxWithFlag from "./BoxWithFlag";
import { useCountriesContext } from "../store/CountriesContext";
import { useNavigate } from "react-router-dom";

const Countries = () => {
  const { state,dispatch } = useCountriesContext();
  let {countries,isError,isLoading,sortedAndFilteredCountries,filteredTextCountries} = state;
  const [searchText,setSearchText] = useState("");
  const [region,setRegion] = useState("all")
  const navigate = useNavigate();
  useEffect(() => {
    if (isError) {
      navigate("/error");
    }
  }, [isError]);

 

  useEffect(() => {
    let sortedArr;
    const timeOut = setTimeout(() => {
      sortedArr = sortedAndFilteredCountries.filter((el) =>
        el.name.toLowerCase().includes(searchText.toLowerCase())
      );

      console.log("===========sortedbasva", sortedArr);
      dispatch({ type: "SEARCH_COUNTRIES", payload: sortedArr });
    }, 300);
    return () => clearTimeout(timeOut);
  }, [searchText]);

  useEffect(()=>{
    if(region.toLowerCase() === 'all'){
        dispatch({type:"RESET_COUNTRIES"});
        return;
    }
    let sortedCountriesList = countries.filter((country)=>country?.region?.toLowerCase().includes(region.toLowerCase()));
    dispatch({type:"FILTER_COUNTRIES_LIST",payload:sortedCountriesList});
  },[region])

  const sortInAscendingOrder = ()=>{
    let sortedArr = sortedAndFilteredCountries.sort((a,b)=>{
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    })
    dispatch({type:"SORT_ASCENDING_ORDER",payload:sortedArr})
  }

  const sortInDescendingOrder = ()=>{
    let sortedArr = sortedAndFilteredCountries.sort((a,b)=>{
        return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
    })
    dispatch({type:"SORT_DESCENDING_ORDER",payload:sortedArr})
  }



 

  return (
    <>
      {filteredTextCountries && (
        <div className="countriesnav">
          <input value={searchText} onChange={(e)=>setSearchText(e.target.value)} placeholder="search your country" />
          <button onClick={()=>sortInAscendingOrder()}>Asc</button>
          <button onClick={()=>sortInDescendingOrder()}>Desc</button>
          <select
            id="region"
            onChange={(e)=>setRegion(e.target.value)}
          >
            <option value="all">All</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="africa">Africa</option>
            <option value="americas">Americas</option>
            <option value="oceania">Oceania</option>
            <option value="polar">Polar</option>
            <option value="antarctic ocean">Antarctic Ocean</option>
            <option value="antarctic">Antarctic</option>

          </select>
        </div>
      )}
    <div className="boxes">
      {isLoading && <h1>Loading...</h1>}
    
      {filteredTextCountries?.map((country) => {
        return <BoxWithFlag country={country} />;
      })}
    </div>
    </>
  );
};

export default Countries;
