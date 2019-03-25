import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
    // reemmber props.ingredients is an object.
    // convert it into an array using Object.keys
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return( 
                <li key ={igKey}>
                    <span style={{textTransform:'capitalize'}}>{igKey}: {props.ingredients[igKey]}</span>
                </li> );
        });

    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> Continue to Checkout?</p>
        </Auxiliary>
    )
};

export default orderSummary;