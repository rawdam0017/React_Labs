export const MOVIES = "MOVIES";
export const ADD_FAV_LIST = "ADD_FAV_LIST";
export function movies(items) {
  const action = {
    type: MOVIES,
    items,
  };
  return action;
}
export function addToFav(movie) {
  return {
    type: 'ADD_FAV_LIST',
    movie,
  };
}