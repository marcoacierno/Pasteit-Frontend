import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory,
    applyRouterMiddleware,
} from 'react-router';
import Relay from 'react-relay';
import useRelay from 'react-router-relay';

import { Page, Home, Error404, CreatePaste, ViewPaste } from '../pages';

import { PastesQueries, PasteQueries } from '../queries/';

import '../../styles/app';

require('es6-promise').polyfill();


Relay.injectNetworkLayer(new Relay.DefaultNetworkLayer('http://127.0.0.1:8000/graphql/'));

ReactDOM.render(<Router
    history={browserHistory}
    render={applyRouterMiddleware(useRelay)}
    environment={Relay.Store}>
    <Route path="/" componet={Page}>
        <IndexRoute component={Home} queries={PastesQueries} />

        <Route path="pastes">
            <Route path="new/" component={CreatePaste} />
            <Route path=":hashId/" component={ViewPaste} queries={PasteQueries} />
        </Route>

        <Route path="*" component={Error404} />
    </Route>
</Router>, document.querySelector('#root'));
