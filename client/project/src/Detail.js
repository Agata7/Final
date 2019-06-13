import React, { Component } from "react";
import "./popUp.css";
import PopUp from "./PopUp";
import "./Detail.css";
import Counter from "./Counter"
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
        <div className="counterPopUp"><Counter/></div>
        </div>
      </PopUp>
{/* Można umieścić popUp jako komponent w kolejnym pliku */}
    </div>
     }
    <h2 className="title">{this.props.title}</h2>
    <h3 className="id">Product number: {this.props.presentable_id}</h3>
    <OpenImg/>
    <Counter/>
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