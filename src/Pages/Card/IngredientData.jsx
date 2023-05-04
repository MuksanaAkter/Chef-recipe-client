import React from 'react';

const IngredientData = ({ingredient}) => {
   
    return (
        <div>
            <li>{ingredient.name}</li>
        </div>
    );
};

export default IngredientData;