import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
function Nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <Link to= '/' className="navbar-brand">JESUS Culture</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to= '/' className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to= '/about' className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to= '/events' className="nav-link">Events</Link>
                </li>
                <li className="nav-item">
                    <Link to= '/contact' className="nav-link">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link to= '/quicklink' className="nav-link">Quicklink</Link>
                </li>

                </ul>
            </div>
            </nav>
        </div>
    )
}

export default Nav