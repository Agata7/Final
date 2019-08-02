import React, { Component } from "react";
import "./Counter";
import "./Counter.css";


class Counter extends Component {
  state = {
    availableProducts: 20,
    shoppingCart: this.props.numberProducts
  };

  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1
    });
  };

  handleAddToCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1
    });
  };
    
  render() {
  
    return (
      <>
        <div className="counter">
          <button
            className="buttonCount"
            disabled={this.state.shoppingCart === 1 ? true : false}
            onClick={this.handleRemoveFromCart}
          >-</button>
          <b>{this.state.shoppingCart}</b>
          <button
            className="buttonCount"
            disabled={
              this.state.shoppingCart === this.state.availableProducts
                ? true
                : false
            }
            onClick={this.handleAddToCart}
          >
            +
          </button>
        </div>
        
      </>
    );
  }
}

export default Counter;

