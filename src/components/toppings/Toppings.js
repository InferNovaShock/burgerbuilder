import React, { useState } from "react";
import { connect } from "react-redux";
import "./toppings.css";

const IngredientList = ({ ingredientItems }) => {
    const ingredientsAmount = {};

    for (let ingredient of ingredientItems) {
        ingredientsAmount[ingredient] = 0;
    }

    for (let ingredient of ingredientItems) {
        ingredientsAmount[ingredient]++;
    }

    const ingredientsNames = Object.keys(ingredientsAmount);

    return ingredientsNames.map((ingredient, index) => (
        <div key={index} className="justify-content-between">
            <div>{ingredient.toUpperCase()}</div>
            <div>{ingredientsAmount[ingredient]}x</div>
        </div>
    ));
};

const Topping = ({ ingredientItems }) => (
    <div className="toppings">
        <IngredientList ingredientItems={ingredientItems} />
    </div>
);

const mapStateToProps = (state) => ({
    ingredientItems: state.ingredients.items,
});

export default connect(mapStateToProps)(Topping);
