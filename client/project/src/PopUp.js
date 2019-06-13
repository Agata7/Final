import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "./popUp.css";
import "./PopUp";

class PopUp extends Component {
    constructor(props) {
        super(props);
        this.onDocumentClick = this.onDocumentClick.bind(this);
    }
    
    componentDidMount() {
        document.addEventListener('click', this.onDocumentClick);
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.onDocumentClick);
    }

    onDocumentClick (event) {
        let pointer = event.target;
        const element = ReactDOM.findDOMNode(this);
        while (pointer !== document && pointer) {
            if (pointer === element) {
                return;
            }
        pointer = pointer.parentNode;
        }
        this.props.onClose()
    }

    render() {
        return (
            <div className="popUpContainer">
            <button className="closeBtn" onClick={ () => { this.props.onClose && this.props.onClose(); } } >X</button>
            {this.props.children}
          </div>
        );
      }
    }

        
    
export default PopUp;