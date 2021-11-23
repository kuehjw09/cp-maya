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

const AspectJesse = () => {
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
            Religion and Ritual Life
          </Heading>
          <Text fontWeight={'semibold'} fontSize={'xl'}>
            Classic Period Maya Religion
          </Text>
          <Stack direction={'column'}></Stack>

          <Stack mt={6} direction={'row'} spacing={4}>
            <Avatar
              src={''}
              size='md'
              alt={'Author'}
              name='Jesse Kuehl'
              bg='teal.400'
            />
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}>Jesse</Text>
              <Text color={'gray.500'}>Oct 10, 2021 · 6min read</Text>
            </Stack>
          </Stack>
        </Stack>

        <Center p={3}>
          <Box mt={6} mb={6}>
            <Image
              src={'../images/261158.jpg'}
              alt='maya religion'
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
          Divine and sacred energy permeated the religious life of the Maya
          people through the sacred energies that they believed flowed through
          every process on earth. Everything on the earth, living and inanimate,
          was an aspect of this sacred design, and the Maya situated themselves
          at the center of it. In the Popol Vuh, when the gods created man, it
          was their crowning and ultimate achievement. They went through a few
          attempts at this before successfully making mankind in the proper
          form. Elements of the Maya religious world included agriculture,
          warfare, heaven, ancestor worship, the underworld and kingship. From
          the politically and ritually significant ball game that they played,
          to the recordings of the motions of Venus and their devotion to
          recording the passage of time.
        </Box>
        <Box
          p={3}
          m={1}
          fontWeight={'light'}
          fontSize={'lg'}
          boxShadow={'xl'}
          rounded={'md'}
        >
          This was a society that worshipped several different gods, with each
          embodying a powerful and often fearsome aspect of nature. It is
          evident that the Maya were devoted to the keeping of time and to
          recording the dates of the reigns of their rulers – the famous Long
          Count Calendar also helps to articulate just how important the passage
          of time was to the Maya. Themes such as the cyclical nature of the
          cosmos, the reciprocal relationship between man and the gods, and the
          adherence to ritual are recurrent in the study of the Maya. Through
          the detailed study of what we know about these recurrent themes helps
          us to gain a better understanding of their mysterious culture and
          society.
        </Box>
      </Container>
    </GridItem>
  )
}

export default AspectJesse
