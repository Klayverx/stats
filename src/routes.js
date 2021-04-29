import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/home" component={Home} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
