import { Button, Card } from "react-bootstrap";
import { FaArrowRight, FaMedal, FaThumbsUp, FaUtensils } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLoaderData, useParams } from "react-router-dom";
import ChefsCard from "./ChefsCard";
import RecipeCard from "./RecipeCard";

const RecipeData = () => {
  const chef = useLoaderData();
  //console.log(chef.recipe);
  const {
    _id,
    chef_picture,
    chef_name,
    years_of_experience,
    number_of_recipes,
    likes,
    bio,
    recipe
  } = chef;
  return (
    <div className="">
      <div style={{ backgroundColor: "#cfcfcf", opacity: 0.9 }}>
      <div className=" container d-md-flex justify-content-between">
        <div className="p-md-5">
        <h2>{chef_name}</h2>
        <h6 className='my-3'>
             {bio}
          </h6>
          <h5 className='my-3'>
            <FaMedal className="me-2"></FaMedal>Year of experience: <span className="text-danger"> {years_of_experience}</span>
          </h5>
          <h5> <FaUtensils className="me-2"></FaUtensils>
            Numbers of recipes: <span className="text-danger">{number_of_recipes}</span> 
          </h5>
          <h5 className='my-3'> <FaThumbsUp className="me-2"></FaThumbsUp> 
             Likes: <span className="text-danger"> {likes}</span>
          </h5>
          
        </div>
        <div className="p-md-5" >
          <img style={{height:"300px", width:"400px"}} src={chef_picture} alt="" />
        </div>
      </div>
      
      </div>
      <div className=" d-md-flex flex-wrap justify-content-center">
                    {recipe.map((recipes) => (
                        <RecipeCard
                          key={recipes._id}
                          recipes={recipes}
                          className=""
                        ></RecipeCard>
                      ))
                }
            </div>
    </div>
  );
};

export default RecipeData;
