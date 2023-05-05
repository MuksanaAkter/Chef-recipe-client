import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div style={{ backgroundColor: "#cfcfcf" }}>
      <div style={{ backgroundColor: "#cfcfcf" }} className="container mb-4">
        <Carousel variant="dark">
          <Carousel.Item className="">
            <div className="row align-items-center">
              <div className="col-md">
                <img
                  style={{ height: "30rem" }}
                  className="d-block w-100 img-fluid p-3"
                  src="https://static.toiimg.com/thumb/82085026.cms?resizemode=4&width=1200"
                  alt="First slide"
                />
              </div>
              <div className="col-md align-items-center p-5">
                <h1>Best Food For Your Test</h1>
                <h3>
                  Korean food tends to be intensely flavoured, spicy and
                  pungent. Traditional restaurants often feature charcoal grills
                  in the middle of the table - a type of indoor barbecue.
                </h3>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row align-items-center">
            <div className="col-md">
                <img
                  style={{ height: "30rem" }}
                  className="d-block w-100 p-3"
                  src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_50/3144056/191211-korean-beef-bulgogi-ew-118p.jpg"
                  alt="First slide"
                />
              </div>
              <div className="col-md align-items-center p-5">
                <h1>Best Food For Your Test</h1>
                <h3>
                  Korean food tends to be intensely flavoured, spicy and
                  pungent. Traditional restaurants often feature charcoal grills
                  in the middle of the table - a type of indoor barbecue.
                </h3>
              </div>
              
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className=" row align-items-center">
              
              <div className="col-md">
                <img
                  style={{ height: "30rem" }}
                  className="d-block w-100 p-3"
                  src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/01/tteokbokki.jpg"
                  alt="First slide"
                />
              </div>
              <div className="col-md align-items-center p-5">
                <h1>Best Food For Your Test</h1>
                <h3>
                  Korean food tends to be intensely flavoured, spicy and
                  pungent. Traditional restaurants often feature charcoal grills
                  in the middle of the table - a type of indoor barbecue.
                </h3>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
