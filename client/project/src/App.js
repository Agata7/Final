import React, { Component } from "react";
import "./App.css";
import Detail from "./Detail";
import ShoppingCart from "./ShoppingCart";


class App extends Component {
  state = {
    details: [],
    currentPage: 1,
    todosPerPage: 10,
    searchProduct: "",
    cartItems:[]
  };

  handleChange = e => {
    this.setState({ searchProduct: e.target.value });
  };

  handleClick = event => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  };

  componentDidMount() {
    fetch("server/db.json")
      .then(response => response.json())
      .then(date => {
        this.setState({
          details: date.products
        });
      });
      // if(localStorage.getItem('cartItems')){
      //   this.setState({cartItems:JSON.parse(localStorage.getItem('cartItems'))});
      // }
  }

  // products from API

  // componentWillMount(){
  //   fetch("API").then(res => res.json())
  //   .then(data => this.setState({
  //     details:data
  //   }))
  // }

  handleAddToCart=(e, products, key)=>{
    this.setState(state=>{
      const cartItems = state.cartItems;
      let productAlredyInCart = false;
      cartItems.forEach(item=>{
        if(item.key === key){
          productAlredyInCart = true;
          item.count++;
        }
      });
      if(!productAlredyInCart){
        cartItems.push({products, count:1, key})
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      console.log(cartItems)
      return cartItems;
    })
  }

  handleRemoveFromCart=(e, item)=>{
    this.setState(state=>{
      const cartItems = state.cartItems.filter(elm=>elm.key !== item.key);
      localStorage.setItem('cartItem', cartItems);
      console.log(cartItems)
      return {cartItems}
    })
  }

  render() {
    let details = this.state.details.map(detail => (
      <Detail
        key={detail.id}
        presentable_id={detail.general.presentable_id}
        picture={detail.images.primary.large}
        title={detail.general.name}
        brand={detail.brand.name}
        description={detail.general.description}
        handleAddToCart={this.handleAddToCart}
      />
    ));
    
  
    
    details=details.filter(element => 
     element.props.title.toLowerCase().includes(this.state.searchProduct.toLowerCase()) 
        );

    

    const { currentPage, todosPerPage } = this.state;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = details.slice(indexOfFirstTodo, indexOfLastTodo);
    const renderTodos = currentTodos.map((details, index) => {
      return <div key={index}>{details}</div>;
    });

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(details.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
          className={number === currentPage ? "active" : ""}
        >
          {number}
        </li>
      );
    });

    return (
      <>
        <header>
        <input
            type="text"
            value={this.props.searchProduct}
            onChange={this.handleChange}
            placeholder="Search product..."
          />
        </header>
        <div className="app">
          <main>
            <article className="listProducts">{renderTodos}
            </article>
           <ShoppingCart cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart}></ShoppingCart>
            <section>
              <ul id="pageNumbers">{renderPageNumbers}</ul>
            </section>
          </main>
        </div>
        <footer>Footer</footer>
      </>
    );
  }
}

export default App;
