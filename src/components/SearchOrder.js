import React, { Component } from 'react';
import { Redirect } from 'react-router'

class SearchOrder extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      redirect: false
    }
    this.handleIdChange = this.handleIdChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleIdChange(event) {
    this.setState({id: event.target.value})
  }

  handleSubmit(event) {
    this.setState({redirect: true});
    event.preventDefault();
  }

  render() {

    if (this.state.redirect === true) {
      return <Redirect to={'/order/' + this.state.id} />
    }

    return (
      <div className="order">
      <form onSubmit={this.handleSubmit}>
        <h1 className="order-secondaryTitle">existing order</h1>
        <label>order number
          <input type="text" value={this.state.id} onChange={this.handleIdChange}/>
        </label>
        <input type="submit" value="search"></input>
      </form>
      </div>
    );
  }
}

export default SearchOrder;
