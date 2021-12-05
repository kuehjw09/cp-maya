import React from 'react'

import {
  GridItem,
  Heading,
  Text,
  Stack,
  Center,
  Box,
  useBreakpointValue,
  Flex,
  VStack,
} from '@chakra-ui/react'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { List, ListItem, ListIcon } from '@chakra-ui/react'

import { CheckCircleIcon } from '@chakra-ui/icons'

import map from '../images/000003.jpg'
import tikal from '../images/000002.jpg'
import pyramids from '../images/000004.jpg'
import copan from '../images/000031.png'
import ProjectImage from './ProjectImage'
import ProjectCite from './ProjectCite'

function ProjectPage() {
  return (
    <GridItem colStart={1} colSpan={5}>
      <Center>
        <Flex
          h={'40rem'}
          maxH={'60vw'}
          maxW={'100vw'}
          backgroundImage={pyramids}
          backgroundSize={'cover'}
          backgroundPosition={'center center'}
          mb={3}
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
                  color={'blue.400'}
                  textTransform={'uppercase'}
                  fontWeight={800}
                  fontSize={'sm'}
                  letterSpacing={1.1}
                  mr={36}
                >
                  Project Details
                </Text>
                <Heading as={'h1'} size={'lg'} color={'whiteAlpha.900'}>
                  HIS 103 - CGP | <em>The Americas</em>
                </Heading>
                <Text
                  fontWeight={'semibold'}
                  fontSize={'xl'}
                  color={'whiteAlpha.900'}
                >
                  The Classic Period Maya
                </Text>
              </Stack>
            </Center>
          </VStack>
        </Flex>
      </Center>
      <Center>
        <Box maxW={'100vw'} p={1} boxShadow={'lg'}>
          <Tabs isFitted variant='enclosed'>
            <TabList mb='2em'>
              <Tab>Project Rationale</Tab>
              <Tab>The Classic Period Maya</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <List spacing={3} fontWeight={'medium'}>
                  <Heading>Project Rationale</Heading>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    This website is designed to be shared as a multimedia
                    presentation where each of our members can share their
                    research.{' '}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    The site is designed to provide users a general history of
                    the Classical Maya, major events that took place in the
                    Classical Maya world, and specialized research associated
                    with the four aspects chosen by each of our members.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    Our project homepage contains four Teaching Tools designed
                    by our members. These contain the research that each member
                    has gathered for the project. Click the logo at the top or
                    bottom of the website to navigate to the homepage.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    The four aspects of Classic Period Maya civilization we have
                    selected are religion, social structure, agriculture, and
                    architecture.{' '}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    Each Teaching Tool includes in-text citations representing
                    the work that is referenced in our research. Click on or
                    hover over these citations to view the work being cited.
                    <Text fontWeight={'semibold'}>
                      (Example: Substantiated claim from my research.
                      <ProjectCite
                        cite={
                          'Citation, Example. "Collaborative Group Project: The Classic Period Maya." 2021. HIS 103 | World Civilizations I.'
                        }
                        num={'1'}
                        color={'blue'}
                      />
                      )
                    </Text>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    On this page, select the tab titled{' '}
                    <em>The Classic Period Maya</em> to view general information
                    about our selected civilization. Then, click through each
                    Teaching Tool on our homepage to learn more about the
                    Classic Period Maya.
                  </ListItem>
                </List>
              </TabPanel>
              <TabPanel>
                <Stack>
                  <Heading>The Classic Period Maya</Heading>
                  We have selected the Classic Period Maya as our civilization
                  of interest this semester and created this website to showcase
                  our research. Read through this section to learn a general
                  history of this civilization.
                  <Text>
                    The Maya occupied a region of Mesoamerica that includes what
                    is today Guatemala, Belize, the Yucatan Peninsula, and the
                    western portions of Honduras and El Salvador. The area has
                    been divided by scholars into three subregions; the southern
                    region, the central region, and the northern region.{' '}
                  </Text>
                  <ProjectImage
                    img={map}
                    alt={'Maya geography'}
                    cite={
                      'Map of the region occupied by the Classic Period Maya'
                    }
                  />
                  <Text>
                    The Maya flourished from about 250 CE to the tenth century.
                    This period has been designated by scholars as the Classic
                    Period. It was the Classic Period Maya that witnessed the
                    maturation of their writing and calendrical systems, which
                    reached widespread observance across the three subregions.
                  </Text>
                  <br />
                  <Text>
                    {' '}
                    The Maya established a number of densely populated
                    agricultural bureaucracies and kingdoms around major ritual
                    centers. These centers were politically independent from one
                    another but linked by a shared Mayan language and commerce.
                    <ProjectCite
                      cite="Pollard, Elizabeth, et al., 'Worlds Together, Worlds Apart,' Consise Second Edition ed. Vol: 1. pages 375-378."
                      color={'blue'}
                      num={1}
                    />
                  </Text>
                  <br />
                  <Text>
                    {' '}
                    At the height of Maya civilization these centers numbered
                    roughly 40 major and minor cities that were densely
                    populated. Population estimates range from five thousand to
                    fifty thousand people in each city.
                    <ProjectCite
                      cite="Pollard, Elizabeth, et al., 'Worlds Together, Worlds Apart,' Consise Second Edition ed. Vol: 1. pages 375-378."
                      color={'blue'}
                      num={2}
                    />
                  </Text>
                  <ProjectImage
                    img={tikal}
                    alt={'Maya ruins at tikal'}
                    cite={'Late-Classic Maya ruins at Tikal'}
                  />
                  <Text>
                    {' '}
                    What remains of the Maya are the native Guatemalans (40% of
                    which are living decedents of the Maya) and their palaces,
                    pyramids, temples, and stone plazas. Fortunately for
                    Mesoamerican historians these are plentifully adorned with
                    the their writing, glyphs, and pictograms.
                    <ProjectImage
                      img={copan}
                      alt={'stairway at copan'}
                      cite={
                        '"The Magnificent hieroglyphic stairway at Copan is the longest hieroglyphic text in existense." - Carrasco, David. "Religions of Mesoamerica." 118.'
                      }
                    />
                  </Text>
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Center>
    </GridItem>
  )
}

export default ProjectPage
