import React from 'react';
import "./Home.css"
import NewTab from './NewTab'


const Home = () => {
    return (
        <div className="HomeComponent">
            <div className="IntroHome">
                <h2><span className="tag">Marketplace</span> and <span className="tag">Hub</span> for Software and much More!</h2>
                <h3><span className="tag">Create, Upload, Sell,</span> and <span className="tag">Download</span> amazing and useful software! </h3>
            </div>
            <div className="getStarted">
                <div className="ready"><h3>Ready to start selling?</h3></div>
                <div className="loginDiv"><div className="login"><span>login</span></div></div>
            </div>
            <div className="homeNew">
                <NewTab />
            </div>
        </div>
    )
}

export default Home
