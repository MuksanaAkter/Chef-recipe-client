import React from 'react';
import NavigationBar from './Common/NavigationBar';
import Banner from './Home/Banner';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            main page
            <Banner></Banner>
        </div>
    );
};

export default Main;