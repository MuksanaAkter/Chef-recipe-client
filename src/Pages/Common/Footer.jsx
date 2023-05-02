import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-black px-5 py-5 mt-auto position-relative bottom-0">
        <div className="row row-cols-1 row-cols-md-6 g-5 mb-5 border-bottom border-dark border-2">
          <div className="col-lg">
            <h2 className="fs-3 fw-bold text-white mb-4">Korean Recipe</h2>
            <p className="text-white-50 mb-3">
            Korean food is one of the world's healthiest because of the wide use of natural and seasonal components of their food sources, like tofu, beans, garlic, and their all-natural kimchi. Rice is a precious staple in the Korean diet, preferring the starchier short grain rice with its stickier texture.
            </p>
            <img className="mb-5" src="Group 9969.png" alt="" />
          </div>
          <div className="col">
            <h2 className="fs-6 fw-bold text-white mb-4">Restaurent</h2>
            <p className="text-white-50">Home</p>
            <p className="text-white-50">Blog</p>
            <p className="text-white-50">About Us</p>
            <p className="text-white-50">Recipe</p>
          </div>
          <div className="col">
            <h2 className="fs-6 fw-bold text-white mb-4">Support</h2>
            <p className="text-white-50">Help Desk</p>
            <p className="text-white-50">Sales</p>
            <p className="text-white-50">Became a Partner</p>
            <p className="text-white-50">Developers</p>
          </div>
          <div className="col">
            <h2 className="fs-6 fw-bold text-white mb-4">Contact</h2>
            <p className="text-white-50">mykitchen@gmail.com</p>
            <p className="text-white-50">+1777-978-5570</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-white-50">Koreankitchen-@CopyRight. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
