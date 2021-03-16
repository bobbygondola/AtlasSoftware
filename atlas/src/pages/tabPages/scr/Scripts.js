import React from 'react'
import "./Scripts.css"

import TabComponent from '../tabComponent/tabComponent';
import {useLocation} from 'react-router-dom';

const Scripts = () => {
    const location = useLocation();
    const pathName = location.pathname.replace("/", "").replace(/^\w/, c => c.toUpperCase())
    return (
        <TabComponent tabName={pathName} />
    )
}

export default Scripts
