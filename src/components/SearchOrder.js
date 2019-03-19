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
      <div >
      <form onSubmit={this.handleSubmit}>
        <h2>
            existing order
        </h2>
        <div >
        <input type="text" value={this.state.id} onChange={this.handleIdChange} placeholder="Order number" aria-label="Search"/>
        </div>
        <button type="submit">Search</button>
      </form>
      </div>
    );
  }
}

export default SearchOrder;
