import React, { useState } from 'react'

import { Flex } from '@chakra-ui/layout'
import { Grid } from '@chakra-ui/layout'
import { GridItem } from '@chakra-ui/layout'
import { Container } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { Input } from '@chakra-ui/input'
import { Text } from '@chakra-ui/layout'
import { NumberInputField } from '@chakra-ui/number-input'
import { NumberInputStepper } from '@chakra-ui/number-input'
import { NumberInput } from '@chakra-ui/number-input'
import { NumberIncrementStepper } from '@chakra-ui/number-input'
import { NumberDecrementStepper } from '@chakra-ui/number-input'
import { InputRightAddon } from '@chakra-ui/input'
import { Textarea } from '@chakra-ui/textarea'

import CyclistTitle from '../assets/icons/cyclist-title.svg'
import RoadDistance from '../assets/icons/road-distance.svg'
import Clock from '../assets/icons/clock.svg'
import Nota from '../assets/icons/nota.svg'
import Calendar from '../assets/icons/data-limite.svg'
import ClockHour from '../assets/icons/clock-hour.svg'
import Helmet from '../assets/icons/helmet.svg'
import Sneakers from '../assets/icons/sneakers.svg'
import { Button } from '@chakra-ui/button'

export default function Create() {
	const [value, setValue] = useState('')
	const handleChange = event => setValue(event.target.value)

	return (
		<Grid
			h="100%"
			w="100%"
			templateRows="repeat(5, 1fr)"
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
					<Flex h="100%" align="center">
						<Image
							src={CyclistTitle}
							boxSize="2.5rem"
							h="100%"
							w={14}
							ml={3}
							pr={3}
							borderRight="2px solid white"
						/>
					</Flex>
					<Container ml={3}>
						Título da atividade:
						<Input
							variant="unstyled"
							defaultValue="Atividade criada no Stats"
						/>
					</Container>
				</Flex>
			</GridItem>

			<GridItem
				colSpan={2}
				bg="primary"
				color="white"
				borderRadius="2xl"
				direction="row"
				shadow="dark-lg"
			>
				<Flex h="100%" align="center">
					<Flex h="100%" align="center">
						<Image
							src={RoadDistance}
							boxSize="2.5rem"
							h="100%"
							w={14}
							ml={3}
							pr={3}
							borderRight="2px solid white"
						/>
					</Flex>
					<Flex ml={3} align="center" w="60">
						<Text mr={4}>Distância:</Text>
						<NumberInput
							allowMouseWheel
							variant="unstyled"
							defaultValue={15}
							precision={2}
							step={0.2}
							min={0}
						>
							<Flex>
								<NumberInputField pr={0} w="auto" />
								<InputRightAddon children="km" />
							</Flex>
							{/* <NumberInputStepper>
								<NumberIncrementStepper />
								<NumberDecrementStepper />
							</NumberInputStepper> */}
						</NumberInput>
					</Flex>
				</Flex>
			</GridItem>

			<GridItem
				colSpan={2}
				rowStart={2}
				rowEnd={4}
				bg="primary"
				color="white"
				borderRadius="2xl"
				direction="row"
				shadow="dark-lg"
			>
				<Flex h="100%">
					<Flex h="100%" align="center">
						<Image
							src={Nota}
							boxSize="2.5rem"
							h="100%"
							w={14}
							ml={3}
							pr={3}
							borderRight="2px solid white"
						/>
					</Flex>
					<Container ml={3} mt={2}>
						Descrição:
						<Textarea
							defaultValue="Descrição da atividade feita pelo Stats"
							size="md"
							resize="none"
							mt={1}
							variant="unstyled"
							minHeight="80%"
						/>
					</Container>
				</Flex>
			</GridItem>

			<GridItem
				colSpan={2}
				bg="primary"
				color="white"
				borderRadius="2xl"
				direction="row"
				shadow="dark-lg"
			>
				<Flex h="100%" align="center">
					<Flex h="100%" align="center">
						<Image
							src={Clock}
							boxSize="2.5rem"
							h="100%"
							w={14}
							ml={3}
							pr={3}
							borderRight="2px solid white"
						/>
					</Flex>
					<Flex ml={3} align="center" w="60">
						<Text mr={4}>Duração:</Text>
						<NumberInput
							allowMouseWheel
							variant="unstyled"
							defaultValue={1}
							step={1}
							min={0}
							max={9}
							mr={3}
						>
							<Flex>
								<NumberInputField pr={0} w="0.8rem" />
								<InputRightAddon children="h" />
							</Flex>
						</NumberInput>
						<NumberInput
							allowMouseWheel
							variant="unstyled"
							defaultValue={15}
							step={1}
							min={0}
							max={60}
							mr={3}
						>
							<Flex>
								<NumberInputField pr={0} w="1.3rem" />
								<InputRightAddon children="min" />
							</Flex>
						</NumberInput>
						<NumberInput
							allowMouseWheel
							variant="unstyled"
							defaultValue={15}
							step={1}
							min={0}
							max={60}
						>
							<Flex>
								<NumberInputField pr={0} w="1.3rem" />
								<InputRightAddon children="s" />
							</Flex>
						</NumberInput>
					</Flex>
				</Flex>
			</GridItem>

			<GridItem
				colSpan={2}
				bg="primary"
				color="white"
				borderRadius="2xl"
				direction="row"
				shadow="dark-lg"
			>
				<Flex h="100%" align="center">
					<Flex h="100%" align="center">
						<Image
							src={Calendar}
							boxSize="2.5rem"
							h="100%"
							w={14}
							ml={3}
							pr={3}
							borderRight="2px solid white"
						/>
					</Flex>
					<Flex ml={3} align="center" w="60">
						<Text mr={4}>Data:</Text>
					</Flex>
				</Flex>
			</GridItem>

			<GridItem
				colSpan={2}
				bg="primary"
				color="white"
				borderRadius="2xl"
				direction="row"
				shadow="dark-lg"
			>
				<Flex h="100%" align="center">
					<Flex h="100%" align="center">
						<Image
							src={Sneakers}
							boxSize="2.5rem"
							h="100%"
							w={14}
							ml={3}
							pr={3}
							borderRight="2px solid white"
						/>
					</Flex>
					<Flex ml={3} align="center" w="60">
						<Text mr={4}>Tipo: pedalada</Text>
					</Flex>
				</Flex>
			</GridItem>

			<GridItem
				colSpan={2}
				bg="primary"
				color="white"
				borderRadius="2xl"
				direction="row"
				shadow="dark-lg"
			>
				<Flex h="100%" align="center">
					<Flex h="100%" align="center">
						<Image
							src={ClockHour}
							boxSize="2.5rem"
							h="100%"
							w={14}
							ml={3}
							pr={3}
							borderRight="2px solid white"
						/>
					</Flex>
					<Flex ml={3} align="center" w="60">
						<Text mr={4}>Hora: </Text>
					</Flex>
				</Flex>
			</GridItem>

			<GridItem
				colSpan={2}
				bg="primary"
				color="white"
				borderRadius="2xl"
				direction="row"
				shadow="dark-lg"
			>
				Prova | Treino
			</GridItem>
			<GridItem
				colSpan={2}
				bg="primary"
				color="white"
				borderRadius="2xl"
				shadow="dark-lg"
				display="flex"
				justifyContent="center"
				align="center"
			>
				<Flex align="center">
					<Text fontSize="xl">CRIAR</Text>
				</Flex>
			</GridItem>
		</Grid>
	)
}
