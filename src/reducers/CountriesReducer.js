export const CountriesReducer = (state,action)=>{
    switch(action.type){
        case "FETCH_COUNTRIES_REQUEST":
            return {
                ...state,
                isLoading:true,
            }
        case "FETCH_COUNTRIES_SUCCESS":
            return{
                ...state,
                countries:action.payload,
                isLoading:false,
                isError:false,
            }
        case "FETCH_COUNTRIES_ERROR":
            return{
                ...state,
                isLoading:false,
                isError:true,
            }
        default:
            return state;
    }
}