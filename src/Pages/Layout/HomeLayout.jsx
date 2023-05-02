import React from 'react';
import NavigationBar from '../Common/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Common/Footer';

const HomeLayout = () => {
    return (
        <div>
            <NavigationBar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default HomeLayout;