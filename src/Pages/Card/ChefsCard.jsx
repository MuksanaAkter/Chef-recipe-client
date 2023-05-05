import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowRight, FaMedal, FaThumbsUp, FaUtensils } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ChefsCard = ({ chef }) => {
  const {
    _id,
    chef_picture,
    chef_name,
    years_of_experience,
    number_of_recipes,
    likes,
  } = chef;
  return (
    <div>
      <div className="me-5 mb-5">
        <Card style={{ width: "350px", backgroundColor: "#eff8fa" }}>
          
          <LazyLoadImage style={{ height: "250px" , width:"350px" }} alt="" effect="blur" src={chef_picture} />

          <Card.Body>
            <h2>{chef_name}</h2>
            <h6 className="my-3"><FaMedal></FaMedal> Year of experience:<span className="text-danger"> {years_of_experience}</span></h6>
            <h6> <FaUtensils></FaUtensils> Numbers of recipes: <span className="text-danger">{number_of_recipes}</span></h6>
          </Card.Body>
          <Card.Footer className="d-flex  justify-content-between">
            <h5 className="mt-2" variant="primary">
              {" "}
              <FaThumbsUp></FaThumbsUp> Likes:<span className="text-danger px-2">{likes}</span> {" "}
            </h5>
            <Button className="text-white" variant="secondary">
              <Link style={{ color: "white" ,textDecoration:"none" }} to={`/chef/${_id}`}>
                View Recipe <FaArrowRight className=""></FaArrowRight>
              </Link>
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default ChefsCard;
