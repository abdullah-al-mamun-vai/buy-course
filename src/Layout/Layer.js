import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Sections/Footer';
import Header from '../Pages/Home/Sections/Header';

const Layer = () => {
    return (<>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
    );
};

export default Layer;