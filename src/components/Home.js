import React, { Component } from 'react';
import NewOrder from './NewOrder'
import SearchOrder from './SearchOrder'

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <NewOrder/>
        <SearchOrder/>
      </div>
    );
  }
}

export default Home;
