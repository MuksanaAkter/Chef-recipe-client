import React from "react";

const Bestrestaurent = () => {
  return (
    <div className="py-3 text-center" style={{ backgroundColor: "#d6dfdfc3", opacity: 0.9 }} >
      <div className=" container my-5 mx-auto">
      <h1 className="text-center my-4">Most Popural Restaurent</h1>
      <h5 className="text-center">
        Considering the ingredients and cooking methods of the traditional
        Korean diet, it's generally considered healthy. Because they're often
        high in vegetables and cooked without much oil, Korean meals are often
        lower in calories than traditional American meals.
      </h5>
      <div className="row my-5 d-flex justify-content-center">
        <div  className="col col-md-4 mb-3">
          <img style={{ height:"300px",width:"20rem" }}
            src="https://media-cdn.tripadvisor.com/media/photo-s/1c/2c/72/c8/privilege-bar.jpg"
            alt=""
          />
          <h3 className='text-center my-3 '>KwonSookSoo</h3>
        </div>
        <div className="col col-md-4 mb-3">
          <img style={{ height:"300px",width:"20rem" }}
            src="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2021/10/24200803/149368320_426636988602782_4342436756057309749_n-840x560.jpg"
            alt=""
          />
          <h3 className='text-center my-3 '>Yonggeumok</h3>
        </div>
        <div className="col col-md-4 mb-3">
          <img style={{ height:"300px", width:"20rem" }}
            src="https://axwwgrkdco.cloudimg.io/v7/__gmpics__/5a39fa6c9722497ab846722af297fd76"
            alt=""
          />
          <h3 className='text-center my-3 '>Jungsik Seoul</h3>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default Bestrestaurent;
