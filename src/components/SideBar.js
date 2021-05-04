import React from 'react';

import Stats from '../assets/stats-white.png';
import MapPin from '../assets/icons/map-pin.svg';
import BarChart from '../assets/icons/bar-chart.svg';
import Bicycle from '../assets/icons/bicycle.svg';
import Trophy from '../assets/icons/trophy.svg';

import {VStack} from '@chakra-ui/layout';
import {Image} from '@chakra-ui/image';
import {Text} from '@chakra-ui/layout';
import {Avatar} from '@chakra-ui/avatar';
import {Flex} from '@chakra-ui/layout';
import {Box} from '@chakra-ui/layout';
import {Center} from '@chakra-ui/layout';
import {Button} from '@chakra-ui/button';
import {Link} from '@chakra-ui/layout';
import {Container} from '@chakra-ui/layout';
import {Spacer} from '@chakra-ui/layout';

export default function SideBar(props) {
	return (
		<VStack h="100vh" w="16rem" bg="primary" spacing={6}>
			<Image w="9rem" mt={4} src={Stats} alt="Stats"></Image>
			<Flex color="white" direction="column" align="center">
				<Image
					width="6rem"
					src={props.dataAthlete.profile}
					alt="Stats"
					border="3px solid"
					borderRadius="50%"
					borderColor="white"
					mb={3}
				></Image>
				<Text weight="bold" isTruncated>
					{props.dataAthlete.firstname} {props.dataAthlete.lastname}
				</Text>
				<Flex color="white">
					<Image src={MapPin} alt="Map Pin" width="1rem" />
					{props.dataAthlete.city}, {props.dataAthlete.state}
				</Flex>
			</Flex>

			<Flex direction="column" h="60vh" pt={4} pb={4} align="center">
				<Link>
					<Image src={BarChart} alt="BarChart" width="5rem" />
					<Text color="white">Estatísticas</Text>
				</Link>
				<Spacer />
				<Link>
					<Image src={Trophy} alt="Trophy" width="5rem" />
					<Text color="white">Conquistas</Text>
				</Link>
				<Spacer />
				<Link>
					<Image
						src={Bicycle}
						alt="Bicycle"
						width="5.6rem"
						align="center"
					/>
					<Text color="white">Equipamentos</Text>
				</Link>
			</Flex>
			<Text color="white" fontSize={12} pb={2}>
				Feito por <Link>Klayver KOM 👑</Link>
			</Text>
		</VStack>
	);
}
