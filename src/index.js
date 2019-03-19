import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {
    BrowserRouter as Router
} from "react-router-dom";
import './stylesheets/main.scss'

require('dotenv').config()

ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById('root')
);
