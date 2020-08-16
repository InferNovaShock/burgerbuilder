import { ADD_INGREDIENTS, REMOVE_INGREDIENTS } from "./Types";

export const addIngredients = (ingredient) => (dispatch) => {
    dispatch({
        type: ADD_INGREDIENTS,
        payload: ingredient,
    });
};

export const removeIngredients = (ingredient) => (dispatch) => {
    dispatch({
        type: REMOVE_INGREDIENTS,
        payload: ingredient,
    });
};
