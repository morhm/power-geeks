import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import {Main} from './app/components/main';

import './index.scss';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}/>
  </Router>,
  document.getElementById('root')
);
