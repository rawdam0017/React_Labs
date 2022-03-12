 import { axiosInstance } from "../../network/axiosConfig";

export const getMoviesList = () => (dispatch) => {
  return axiosInstance
    .get("/popular")
    .then((res) =>
      dispatch({
        type: "GET_MOVIES_LIST",
        payload: res.data.results,
      })
    )
    .catch((err) => console.log(err));
};

export const getMovieDetails = (id) => (dispatch) => {
  return axiosInstance
    .get(`/popular/${id}`)
    .then((res) => {
      dispatch({
        type: "GET_MOVIE_DETAILS",
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
