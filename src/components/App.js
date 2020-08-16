import React from "react";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import Ingredients from "./ingredients/Ingredients";
import Burger from "./burger/Burger";
import Toppings from "./toppings/Toppings";
import "./css/main.css";

const ingredients = {
    cheddar: {
        type: "Cheese",
    },
    beef: {
        type: "Meat",
    },
    Lettuce: {
        type: "Salad",
    },
};

const App = () => {
    return (
        <Provider store={Store}>
            <div className="container">
                <div className="row">
                    <div className="col ingredients-component">
                        <Ingredients ingredients={ingredients} />
                    </div>
                    <div className="col menu-right">
                        <div className="row">
                            <div className="col burger-component">
                                <Burger />
                            </div>
                            <div className="col toppings-component">
                                <Toppings ingredients={ingredients} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Provider>
    );
};

export default App;
