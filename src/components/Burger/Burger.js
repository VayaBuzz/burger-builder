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
    
    const transformedIngredients1 = Object.keys(props.ingredients);
    console.log(transformedIngredients1);
    // returns the keys, not the values
    
    const transformedIngredients = 
    transformedIngredients1.map(igKey => {
        console.log('Entering igKey map');
        console.log(igKey);

        // just see what's going on:
        const newIngredientArray = [...Array(props.ingredients[igKey])];
        console.log('-----------');
        console.log('here is new ingredient array:');
        console.log(newIngredientArray);

        return [...Array(props.ingredients[igKey])].map((_, i) => {
            console.log('underscore value:');
            console.log(_);
            console.log('i value:');
            console.log(i);
            console.log('igKey::: ' + igKey);
            return <BurgerIngredient key={igKey + i} type={igKey} />
        }) // [,]
    });
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;
