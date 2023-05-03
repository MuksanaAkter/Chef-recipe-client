import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ChefsCard from './ChefsCard';

const ChefData = () => {
    const [chefs, setChef] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/chef')
            .then(res => res.json())
            .then(data => setChef(data))
            .catch(error => console.error(error))
    }, [])
    //console.log(chefs);
    return (
        <div className='container '>
            <h1 className='text-center my-5'>Our Honourable Chef</h1>
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
            {/* <div>
            <Card className="mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ height: '40px' }} src={author?.img} roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    <p><small> {moment(author?.published_date).format('yyyy-MM-D')}</small></p>
                </div>
                <div>
                    <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link> </>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1 d-flex align-items-center'>
                    <Rating
                        style={{ maxWidth: 150 }}
                        value={Math.round(rating?.number || 0)} readOnly />
                    <span className='ms-2'> {rating?.number}</span>
                </div>
                <div>
                    <FaEye></FaEye> {total_view}
                </div>
            </Card.Footer>
        </Card>
            </div> */}
            
        </div>
    );
};

export default ChefData;