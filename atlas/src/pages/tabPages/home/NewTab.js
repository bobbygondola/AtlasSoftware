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
                    return (
                        <div className="uploadMap">
                            <div className="upload"><p key={upload.title}>Name: <span style={{fontWeight: "bold"}}>{upload.title}</span></p></div>
                            <div className="upload"><p>Compatability: <span style={{fontWeight: "bold"}}>{upload.combatability}</span></p></div>
                            <div className="upload"><p>Type: <span style={{fontWeight: "bold"}}>{upload.type}</span></p></div>
                            <div className="upload"><p>Walkthrough: <span style={{fontWeight: "bold"}}>{upload.walkthrough}</span></p></div>
                        </div>
                        )
                })}
            </div>
        </div>
    )
}

export default NewTab
