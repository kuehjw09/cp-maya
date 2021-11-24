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
        <Stack spacing={6}>
          <Box
            p={3}
            m={1}
            fontWeight={'light'}
            fontSize={'lg'}
            boxShadow={'xl'}
            rounded={'md'}
          >
            <Heading as={'h3'} size={'lg'} pb={3}>
              Introduction{' '}
            </Heading>
            <Heading as={'h4'} size={'md'} pb={1}>
              The Popol Vuh
            </Heading>
            The <i>Popol Vuh</i> is the foundational sacred text of the Quiche
            Maya. The text is our closest link to the oral histories and
            mythology of the Classic Period Maya.
          </Box>
          <Box
            p={3}
            m={1}
            fontWeight={'light'}
            fontSize={'lg'}
            boxShadow={'xl'}
            rounded={'md'}
          >
            <Heading as={'h3'} size={'lg'} pb={3}>
              Maya Cosmology{' '}
            </Heading>
            The Maya believed in the idea that life and death were cyclical
            processes, and likened them to their understanding of the seasons,
            calendars, astronomical, and agricultural cycles.
          </Box>
          <Box
            p={3}
            m={1}
            fontWeight={'light'}
            fontSize={'lg'}
            boxShadow={'xl'}
            rounded={'md'}
          >
            <Heading as={'h3'} size={'lg'} pb={3}>
              Maya Nature Gods
            </Heading>
            The Maya pantheon is polytheistic and consists of several nature
            deities, of which a dozen are well identified.
          </Box>
          <Box
            p={3}
            m={1}
            fontWeight={'light'}
            fontSize={'lg'}
            boxShadow={'xl'}
            rounded={'md'}
          >
            <Heading as={'h3'} size={'lg'} pb={3}>
              Sacred Kingship
            </Heading>{' '}
            The role of the Maya kings was to align the social world of the
            humans with the supernatural world of the gods.
          </Box>

          <Box
            p={3}
            m={1}
            fontWeight={'light'}
            fontSize={'lg'}
            boxShadow={'xl'}
            rounded={'md'}
          >
            {''}
            <Heading as={'h3'} size={'lg'} pb={3}>
              Maya Rituals
            </Heading>
            <Heading as={'h4'} size={'md'} pb={1}>
              Bloodletting and Sacrifice
            </Heading>
            The main ritual action that was believed to have sustained gods and
            agriculture was ritual bloodletting.
          </Box>
        </Stack>
      </Container>
    </GridItem>
  )
}

export default AspectJesse
