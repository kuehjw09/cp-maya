import React from 'react'

import {
  GridItem,
  Heading,
  Text,
  Stack,
  Center,
  Box,
  useBreakpointValue,
  Image,
  Flex,
  VStack,
} from '@chakra-ui/react'

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

import { CheckCircleIcon } from '@chakra-ui/icons'

import map from '../images/000003.jpg'
import tikal from '../images/000002.jpg'
import pyramids from '../images/000004.jpg'
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
                  color={'primary'}
                  textTransform={'uppercase'}
                  fontWeight={800}
                  fontSize={'sm'}
                  letterSpacing={1.1}
                  mr={36}
                >
                  Project Website Introduction
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
                    presentation where each of our members can share what they
                    researched about their chosen aspect.{' '}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    This project provides users with general history of
                    Classical Maya civilization, major events that took place in
                    the Classical Maya world, and specific research associated
                    with the four aspects each of our members has chosen for the
                    Teaching Tool.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    Click the logo at the top of the page to navigate to our
                    homepage. The homepage contains four Teaching Tools that
                    were designed by our members. These will contain the
                    research that each member has gathered for the project.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    We have focused on four aspects of Classic Period Maya
                    civilization: religion, social structure, agriculture, and
                    architecture.{' '}
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    Each Teaching Tool will include in-text citations that
                    represent the work each member is referencing. Click on or
                    hover over these citations to view the work being cited.
                    (Ex: Substantiated claim from my research.{' '}
                    <ProjectCite
                      cite={
                        'Citation, Example. "Collaborative Group Project: The Classic Period Maya." 2021. HIS 103 | World Civilizations I.'
                      }
                      num={'1'}
                      color={'blue'}
                    />
                    )
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    Click the tab on this page titled 'The Classic Period Maya'
                    to view general information about our selected civilization,
                    then click through each Teaching Tool on our homepage to
                    learn more about the Classic Period Maya.
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
                    This period has been designated by scholars as the{' '}
                    <em>Classic Period</em>. It was the Classic Period Maya that
                    witnessed the maturation of their writing and calendrical
                    systems, which reached widespread observance across the
                    three subregions.
                  </Text>
                  <Text>
                    {' '}
                    The Maya established a number of densely populated
                    agricultural bureaucracies and kingdoms around major ritual
                    centers. These centers were politically independent from one
                    another but linked by a shared Mayan language and commerce.
                  </Text>
                  <Text>
                    {' '}
                    At the height of Maya civilization these centers numbered
                    roughly 40 major and minor cities that were densely
                    populated. Population estimates range from five thousand to
                    fifty thousand people in each city.{' '}
                  </Text>
                  <Center>
                    <Image
                      src={tikal}
                      alt='tikal'
                      width='50rem'
                      rounded='md'
                      py={9}
                    ></Image>
                  </Center>
                  <Text>
                    {' '}
                    What remains of the Maya are the native Guatemalans (40% of
                    which are living decedents of the Maya) and their palaces,
                    pyramids, temples, and stone plazas which are plentifully
                    adorned with the their writing, glyphs, and pictograms.
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
