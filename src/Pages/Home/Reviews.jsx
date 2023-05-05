import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

const Reviews = () => {
  return (
    <div className="text-center">
      <div className="container mx-auto">
        <h1 className=" mt-4 mb-3">Letest Reviews</h1>
        <h4 className=" my-4">
          Check out our client's Reviews about korean foods and their experience
        </h4>
        <div className="row ">
          <div className="col-12 col-md-3 mb-4">
            <Card
              className="text-center d-flex align-items-center"
              style={{ width: "18rem", height: "26rem" }}
            >
              <Card.Img
                style={{ height: "8rem" }}
                className="m-2 rounded-circle w-50 d-flex align-items-center"
                variant="top"
                src="https://www.pinkvilla.com/english/images/2023/02/1676025727_305772531_2122262117953869_1559345422052886317_n.jpg"
              />
              <Card.Body className="">
                <Card.Title>Kim So Hyun</Card.Title>
                <Card.Text>
                  I like it a lot. If I were to write a commercial for Korean
                  food, I’d say: Japanese food is beautiful; Chinese food is
                  saucy; but Korean food crunches. I describe it as a very
                  tactile cuisine, and things that make a sound in your mouth.
                </Card.Text>
                <Rating
                  placeholderRating="4.8"
                  readonly
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                ></Rating>
                <span className="mx-2"> 4.8</span>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-3 mb-4">
            <Card  className="align-items-center" clstyle={{ width: "18rem", height: "26rem" }}>
              <Card.Img
                style={{ height: "8rem" }}
                className=" m-2 rounded-circle w-50 d-flex justify-content-center align-items-center"
                variant="top"
                src="https://qph.cf2.quoracdn.net/main-qimg-97354dfca7a8669aa5f6ae72303d6225-lq"
              />
              <Card.Body>
                <Card.Title> Nancy McDonie</Card.Title>
                <Card.Text>
                  If I have any gripes about Korean food, I’d say it relies far
                  too on one sauce; and sometimes it relies too much on spice
                  rather than on flavor—take out the gochujang, and a
                  poorly-made bibimbap doesn’t have much taste.
                </Card.Text>
                <Rating
                  placeholderRating="4.9"
                  readonly
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                ></Rating>
                <span className="mx-2"> 4.9</span>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-3 mb-4">
            <Card className="align-items-center" style={{ width: "18rem", height: "26rem" }}>
              <Card.Img
                style={{ height: "8rem" }}
                className="m-2 rounded-circle w-50 d-flex justify-content-center align-items-center"
                variant="top"
                src="https://i.pinimg.com/originals/ed/d1/b8/edd1b8d3b97f3adde6c49a0ff247b90d.jpg"
              />
              <Card.Body>
                <Card.Title>Wang Yi ren</Card.Title>
                <Card.Text>
                  Korean food is tasty. It is tastier to people who enjoy some
                  spice, like their vegetables and like seafood, but none of
                  these are prerequisites to liking Korean food. Some of the
                  tastiest dishes are not hot, veggies or seafood.
                </Card.Text>
                <Rating
                  placeholderRating="4.7"
                  readonly
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                ></Rating>
                <span className="mx-2"> 4.7</span>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-md-3 mb-4">
            <Card className="align-items-center" style={{ width: "18rem", height: "26rem" }}>
              <Card.Img
                style={{ height: "8rem" }}
                className="m-2 rounded-circle w-50 d-flex justify-content-center align-items-center"
                variant="top"
                src="https://image.pixstory.com/optimized/Pixstory-image-166395036151609.png"
              />
              <Card.Body>
                <Card.Title>Song jung ki</Card.Title>
                <Card.Text>
                  When I first heard the words cold and soup used together I was
                  not impressed, but after eating a couple of bowls, Korean food
                  has a surprisingly large variety of food, enough to satisfy
                  the taste of just about anyone with an appetite. Enjoy!
                </Card.Text>
                <Rating
                  placeholderRating="4.8"
                  readonly
                  emptySymbol={<FaRegStar></FaRegStar>}
                  placeholderSymbol={<FaStar className="text-warning"></FaStar>}
                  fullSymbol={<FaStar></FaStar>}
                ></Rating>
                <span className="mx-2"> 4.8</span>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
