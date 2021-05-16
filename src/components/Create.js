import React, { useState } from 'react'
import { useHistory } from 'react-router'

import { api } from '../services/api'

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
import { Button } from '@chakra-ui/button'
import { Select } from '@chakra-ui/select'
import { Tooltip } from '@chakra-ui/tooltip'
import { RadioGroup } from '@chakra-ui/radio'
import { Radio } from '@chakra-ui/radio'
import { useToast } from '@chakra-ui/toast'

import CyclistTitle from '../assets/icons/cyclist-title.svg'
import RoadDistance from '../assets/icons/road-distance.svg'
import Clock from '../assets/icons/clock.svg'
import Nota from '../assets/icons/nota.svg'
import Calendar from '../assets/icons/data-limite.svg'
import ClockHour from '../assets/icons/clock-hour.svg'
import Sneakers from '../assets/icons/sneakers.svg'

export default function Create() {
	const history = useHistory()
	const access_token = localStorage.getItem('access_token')

	const toast = useToast()

	const [selectDate, setSelectDate] = useState(new Date())
	const [selectHour, setSelectHour] = useState(new Date())

	const [duration, setDuration] = useState({
		hours: '1',
		minutes: '15',
		seconds: '30',
	})

	const [dataActivity, setDataActivity] = useState({
		name: 'Atividade criada no Stats',
		description: 'Descrição da atividade feita pelo Stats',
		type: 'Ride',
		distance: 20000,
		workout_type: 12,
	})

	const handleDataActivity = prop => event => {
		setDataActivity({ ...dataActivity, [prop]: event.target.value })
	}

	const handleDuration = prop => event => {
		setDuration({ ...duration, [prop]: event })
	}

	const handleDataActivityNumber = prop => event => {
		if (prop === 'distance') {
			setDataActivity({ ...dataActivity, [prop]: event * 1000 })
		} else {
			setDataActivity({ ...dataActivity, [prop]: parseInt(event) })
		}
	}

	async function handleCreateActivity() {
		const dd = String(selectDate.getDate()).padStart(2, '0')
		const mm = String(selectDate.getMonth()).padStart(2, '0')
		const yyyy = selectDate.getFullYear()

		const hh = String(selectHour.getHours()).padStart(2, '0')
		const min = String(selectHour.getMinutes()).padStart(2, '0')
		const ss = String(selectHour.getSeconds()).padStart(2, '0')

		const startDate = new Date(yyyy, mm, dd, hh, min, ss).toISOString()

		const durationInSeconds =
			parseInt(duration.hours) * 3600 +
			parseInt(duration.minutes) * 60 +
			parseInt(duration.seconds)

		const newActivity = {
			name: dataActivity.name,
			description: dataActivity.description,
			start_date: startDate,
			type: dataActivity.type,
			distance: dataActivity.distance,
			elapsed_time: durationInSeconds,
			workout_type: dataActivity.workout,
			trainer: true,
		}

		try {
			await api.post('activities', newActivity, {
				headers: {
					Authorization: `Bearer ${access_token}`,
					'Content-Type': 'application/json',
				},
			})

			history.push('/stats')
		} catch (err) {
			console.log(err)
		}
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
							defaultValue={dataActivity.name}
							onChange={handleDataActivity('name')}
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
							defaultValue={String(dataActivity.distance / 1000).padStart(
								2,
								'0'
							)}
							onChange={handleDataActivityNumber('distance')}
							precision={2}
							step={0.1}
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
							size="md"
							resize="none"
							variant="unstyled"
							minHeight="80%"
							defaultValue={dataActivity.description}
							onChange={handleDataActivity('description')}
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
							defaultValue={String(duration.hours).padStart(2, '0')}
							onChange={handleDuration('hours')}
							step={1}
							min={0}
							max={99}
							mr={3}
						>
							<Flex>
								<NumberInputField pr={0} w="1.3rem" />
								<InputRightAddon children="h" />
							</Flex>
						</NumberInput>
						<NumberInput
							allowMouseWheel
							variant="unstyled"
							defaultValue={String(duration.minutes).padStart(2, '0')}
							onChange={handleDuration('minutes')}
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
							defaultValue={String(duration.seconds).padStart(2, '0')}
							onChange={handleDuration('seconds')}
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
						<Select
							variant="unstyled"
							defaultValue={dataActivity.type}
							onChange={handleDataActivity('type')}
						>
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
				<RadioGroup
					onChange={handleDataActivityNumber('workout_type')}
					value={dataActivity.workout_type.toString()}
					w="65%"
				>
					<Flex>
						<Container>
							<Radio colorScheme="white" value="10">
								<Text fontSize="xl">Prova</Text>
							</Radio>
						</Container>
						<Container align="center">
							<Radio colorScheme="white" value="12">
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
					onClick={() => {
						return (
							handleCreateActivity(),
							toast({
								title: 'Atividade criada com sucesso.',
								status: 'success',
								duration: 3000,
								isClosable: true,
							})
						)
					}}
				>
					CRIAR
				</Button>
			</GridItem>
		</Grid>
	)
}
