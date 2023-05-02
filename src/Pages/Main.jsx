import React from 'react';
import NavigationBar from './Common/NavigationBar';
import Banner from './Home/Banner';
import { Link, Outlet } from 'react-router-dom';
import Bestrestaurent from './Home/Bestrestaurent';
import SpecialDish from './Home/specialDish';

const Main = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Bestrestaurent></Bestrestaurent>
            <SpecialDish></SpecialDish>
            
        </div>
    );
};

export default Main;