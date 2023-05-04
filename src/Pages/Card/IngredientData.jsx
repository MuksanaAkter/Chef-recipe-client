import React from 'react';

const IngredientData = ({ingredient}) => {
    //console.log(ingredient.name);
    return (
        <div>
            <li>{ingredient.name}</li>
        </div>
    );
};

export default IngredientData;