import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  const bgimg =
    "https://post.healthline.com/wp-content/uploads/2021/09/Bibimpap-korean-food-1200x628-facebook-1200x628.jpg";
  return (
    <div>
      <div className="container">
        <Carousel variant="dark">
          <Carousel.Item className="">
            <div className="row align-items-center">
            <div
                // style={{ backgroundImage: `url(${bgimg})`, }}
                className="col-md align-items-center p-5"
              >
                <h1>Best Food For Your Test</h1>
                <h3>
                  Korean food tends to be intensely flavoured, spicy and
                  pungent. Traditional restaurants often feature charcoal grills
                  in the middle of the table - a type of indoor barbecue.
                </h3>
              </div>
              <div className="col-md">
                <img
                  className="d-block w-100"
                  src="https://static.toiimg.com/thumb/82085026.cms?resizemode=4&width=1200"
                  alt="First slide"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row align-items-center">
            <div
                // style={{ backgroundImage: `url(${bgimg})`, }}
                className="col-md align-items-center p-5"
              >
                <h1>Best Food For Your Test</h1>
                <h3>
                  Korean food tends to be intensely flavoured, spicy and
                  pungent. Traditional restaurants often feature charcoal grills
                  in the middle of the table - a type of indoor barbecue.
                </h3>
              </div>
              <div className="col-md">
                <img
                  className="d-block w-100"
                  src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_50/3144056/191211-korean-beef-bulgogi-ew-118p.jpg"
                  alt="First slide"
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className=" m-2 row align-items-center">
              <div
                // style={{ backgroundImage: `url(${bgimg})`, }}
                className="col-md align-items-center p-5"
              >
                <h1>Best Food For Your Test</h1>
                <h3>
                  Korean food tends to be intensely flavoured, spicy and
                  pungent. Traditional restaurants often feature charcoal grills
                  in the middle of the table - a type of indoor barbecue.
                </h3>
              </div>
              <div className="col-md">
                <img
                  className="d-block w-100"
                  src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/01/tteokbokki.jpg"
                  alt="First slide"
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
