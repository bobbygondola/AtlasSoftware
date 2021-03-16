import React from 'react'
import "./Scripts.css"

import TabComponent from '../tabComponent/tabComponent';
import {useLocation} from 'react-router-dom';

import NewTab from '../home/NewTab'

const Scripts = () => {
    const location = useLocation();
    const pathName = location.pathname.replace("/", "").replace(/^\w/, c => c.toUpperCase())
    return (
        <>
        <TabComponent tabName={pathName} />
        <div className="scrNew">
            <NewTab />
        </div>
        </>
    )
}

export default Scripts
