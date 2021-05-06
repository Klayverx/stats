import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Layout from './pages/Layout';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/home" component={Layout} />
				<Route path="/auth" component={Auth} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
