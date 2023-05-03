import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const RecipeData = () => {
    const chef= useLoaderData();
    console.log(chef);
    const { _id, chef_picture, chef_name, years_of_experience, number_of_recipes,likes } = chef;
    return (
        <div>
            reeciipeeeiiiiiiiiiii
            <div>
            <div className='me-5 mb-5'>
            <Card style={{width:"350px" ,backgroundColor: "#eff8fa"}}>
        <Card.Img className='' style={{height:"200px"}} variant="top" src={chef_picture} />
        <Card.Body>
          <h2>{chef_name}</h2>
          <h6 className='my-3'>
            Year of experience: {years_of_experience}
          </h6>
          <h6>
          Numbers of recipes: {number_of_recipes}
          </h6>
        </Card.Body>
        <Card.Footer className='d-flex  justify-content-between'>
        <h5 className='mt-2'  variant="primary"> <FaThumbsUp></FaThumbsUp> Likes: {likes}   </h5>
          <Link to={`/chef/${_id}`}>View Recipe <FaArrowRight className=''></FaArrowRight></Link>
        
        </Card.Footer>
      </Card>
            </div>
        </div>
        </div>
    );
};

export default RecipeData;