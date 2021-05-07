import React from 'react';

import {Image} from '@chakra-ui/image';
import {
	Center,
	Container,
	Divider,
	Flex,
	Grid,
	GridItem,
	Spacer,
	Text,
} from '@chakra-ui/layout';

import Cyclist from '../assets/icons/cyclist.svg';
import Cyclists from '../assets/icons/cyclists.svg';

export default function Stats(props) {
	return (
		<Grid
			h="100%"
			w="100%"
			templateRows="repeat(3, 1fr)"
			templateColumns="repeat(4, 1fr)"
			gap={10}
			p={10}
			bgImage="url('../assets/map-background.png') !important"
			bgPosition="center"
			bgRepeat="no-repeat"
		>
			<GridItem
				colSpan={2}
				bg="primary"
				color="white"
				borderRadius="2xl"
				direction="row"
				shadow="dark-lg"
			>
				<Flex h="100%" align="center">
					<Container align="center">
						<Text fontSize="lg" fontWeight="bold">
							Distância total
						</Text>
						<Spacer />
						<Center alignItems="baseline">
							<Text fontSize="5xl" fontWeight="bold">
								{Math.floor(
									props.athleteStats.all_ride_totals
										?.distance / 1000
								) || 0}
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
								{Math.floor(
									props.athleteStats.all_ride_totals
										?.elevation_gain / 10
								) || 0}
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
				shadow="dark-lg"
			>
				<Flex h="100%" align="center">
					<Container align="center">
						<Text fontSize="lg" fontWeight="bold">
							Maior pedal
						</Text>
						<Spacer />
						<Center alignItems="baseline">
							<Text fontSize="5xl" fontWeight="bold">
								{Math.floor(
									props.athleteStats.biggest_ride_distance /
										1000
								) || 0}
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
								{Math.floor(
									props.athleteStats
										.biggest_climb_elevation_gain
								) || 0}
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
				shadow="dark-lg"
			>
				<Flex h="100%" align="center">
					<Container align="center">
						<Image src={Cyclist} boxSize="5.6rem" />
					</Container>
					<Divider orientation="vertical" h="75%" />
					<Container align="center">
						<Text fontSize="lg" fontWeight="bold">
							Totais de pedaladas
						</Text>
						<Center>
							<Text fontSize="5xl" fontWeight="bold">
								{props.athleteStats.all_ride_totals?.count || 0}
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
				shadow="dark-lg"
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
								{props.dataAthlete.clubs?.length || 0}
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
				shadow="dark-lg"
			>
				<Flex p={8} direction="column">
					<Text fontSize="xl" fontWeight="bold" mb={2}>
						Última atividade 🚲
					</Text>
					<Text fontSize="lg" lineHeight={8}>
						Título: {props.lastActivity.name}
					</Text>
					<Text fontSize="lg" lineHeight={8}>
						Distância:{' '}
						{Math.floor(props.lastActivity.distance / 1000) || 0} km
					</Text>
					<Text fontSize="lg" lineHeight={8}>
						Elevação:{' '}
						{Math.floor(props.lastActivity.total_elevation_gain) ||
							0}{' '}
						m
					</Text>
					<Text fontSize="lg" lineHeight={8}>
						Kudos: {props.lastActivity.kudos_count || 0}
					</Text>
					<Text fontSize="lg" lineHeight={8}>
						Vel. média:{' '}
						{Math.floor(props.lastActivity.average_speed * 3.6) ||
							0}{' '}
						km/h
					</Text>
					<Text fontSize="lg" lineHeight={8}>
						Vel. máxima:{' '}
						{Math.floor(props.lastActivity.max_speed * 3.6) || 0}{' '}
						km/h
					</Text>
				</Flex>
			</GridItem>
		</Grid>
	);
}
