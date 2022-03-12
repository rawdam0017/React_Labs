import {ADD_FAV_LIST} from '../actions/favorites'
const INITIAL_STATE = {
    favMovies: [],
  };
  
  export default function addToFav (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_FAV_LIST:
            console.log("Movies ADDed tio Favorite", action.movie);
            return {
              favoriteMovies:[...state, action.movie]};
            // return favoriteMovies;
          default:
            return state;
        }
      
  }
  