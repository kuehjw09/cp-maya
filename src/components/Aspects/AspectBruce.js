import {
  GridItem,
  Text,
  Center,
  Box,
  Heading,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

import React from 'react'

import AspectHeader from './AspectHeader'
import ProjectImage from '../ProjectImage'
import ProjectCite from '../ProjectCite'
import background from '../../images/000018.jpg'
import peten from '../../images/000032.png'
import usamacanta from '../../images/000033.png'
import copan from '../../images/000034.png'
import pucc from '../../images/000035.png'
import one from '../../images/000036.png'
import two from '../../images/000037.png'
import three from '../../images/000038.png'
import four from '../../images/000039.png'
import five from '../../images/000040.png'
import six from '../../images/000041.png'
import seven from '../../images/000042.png'
import eight from '../../images/000043.png'
import nine from '../../images/000044.png'

const AspectBruce = () => {
  return (
    <GridItem colSpan={5}>
      <AspectHeader
        title='Classic Period Maya Architecture'
        subt='Classic Period Maya Architecture'
        name='Bruce Thao'
        color='green'
        img={background}
        minread={6}
      />
      <Center>
        <Accordion allowToggle w={'50rem'} maxW={'100vw'} pb={9} px={3}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left' fontSize='xl'>
                  Timeline Game Events
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box fontWeight={'light'} fontSize={'lg'} rounded={'md'}>
                <List spacing={5}>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    (~250 CE.) Plaza of the Moon is built.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    (~350 CE) Temple of Quetzalcoatl and Tlaloc is built.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    (~600 CE) Quadrangle of the Nuns is built.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    (790 CE ) Puuc Style is developed and in use.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    (800 CE) Kukulcan Pyramid (<em>El Castille</em>) is built in
                    Chitchen Itza.
                  </ListItem>
                </List>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Center>
      <Center>
        <Box
          maxW={'100vw'}
          w='57rem'
          bg={'blackAlpha'}
          rounded={'md'}
          boxShadow={'md'}
        >
          <Accordion
            allowToggle
            defaultIndex={[0]}
            borderColor={'green.400'}
            w={'full'}
            maxW={'100vw'}
            pb={9}
            px={3}
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
                <Box fontWeight={'light'} fontSize={'lg'} rounded={'md'}>
                  <Text fontSize='md' py={3} fontFamily={'sans-serif'}>
                    <Heading size={'lg'}>Introduction</Heading>
                    Architecture plays an important role in understanding the
                    Maya civilization. The layout of cities and the symbols
                    engraved into the architecture provide insight into the
                    social structure, religion, and culture. The Maya had
                    different architectural styles depending on the region,
                    which were affected by customs and traditions as well as
                    environmental factors, such as landscape.
                    <ProjectCite
                      num={1}
                      cite='Parmington, Alexander, Space and Sculpture of the Classic Maya City, (New York: Cambridge University Press, 2011), 7'
                      color='green'
                    />
                    The appearances of the architecture also differed depending
                    on the region, due to differences in resources.{' '}
                    <ProjectCite
                      num={2}
                      cite='Parmington, Alexander, Space and Sculpture of the Classic Maya City, 7'
                      color='green'
                    />
                  </Text>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left' fontSize='xl'>
                    Maya Centers
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box fontWeight={'light'} fontSize={'lg'} rounded={'md'}>
                  <Text fontSize='md' py={3} fontFamily={'sans-serif'}>
                    <Heading size={'lg'}>Maya Centers</Heading>
                    At the core of every Maya city, existed important structures
                    known collectively as centers. This consisted of temples,
                    ballcourts, palaces, and plazas.
                    <br />
                    <br />
                    <Heading size={'md'} color={'green.400'}>
                      Palaces
                    </Heading>
                    Palaces were structures with the purpose of housing the
                    noble.
                    <ProjectCite
                      num={3}
                      cite='Parmington, Alexander, Space and Sculpture of the Classic Maya City, 10'
                      color='green'
                    />{' '}
                    They were large multi-roomed structures that contained stone
                    vaults.
                    <ProjectImage
                      img={one}
                      alt={''}
                      cite='Quadrangle of the Nuns (government palace)'
                    />
                    <Heading size={'md'} color={'green.400'}>
                      Temples
                    </Heading>
                    Temples have restricted access, only individuals of high
                    status could enter temples, such as the king. They were used
                    as religious structures where rituals to the gods and
                    ancestors were performed.
                    <ProjectCite
                      num={4}
                      cite='Parmington, Alexander, Space and Sculpture of the Classic Maya City, 12'
                      color='green'
                    />
                    <ProjectImage img={two} alt={''} cite='Kukulcan Pyramid' />
                    <Heading size={'md'} color={'green.400'}>
                      Ballcourt
                    </Heading>
                    Ballcourts are a public location, housing the activities of
                    athletic games. They were located within a plaza, close to
                    the temple. Both sides of the ballcourt were closed off with
                    walls/slopes.{' '}
                    <ProjectCite
                      num={5}
                      cite={
                        'Parmington, Alexander, Space and Sculpture of the Classic Maya City, 12'
                      }
                      color='green'
                    />
                    <ProjectImage
                      img={three}
                      alt={''}
                      cite='Ballcourt, Uxmal, Mexico'
                    />
                    <Heading size={'md'} color={'green.400'}>
                      Plaza
                    </Heading>
                    Large public grounds where the Maya would gather for events.
                    There are both public plazas with open access, and private
                    plazas surrounded by closed off private buildings.
                    <ProjectImage
                      img={four}
                      alt={''}
                      cite='Plaza of the Moon
'
                    />
                  </Text>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left' fontSize='xl'>
                    Architectural Styles
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box fontWeight={'light'} fontSize={'lg'} rounded={'md'}>
                  <Text fontSize='md' py={3} fontFamily={'sans-serif'}>
                    <Heading size={'lg'}>Architectural Styles</Heading>
                    <Heading size={'md'} color={'green.400'}>
                      <br />
                      <br />
                      Peten Style
                    </Heading>
                    <ProjectImage
                      img={peten}
                      cite={
                        'Region containing Peten Style based on the description from Space and Sculpture'
                      }
                      size={'xs'}
                    />
                    The Peten Style is characterized by its large platform,
                    supported by big structures with small interior space. It
                    had a single entrance and large mosaic roof combs. The style
                    is found from Calakmul to Belize.
                    <ProjectCite
                      num={6}
                      cite={
                        'Parmington, Alexander, Space and Sculpture of the Classic Maya City, 7'
                      }
                      color='green'
                    />
                    <ProjectImage
                      img={five}
                      alt={''}
                      cite='Mayan ruins at Uaxactún, Petén, Guatemala.'
                    />
                    <Heading size={'md'} color={'green.400'}>
                      Usamacinta Style
                    </Heading>
                    <ProjectImage
                      img={usamacanta}
                      cite={
                        'Region containing Usumacinta Style based on the description from Space and Sculpture '
                      }
                      size={'xs'}
                    />
                    The Usumacinta style is characterized as being built on
                    hills, containing multiple doorways, and having light roof
                    combs. The style “This architectural style encompasses sites
                    such as Yaxchilan, Piedras Negras, and Bonampak, as well as
                    Palenque.”
                    <ProjectCite
                      num={7}
                      color='green'
                      cite='Parmington, Alexander, Space and Sculpture of the Classic Maya City, 7'
                    />
                    <ProjectImage
                      img={six}
                      alt={''}
                      cite='Usumacinta Style at Palenque.'
                    />
                    <Heading size={'md'} color={'green.400'}>
                      Copan Style
                    </Heading>
                    <ProjectImage
                      img={copan}
                      cite={
                        'Region containing Copan Style based on the description from Space and Sculpture'
                      }
                      size={'xs'}
                    />
                    The Copan style was the southeastern architectural style
                    containing grand staircases, and stucco sculptures.
                    <ProjectCite
                      num={8}
                      cite='Parmington, Alexander, Space and Sculpture of the Classic Maya City, 7 '
                      color='green'
                    />
                    <ProjectImage
                      img={seven}
                      alt={''}
                      cite='Copan Style in Honduras.'
                    />
                    <Heading size={'md'} color={'green.400'}>
                      Pucc Style
                    </Heading>
                    <ProjectImage
                      img={pucc}
                      cite={
                        'Region containing Pucc Style based off the description from Space and Sculpture '
                      }
                      size={'xs'}
                    />
                    The Puuc style existed in the northern region in areas such
                    as Uxmal, Kabah, and Sayil. It is characterized by
                    structures consisting of either single or multiple entrances
                    surmounted by a small plain roof comb. Stucco sculptures
                    were a typical addition, and the top half of the building
                    was decorated with mosaics, while the bottom half was plain.{' '}
                    <ProjectCite
                      num={9}
                      cite='Parmington, Alexander, Space and Sculpture of the Classic Maya City, 8'
                      color='green'
                    />
                    <ProjectImage
                      img={eight}
                      cite={'Puuc Style in Yucantan. '}
                    />
                  </Text>
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left' fontSize='xl'>
                    Symbolism
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box fontWeight={'light'} fontSize={'lg'} rounded={'md'}>
                  <Text fontSize='md' py={3} fontFamily={'sans-serif'}>
                    {' '}
                    <Heading size={'lg'}>Symbolism</Heading>
                    <ProjectImage
                      img={nine}
                      cite={'Temple of the Quetzalcoatl and Tlaloc '}
                      size={'md'}
                    />
                    The Maya decorated important architecture with symbols.
                    Symbols hold meaning which were used to illustrate religious
                    ideas, as well as social association. For example, a palace
                    for the priest would contain quetzal birds, engraved into
                    the exterior.
                    <ProjectCite
                      num={10}
                      cite={
                        'Lessing, Erich, Temple of Quetzalcoatl and Tlaloc; Mariposa Palace; Detail of Pillars with reliefs of Quetzal Birds, (N.Y.: Art Resource)'
                      }
                      color='green'
                    />
                  </Text>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Center>
    </GridItem>
  )
}

export default AspectBruce
