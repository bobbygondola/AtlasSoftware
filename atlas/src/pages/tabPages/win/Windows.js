import React from 'react';

import TabComponent from '../tabComponent/tabComponent';
import {useLocation} from 'react-router-dom';

import NewTab from '../home/NewTab';

const Windows = () => {
    const location = useLocation();
    const pathName = location.pathname.replace("/", "").replace(/^\w/, c => c.toUpperCase())

    console.log(pathName)
    return (
        <>
        <TabComponent tabName={pathName} />
        <div className="winNew">
        <NewTab />
        </div>
        </>
        
    )
}

export default Windows
