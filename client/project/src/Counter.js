import React, { Component } from "react";
import "./Counter";
import "./Counter.css";
import ShoppingCart from "./ShoppingCart";

class Counter extends Component {
  state = {
    availableProducts: 20,
    shoppingCart: 0,
    cart: []
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

  handleAddProductsToCart = props => {
    // console.log("clicked", this.props.name, this.state.shoppingCart)
    let found = false;
    const updateCart = this.state.cart.map(cartItem => {
      if (cartItem.name === this.props.name) {
        found = true;
        cartItem.productsNumber = this.state.shoppingCart;
        return cartItem;
      } else {
        return cartItem;
      }
    });
    if (!found) {
      updateCart.push({
        name: this.props.name,
        productsNumber: this.state.shoppingCart,
        key: this.props.name
      });
    }
    this.setState({
      cart: updateCart
    });
    
  };

  CreateCard=(cartItem)=> {
    return(
      <ShoppingCart
             name={cartItem.name}
             productsNumber={cartItem.productsNumber}
             key={cartItem.key}
           />
     );
    }

    
  render() {
  //  const cart = this.state.cart.map(cartItem => (
  //    <ShoppingCart
  //       name={cartItem.name}
  //       productsNumber={cartItem.productsNumber}
  //       key={cartItem.key}
  //     />
  //   ));
    return (
      <>
        <div className="counter">
          <button
            className="buttonCount"
            disabled={this.state.shoppingCart === 0 ? true : false}
            onClick={this.handleRemoveFromCart}
          >-</button>
          <span> {this.state.shoppingCart} </span>
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
          <button
            className="buy"
            disabled={this.state.shoppingCart <= 0 ? true : false}
            onClick={this.handleAddProductsToCart}
          >Add to cart</button>
        </div>
        <div>{this.state.cart!=null?this.state.cart.map(cartItem => (this.CreateCard(cartItem))):""}</div>
        
      </>
    );
  }
}

export default Counter;

