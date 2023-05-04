import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ChefsCard from './ChefsCard';

const ChefData = () => {
    const [chefs, setChef] = useState([]);
    useEffect(() => {
        fetch('https://chef-recipe-server-muksanaakter.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.error(error))
    }, [])
    
    return (
        <div className='container '>
            <h1 className='text-center my-5'>Our Honourable Chefs</h1>
            <div className=''>
            <div className='d-md-flex flex-wrap justify-content-center'>
                    {chefs.map((chef) => (
                        <ChefsCard 
                          key={chef._id}
                          chef={chef}
                          className=""
                        ></ChefsCard>
                      ))
                }
            </div>
            </div>
            
            
        </div>
    );
};

export default ChefData;