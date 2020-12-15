import React from "react";
import { connect } from "react-redux";
import "./burger-ingredient.css";

const AddBurgerIngredient = ({ ingredients }) =>
    ingredients.map((ingredient, index) => (
        <div key={index} className={ingredient}></div>
    ));

const Burger = ({ ingredientItems }) => (
    <div className="burger mx-auto">
        <div className="BreadTop"></div>
        {<AddBurgerIngredient ingredients={ingredientItems} />}
        <div className="BreadBottom"></div>
    </div>
);

const mapStateToProps = (state) => ({
    ingredientItems: state.ingredients.items,
});

export default connect(mapStateToProps)(Burger);
