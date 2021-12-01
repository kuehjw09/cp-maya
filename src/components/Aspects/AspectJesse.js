import React from 'react'

import {
  GridItem,
  Text,
  Center,
  Stack,
  Heading,
  Image,
  Box,
  Avatar,
  Flex,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

import bloodletting from '../../images/000009.jpg'
import kukulkan from '../../images/000008.jpg'
import cosmology from '../../images/000006.png'

const AspectJesse = () => {
  return (
    <GridItem colSpan={5}>
      <Box
        maxW={'100vw'}
        bg={'blackAlpha'}
        rounded={'md'}
        m={9}
        boxShadow={'md'}
      >
        <Center>
          <Flex
            h={'30rem'}
            maxW={'100vw'}
            backgroundImage={'../images/261158.jpg'}
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
              <Stack
                ml={9}
                direction={'column'}
                width={'50rem'}
                maxW={'100vw'}
                p={3}
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
                  Maya Ritual Life, Creation Myth, and Cosmology
                </Heading>
                <Text
                  fontWeight={'semibold'}
                  fontSize={'xl'}
                  color={'whiteAlpha.900'}
                >
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
                    <Text fontWeight={600} color={'whiteAlpha.900'}>
                      Jesse
                    </Text>
                    <Text color={'gray.400'}>Oct 10, 2021 · 6min read</Text>
                  </Stack>
                </Stack>
              </Stack>
            </VStack>
          </Flex>
        </Center>
        {/* <Center p={3}>
          <Box py={9}>
            <Image
              src={'../images/261158.jpg'}
              alt='maya religion'
              width='50rem'
            />
          </Box>
        </Center> */}
        <Center>
          <Accordion
            allowToggle
            defaultIndex={[0]}
            borderColor={'teal.400'}
            w={'60rem'}
            maxW={'100vw'}
            pb={9}
          >
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left' fontSize='xl'>
                    Introduction
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box
                  fontWeight={'light'}
                  fontSize={'lg'}
                  boxShadow={'md'}
                  rounded={'md'}
                >
                  <Text fontSize='md' px={3} py={3} fontFamily={'sans-serif'}>
                    When we think about the Maya, images are conjured in our
                    minds of the ruins of cities that they left behind after the
                    collapse of their civilization. Much of what we know about
                    the Mayans has only recently been decoded through the study
                    of their writing that adorned the many temples, pyramids,
                    and monuments that were for a long time hidden amongst the
                    jungle.
                    <br />
                    <br /> The Maya rivaled the Egyptians and Mesopotamians when
                    it came to pyramid building, city planning, and monumental
                    architecture. They also posessed knowledge of advanced
                    mathematics and astronomy which is evidenced by a highly
                    accurate calendrical system. <br />
                    <br />
                    The stone ruins at sites like Chichen Itza, Palenque, and
                    Calakmul still tower above the landscape, serving as relics
                    of a mysteriously advanced Mesoamerican society that had
                    evidently flourished in the Yucatan some time before the
                    arrival of the Europeans.
                    <br />
                    <br />
                    What remains of the Classic Period Maya reveal to us the
                    things they viewed as important and worthy of remembrance,
                    and what is clear is that religion and ritual was an
                    integral part of Maya life. Therefore, to better understand
                    the often-mysterious Mesoamerican world of the Maya, the
                    best place to begin is in the study of their cosmology,
                    rituals, and creation myth.
                  </Text>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left' fontSize='xl'>
                    The <i>Popol Vuh</i>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Stack spacing={6}>
                  <Box
                    p={2}
                    fontWeight={'light'}
                    fontSize={'md'}
                    boxShadow={'md'}
                    rounded={'md'}
                  >
                    <Heading as={'h3'} size={'lg'} py={3}>
                      The <i>Popol Vuh</i>
                    </Heading>
                    The <i>Popol Vuh</i> is the foundational sacred text of the
                    Quiche Maya. This text was preserved through oral tradition
                    in the Pre-Colombian era and recorded in writing by the
                    Quiche Maya in 1550 C.E. It is our closest link to the oral
                    histories, mythology, and creation myth of the Classic
                    Period Maya.
                    <Center py={6}>
                      <iframe
                        width='560'
                        height='315'
                        src='https://www.youtube.com/embed/Jb5GKmEcJcw'
                        title='YouTube video player'
                        frameborder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen
                      ></iframe>
                    </Center>
                  </Box>
                </Stack>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left' fontSize='xl'>
                    Cosmology
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box
                  p={2}
                  fontWeight={'light'}
                  fontSize={'md'}
                  boxShadow={'md'}
                  rounded={'md'}
                >
                  <Heading as={'h3'} size={'lg'} pb={3}>
                    Maya Cosmology{' '}
                  </Heading>
                  The way in which people categorize, organize, and understand
                  the world around them is called <em>cosmology</em>.
                  <br /> <br />
                  One of the recurrent symbols in Maya art and story is the
                  symbol of the Cosmic Tree. The Mayan cosmic tree is described
                  as being rooted in the underworld, having its trunk in the
                  middle world, and having its high branches ascending into
                  heaven or the upper world. This organization can be described
                  as a threefold construction of the universe.
                  <Center p={3}>
                    <Box my={9}>
                      <Image
                        src={cosmology}
                        alt='maya cosmology'
                        width='30rem'
                      />
                    </Box>
                  </Center>{' '}
                  Along this tree lies the celestial realm of the sky at the
                  top, the middle comprises the realm of the earth, and the
                  underworld (known as Xibalba among the Quiche Maya) at its
                  roots. The cosmic tree unites the Maya universe and its many
                  diverse aspects.
                  <br />
                  <br />
                  The Maya believed in the idea that life and death were
                  cyclical processes, and likened them to their understanding of
                  the seasons, calendars, astronomical, and agricultural cycles.
                  <br /> <br />
                  Like other cultures around the world, the Maya observed what
                  happened in the sky and created mythologies based on these
                  motions. They envisioned the dome of the sky as a "cosmic
                  mirror" that reflected processes on earth. Maya art,
                  architecture, pottery, and culture was like a mapping of the
                  heavens, and they recreated their observations of the sky upon
                  the earth.
                  <Center py={6}>
                    <iframe
                      width='560'
                      height='315'
                      src='https://www.youtube.com/embed/fwtQpsUrI8I'
                      title='YouTube video player'
                      frameborder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowfullscreen
                    ></iframe>
                  </Center>
                  In the Popol Vuh, the cosmos is created in an agricultural
                  style. At the beginning of time, the gods prepared and sowed
                  the earth into formation, creating an abundant world of
                  vegetation and new creations. The cosmic sowing of the
                  universe described in the creation myth of the Quiche Maya
                  provides a model for all creation in the Maya world.
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left' fontSize='xl'>
                    Sacred Calendar
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box
                  p={2}
                  fontWeight={'light'}
                  fontSize={'md'}
                  boxShadow={'md'}
                  rounded={'md'}
                >
                  <Heading as={'h3'} size={'lg'} pb={3}>
                    Sacred Calendar
                  </Heading>{' '}
                  The Mayans made incredibly advanced calendrical systems based
                  on naked-eye astronomical observations of the night sky. They
                  kept tabs on the night sky to understand the universe around
                  them and were very interested in the phases of celestial
                  objects like the Moon and Venus.
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left' fontSize='xl'>
                    Maya Nature Deities
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box
                  p={2}
                  fontWeight={'light'}
                  fontSize={'md'}
                  boxShadow={'md'}
                  rounded={'md'}
                >
                  <Heading as={'h3'} size={'lg'} pb={3}>
                    Maya Nature Deities
                  </Heading>
                  The Maya pantheon consists of about a dozen gods and
                  goddesses. Many of these gods represented forces or aspects of
                  things found in nature, like rain, the sun, and thunder. Many
                  of these gods have their counterparts elsewhere in
                  Mesoamerica.
                  <Center p={3}>
                    <Box my={9}>
                      <Image
                        src={kukulkan}
                        alt='pyramid of kukulkan'
                        width='30rem'
                      />
                    </Box>
                  </Center>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left' fontSize='xl'>
                    Sacred Kingship
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box
                  p={2}
                  fontWeight={'light'}
                  fontSize={'md'}
                  boxShadow={'md'}
                  rounded={'md'}
                >
                  <Heading as={'h3'} size={'lg'} pb={3}>
                    Sacred Kingship
                  </Heading>{' '}
                  Maya kings ruled in a divine-kingship style. The role of the
                  Maya kings was to align the social world of the humans with
                  the supernatural world of the gods. They sponsored public
                  rituals and directed Maya ritual life alongside the priestly
                  class of Maya society.
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left' fontSize='xl'>
                    Maya Ritual Life
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box
                  p={2}
                  fontWeight={'light'}
                  fontSize={'md'}
                  boxShadow={'md'}
                  rounded={'md'}
                >
                  {''}
                  <Heading as={'h3'} size={'lg'} pb={3}>
                    Maya Ritual Life
                  </Heading>
                  <Heading as={'h4'} size={'md'} pb={1}>
                    Bloodletting and Sacrifice
                  </Heading>
                  The main ritual action that was believed to have sustained
                  gods and agriculture was ritual bloodletting.
                  <Center p={3}>
                    <Box my={9}>
                      <Image
                        src={bloodletting}
                        alt='maya bloodletting'
                        width='30rem'
                      />
                    </Box>
                  </Center>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Center>
      </Box>
    </GridItem>
  )
}

export default AspectJesse
