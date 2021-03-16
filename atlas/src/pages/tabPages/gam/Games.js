import React from 'react';
import "./Games.css";

import TabComponent from '../tabComponent/tabComponent';
import {useLocation} from 'react-router-dom';

import NewTab from '../home/NewTab';

const Games = () => {
    const location = useLocation();
    const pathName = location.pathname.replace("/", "").replace(/^\w/, c => c.toUpperCase())

    return (
        <>
        <TabComponent tabName={pathName} />
        <div className="gamNew">
            <NewTab />
        </div>
        </>
    )
}

export default Games
