import React from 'react';
import {Link} from "react-router-dom"
import './Header.css';

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="headerDetails">
                <Link to="/"><h1>Atlas Software</h1></Link>
            </div>
        </div>
    )
}

export default Header
