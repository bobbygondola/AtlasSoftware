import React from 'react';
import './Nav.css';
import { links } from './navLinks';

const Navigation = () => {
    return (
        <div className="navContainer">
            <div className="mainNav">
                {links.map((item) => <ui key={item}>{item}</ui>)}
            </div>
        </div>
        
    )
}

export default Navigation
