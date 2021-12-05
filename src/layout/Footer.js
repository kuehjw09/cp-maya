import React from 'react'
import { useHistory } from 'react-router-dom'

import {
  Box,
  Container,
  Button,
  Stack,
  Text,
  useColorModeValue,
  Avatar,
} from '@chakra-ui/react'

import { ColorModeSwitcher } from './ColorModeSwitcher'

export default function Footer() {
  const history = useHistory()

  const handleRoute = (props) => {
    if (props === 2) {
      history.push('/homepage')
    } else if (props === 1) {
      history.push('references-page')
    } else {
      history.push('/project-page')
    }
  }
  return (
    <Box
      as='footer'
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Box
          as={Button}
          rounded={'full'}
          variant={'link'}
          cursor={'pointer'}
          minW={0}
          onClick={() => handleRoute(2)}
        >
          <Avatar
            size={'lg'}
            borderColor='orange.500'
            borderWidth='2px'
            src={
              'https://images.squarespace-cdn.com/content/v1/58274743e6f2e13993af0ae3/1588454867627-REBSBXPZN1WKJ4098F77/Quetzalcoatl.png?format=1500w'
            }
          />
        </Box>
        <Text>
          © 2021 Collaborative Project | <i>The Americas</i>. All rights
          reserved
        </Text>
        <ColorModeSwitcher />
      </Container>
    </Box>
  )
}
