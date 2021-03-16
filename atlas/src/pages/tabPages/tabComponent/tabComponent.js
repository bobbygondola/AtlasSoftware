import React from 'react';
//styles for components
import "../win/Windows.css";
import "../mac/Mac.css";
import "../lin/Linux.css";
import "../gam/Games.css";
import "../scr/Scripts.css";

const TabComponent = (props) => {
    return (
        <div className={props.tabName + "Container"}>
            <div className="tabTitle">
                <h2>{props.tabName}</h2>
            </div>
                <div className="disclosureDiv">
                    <h3>-DISCLOSURE-</h3>
                    <h4>Always scan all software before installing or using.</h4>
                </div>
            <div className="HeadContent">
                    <div className="help">
                        <h3>Helpful Guides</h3>
                        <p>We require contributers to submit in-depth walkthroughs to make any software, SIMPLE!</p>
                    </div>
                    <div className="safe">
                        <h3>Safe</h3>
                        <p>Atlas scans every downloadable software for viruses and malware to protect our users.</p>
                    </div>
            </div>
        </div>
    )
}

export default TabComponent