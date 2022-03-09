import React from 'react'
import { useEffect } from "react";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getMoviesList } from "../store/actions/users";

export default function MovieList() {
    const movieList = useSelector(state => state.users.moviesList)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMoviesList())
    }, []);


    return (
        <div className='container'>
            <div className='row'>
                {movieList.map((mov) => {
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
