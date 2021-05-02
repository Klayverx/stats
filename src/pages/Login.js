import React from 'react';
import {useHistory} from 'react-router';

export default function Login() {
	const redirect_uri = 'http://localhost:3000/auth';
	const scope = 'read,profile:read_all,activity:read_all,activity:write';

	const history = useHistory();

	return (
		<>
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
		</>
	);
}
