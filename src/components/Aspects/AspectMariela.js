import React from 'react'

import {
  GridItem,
  Text,
  Center,
  Stack,
  Heading,
  Image,
  Box,
  Container,
  Avatar,
} from '@chakra-ui/react'

import background from '../../images/000017.jpg'
import AspectHeader from './AspectHeader'

const AspectMariela = () => {
  return (
    <GridItem colSpan={5}>
      <AspectHeader
        title='Agriculture and Warfare'
        img={background}
        subt='Maya Agriculture and Warfare'
        minread={6}
        name='Mariela Aranda'
        color='orange'
      />
      <Container
        width={'rem'}
        maxW={'4xl'}
        bg={'blackAlpha.20'}
        rounded={'md'}
        p={4}
      ></Container>
    </GridItem>
  )
}

export default AspectMariela
