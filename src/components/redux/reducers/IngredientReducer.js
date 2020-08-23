import { ADD_INGREDIENTS, REMOVE_INGREDIENTS } from "../actions/Types";

const initalState = {
    items: [],
    item: {},
};

const ingredientReducer = (ingredients, ingredientToRemove) => {
    for (let ingredient in ingredients) {
        if (ingredients[ingredient] === ingredientToRemove) {
            ingredients.splice(ingredient, 1);
            return [...ingredients];
        }
    }
};

export default (state = initalState, action) => {
    switch (action.type) {
        case ADD_INGREDIENTS:
            return {
                ...state,
                items: [...state.items, action.payload],
            };
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
