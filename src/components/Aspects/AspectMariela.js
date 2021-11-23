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

const AspectMariela = () => {
  return (
    <GridItem colSpan={5}>
      <Container
        width={'rem'}
        maxW={'4xl'}
        bg={'blackAlpha.20'}
        rounded={'md'}
        p={4}
      >
        <Stack ml={3} direction={'column'}>
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
          <Heading as={'h1'} size={'xl'}>
            Agriculture and Warfare
          </Heading>
          <Text fontWeight={'semibold'} fontSize={'xl'}>
            Classic Period War and Agriculture
          </Text>
          <Stack direction={'column'}></Stack>

          <Stack mt={6} direction={'row'} spacing={4}>
            <Avatar
              src={''}
              size='md'
              alt={'Author'}
              name='Mariela Aranda'
              bg='orange.400'
            />
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}>Mariela</Text>
              <Text color={'gray.500'}>Oct 10, 2021 · 6min read</Text>
            </Stack>
          </Stack>
        </Stack>

        <Center p={3}>
          <Box mt={6} mb={6}>
            <Image
              src={
                'https://ancientamerindia.files.wordpress.com/2012/12/101-maias.jpg?w=584'
              }
              alt='maya agriculture'
              width='50rem'
            />
          </Box>
        </Center>
        <Box
          p={3}
          m={1}
          fontWeight={'light'}
          fontSize={'lg'}
          boxShadow={'xl'}
          rounded={'md'}
        >
          {' '}
        </Box>
        <Box
          p={3}
          m={1}
          fontWeight={'light'}
          fontSize={'lg'}
          boxShadow={'xl'}
          rounded={'md'}
        ></Box>
      </Container>
    </GridItem>
  )
}

export default AspectMariela
