import React from 'react';
// import "./Mac.css";

import TabComponent from '../tabComponent/tabComponent';
import {useLocation} from 'react-router-dom';

const Mac = () => {
    const location = useLocation();
    const pathName = location.pathname.replace("/", "").replace(/^\w/, c => c.toUpperCase())

    return (
        <TabComponent tabName={pathName} />
    )
}

export default Mac
