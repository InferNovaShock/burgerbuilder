import React from "react";
import { connect } from "react-redux";
import {
    addIngredients,
    removeIngredients,
} from "../redux/actions/IngredientsAction";
import "./ingredient.css";

const CreateIngredientsList = ({
    ingredients,
    addIngredients,
    removeIngredients,
}) => {
    const ingredientsNames = Object.keys(ingredients);
    return ingredientsNames.map((ingredient, index) => (
        <div key={index} className="ingredient-row row">
            <div className="col flex-y">{ingredient.toUpperCase()}</div>
            <div className="mx-left">
                <div className="col">
                    <button
                        className="neu-light btn-action"
                        name={ingredients[ingredient].type}
                        onClick={(event) => addIngredients(event.target.name)}
                    >
                        &#43;
                    </button>
                </div>
                <div className="col">
                    <button
                        className="neu-light btn-action"
                        name={ingredients[ingredient].type}
                        onClick={(event) =>
                            removeIngredients(event.target.name)
                        }
                    >
                        &#8722;
                    </button>
                </div>
            </div>
        </div>
    ));
};

const Ingredients = ({ ingredients, addIngredients, removeIngredients }) => (
    <div className="ingredients">
        <CreateIngredientsList
            ingredients={ingredients}
            addIngredients={addIngredients}
            removeIngredients={removeIngredients}
        />
    </div>
);

export default connect(null, { addIngredients, removeIngredients })(
    Ingredients
);
