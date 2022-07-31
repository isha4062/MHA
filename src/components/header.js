import React from 'react';
import styles from "./header.css";
import { Link } from "react-router-dom";  

export const Header = () => {
    
    const navTxt = {
        color : "white",
        marginLeft : "30px"
    }

    const styleDiv = {
        marginLeft : "500px"
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={navTxt}>My Hero Academia</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={styleDiv}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" style={navTxt}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" style={navTxt}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/characters' style={navTxt}>Characters</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
