import React from "react";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import Ingredients from "./ingredients/Ingredients";
import Burger from "./burger/Burger";
import Toppings from "./toppings/Toppings";
import "./css/main.css";

const ingredients = {
    cheddar: {
        type: "Cheddar",
    },
    beef: {
        type: "Beef",
    },
    Lettuce: {
        type: "Lettuce",
    },
    Mushroom: {
        type: "Mushroom",
    },
    Onion: {
        type: "Onion",
    },
};

const App = () => {
    return (
        <Provider store={Store}>
            <div className="container">
                <div className="overflow-auto row h-50 flex-y">
                    <div className="col burger-component">
                        <Burger />
                    </div>
                </div>
                <div className="row space-between">
                    <div className="col ingredients-component">
                        <Ingredients ingredients={ingredients} />
                    </div>
                    <div className="col toppings-component">
                        <Toppings ingredients={ingredients} />
                    </div>
                </div>
            </div>
        </Provider>
    );
};

export default App;
