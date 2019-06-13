import React, { Component } from "react";
import "./Counter";
import "./Counter.css";

class Counter extends Component {
   state ={
       availableProducts: 20,
       shoppingCart: 0,

   }
   
   handleRemoveFromCart = () =>{
       this.setState({
        shoppingCart:this.state.shoppingCart - 1,
       })
   }

   handleAddToCart = () =>{
    this.setState({
     shoppingCart:this.state.shoppingCart + 1,
    })
}



  render() {
      return (
        <div className="counter">
        <button className = "buttonCount" disabled = {this.state.shoppingCart === 0 ? true : false} onClick={this.handleRemoveFromCart}>-</button>
        <span> {this.state.shoppingCart} </span>
        <button className = "buttonCount" disabled={this.state.shoppingCart === this.state.availableProducts ? true : false} onClick={this.handleAddToCart}>+</button>
        <button className="buy">Add to cart</button>
        </div>
      )
  }
}



export default Counter;