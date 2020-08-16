import React from "react";
import { connect } from "react-redux";
import {
    addIngredients,
    removeIngredients,
} from "../redux/actions/IngredientsAction";
import "./ingredient.css";

const createIngredientsList = (ingredients, addHandler, removeHandler) => {
    const temporaryIngredients = [];

    for (let ingredient in ingredients) {
        temporaryIngredients.push(
            <div key={ingredient} className="ingredient-row row">
                <div className="col">{ingredient.toUpperCase()}</div>
                <div className="col">
                    <button
                        className="button-primary"
                        name={ingredients[ingredient].type}
                        onClick={addHandler}
                    >
                        +
                    </button>
                </div>
                <div className="col">
                    <button
                        className="button-primary"
                        name={ingredients[ingredient].type}
                        onClick={removeHandler}
                    >
                        -
                    </button>
                </div>
            </div>
        );
    }

    return temporaryIngredients;
};

class Ingredients extends React.Component {
    addHandler = (event) => {
        const { addIngredients } = this.props;
        addIngredients(event.target.name);
    };

    removeHandler = (event) => {
        const { removeIngredients } = this.props;
        removeIngredients(event.target.name);
    };

    render = () => {
        const { ingredients, ingredientItems } = this.props;

        console.log(ingredientItems);

        return (
            <div className="ingredients">
                {createIngredientsList(
                    ingredients,
                    this.addHandler,
                    this.removeHandler
                )}
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    ingredientItems: state.ingredients.items,
});

export default connect(mapStateToProps, { addIngredients, removeIngredients })(
    Ingredients
);
