import React, { Component } from "react";
import "./App.css";
import Detail from "./Detail";


class App extends Component {
  state = {
    details: [],
    currentPage: 1,
    todosPerPage: 10,
    searchProduct: ""
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
          {/* <i className="fas fa-search" /> */}
        </header>
        <div className="app">
          <main>
            <article className="listProducts">{renderTodos}</article>
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
