import React from 'react';
import {useHistory} from 'react-router';

export default function Login() {
	const history = useHistory();

	return (
		<div>
			Page login
			<button>
				<a
					href="https://www.strava.com/oauth/authorize?client_id=65376&redirect_uri=https%3A%2F%2Fstats-kx.vercel.app%2Fhome&response_type=code&scope=read_all,activity%3Aread_all,activity%3Awrite,profile%3Aread_all,profile%3Awrite"
					target="_blank"
					rel="noreferrer"
				>
					Login com o strava
				</a>
			</button>
			<button onClick={() => history.push('/home')}>Ir para home</button>
		</div>
	);
}
