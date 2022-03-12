import React from 'react'
import { useEffect } from "react";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesList } from "../store/actions/move";
import { addToFav } from "../store/actions/favorites";

export default function MovieList() {
    const movie = useSelector(state => state.movielist.moviesList)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMoviesList())
    });

    const fav = useSelector(state => state.favorites.favMovies)

    const addToFavorite = () => {
        this.setState({ favorited: !this.state.favorited });
        this.props.addToFavorite(this.props.movie);
    }
    const displayFav = () => {
        if (!this.state.favorited) {
            return (
                <span
                    className="glyphicon glyphicon-heart-empty"
                    onClick={() => addToFavorite()}
                ></span>
            );
        } else {
            return (
                <span
                    className="glyphicon glyphicon-heart"
                    onClick={() => this.setState({ favorited: !this.state.favorited })}
                ></span>
            );
        }
    }


    return (
        <div className='container'>
            <div className='row'>
                {movie.map((mov) => {
                    return (
                        <div className='col-3'>
                            <div class="card" style={{ width: "18rem;" }}>
                                <img src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{mov.original_title}</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link href="#" class="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                        </div>

                    )
                })}

            </div>
        </div>


    )
}
