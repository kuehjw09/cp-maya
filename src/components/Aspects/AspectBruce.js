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

import React from 'react'
import AspectHeader from './AspectHeader'
import ProjectImage from '../ProjectImage'
import background from '../../images/000018.webp'

const AspectBruce = () => {
  return (
    <GridItem colSpan={5}>
      <AspectHeader
        title='Classic Period Maya Architecture'
        subt='Classic Period Maya Architecture'
        name='Bruce Thao'
        color='green'
        img={background}
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

export default AspectBruce
