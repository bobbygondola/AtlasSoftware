import React from 'react';
import "./Linux.css";

import TabComponent from '../tabComponent/tabComponent';
import {useLocation} from 'react-router-dom';

const Linux = () => {

    const location = useLocation();
    const pathName = location.pathname.replace("/", "").replace(/^\w/, c => c.toUpperCase())

    return (
        <TabComponent tabName={pathName} />
    )
}

export default Linux
