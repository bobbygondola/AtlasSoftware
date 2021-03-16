import React from 'react';
import "./Footer.css";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="FooterContainer">
            <div className="logo">
            <Link to="/"><h2>Atlas Software</h2></Link>
            </div>

            <div className="footerInfo">
                <h3>Mission</h3>
                <p>Atlas Software wants to provide the world with easily accesible software and support developers with original, helpful and amazing software!</p>
                <h3>Support Us</h3>
                <p>Twitter [insert logo]</p>
                <p>Instagram [insert logo]</p>
                <p>Facebook [insert logo]</p>
                <p>Become a Sponsor!</p>
            </div>

            <div className="copyRight">
                <h3>Copyright</h3>
            <p>2020-2021 AtlasSoftware. All Rights Reserved. AtlasSoftware and the AtlasSoftware are registered trademarks of the AtlasSoftware Corp.</p>
            <span>Contact</span> <span>Privacy Policy</span> <span>Cookie Policy</span>
            </div>
            
            
        </div>
    )
}

export default Footer
