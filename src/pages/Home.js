import React, {useEffect, useState} from 'react';

import {api, apiToken} from '../services/api';

function Home() {
	const client_id = 65376;
	const client_secret = '9141aecf4bc807456509b80235c856034984ce38';
	const grant_type = 'authorization_code';

	// const [firstName, setFirstName] = useState('');
	// const [lastName, setLastName] = useState('');
	// const [imgProfile, setImageProfile] = useState('');
	// const [city, setCity] = useState('');
	// const [state, setState] = useState('');
	const [accessToken, setAccessToken] = useState('');
	// const [refreshToken, setRefreshToken] = useState('');

	useEffect(() => {
		let positionCode = window.location.href.indexOf('code=') + 5;
		let endPositionCode = window.location.href.indexOf('&scope');

		let code = window.location.href.slice(positionCode, endPositionCode);

		// setFirstName(resp.data.athlete.firstname);
		// setLastName(resp.data.athlete.lastname);
		// setImageProfile(resp.data.athlete.profile);
		// setCity(resp.data.athlete.city);
		// setState(resp.data.athlete.state);
		// setRefreshToken(resp.data.refresh_token);

		apiToken
			.post(
				`token?client_id=${client_id}&client_secret=${client_secret}&code=${code}&grant_type=${grant_type}`
			)
			.then(resp => {
				console.log(resp);
				console.log(resp.data);
				console.log(resp.data.access_token);
				api.get('athlete', {
					headers: {
						Authorization: `Bearer ${resp.data.access_token}`,
					},
				}).then(resp => {
					console.log(resp);
				});

				setAccessToken(resp.data.access_token);
			});
	}, []);

	return <div>Home page {accessToken}</div>;
}

export default Home;
