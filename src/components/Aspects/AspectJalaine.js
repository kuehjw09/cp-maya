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
  Divider,
} from '@chakra-ui/react'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

import React from 'react'
import AspectHeader from './AspectHeader'
import ProjectImage from '../ProjectImage'
import background from '../../images/000016.jpg'

const AspectJalaine = () => {
  return (
    <GridItem colSpan={5}>
      <AspectHeader
        title='Social Structure and Gender Roles'
        subt='Social Structure and Gender Roles'
        name='Jalaine Olks'
        color='pink'
        minread='6'
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

export default AspectJalaine
