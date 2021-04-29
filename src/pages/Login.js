import React from 'react';
import {useHistory} from 'react-router';

export default function Login() {
	const history = useHistory();

	return (
		<div>
			Page login
			<button
				onClick={() => {
					history.push('/home');
				}}
			>
				Login com strava
			</button>
		</div>
	);
}
