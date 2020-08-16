import { ADD_INGREDIENTS, REMOVE_INGREDIENTS } from "../actions/Types";

const initalState = {
    items: [],
    item: {},
};

const ingredientReduction = (ingredients, ingredientToRemove) => {
    for (let ingredient in ingredients) {
        if (ingredients[ingredient] === ingredientToRemove) {
            return [
                ...ingredients.splice(0, ingredient),
                ...ingredients.splice(ingredient + 1),
            ];
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
            if (state.items.length > 0) {
                const ingredientList = ingredientReduction(
                    state.items,
                    action.payload
                );

                return {
                    ...state,
                    items: ingredientList,
                };
            }

            return {
                ...state,
            };

        default:
            return state;
    }
};
