import React from "react";
import { connect } from "react-redux";
import "./burger-ingredient.css";

const addBurgerIngredient = (ingredients) => {
    return ingredients.map((ingredient, index) => {
        return <div key={index} className={ingredient}></div>;
    });
};

class Burger extends React.Component {
    render = () => {
        return (
            <div className="burger mx-auto">
                <div className="BreadTop"></div>
                {addBurgerIngredient(this.props.ingredientItems)}
                <div className="BreadBottom"></div>
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    ingredientItems: state.ingredients.items,
});

export default connect(mapStateToProps)(Burger);
