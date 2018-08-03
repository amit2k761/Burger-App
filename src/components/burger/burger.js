import React from 'react';
import classes from './burger.css';
import BurgerIngred from './burgerIngred/burgerIngred';

const burger = (props)=>{
    //keys method extract the keys of object and turns them into array
    let transformedIngredients= Object.keys(props.ingredients)
    .map(ingredientKey=>{
            return [...Array(props.ingredients[ingredientKey])]
            .map((_,i)=>{ 
               return <BurgerIngred key={ingredientKey + i} type={ingredientKey}/>;
            });
    })
    .reduce((arr , el )=>{
        return arr.concat (el);
    } ,[]);
if(transformedIngredients.length ===0){
transformedIngredients = <p> Please start adding ingredients </p>
} 
return(
<div className={classes.Burger}>
<BurgerIngred type='bread-top' />
{transformedIngredients}
<BurgerIngred type='bread-bottom' />
</div>
);
}

export default burger;