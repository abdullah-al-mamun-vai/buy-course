import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Home/Sections/Header';

const Layer = () => {
    return (<>
        <Header></Header>
        <Outlet></Outlet>
    </>
    );
};

export default Layer;