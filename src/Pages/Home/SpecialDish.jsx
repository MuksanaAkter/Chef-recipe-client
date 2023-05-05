import React from 'react';

const SpecialDish = () => {
    return (
        <div className='text-center' style={{ backgroundColor: "#d6dfdfc3", opacity: 0.9 }} >
            <div className=" container my-5 mx-auto py-4">
      <h1 className="text-center my-4">Our Special Dish</h1>
      <h5 className="text-center">
      Korean food tends to be intensely flavoured, spicy and pungent. Traditional restaurants often feature charcoal grills in the middle of the table - a type of indoor barbecue.
      </h5>
      <div className="row my-5 d-flex justify-content-center">
        <div  className="col col-md-4 mb-3">
          <img style={{ height:"300px",width:"20rem" }}
            src="https://a.cdn-hotels.com/gdcs/production188/d1042/560f847f-c64a-4009-9422-1723c2739c36.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
            alt=""
          />
          <h3 className='text-center my-3 '>Kimci(kimchi jjigae)</h3>
        </div>
        <div className="col col-md-4 mb-3">
          <img style={{ height:"300px",width:"20rem" }}
            src="https://a.cdn-hotels.com/gdcs/production127/d1648/2c7d2e80-846b-452f-938a-aad111e71c8b.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
            alt=""
          />
          <h3 className='text-center my-3 '>Korean stew (jjigae)</h3>
        </div>
        <div className="col col-md-4 mb-3">
          <img style={{ height:"300px", width:"20rem" }}
            src="https://a.cdn-hotels.com/gdcs/production103/d73/f5bbab8e-f7fc-4c04-b50a-9900e952910c.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
            alt=""
          />
          <h3 className='text-center my-3 '>Bulgogi</h3>
        </div>
      </div>
      
    </div>
        </div>
    );
};

export default SpecialDish;