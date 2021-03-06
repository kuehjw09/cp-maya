import React from 'react'
import {
  Center,
  Flex,
  VStack,
  useBreakpointValue,
  Text,
  Heading,
  Avatar,
  Stack,
} from '@chakra-ui/react'
const AspectHeader = (props) => {
  return (
    <Center>
      <Flex
        h={'40rem'}
        maxH={'60vw'}
        maxW={'100vw'}
        backgroundImage={props.img}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        mb={9}
      >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.800, transparent)'}
        >
          <Center>
            <Stack
              ml={6}
              p={6}
              direction={'column'}
              width={'50rem'}
              maxW={'100vw'}
            >
              <Text
                color={'primary'}
                textTransform={'uppercase'}
                fontWeight={800}
                fontSize={'sm'}
                letterSpacing={1.1}
                mr={36}
              >
                Teaching Tool
              </Text>
              <Heading as={'h1'} size={'lg'} color={'whiteAlpha.900'}>
                {props.title}
              </Heading>
              <Text
                fontWeight={'semibold'}
                fontSize={'xl'}
                color={'whiteAlpha.900'}
              >
                {props.subt}
              </Text>

              <Stack mt={6} direction={'row'} spacing={4}>
                <Avatar
                  src={''}
                  size='md'
                  alt={'Author'}
                  name={props.name}
                  bg={props.color + '.400'}
                />
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                  <Text fontWeight={600} color={'whiteAlpha.900'}>
                    {props.name}
                  </Text>
                  <Text color={'gray.300'}>
                    Dec 06, 2021 · {props.minread}min read
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Center>
        </VStack>
      </Flex>
    </Center>
  )
}

export default AspectHeader
