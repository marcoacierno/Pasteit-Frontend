import React from 'react';
import ReactDOM from 'react-dom';

import {
    Router,
    Route,
    IndexRoute,
    browserHistory,
} from 'react-router';

import Relay from 'react-relay';
import useRelay from 'react-router-relay';

import { Home, Error404 } from '../pages';

import '../../styles/app';

require('es6-promise').polyfill();


// Relay.injectNetworkLayer(new Relay.DefaultNetworkLayer('http://127.0.0.1:8000/graphql'));

ReactDOM.render(<Router history={browserHistory}>
    <Route path="/">
        <IndexRoute component={Home} />
        <Route path="*" component={Error404} />
    </Route>
</Router>, document.querySelector('#root'));
