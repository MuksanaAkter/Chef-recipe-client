import React, { useState } from 'react';
import { Button, Card,Image } from 'react-bootstrap';
import { FaEye, FaHeart, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import IngredientData from './ingredientData';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({recipes}) => {
 const [fav , setfav]= useState(false)

    const handleClick =() => {
        setfav(true);
        //console.log('button clicked');
        toast("Added as Favourite recipe")
      };

    const { _id, recipe_Img1, recipe_name1, ingredients, cooking_method1,rating1 } = recipes;
    return (
        <div>
            <div>
            <Card style={{ width: '25rem', height:'50rem' }} className='me-5 my-5'>
      <Card.Img variant="top" src={recipe_Img1} />
      <Card.Body>
        <Card.Title>{recipe_name1}</Card.Title>
        <div className="">
                    {ingredients.map((ingredient) => (
                        <IngredientData
                          key={ingredient._id}
                          ingredient={ingredient}
                        ></IngredientData>
                      ))
                }
            </div>
        <Card.Text>
          {cooking_method1}
        </Card.Text>
       
      </Card.Body>
      <Card.Footer className='d-flex  justify-content-between'>
      <div className='d-flex align-items-enter'>
        <Rating
                        placeholderRating={rating1}
                        readonly
                        emptySymbol={<FaRegStar></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                        fullSymbol={<FaStar></FaStar>}
                    ></Rating>
                    <span className='mx-2'> {rating1}</span>
        </div>
        <div>
        <button type="submit" onClick={handleClick} disabled={fav} className="" > <FaHeart className='text-danger'></FaHeart></button>
        <ToastContainer />
        </div>
        
        </Card.Footer>
    </Card>
            </div>
        </div>
    );
};

export default RecipeCard;