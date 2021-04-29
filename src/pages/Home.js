import React, {useEffect} from 'react';
import {apiToken} from '../services/api';

function Home() {
	const client_id = 65376;
	const client_secret = '9141aecf4bc807456509b80235c856034984ce38';
	const grant_type = 'authorization_code';

	useEffect(() => {
		let positionCode = window.location.href.indexOf('code=') + 5;
		let endPositionCode = window.location.href.indexOf('&scope');

		let code = window.location.href.slice(positionCode, endPositionCode);

		const resp = apiToken.post(
			`token?client_id=${client_id}&client_secret=${client_secret}&code=${code}&grant_type=${grant_type}`
		);

		console.log(resp);
		console.log(resp.data);
	}, []);

	return <div>Home page</div>;
}

export default Home;
