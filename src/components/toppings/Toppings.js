import React from "react";
import { connect } from "react-redux";
import "./toppings.css";

class Topping extends React.Component {
    amountOfIngredients = () => {
        const { ingredientItems } = this.props;
        const ingredientsAmount = {};
        const ingredientsList = [];

        for (let ingredient in ingredientItems) {
            ingredientsAmount[ingredientItems[ingredient]] = 0;
        }

        for (let ingredient in ingredientItems) {
            ingredientsAmount[ingredientItems[ingredient]]++;
        }

        for (let piece in ingredientsAmount) {
            ingredientsList.push(
                <div key={piece} className="justify-content-between">
                    <div>{piece.toUpperCase()}</div>
                    <div>{ingredientsAmount[piece]}x</div>
                </div>
            );
        }

        return ingredientsList;
    };

    render = () => {
        return <div className="toppings">{this.amountOfIngredients()}</div>;
    };
}

const mapStateToProps = (state) => ({
    ingredientItems: state.ingredients.items,
});

export default connect(mapStateToProps)(Topping);
