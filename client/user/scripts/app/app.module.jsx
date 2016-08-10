"use strict";

import { Router, browserHistory } from 'react-router';
import routes from './app.routes';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);


