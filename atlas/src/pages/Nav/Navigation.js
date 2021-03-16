import React from 'react';
import './Nav.css';
import { Link } from "react-router-dom";
import { links } from './navLinks';

const Navigation = () => {
    return (
        <div className="navContainer">
            <div className="mainNav">
                {links.map((item) => <ui key={item.label}> <Link to={item.href}>{item.label}</Link></ui>)}
            </div>
        </div>
        
    )
}

export default Navigation
