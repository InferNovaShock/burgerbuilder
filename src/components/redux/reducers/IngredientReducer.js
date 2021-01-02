import { ADD_INGREDIENTS, REMOVE_INGREDIENTS } from "../actions/Types";

const initalState = {
    items: [],
    item: {},
};

const ingredientReducer = (ingredients, ingredientToRemove) => {
    for (let ingredient = 0; ingredient < ingredients.length; ingredient++) {
        const currentIngredient = ingredients[ingredient];
        if (currentIngredient === ingredientToRemove) {
            ingredients.splice(ingredient, 1);
            return [...ingredients];
        }
    }
};

const IngredientReducer = (state = initalState, action) => {
    switch (action.type) {
        case ADD_INGREDIENTS:
            if (state.items.length < 20) {
                return {
                    ...state,
                    items: [...state.items, action.payload],
                };
            } else {
                return {
                    ...state,
                };
            }
        case REMOVE_INGREDIENTS:
            if (
                state.items.length > 0 &&
                state.items.includes(action.payload)
            ) {
                const leftIngredients = ingredientReducer(
                    state.items,
                    action.payload
                );

                return {
                    ...state,
                    items: leftIngredients,
                };
            }

            return {
                ...state,
            };

        default:
            return state;
    }
};

export default IngredientReducer;
