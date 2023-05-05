import React from 'react';
import NavigationBar from './Common/NavigationBar';
import Banner from './Home/Banner';
import { Link, Outlet } from 'react-router-dom';
import Bestrestaurent from './Home/Bestrestaurent';
import SpecialDish from './Home/specialDish';
import ChefsCard from './Card/ChefsCard';
import ChefData from './Card/ChefData';
import Reviews from './Home/Reviews';

const Main = () => {
    return (
        <div>
           
            <Banner></Banner>
            <ChefData></ChefData>
            <SpecialDish></SpecialDish>
            <Reviews/>
            <Bestrestaurent></Bestrestaurent>
            
        
            
            
            
        </div>
    );
};

export default Main;