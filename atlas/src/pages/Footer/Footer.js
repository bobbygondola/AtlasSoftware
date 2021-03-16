import React from 'react';
import "./Footer.css";
import {Link} from "react-router-dom";
import { FaTwitterSquare, FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="FooterContainer">
            <div className="logo">
            <Link to="/"><h2>Atlas Software</h2></Link>
            </div>

            <div className="footerInfo">

                <div className="missionFooter">
                    <h3>Mission</h3>
                    <p>Atlas Software aims to provide the world with easily accesible software and to support developers and engineers with original, helpful and amazing tools!</p>
                </div>

                <div className="sponsorship">
                    <h3>Become a Sponsor!</h3>
                    <p>Sponsor Atlas Software to be included in "Our Sponsors" and help pave the way for developers and software engineers to gain exposure for the future of tech! </p>
                    <h4>Learn More!</h4>
                </div>

                <div className="supportSocials">
                    <h3>Support Atlas</h3>
                    <div className='socialsDetails'>
                        <div><p><span style={{fontSize: "2rem"}}><FaTwitterSquare /></span>Twitter </p></div>
                        <div><p><span style={{fontSize: "2rem"}}><FaInstagram /></span>Instagram </p></div>
                        <div><p><span style={{fontSize: "2rem"}}><FaFacebookSquare /></span>Facebook </p></div>
                    </div>
                </div>

            </div>

            <div className="copyRight">
                <h3>Copyright</h3>
                <p>2020-2021 AtlasSoftware. All Rights Reserved. AtlasSoftware and the AtlasSoftware are registered trademarks of the AtlasSoftware Corp.</p>
                <span> - Contact</span> <span> - Privacy Policy</span> <span> - Cookie Policy</span>
            </div>
            
            
        </div>
    )
}

export default Footer
