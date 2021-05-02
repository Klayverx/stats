import React, {useEffect, useState} from 'react';

import {api} from '../services/api';

function Home(props) {
	// const token = localStorage.getItem('access_token');
	const [firstName, setFirstName] = useState('');
	// const [lastName, setLastName] = useState('');
	// const [imgProfile, setImageProfile] = useState('');
	// const [city, setCity] = useState('');
	// const [state, setState] = useState('');

	useEffect(() => {
		// setFirstName(resp.data.athlete.firstname);
		// setLastName(resp.data.athlete.lastname);
		// setImageProfile(resp.data.athlete.profile);
		// setCity(resp.data.athlete.city);
		// setState(resp.data.athlete.state);
		// setRefreshToken(resp.data.refresh_token);

		api.get('athlete', {
			// headers: {
			// 	Authorization: `Bearer ${token}`,
			// },
		}).then(resp => {
			console.log(resp);
			setFirstName(resp.firstname);
		});
	}, []);

	return <div>Home page - {firstName} </div>;
}

export default Home;
