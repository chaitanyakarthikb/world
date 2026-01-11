export const CountriesReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_COUNTRIES_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_COUNTRIES_SUCCESS":
      return {
        ...state,
        countries: action.payload,
        isLoading: false,
        isError: false,
        sortedAndFilteredCountries: action.payload,
        filteredTextCountries:action.payload,

      };
    case "FETCH_COUNTRIES_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "SORT_ASCENDING_ORDER":
      return {
        ...state,
        isLoading: false,
        isError: false,
        sortedAndFilteredCountries: action.payload,
        filteredTextCountries:action.payload,
      };
    case "SORT_DESCENDING_ORDER":
      return {
        ...state,
        isLoading: false,
        isError: false,
        sortedAndFilteredCountries: action.payload,
        filteredTextCountries:action.payload,

      };
    case "SEARCH_COUNTRIES":
      return {
        ...state,
        isLoading: false,
        isError: false,
        filteredTextCountries: action.payload,
      };
    case "FILTER_COUNTRIES_LIST":
        return{
            ...state,
            sortedAndFilteredCountries:action.payload,
                    filteredTextCountries: action.payload,

            isLoading:false,
            isError:false,
        }
    case "RESET_COUNTRIES":
        return{
            ...state,
            sortedAndFilteredCountries:state.countries,
            filteredTextCountries:state.countries,
            isLoading:false,
            isError:false,
        }
    case "COPY_SORTED_AND_FILTERED_COUNTRIES_TO_FILTERED":
        return{
            ...state,
            filteredTextCountries:state.sortedAndFilteredCountries,
        }
    default:
      return state;
  }
};
