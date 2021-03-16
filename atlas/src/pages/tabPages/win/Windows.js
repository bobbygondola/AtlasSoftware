import React from 'react';
// import './Windows.css';

import TabComponent from '../tabComponent/tabComponent';
import {useLocation} from 'react-router-dom';

const Windows = () => {
    const location = useLocation();
    const pathName = location.pathname.replace("/", "").replace(/^\w/, c => c.toUpperCase())

    console.log(pathName)
    return (
        <TabComponent tabName={pathName} />
    )
}

export default Windows
