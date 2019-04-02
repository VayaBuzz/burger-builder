import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // this looks complex, but in the end, it's mapping 
    // your state object into an array of ingredients.
    //Remember, Object.keys() is a JS function that returns 
    // an array of keys from a supplied object (but not the values).
    // We take the key array, and map each key into a new
    // array of ingredient objects. 
    let transformedIngredients = Object.keys(props.ingredients)  // returns the keys, not the values
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        });
    })
    .reduce((arr, el)=>{
        return arr.concat(el)
    }, []);  // we use reduce so it will return either empty array,
             // or array of JSX elements.
    if (transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    console.log(transformedIngredients);
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;
