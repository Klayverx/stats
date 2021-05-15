import React from 'react'

import { Text } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/layout'
import { Grid } from '@chakra-ui/layout'
import { GridItem } from '@chakra-ui/layout'
import { Container } from '@chakra-ui/layout'
import { Spacer } from '@chakra-ui/layout'
import { Center } from '@chakra-ui/layout'
import { Divider } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

import Cyclist from '../assets/icons/cyclist.svg'
import Cyclists from '../assets/icons/cyclists.svg'

export default function Create() {
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
				1
			</GridItem>

			<GridItem
				colSpan={2}
				bg="primary"
				color="white"
				borderRadius="2xl"
				shadow="dark-lg"
			>
				2
			</GridItem>

			<GridItem
				colSpan={2}
				bg="primary"
				color="white"
				borderRadius="2xl"
				shadow="dark-lg"
			>
				3
			</GridItem>

			<GridItem
				colSpan={2}
				bg="primary"
				color="white"
				borderRadius="2xl"
				shadow="dark-lg"
			>
				4
			</GridItem>
			<GridItem
				colStart={1}
				colEnd={5}
				rowStart={3}
				rowEnd={5}
				bg="primary"
				color="white"
				borderRadius="2xl"
				shadow="dark-lg"
			>
				5
			</GridItem>
			<GridItem
				colSpan={2}
				bg="primary"
				color="white"
				borderRadius="2xl"
				shadow="dark-lg"
			>
				6
			</GridItem>
			<GridItem
				colSpan={2}
				bg="primary"
				color="white"
				borderRadius="2xl"
				shadow="dark-lg"
			>
				7
			</GridItem>
		</Grid>
	)
}
