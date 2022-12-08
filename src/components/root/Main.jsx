import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../common/Footer';
import Header from '../common/Header';

const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;