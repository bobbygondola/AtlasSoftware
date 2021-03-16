import React from 'react';
// import "./Mac.css";

import TabComponent from '../tabComponent/tabComponent';
import {useLocation} from 'react-router-dom';

import NewTab from '../home/NewTab'

const Mac = () => {
    const location = useLocation();
    const pathName = location.pathname.replace("/", "").replace(/^\w/, c => c.toUpperCase())

    return (
        <>
        <TabComponent tabName={pathName} />
        <div className="macNew">
        <NewTab />
        </div>
        </>
    )
}

export default Mac
