import { combineReducers } from "redux";
import IngredientReducer from "./IngredientReducer";

export default combineReducers({
    ingredients: IngredientReducer,
});
