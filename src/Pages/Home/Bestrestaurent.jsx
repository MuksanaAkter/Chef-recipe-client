import React from "react";

const Bestrestaurent = () => {
  return (
    <div className=" container my-5 mx-auto">
      <h1 className="text-center my-4">Most Popural Restaurent</h1>
      <h5 className="text-center">
        Considering the ingredients and cooking methods of the traditional
        Korean diet, it's generally considered healthy. Because they're often
        high in vegetables and cooked without much oil, Korean meals are often
        lower in calories than traditional American meals
      </h5>
      <div className="row my-5 d-flex justify-content-center">
        <div  className="col col-md-4 mb-3">
          <img style={{ height:"300px",width:"350px" }}
            src="https://media-cdn.tripadvisor.com/media/photo-s/1c/2c/72/c8/privilege-bar.jpg"
            alt=""
          />
        </div>
        <div className="col col-md-4 mb-3">
          <img style={{ height:"300px",width:"350px" }}
            src="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2021/10/24200803/149368320_426636988602782_4342436756057309749_n-840x560.jpg"
            alt=""
          />
        </div>
        <div className="col col-md-4 mb-3">
          <img style={{ height:"300px", width:"350px" }}
            src="https://axwwgrkdco.cloudimg.io/v7/__gmpics__/5a39fa6c9722497ab846722af297fd76"
            alt=""
          />
        </div>
      </div>
      {/* <div className=" d-grid row">
        <div className="col-1"></div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem quia totam, dolorem aliquid veniam possimus natus, beatae quidem dolores sit repellendus dicta facere facilis impedit ipsa qui voluptates! Voluptatum inventore eum unde amet dolorem, nulla atque. Dolorum aperiam repudiandae magnam omnis blanditiis provident velit esse totam rerum quos, explicabo nisi.</p>
        <div className="col-6">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem deleniti beatae veritatis voluptatem excepturi aliquid consequatur velit accusamus distinctio voluptatum repellat numquam asperiores cupiditate ipsa quasi, itaque ratione? Consequatur rerum iste provident impedit veniam quis consequuntur necessitatibus in illum. Facilis in et blanditiis nam fuga, quisquam placeat. In, itaque corporis.</p>
        </div>
      </div> */}
    </div>
  );
};

export default Bestrestaurent;
