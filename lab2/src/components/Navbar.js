import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/MovieList'>Movie</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/favorites">favorites</Link>
                        <Link className="nav-link" to="/Login">Login</Link>
                        <Link className="nav-link" to="/Register">Register</Link>
                    </div>
                </div>
            </div>
        </nav>

    )
}
