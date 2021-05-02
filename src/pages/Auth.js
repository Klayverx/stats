import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router';

import Home from './Home';

import {apiToken} from '../services/api';

export default function Auth() {
	const history = useHistory();
	const client_id = 65376;
	const client_secret = '9141aecf4bc807456509b80235c856034984ce38';
	const grant_type = 'authorization_code';

	const [code, setCode] = useState('');
	const [scope, setScope] = useState([]);
	const [matchedScope, setMatchedScope] = useState(false);

	const scopeDefault = [
		'read',
		'profile:read_all',
		'activity:read',
		'activity:write',
	];

	useEffect(() => {
		const url = new URL(window.location);
		setCode(url.searchParams.get('code'));
		setScope(url.searchParams.get('scope').split(','));
		setMatchedScope(scope.every((val, idx) => val === scopeDefault[idx]));

		apiToken
			.post(
				`token?client_id=${client_id}&client_secret=${client_secret}&code=${code}&grant_type=${grant_type}`
			)
			.then(resp => {
				localStorage.setItem('access_token', resp.data.access_token);
				localStorage.setItem('refresh_token', resp.data.refresh_token);
			});
	}, []);

	return (
		<>
			{matchedScope ? (
				<Home />
			) : (
				<>
					<h1>Page Auth - Algo de errado não está certo</h1>
					<button onClick={() => history.push('/')}>
						Ir para login
					</button>
				</>
			)}
		</>
	);
}
