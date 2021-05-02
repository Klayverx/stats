import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router';

import {apiToken} from '../services/api';

export default function Auth() {
	const history = useHistory();
	// const [error, setError] = useState(false);

	const client_id = 65376;
	const client_secret = '9141aecf4bc807456509b80235c856034984ce38';
	const grant_type = 'authorization_code';

	const url = new URL(window.location);
	const code = url.searchParams.get('code');
	// const scope = url.searchParams.get('scope').split(',');

	// const [matchedScope, setMatchedScope] = useState(false);

	// const scopeDefault = [
	// 	'read',
	// 	'profile:read_all',
	// 	'activity:read_all',
	// 	'activity:write',
	// ];

	useEffect(() => {
		// setMatchedScope(scope.every((val, idx) => val === scopeDefault[idx]));
		// console.log(scope.every((val, idx) => val === scopeDefault[idx]));
		// console.log(scope);
		// console.log(scopeDefault);
		// // setScope(url.searchParams.get('scope').split(','));

		// if (url.searchParams.get('error') || !matchedScope) {
		// 	console.log(matchedScope);
		// 	// history.push('/');
		// } else {
		apiToken
			.post(
				`token?client_id=${client_id}&client_secret=${client_secret}&code=${code}&grant_type=${grant_type}`
			)
			.then(resp => {
				localStorage.setItem('access_token', resp.data.access_token);
				localStorage.setItem('refresh_token', resp.data.refresh_token);
			})
			.then(() => history.push('/home'));
		// }

		// window.history.pushState(
		// 	'',
		// 	document.title,
		// 	window.location.pathname + window.location.search
		// );

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{/* {error ? ( */}
			<>
				<h1>Page Auth - Algo de errado não está certo</h1>
				<button onClick={() => history.push('/')}>Ir para login</button>
			</>
			{/* ) : (
				<h1>Loading...</h1>
			)} */}
		</>
	);
}
