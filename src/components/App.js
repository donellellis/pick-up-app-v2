import React, { Component } from 'react';
import {Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import ShowOrder from './ShowOrder'
import About from './About'
import Delete from './Delete'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <Link className='app-logo' to="/">pickUp</Link>
            <Link to="/about">about</Link>
          </nav>
      </header>
      <main>
        <Switch>
          <Route  exact path="/"
                  component={Home}/>
          <Route  exact path="/order/:id" 
                  component={ShowOrder}/>
          <Route  exact path="/about" 
                  component={About}/>
          <Route exact path="/confirm" 
                  component={Delete}/>
        </Switch>
      </main>
      </div>
    );
  }
}

export default App;