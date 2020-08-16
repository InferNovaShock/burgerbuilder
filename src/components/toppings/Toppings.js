import React from "react";
import { connect } from "react-redux";
import "./toppings.css";

class Topping extends React.Component {
    render = () => {
        return <div className="toppings">lorem ipsmu</div>;
    };
}

const mapStateToProps = (state) => ({
    ingredientItems: state.ingredients.items,
});

export default connect(mapStateToProps)(Topping);
