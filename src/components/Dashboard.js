import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function Dashboard() {
  const history = useHistory()

  const handleRoute = () => {
    history.push('/homepage')
  }

  const handleRoute2 = () => {
    history.push('/authors')
  }

  return (
    <>
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage='url(https://wallpaperbat.com/img/74633-mayan-wallpaper-top-free-mayan-background.jpg)'
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
        >
          <Stack
            maxW={'2xl'}
            align={'flex-start'}
            spacing={6}
            bg={'blackAlpha.400'}
            p={2}
            rounded={'3xl'}
          >
            <Text
              color={'white'}
              fontWeight={'light'}
              lineHeight={1.2}
              fontStyle={''}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
            >
              Collaborative Group Project | <i>The Americas </i>
              <br />
              <Text fontWeight={'medium'}>The Classic Period Maya</Text>
            </Text>
            <Stack direction={'row'}>
              <Button
                bg={'orange.400'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'orange.500' }}
                onClick={() => {
                  handleRoute()
                }}
              >
                Visit our homepage
              </Button>

              <Button
                bg={'blackAlpha.300'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'whiteAlpha.500' }}
                onClick={() => {
                  handleRoute2()
                }}
              >
                Meet the authors
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    </>
  )
}
