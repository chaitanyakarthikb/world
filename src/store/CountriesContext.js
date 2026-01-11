import { createContext, useContext, useEffect, useReducer } from "react";
import { CountriesReducer } from "../reducers/CountriesReducer";

export const CountriesContext = createContext();
const initialState = {
    countries:[],
    isLoading:false,
    isError:false,
    sortedAndFilteredCountries:[],
    filteredTextCountries:[],
}
export const CountriesContextProvider = ({ children }) => {
    const [state,dispatch] = useReducer(CountriesReducer,initialState)
    useEffect(() => {
      const fetchDataFromTheAPI = async() => {
        dispatch({ type: "FETCH_COUNTRIES_REQUEST" });
        try {
          let countries = await fetch("/countries");
          let data = await countries.json();
          dispatch({type:"FETCH_COUNTRIES_SUCCESS",payload:data});
        } catch (error) {
          console.log("==============followingErrorOccured=======", error);
          dispatch({type:"FETCH_COUNTRIES_ERROR"})
        }
      };
      fetchDataFromTheAPI();
    }, []);
   
  return (
    <CountriesContext.Provider value={{state,dispatch}}>
      {children}
    </CountriesContext.Provider>
  );
};


export const useCountriesContext =()=>{
    const contextFromCOuntries = useContext(CountriesContext); 
    return contextFromCOuntries; 
} 