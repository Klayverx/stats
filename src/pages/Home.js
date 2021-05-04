import React, {useEffect, useState} from 'react';
import SideBar from '../components/SideBar';

import {api} from '../services/api';

function Home(props) {
	const access_token = localStorage.getItem('access_token');

	const [dataAthlete, setDataAthlete] = useState({});
	const [dataClubs, setDataClubs] = useState({});

	useEffect(() => {
		api.get('athlete', {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		}).then(resp => {
			setDataAthlete(resp.data);
		});

		api.get('athlete/clubs', {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		}).then(resp => {
			setDataClubs(resp.data);
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<SideBar dataAthlete={dataAthlete} />
		</>
	);
}

export default Home;
