import React, {Component} from "react"
import "./ShoppingCart";
import "./ShoppingCart.css";

class ShoppingCart extends Component {
  
  render() {
    
      return (
        <>
        <div>{this.props.name}</div>
        <div>{this.props.productsNumber}</div>
        </>
      );
    }
  }


export default ShoppingCart;