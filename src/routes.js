import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Equipament from './components/Equipament'
import Create from './components/Create'
import Stats from './components/Stats'
import Login from './pages/Login'
import Layout from './pages/Layout'
import Auth from './pages/Auth'
import NotFound from './pages/NotFound'

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/auth" component={Auth} />
				<Layout>
					<Route path="/stats" component={Stats} />
					<Route path="/create" component={Create} />
					<Route path="/equipaments" component={Equipament} />
				</Layout>
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	)
}

export default Routes
