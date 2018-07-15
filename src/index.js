import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import store from './store';
import Main from './components/Main';
import './stylesheets/style.css'

render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Main}/>
      </div>
    </Router>
  </Provider>, 
  document.getElementById('root')
);