import React, {useEffect} from 'react';
// import {apiToken} from '../services/api';

function Home() {
	useEffect(() => {
		let positionCode = window.location.href.indexOf('code=') + 5;
		let endPositionCode = window.location.href.indexOf('&scope');

		let code = window.location.href.slice(positionCode, endPositionCode);
		console.log(code);

		// const resp = apiToken.get('episodes', {
		// 	params: {
		// 		_limit: 2,
		// 		_sort: 'publised_at',
		// 		_order: 'desc',
		// 	},
		// });
		// console.log(resp);
	}, []);

	return <div>Home page</div>;
}

export default Home;
