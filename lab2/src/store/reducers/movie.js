const INITIAL_STATE = {
    moviesList: [],
    moviesDetails: {},
  };
  
  export default function movies(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "GET_MOVIES_LIST":
        return {
          ...state,
          moviesList: action.payload,
        };
      case "GET_MOVIES_DETAILS":
        return {
          ...state,
          moviesDetails: action.payload,
        };
      default:
        return state;
    }
  }
  