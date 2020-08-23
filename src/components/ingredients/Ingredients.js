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
                <div className="col flex-y">{ingredient.toUpperCase()}</div>
                <div className="mx-left">
                    <div className="col">
                        <button
                            className="neu-light btn-action"
                            name={ingredients[ingredient].type}
                            onClick={addHandler}
                        >
                            &#43;
                        </button>
                    </div>
                    <div className="col">
                        <button
                            className="neu-light btn-action"
                            name={ingredients[ingredient].type}
                            onClick={removeHandler}
                        >
                            &#8722;
                        </button>
                    </div>
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
        const { ingredients } = this.props;

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

export default connect(null, { addIngredients, removeIngredients })(
    Ingredients
);
