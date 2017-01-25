import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import Box from './Box';
import Reducer from '../Store/Reducer';

/*
This is our application client. We set this as the Webpack Entry point, which makes it a non testable file that is analogous to our Main. There are a few extra considerations
    -We are in the DOM at this point in time
    -We are in a new application space, so if we have global libraries we expect, or global behavior we expect in our client app we need to set it up here
    -app-mount is an in page element that can be found in our Page component.
    -We use ReactDOM.render() to render our React components
*/

const AppStore = createStore(Reducer.combine(combineReducers), window.app);
const App = <Provider store={AppStore}><Box /></Provider>;

ReactDOM.render(App, document.getElementById('app-mount'));
