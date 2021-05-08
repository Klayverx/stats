import React, {useEffect, useState} from 'react';
import {format} from 'date-fns';

import {Image} from '@chakra-ui/image';
import {Spacer} from '@chakra-ui/layout';
import {VStack} from '@chakra-ui/layout';
import {Link} from '@chakra-ui/layout';
import {Text} from '@chakra-ui/layout';
import {Flex} from '@chakra-ui/layout';

import Stats from '../assets/stats-white.png';
import MapPin from '../assets/icons/map-pin.svg';
import Edit from '../assets/icons/edit.svg';
import BarChart from '../assets/icons/bar-chart.svg';
import Bicycle from '../assets/icons/bicycle.svg';
import Road from '../assets/icons/road.svg';

import StatsPage from '../components/Stats';

import {api} from '../services/api';

function Layout() {
	const [dataAthlete, setDataAthlete] = useState({});
	const [athleteStats, setAthleteStats] = useState({});
	const [lastActivity, setLastActivity] = useState({});

	// const [pages, setPages] = useState({
	// 	stats: true,
	// 	profile: false,
	// 	achievements: false,
	// 	gears: false,
	// });

	// function handlerPages(props) {}

	useEffect(() => {
		async function getDataAthlete() {
			// dados do atleta
			const request = await api.get('athlete');
			setDataAthlete(request.data);

			// última atividade
			const request2 = await api.get('athlete/activities');
			setLastActivity(request2.data[0]);

			// estatísticas do atleta
			const request3 = await api.get(`athletes/${request.data.id}/stats`);
			setAthleteStats(request3.data);
		}

		getDataAthlete();

		// eslint-disable-next-line
	}, []);

	return (
		<Flex h="100vh">
			<VStack h="100%" w="16rem" bg="primary" spacing={4}>
				<Image w="9rem" mt={5} src={Stats} alt="Stats"></Image>
				<Spacer />
				<Flex color="white" direction="column" align="center">
					<Image
						width="6rem"
						src={dataAthlete.profile}
						alt="Stats"
						border="3px solid"
						borderRadius="50%"
						borderColor="white"
						mb={3}
					></Image>
					<Text
						weight="bold"
						fontSize="lg"
						fontWeight="bold"
						isTruncated
					>
						{dataAthlete.firstname} {dataAthlete.lastname}{' '}
						<Link to="/">
							<Image
								display="inline"
								verticalAlign="initial"
								src={Edit}
								alt="Edit"
								width="1.1rem"
								mr={1}
								_hover={{
									transform: 'scale(1.05)',
								}}
							/>
						</Link>
					</Text>
					<Flex color="white">
						<Image src={MapPin} alt="Map Pin" width="1rem" mr={1} />
						{dataAthlete.city}, {dataAthlete.state}
					</Flex>
				</Flex>

				<Spacer />

				<Flex direction="column" h="60vh" pb={4} align="center">
					<Link
						textAlign="-webkit-center"
						_hover={{
							transform: 'scale(1.03)',
						}}
					>
						<Image src={BarChart} alt="BarChart" width="4.2rem" />
						<Text color="white" fontWeight="bold">
							Estatísticas
						</Text>
					</Link>
					<Spacer />
					<Link
						textAlign="-webkit-center"
						_hover={{
							transform: 'scale(1.03)',
						}}
					>
						<Image src={Road} alt="Road" width="4.2rem" />
						<Text color="white" fontWeight="bold">
							Criar atividade
						</Text>
					</Link>

					<Spacer />

					<Link
						textAlign="-webkit-center"
						_hover={{
							transform: 'scale(1.03)',
						}}
					>
						<Image
							src={Bicycle}
							alt="Bicycle"
							width="5rem"
							align="center"
						/>
						<Text color="white" fontWeight="bold">
							Equipamentos
						</Text>
					</Link>

					<Spacer />

					<Text color="white" fontSize={12} pb={2}>
						Feito por{' '}
						<Link
							href="https://www.instagram.com/klayverxd/?hl=pt-br"
							target="_blank"
						>
							Klayver KOM 👑
						</Link>
					</Text>
				</Flex>
			</VStack>

			<Flex w="100%" direction="column">
				<Flex bg="primary" h="3rem" w="100%" p={8} align="center">
					<Text color="white" fontSize="2xl" fontWeight="bold">
						Estatísticas 📊
					</Text>

					<Spacer />

					<Text color="white" fontSize="xl" fontWeight="bold">
						{format(new Date(), 'dd / MM / Y')} 📅
					</Text>
				</Flex>

				{/* {pages.stats === true ? ( */}
				<StatsPage
					dataAthlete={dataAthlete}
					athleteStats={athleteStats}
					lastActivity={lastActivity}
				/>
				{/* ) : (
					''
				)} */}
			</Flex>
		</Flex>
	);
}

export default Layout;
