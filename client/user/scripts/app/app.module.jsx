"use strict";

import 'babel-polyfill';
import { Router, browserHistory } from 'react-router';
import configureStore from './../store/configureStore'; 
import {Provider} from 'react-redux';
import routes from './app.routes';
import React from 'react';
import ReactDOM from 'react-dom';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
);


