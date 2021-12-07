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
  Divider,
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
          <Tabs isFitted variant='enclosed' w={'50rem'} maxW={'100vw'}>
            <TabList mb='2em'>
              <Tab>Project Details</Tab>
              <Tab>The Classic Period Maya</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <List spacing={4} fontWeight={'normal'} fontSize={'lg'}>
                  <Heading size='lg'>Project Details</Heading>
                  <ListItem>
                    <Text fontSize={'lg'} fontWeight={'normal'}>
                      This website is designed to be shared as a multimedia
                      presentation where each of our members can showcase their
                      research. Our goal is to provide users a general history
                      of the Classical Maya, major events that took place in the
                      Classical Maya world, and specialized research associated
                      with the four aspects of Classic Maya civilization chosen
                      by each of our members. The four aspects of Classic Period
                      Maya civilization we have selected are religion, social
                      structure, warfare, and architecture.
                    </Text>
                  </ListItem>
                  <Divider colorScheme={'blue'} />
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    Our project homepage contains four Teaching Tools designed
                    by our members. Teaching Tools contain the research that
                    each member has gathered for the project. Click the logo at
                    the top or bottom of the website to navigate to the
                    homepage.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    Each Teaching Tool includes a list of Timeline Game events
                    for users to take note of and study as they explore the
                    site. Click the dropdown menu titled{' '}
                    <em>Timeline Game Events</em> located in each of the
                    Teaching Tools to view the events.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    Each Teaching Tool also includes in-text citations
                    referencing the works that are cited in our research. Click
                    on or hover over these citations to view the work being
                    cited.
                    <Text fontWeight={'semibold'}>
                      Example: Substantiated claim from my research.
                      <ProjectCite
                        cite={
                          'Citation, Example. "Collaborative Group Project: The Classic Period Maya." 2021. HIS 103 | World Civilizations I.'
                        }
                        num={'1'}
                        color={'blue'}
                      />
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
                <Divider colorScheme={'blue'} m={4} />
              </TabPanel>
              <TabPanel>
                <Stack spacing={4}>
                  <Heading>The Classic Period Maya</Heading>
                  <Text fontSize={'large'}>
                    We have selected the Classic Period Maya as our civilization
                    of interest this semester and created this website to
                    showcase our research. Read through this section to learn a
                    general history of this civilization.
                    <Divider colorScheme={'blue'} m={4} />
                  </Text>
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
                    The Maya flourished from about 250 CE to the tenth century.
                    This period has been designated by scholars as the Classic
                    Period. It was the Classic Period Maya that witnessed the
                    maturation of their writing and calendrical systems, which
                    reached widespread observance across the three subregions.
                    At the height of the Classic Period, Maya ceremonial centers
                    numbered roughly 40 major and minor cities that were densely
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
                    For the Maya, everything happening in the past, present, and
                    future, and everything happening in the sky and on earth was
                    constantly fused together. They experienced their world as
                    an ordered and deeply sacred place that existed within the
                    progressions of a great cosmic cycle bound to begin, end,
                    and repeat itself again.
                    <br />
                    <br />
                    They are famous for their pictograms and glyphs, and they
                    developed complex systems of writing and numbering. The Maya
                    also derived mathematical and astronomical concepts and put
                    them to use in a manner that is considered to be highly
                    advanced for their time. This can be evidenced given the
                    scope and accuracy of the famous{' '}
                    <em>Maya Long Count Calender</em>. The traits of this
                    culture are even more puzzling when combined with the fact
                    that the Maya were also a stone age society that did not use
                    iron tools or even the wheel.
                    <br />
                    <ProjectImage
                      img={copan}
                      alt={'stairway at copan'}
                      cite={
                        '"The Magnificent hieroglyphic stairway at Copan is the longest hieroglyphic text in existense." - Carrasco, David. "Religions of Mesoamerica." 118.'
                      }
                    />
                    <Text>
                      {' '}
                      What remains of the Maya are the native Guatemalans (40%
                      of which are living decedents of the Maya), their pottery,
                      and their palaces, cermonial centers, pyramids, temples,
                      and stone plazas. Fortunately for Mesoamerican historians
                      these are also plentifully adorned with the their writing,
                      glyphs, and pictograms.
                    </Text>
                    <br />
                    Their devotion to the passage of time and of solar and
                    celestial observation resulted in the construction of
                    buildings and building groups that were oriented with the
                    four cardinal directions. Building alignments in the Maya
                    world were also aligned with celestial events and objects at
                    sites like Chitchen Itza. Monumental Maya architecture can
                    be witnessed at sites like Copan, Piedras Negras, and
                    Palenque.
                  </Text>

                  <Divider colorScheme={'blue'} m={4} />
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
