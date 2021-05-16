import React, { useState } from 'react'

import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import { forwardRef } from '@chakra-ui/system'

import { Flex } from '@chakra-ui/layout'
import { Grid } from '@chakra-ui/layout'
import { GridItem } from '@chakra-ui/layout'
import { Container } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { Input } from '@chakra-ui/input'
import { Text } from '@chakra-ui/layout'
import { NumberInputField } from '@chakra-ui/number-input'
import { NumberInput } from '@chakra-ui/number-input'
import { InputRightAddon } from '@chakra-ui/input'
import { Textarea } from '@chakra-ui/textarea'

import CyclistTitle from '../assets/icons/cyclist-title.svg'
import RoadDistance from '../assets/icons/road-distance.svg'
import Clock from '../assets/icons/clock.svg'
import Nota from '../assets/icons/nota.svg'
import Calendar from '../assets/icons/data-limite.svg'
import ClockHour from '../assets/icons/clock-hour.svg'
import Sneakers from '../assets/icons/sneakers.svg'
import { Button } from '@chakra-ui/button'
import { Select } from '@chakra-ui/select'
// import { Divider } from '@chakra-ui/layout'
import { Tooltip } from '@chakra-ui/tooltip'
import { RadioGroup } from '@chakra-ui/radio'
import { Radio } from '@chakra-ui/radio'
// import { Stack } from '@chakra-ui/layout'
// import { Spacer } from '@chakra-ui/layout'

export default function Create() {
	const [selectDate, setSelectDate] = useState(new Date())
	const [selectHour, setSelectHour] = useState(new Date())
	const [workout, setworkout] = React.useState('2')

	// const [dataActicity, setDataActicity] = useState({
	// 	name: '',
	// 	description: '',
	// 	start_date: '2021-05-08T16:37:47Z',
	// 	type: 'Ride',
	// 	distance: 0,
	// 	elapsed_time: 0,
	// 	workout_type: 12,
	// 	trainer: true,
	// })

	// const handleDataActicity = prop => event => {
	// 	setDataActicity({ ...dataActicity, [prop]: event.target.value })
	// }

	function handleOnSubmit() {
		// console.log(dataActicity)
	}

	const CustomInput = forwardRef(({ value, onClick }, ref) => (
		<button onClick={onClick} ref={ref}>
			{value}
		</button>
	))

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
						<Tooltip
							label="Digite aqui o título da sua atividade"
							fontSize="sm"
						>
							<Image
								src={CyclistTitle}
								boxSize="2.5rem"
								h="100%"
								w={14}
								ml={3}
								pr={3}
								borderRight="2px solid white"
							/>
						</Tooltip>
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
						<Tooltip
							label="Digite aqui a distância percorrida da sua atividade"
							fontSize="sm"
						>
							<Image
								src={RoadDistance}
								boxSize="2.5rem"
								h="100%"
								w={14}
								ml={3}
								pr={3}
								borderRight="2px solid white"
							/>
						</Tooltip>
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
							mr={3}
						>
							<Flex>
								<NumberInputField pr={0} w="3.5rem" />
								<InputRightAddon children="km" />
							</Flex>
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
						<Tooltip
							label="Digite aqui a descrição da sua atividade"
							fontSize="sm"
						>
							<Image
								src={Nota}
								boxSize="2.5rem"
								h="100%"
								w={14}
								ml={3}
								pr={3}
								borderRight="2px solid white"
							/>
						</Tooltip>
					</Flex>
					<Container ml={3} mt={2}>
						Descrição:
						<Textarea
							defaultValue="Descrição da atividade feita pelo Stats"
							size="md"
							resize="none"
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
						<Tooltip
							label="Digite aqui a duração da sua atividade"
							fontSize="sm"
						>
							<Image
								src={Clock}
								boxSize="2.5rem"
								h="100%"
								w={14}
								ml={3}
								pr={3}
								borderRight="2px solid white"
							/>
						</Tooltip>
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
						<Tooltip label="Digite aqui o dia da sua atividade" fontSize="sm">
							<Image
								src={Calendar}
								boxSize="2.5rem"
								h="100%"
								w={14}
								ml={3}
								pr={3}
								borderRight="2px solid white"
							/>
						</Tooltip>
					</Flex>
					<Flex ml={3} align="center" w="60">
						<Text mr={4}>Data:</Text>
						<DatePicker
							selected={selectDate}
							onChange={date => setSelectDate(date)}
							maxDate={new Date()}
							dateFormat="dd/MM/yyyy"
							customInput={<CustomInput />}
						/>
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
						<Tooltip
							label="Escolha aqui a modalidade da sua atividade"
							fontSize="sm"
						>
							<Image
								src={Sneakers}
								boxSize="2.5rem"
								h="100%"
								w={14}
								ml={3}
								pr={3}
								borderRight="2px solid white"
							/>
						</Tooltip>
					</Flex>
					<Flex ml={3} align="center" w="60" flexGrow="0.9">
						<Text mr={4} fontSize="lg">
							Tipo:
						</Text>
						<Select variant="unstyled" defaultValue={`Ride`}>
							<option value="Ride">pedalada</option>
							<option value="Run">corrida</option>
						</Select>
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
						<Tooltip
							label="Digite aqui o horário de início da sua atividade"
							fontSize="sm"
						>
							<Image
								src={ClockHour}
								boxSize="2.5rem"
								h="100%"
								w={14}
								ml={3}
								pr={3}
								borderRight="2px solid white"
							/>
						</Tooltip>
					</Flex>
					<Flex ml={3} align="center" w="60">
						<Text mr={4}>Hora:</Text>
						<DatePicker
							selected={selectHour}
							onChange={hour => setSelectHour(hour)}
							showTimeInput
							showTimeSelectOnly
							dateFormat="hh:mm aa"
							customInput={<CustomInput />}
						/>
					</Flex>
				</Flex>
			</GridItem>

			<GridItem
				colSpan={2}
				bg="primary"
				color="white"
				borderRadius="2xl"
				shadow="dark-lg"
				display="flex"
				justifyContent="center"
				alignItems="center"
			>
				<RadioGroup onChange={setworkout} value={workout} w="65%">
					<Flex>
						<Container>
							<Radio colorScheme="white" value="1">
								<Text fontSize="xl">Prova</Text>
							</Radio>
						</Container>
						<Container align="center">
							<Radio colorScheme="white" value="2">
								{' '}
								<Text fontSize="xl">Treino</Text>
							</Radio>
						</Container>
					</Flex>
				</RadioGroup>
			</GridItem>

			<GridItem colSpan={2} borderRadius="2xl" shadow="dark-lg">
				<Button
					h="100%"
					w="100%"
					borderRadius="2xl"
					bg="primary"
					_hover={{
						bg: '#ED4600',
						transform: 'scale(1.01)',
					}}
					_active={{
						transform: 'scale(0.98)',
					}}
					color="white"
					onClick={handleOnSubmit()}
				>
					CRIAR
				</Button>
			</GridItem>
		</Grid>
	)
}
