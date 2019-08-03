import React, { Component } from "react";
import "../styles/popUp.css";
import PopUp from "./PopUp";
import "../styles/Detail.css";
import "./Detail";



class Detail extends Component {
    constructor (props) {
        super(props);
        this.state = {materialsPopup: false };
    }
    

render() {
    const { materialsPopup } = this.state    
    const OpenImg = (props) => <img className="picture"src={this.props.picture} alt="products"
   onClick={ () => { this.setState({materialsPopup: !materialsPopup});} }
   ></img>;

return (<div className="root">
    { !!materialsPopup && <div className="bg">
      <PopUp className="materialsPopUp"
             onClose={ () => { this.setState({ materialsPopup: false }); } }
      > <div className="detailsPopUp">
        <h2 className="titlePopUp">{this.props.title}</h2>
        <h3 className="idPopUp">Product number: {this.props.presentable_id}</h3>
        <img className="picturePopUp"src={this.props.picture} alt="products"/>
        <h4 className="brandPopUp">{this.props.brand}</h4>
        <p>{this.props.description}</p>
        <button
            className="buyPopUp"
            onClick={(e)=>this.props.handleAddToCart(e, this.props.title, this.props.presentable_id, this.props.picture)}
          >Add to cart</button>
        </div>
      </PopUp>
    </div>
     }
    <h2 className="title">{this.props.title}</h2>
    <h3 className="id">Product number: {this.props.presentable_id}</h3>
    <OpenImg/>
    {/* <Counter key={this.props.presentable_id} name={this.props.title}/> */}
    <button
            className="buy"
            // disabled={this.state.shoppingCart <= 0 ? true : false}
            onClick={(e)=>this.props.handleAddToCart(e, this.props.title, this.props.presentable_id, this.props.picture)}
          >Add to cart</button>
</div>);
}
}


export default Detail;

// W opisie podruktu pojawiają się elementy html - 
// nie zdążę zastosować metody natmoiast znalazłam metodę, która nazywa się dangerouslySetInnerHTML

// function createMarkup() {
//     return {__html: 'First &middot; Second'};
//   }
  
//   function MyComponent() {
//     return <div dangerouslySetInnerHTML={createMarkup()} />;
//   }