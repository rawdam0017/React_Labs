import { combineReducers } from "redux";
import movielist from "./movie";
import favorites from "./favorites";


export default combineReducers({
    movielist,
    favorites,
 })