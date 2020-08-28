import React from 'react';
import {Link} from 'react-router-dom'
import '../App.css'

export default function NavBar() {
    return (
        <div id="top">
            <nav className="navbar navbar-expand-lg navbar-dark  fixed-top">
                <a className="navbar-brand" href="https://github.com/Azhar7909?tab=repositories" target="blank">Azhar Hussain</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/skills">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#footer">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
