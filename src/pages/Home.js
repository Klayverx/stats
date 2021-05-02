import React, {useEffect, useState} from 'react';

import {api} from '../services/api';

function Home(props) {
	const access_token = localStorage.getItem('access_token');

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [imgProfile, setImageProfile] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');

	useEffect(() => {
		api.get('athlete', {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		}).then(resp => {
			setFirstName(resp.data.firstname);
			setLastName(resp.data.lastname);
			setImageProfile(resp.data.profile);
			setCity(resp.data.city);
			setState(resp.data.state);
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			Home page - {firstName}, {lastName}, {city}, {state}
			<br />
			<br />
			<img src={imgProfile} alt="Perfil"></img>
		</div>
	);
}

export default Home;
