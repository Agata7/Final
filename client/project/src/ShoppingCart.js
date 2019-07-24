import React, { Component } from "react";
import "./ShoppingCart";
import "./ShoppingCart.css";

class ShoppingCart extends Component {
  state = {
    showing: true
  };
  render() {
    const { cartItems } = this.props;
    const { showing } = this.state;
    return (
      <div className="basket">
     <i onClick={() => this.setState({ showing: !showing })} className="fa fa-shopping-cart" aria-hidden="true"></i> <span>{cartItems.length}</span>
          {showing ?
             (cartItems.length > 0 && (
                <div className="fullBasket"> 
                  <ul>
                    {cartItems.map(item => (
                      <li>
                        <b>{item.products}</b>
                        <b className="buyProduct"> x {item.count} </b>
                        <button
                          className="removeProduct"
                          onClick = { (e) =>
                            this.props.handleRemoveFromCart(e, item)}>X</button>
                      </li>
                    ))}
                  </ul>
                </div>
              )) 
             : null} 
      </div>
      
    );
  }
}

export default ShoppingCart;
