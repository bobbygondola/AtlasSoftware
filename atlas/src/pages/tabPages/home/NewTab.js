import React from 'react';
import "./NewTab.css";
import { uploads } from './newTestData';

const NewTab = () => {
    return (
        <div className="NewTabContainer">
            <div>
                <h2 id="newUploads">New Uploads</h2>
            </div>
            <div className="newList">
                {uploads.map((upload) => {
                    console.log(upload.pfp)
                    return (
                        <div className="uploadMap" key={upload.id}>
                            <div className="upload"><p >Name: <span className="uploadDetails">{upload.title}</span></p></div>
                            <div className="upload"><p>Compatability: <span className="uploadDetails">{upload.combatability}</span></p></div>
                            <div className="upload"><p>Type: <span className="uploadDetails">{upload.type}</span></p></div>
                            <div className="upload"><p>Walkthrough: <span className="uploadDetails">{upload.walkthrough}</span></p></div>

                            <div className="userSection">
                                <div className="pfp">{upload.pfp ? <img src={upload.pfp.pfp.default} alt="profilepic"/> : null }</div>
                                <div className="upload"><p><span className="uploadDetails">{upload.Creator}</span></p></div>
                            </div>
                        </div>
                        )
                })}
            </div>
        </div>
    )
}

export default NewTab
