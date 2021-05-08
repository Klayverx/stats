import React from 'react';

import {Button} from '@chakra-ui/button';
import {Image} from '@chakra-ui/image';
import {Box, Flex, Heading, Spacer, Text} from '@chakra-ui/layout';
import {Stack} from '@chakra-ui/layout';

import ImgLogin from '../assets/profile.png';
import Stats from '../assets/stats-white.png';

import Navigation from '../assets/icons/navigation.svg';
import Map from '../assets/icons/map.svg';
import MapPin from '../assets/icons/map-pin.svg';
import Activity from '../assets/icons/activity.svg';
import Sun from '../assets/icons/sun.svg';

export default function Login() {
	// https://stats-kx.vercel.app/auth
	// http://localhost:3000/auth
	const redirect_uri = 'http://localhost:3000/auth';
	const scope = 'read,profile:read_all,activity:read_all,activity:write';

	return (
		<>
			<Flex
				bg="primary"
				h="100vh"
				w="100vw"
				position="absolute"
				color="white"
				direction="column"
				p={8}
				pl={12}
				zIndex={1}
				clipPath="polygon(0 0, 40% 0, 65% 100%, 0% 100%)"
			>
				<Spacer />
				<Image width="12rem" src={Stats} alt="Stats"></Image>
				<Spacer />
				<Heading as="h2" size="2xl" w="50%">
					Olá, ciclista!
					<br />
					Bem vindo ao Stats.
				</Heading>
				<Spacer />
				<Text fontSize="lg" w="45%">
					Somos um aplicativo voltado para praticantes de ciclismo, e
					vamos te ajudar a visualizar alguns dos seus dados presentes
					na sua conta do Strava.
				</Text>
				<Spacer />
				<Stack spacing={4} direction="row" ml="-10">
					<Image src={Navigation} alt="Navigation" width="2rem" />
					<Image src={Map} alt="Navigation" width="2rem" />
					<Image src={MapPin} alt="Navigation" width="2rem" />
					<Image src={Activity} alt="Navigation" width="2rem" />
					<Image src={Sun} alt="Navigation" width="2rem" />
					<Image src={Navigation} alt="Navigation" width="2rem" />
					<Image src={Map} alt="Navigation" width="2rem" />
					<Image src={MapPin} alt="Navigation" width="2rem" />
					<Image src={Activity} alt="Navigation" width="2rem" />
					<Image src={Sun} alt="Navigation" width="2rem" />
					<Image src={Navigation} alt="Navigation" width="2rem" />
					<Image src={Map} alt="Navigation" width="2rem" />
					<Image src={MapPin} alt="Navigation" width="2rem" />
					<Image src={Activity} alt="Navigation" width="2rem" />
					<Image src={Sun} alt="Navigation" width="2rem" />
					<Image src={Navigation} alt="Navigation" width="2rem" />
					<Image src={Map} alt="Navigation" width="2rem" />
					<Image src={MapPin} alt="Navigation" width="2rem" />
					<Image src={Activity} alt="Navigation" width="2rem" />
					<Image src={Sun} alt="Navigation" width="2rem" />
				</Stack>
				<Spacer />
			</Flex>
			<Box h="100vh" position="absolute" right="0">
				<Image h="100%" src={ImgLogin} alt="Segun Adebayo" />
				<Button
					bg="primary"
					_hover={{
						bg: '#ED4600',
						transform: 'scale(1.02)',
					}}
					_active={{
						bg: 'primary',
						transform: 'scale(0.98)',
					}}
					_focus={{
						boxShadow:
							'0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
					}}
					position="absolute"
					bottom="10rem"
					right="8rem"
					color="white"
				>
					<a
						href={`https://www.strava.com/oauth/authorize?client_id=65376&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}`}
						rel="noreferrer"
					>
						Fazer login com o Strava
					</a>
				</Button>
			</Box>
		</>
	);
}
