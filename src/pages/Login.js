import React from 'react';
import {useHistory} from 'react-router';
// import Home from './Home';

export default function Login() {
	const redirect_uri = 'http://localhost:3000/auth';
	const scope = 'read,profile:read_all,activity:read,activity:write';

	const history = useHistory();
	// const token = localStorage.getItem('access_token');

	return (
		<>
			{/* {token ? (
				<Home />
			) : ( */}
			<div>
				<h1>Page login</h1>
				<button>
					<a
						href={`https://www.strava.com/oauth/authorize?client_id=65376&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}`}
						target="_blank"
						rel="noreferrer"
					>
						Login com o strava
					</a>
				</button>
				<button onClick={() => history.push('/home')}>
					Ir para home
				</button>
			</div>
			{/* )} */}
		</>
	);
}
