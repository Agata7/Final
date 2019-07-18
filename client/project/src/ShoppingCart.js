import React, {Component} from "react"
import "./ShoppingCart";
import "./ShoppingCart.css";

class ShoppingCart extends Component {
  state={
    showing: false
  }
  render() {
    const{cartItems}=this.props;
    const{showing}=this.state;
      return (
        <>
        <div className="basket">
          {cartItems.length===0? <button className="hideShow" onClick={() => this.setState({ showing: !showing })}><i className="fa fa-shopping-cart" aria-hidden="true"></i> <span>{cartItems.length}</span></button>:<button className="hideShow" onClick={() => this.setState({ showing: !showing })}> <i className="fa fa-shopping-cart" aria-hidden="true"></i> <span>{cartItems.length}</span> </button>}
        {showing ? cartItems.length>0 &&
           <div>
            <ul>
              {cartItems.map(item =>
                <li>
                  <b>{item.products}</b>
                  <b className="buyProduct"> x {item.count}</b>
                  <button className="removeProduct" onClick={(e) => this.props.handleRemoveFromCart(e,item)}>X</button>
                </li>)}
            </ul>
          </div>
           : null }
        </div>
        </>
      );
    }
  }


export default ShoppingCart;