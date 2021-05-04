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
import BarChart from '../assets/icons/bar-chart.svg';
import Bicycle from '../assets/icons/bicycle.svg';
import Trophy from '../assets/icons/trophy.svg';

import Cyclist from '../assets/icons/cyclist.svg';
import Cyclists from '../assets/icons/cyclists.svg';

// import MapBackgroud from '../assets/map-background.png';

import {api} from '../services/api';
import {Grid} from '@chakra-ui/layout';
import {GridItem} from '@chakra-ui/layout';
import {Divider} from '@chakra-ui/layout';
import {Container} from '@chakra-ui/layout';
import {Center} from '@chakra-ui/layout';

function Home() {
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
							{dataAthlete.firstname} {dataAthlete.lastname}
						</Text>
						<Flex color="white">
							<Image
								src={MapPin}
								alt="Map Pin"
								width="1rem"
								mr={1}
							/>
							{dataAthlete.city}, {dataAthlete.state}
						</Flex>
					</Flex>

					<Spacer />
					<Flex direction="column" h="60vh" pb={4} align="center">
						<Link>
							<Image
								src={BarChart}
								alt="BarChart"
								width="4.2rem"
							/>
							<Text color="white" fontWeight="bold">
								Estatísticas
							</Text>
						</Link>
						<Spacer />
						<Link>
							<Image src={Trophy} alt="Trophy" width="4.2rem" />
							<Text color="white" fontWeight="bold">
								Conquistas
							</Text>
						</Link>
						<Spacer />
						<Link>
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
							Feito por <Link>Klayver KOM 👑</Link>
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

					<Grid
						h="100%"
						templateRows="repeat(3, 1fr)"
						templateColumns="repeat(4, 1fr)"
						gap={10}
						bg="gray.200"
						p={10}
					>
						<GridItem
							colSpan={2}
							bg="primary"
							color="white"
							borderRadius="2xl"
							direction="row"
						>
							<Flex h="100%" align="center">
								<Container align="center">
									<Text fontSize="lg" fontWeight="bold">
										Distância total
									</Text>
									<Spacer />
									<Center alignItems="baseline">
										<Text fontSize="5xl" fontWeight="bold">
											9.607
										</Text>
										<Text fontSize="2xl" fontWeight="bold">
											{' '}
											km
										</Text>
									</Center>
								</Container>
								<Divider orientation="vertical" h="75%" />
								<Container align="center">
									<Text fontSize="lg" fontWeight="bold">
										Elevação total
									</Text>
									<Spacer />
									<Center alignItems="baseline">
										<Text fontSize="5xl" fontWeight="bold">
											2.987
										</Text>
										<Text fontSize="2xl" fontWeight="bold">
											{' '}
											m
										</Text>
									</Center>
								</Container>
							</Flex>
						</GridItem>

						<GridItem
							colSpan={2}
							bg="primary"
							color="white"
							borderRadius="2xl"
						>
							<Flex h="100%" align="center">
								<Container align="center">
									<Text fontSize="lg" fontWeight="bold">
										Maior pedal
									</Text>
									<Spacer />
									<Center alignItems="baseline">
										<Text fontSize="5xl" fontWeight="bold">
											200
										</Text>
										<Text fontSize="2xl" fontWeight="bold">
											km
										</Text>
									</Center>
								</Container>
								<Divider orientation="vertical" h="75%" />
								<Container align="center">
									<Text fontSize="lg" fontWeight="bold">
										Maior elevação
									</Text>
									<Spacer />
									<Center alignItems="baseline">
										<Text fontSize="5xl" fontWeight="bold">
											848
										</Text>
										<Text fontSize="2xl" fontWeight="bold">
											{' '}
											m
										</Text>
									</Center>
								</Container>
							</Flex>
						</GridItem>

						<GridItem
							colSpan={2}
							bg="primary"
							color="white"
							borderRadius="2xl"
						>
							<Flex h="100%" align="center">
								<Container align="center">
									<Image src={Cyclist} boxSize="7rem" />
								</Container>
								<Divider orientation="vertical" h="75%" />
								<Container align="center">
									<Text fontSize="lg" fontWeight="bold">
										Totais de pedaladas
									</Text>
									<Center>
										<Text fontSize="5xl" fontWeight="bold">
											270
										</Text>
									</Center>
								</Container>
							</Flex>
						</GridItem>

						<GridItem
							colSpan={2}
							bg="primary"
							color="white"
							borderRadius="2xl"
						>
							<Flex h="100%" align="center">
								<Container align="center">
									<Image src={Cyclists} boxSize="7rem" />
								</Container>
								<Divider orientation="vertical" h="75%" />
								<Container align="center">
									<Text fontSize="lg" fontWeight="bold">
										Totais de clubes
									</Text>

									<Center>
										<Text fontSize="5xl" fontWeight="bold">
											19
										</Text>
									</Center>
								</Container>
							</Flex>
						</GridItem>
						<GridItem
							colStart={3}
							colEnd={5}
							rowStart={2}
							rowEnd={4}
							bg="primary"
							color="white"
							borderRadius="2xl"
						>
							<Flex p={8} direction="column">
								<Text fontSize="xl" fontWeight="bold" mb={2}>
									Última atividade 🚲
								</Text>
								<Text fontSize="lg" lineHeight={3}>
									Título: Angicos ☁️
								</Text>
								<Text fontSize="lg">Distância: 49,3 km</Text>
								<Text fontSize="lg">Elevação: 441 m</Text>
								<Text fontSize="lg">Kudos: 23</Text>
								<Text fontSize="lg">Vel. média: 18,3 km/h</Text>
								<Text fontSize="lg">Vel. média: 36,4 km/h</Text>
							</Flex>
						</GridItem>
					</Grid>
				</Flex>
			</Flex>
		</>
	);
}

export default Home;
