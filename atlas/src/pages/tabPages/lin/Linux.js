import React from 'react';
import "./Linux.css";

import TabComponent from '../tabComponent/tabComponent';
import {useLocation} from 'react-router-dom';

import NewTab from '../home/NewTab'

const Linux = () => {

    const location = useLocation();
    const pathName = location.pathname.replace("/", "").replace(/^\w/, c => c.toUpperCase())

    return (
        <>
        <TabComponent tabName={pathName} />
        <div className="linNew">
        <NewTab />
        </div>
        </>
    )
}

export default Linux
