import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Home, Error404 } from '../pages';

import '../../styles/app';


ReactDOM.render(<Router history={browserHistory}>
    <Route path="/">
        <IndexRoute component={Home} />
        <Route path="*" component={Error404} />
    </Route>
</Router>, document.querySelector('#root'));
