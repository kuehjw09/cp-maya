import React from 'react'

import {
  GridItem,
  Text,
  Center,
  Stack,
  Heading,
  Image,
  Box,
} from '@chakra-ui/react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

import background from '../../images/000019.jpg'
import bloodletting from '../../images/000009.jpg'
import kukulkan from '../../images/000008.jpg'
import cosmology from '../../images/000006.png'
import cenotes from '../../images/000007.jpg'
import dartgun from '../../images/000013.jpg'
import twins from '../../images/000011.jpg'
import lords from '../../images/000010.jpg'
import ballgame from '../../images/000030.png'
import pakal from '../../images/000029.png'
import ProjectImage from '../ProjectImage'
import ProjectCite from '../ProjectCite'
import AspectHeader from './AspectHeader'

const AspectJesse = () => {
  return (
    <GridItem colSpan={5}>
      <AspectHeader
        title='Maya Rital Life, Creation Myth, and Cosmology'
        subt='Classic Period Maya Religion'
        img={background}
        color='teal'
        name={'Jesse Kuehl'}
        minread={'9'}
      />

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
            // borderColor={'purple.400'}
            borderColor={'teal.400'}
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
                    For the Maya, everything on the earth - living and inanimate
                    - was part of a sacred design that the Maya had situated
                    themselves at the center of. Elements of the Maya religious
                    world included agriculture, warfare, heaven, ancestor
                    worship, the underworld, and kingship.
                    <br /> <br />
                    From the politically and ritually significant ball game that
                    they played to the recordings of the motions of Venus and
                    their devotion to recording the passage of time, the source
                    of these processes was sacred energy which penetrated every
                    process in a grand cosmic order which was set in place by
                    the gods.
                    <br /> <br />
                    To better understand their fascinating, colorful, and often
                    mysterious Mesoamerican world, the best place to begin the
                    study of the Maya is in their cosmology and creation myth,
                    which can help us understand the significance of their
                    sacred rituals, calendars, and kings.
                  </Text>
                </Box>
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
                <Box p={2} fontWeight={'light'} fontSize={'md'} rounded={'md'}>
                  <Heading as={'h3'} size={'lg'} pb={3}>
                    Maya Cosmology{' '}
                  </Heading>
                  The way in which people categorize, organize, and understand
                  the world around them is called cosmology.
                  <br /> <br />
                  <Heading as={'h3'} size={'md'} pb={3}>
                    The Cosmic Tree{' '}
                  </Heading>
                  One of the recurrent symbols in Maya art and story is the
                  symbol of the Cosmic Tree. The cosmic tree symbol, which is
                  found in China, Egypt, Mesopotamia, Africa, and Native
                  American cultures represents the earth and all its processes
                  as a living totality that regenerates itself and bestows the
                  richness and fruitfullness of the world.
                  <ProjectCite
                    cite="Carrasco, David. 'Religions of Mesoamerica.' Second Edition ed. Long Grove, IL: Waveland Press, Inc., 2014, 113-147."
                    num={1}
                    color='teal'
                  />
                  <br />
                  <br />
                  The Mayan cosmic tree is described as being rooted in the
                  underworld, having its trunk in the middle world, and having
                  its high branches ascending into heaven or the upper world.
                  This organization can be described as a threefold construction
                  of the universe. The cosmic tree unites the Maya universe and
                  its many diverse aspects.
                  <ProjectCite
                    cite="Davies, Diane E. 'Maya Gods and Religious Beliefs.' Maya Archaeologist. Website."
                    num={2}
                    color='teal'
                  />
                  <ProjectImage
                    img={cosmology}
                    alt='Maya Cosmology'
                    cite='Davies, Diane E. Maya Gods and Religious Beliefs. Maya Archaeologist.'
                  />
                  The middle world, or the world of the living, was divided into
                  four quadrants and enclosed at four corners corresponding to
                  the cardinal directions. West and East are determined by the
                  points where the sun rises and sets during the summer and
                  winter solstices. Each direction is associated with a specific
                  color, and the cosmic tree exists at the center of the four
                  directions. The earth was also said to be a turtle floating in
                  the primordial sea.
                  <ProjectCite
                    cite='Wagner, Elizabeth (2000), Creation Myths and Maya Cosmography, as sited in Davies, Maya Gods and Religious Beliefs.'
                    num={3}
                    color='teal'
                  />
                  <Heading as={'h3'} size={'md'} pt={6}>
                    The Maya Underworld: Xibalba{' '}
                  </Heading>
                  The underworld in Maya cosmology was a watery world and the
                  dwelling place of gods as well as the resting place of
                  ancestors. This idea of a watery underworld is supported by
                  observing the geographic characteristics of the Maya
                  environment. Some of the world’s longest cave systems are
                  found in the Yucatan Peninsula, and one of the features of the
                  topography of the peninsula are cenotes, or natural pits that
                  can form and expose pools of water beneath the ground.
                  <ProjectImage
                    img={cenotes}
                    alt='Cenotes in the Yucatan Peninsula'
                    cite='Cenotes in the Yucatan Peninsula'
                  />
                  These pits and caves throughout the Maya landscape may have
                  been believed to be entrances to the underworld. In this way,
                  the stories about the underworld in a watery, dark state may
                  stem from a symbolic connection to what was believed to be the
                  supernatural nature of these caves and cenotes by the ancient
                  inhabitants of the Yucatan Peninsula.
                  <br />
                  <br />
                  <Heading as={'h3'} size={'lg'} pb={3}>
                    Sacred Calendar: Cycles of Time in the Night Sky
                  </Heading>{' '}
                  The Maya upperworld corresponded to the sky and, like other
                  cultures around the world, they observed what happened in the
                  sky and created mythologies based on these motions. They
                  envisioned the dome of the sky as a ‘cosmic mirror’ that
                  reflected processes on earth. Maya art, architecture, pottery,
                  and culture was like a mapping of the heavens, and they
                  recreated their observations of the sky upon the earth.
                  <br /> <br />
                  The Maya believed in the idea that life and death were
                  cyclical processes, and likened them to their understanding of
                  the seasons, calendars, astronomical, and agricultural cycles.
                  <br />
                  <br />
                  The Mayans made incredibly advanced calendrical systems based
                  on naked-eye observations of the night sky. They kept tabs on
                  the night sky to understand the universe around them and were
                  very interested in the phases of celestial objects like the
                  Moon and Venus.
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
                  The Maya had a dynamic view of time, and they observed great
                  cycles of time in the motions of the sky and stars. Their
                  cosmology influenced their mythology and their ritual life, as
                  it was believed that the things that happened in the sky were
                  a macrocosm of the processes on earth and those happening in
                  the underworld. Exploring Maya cosmology further requires us
                  to look at the Popol Vuh for clues about the significance of
                  their rituals and mythology.
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
                    py={3}
                    fontWeight={'light'}
                    fontSize={'md'}
                    rounded={'md'}
                  >
                    <Heading as={'h3'} size={'md'} py={3}>
                      The <i>Popol Vuh</i>
                    </Heading>
                    The Popol Vuh is a 16th century text from the K’iche’ Maya
                    people of highland Guatemala. This text was preserved
                    through oral tradition in the Pre-Colombian era and recorded
                    in writing by the K’iche’ Maya in 1550 C.E. The Popol Vuh
                    encompasses a range of subjects that include creation,
                    ancestry, history, and Maya cosmology. Understanding the
                    Mayan creation myth allows us to make educated inferences
                    about what spiritual life and culture was like in their
                    civilization and better understand the ways in which the
                    Mayans experienced their world.
                    <br /> <br />
                    The text itself has undergone at least 13 different
                    translations and has been influenced by the Spanish
                    Catholics that oversaw its commitment to writing, but it
                    still retains much of its legitimacy as the foundational
                    creation and mythological narrative of the Maya. There are a
                    few key ideas we can derive from the Popol Vuh that help us
                    to see the world as the Maya did, these are the Maya
                    creation myth, the idea of Xibalba or the “underworld”, and
                    the description of the Maya universe as being inside a
                    cyclical process where life, death, and rebirth continually
                    repeat. The Popol Vuh also introduces us to ideas such as
                    sacrifice and ancestral energy, which will be important
                    later in our understanding of Maya ritual life and kingship.
                    <Heading as={'h3'} size={'md'} py={3}>
                      The Maya Creation Myth
                    </Heading>
                    Part One of the Popol Vuh in the translation by Denis
                    Tedlock deals with Maya creation. In the Popol Vuh, the
                    universe is created in an agricultural style. At the
                    beginning of time, the gods prepared and sowed the earth
                    into formation, creating an abundant world of vegetation and
                    new creations.
                    <ProjectCite
                      cite={
                        "Tedlock, Dennis. 'Popol Vuh: The Mayan Book of the Dawn of Life.' Revised Edition ed. New York: Simon & Schuster, 1996."
                      }
                      num={4}
                      color='teal'
                    />
                    The cosmic sowing of the universe described in the creation
                    myth of the K’iche’ Maya provides a model for all creation
                    in the Maya world.
                    <ProjectCite
                      cite="Carrasco, David. 'Religions of Mesoamerica.' Second Edition ed. Long Grove, IL: Waveland Press, Inc., 2014, 113-147."
                      num={5}
                      color='teal'
                    />
                    Applying this imagery in a cosmological scale, the Maya
                    believed the cosmos to be amidst an everlasting cycle of
                    birth, death, and renewal. The image of the maize crop being
                    sown, sprouting, and being sown again for the next growth
                    cycle further contributes to the significance of this
                    cyclical categorization in the Maya world.
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
                    <br />
                    <br />
                    The Maya had likely derived this idea of a cyclical cosmos
                    by observing the seasons and astronomical cycles as well.
                    The gods then created human beings to both praise the world
                    they had created and to provide for and nurture the earth.
                    Part One further describes how the first two attempts at
                    creating human beings failed because these beings had either
                    misused and mistreated the powers that they had been given
                    or were unable to speak and worship them.
                    <Heading as={'h3'} size={'md'} py={3}>
                      The Hero Twins of Maya Mythology{' '}
                    </Heading>
                    Part Two of the Popol Vuh describes cosmological battles
                    between those who threatened the order of the world and
                    those who would conquer them to become the mythological
                    heroes of Maya mythology. We are introduced to the Hero
                    Twins, Hunahpu and Xbalanque, who challenge and shoot down
                    with a blow gun an arrogant ruler who claimed to be the new
                    god of the sun called Seven Macaw.
                    <ProjectImage
                      img={twins}
                      alt={'hero twins'}
                      cite={'the Hero Twins: Xbalanque and Hun Ahpu'}
                    />
                    This story has an astronomical significance as it is based
                    on the motions of constellations. In this case, Seven Macaw
                    is thought to be the personification or embodiment of the
                    constellation we know as the Big Dipper, which in the dips
                    underneath the horizon and back again regularly throughout
                    the year in the southern hemisphere.
                    <ProjectImage
                      img={dartgun}
                      alt={'Hero Twins take down Seven Macaw'}
                      cite='Hero Twins take down Seven Macaw'
                    />
                    <Heading as={'h3'} size={'md'} py={3}>
                      Journey into Xibalba{' '}
                    </Heading>
                    Xibalba was the scene of many adventures by the heroes of
                    Maya mythology, including the Hero Twins.
                    <ProjectCite
                      cite="Cartwright, Mark. 'Xibalba.' WorldHistoryEncyclopedia. Webiste. Accessed 11/23/21"
                      color={'teal'}
                      num={6}
                    />
                    After vanquishing their own enemy they seek to vanquish that
                    of their father: The Maya Death Gods.
                    <ProjectImage
                      img={lords}
                      alt={'The Seven Lords of Death'}
                      cite={'The Seven Lords of Death'}
                    />
                    <Heading as={'h3'} size={'sm'} py={3}>
                      Maya Death Gods{' '}
                    </Heading>
                    The Maya Death Gods, collectively known as the Lords of
                    Xibalba, may have numbered as much as nine and have names
                    suggestive of their malignant nature; names like{' '}
                    <em>Blood Gatherer</em>, <em>Pus Master</em>, and{' '}
                    <em>Skull Sceptre</em>
                    <ProjectCite
                      cite="Cartwright, Mark. 'Xibalba.' WorldHistoryEncyclopedia. Webiste. Accessed 11/23/21"
                      color={'teal'}
                      num={7}
                    />
                    <ProjectImage
                      img={ballgame}
                      alt={'Maya Ballgame in Xibalba'}
                      cite={
                        "Photo in 'Tedlock, Dennis. 'Popol Vuh: The Mayan Book of the Dawn of Life.' Revised Edition ed. New York: Simon & Schuster, 1996. 120-121'"
                      }
                      size='50rem'
                    />
                    <Heading as={'h3'} size={'md'} py={3}>
                      Stellar Rebirth
                    </Heading>
                    The Popol Vuh contains several passages which clearly
                    indicate a belief in <em>stellar rebirth</em>, which is the
                    belief in the reincarnation of the dead as stars. After the
                    Hero Twins were killed, they were lifted up into the sky to
                    become the Sun and the Moon.
                  </Box>
                </Stack>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left' fontSize='xl'>
                    Maya Deities
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box py={3} fontWeight={'light'} fontSize={'md'} rounded={'md'}>
                  <Heading as={'h3'} size={'md'} pb={3}>
                    Maya Deities
                  </Heading>
                  Many of the gods in the Maya pantheon represented forces or
                  aspects of things found in nature, like rain, the sun, and
                  thunder. These gods have their counterparts elsewhere in
                  Mesoamerica. I will describe a handful of these deities here.
                  <br />
                  <br />
                  <Heading as='h5' size='sm'>
                    Itzamna
                  </Heading>
                  Chief among these deities is <em>Itzamna</em>, the ruler of
                  the heavens. Identified as the son of the original creator god
                  (Hunab Ku), he is depicted as an pleasent, toothless old man.
                  Itzamna is a cultural hero in Maya mythology and is said to
                  have given the Maya the foundations of civilization. Legends
                  of the Maya tell that Itzamna was a great teacher who taught
                  the Maya how to grow corn, gave them the calendar, and taught
                  them medicine.
                  <br />
                  <br />
                  <Heading as='h5' size='sm'>
                    Chaak
                  </Heading>
                  A god of rain and storms is found throughout Mesoamerica under
                  many different names and instances, testiment to the fact that
                  rain was a vital and nourishing natural occurance. In the Maya
                  pantheon, this god is called <em>Chaak</em> and is considered
                  the protector of agriculture.
                  <br />
                  <br />
                  <Heading as='h5' size='sm'>
                    Ix Chel
                  </Heading>
                  The most important female deity was called <em>Ix Chel</em> or{' '}
                  <em>La Blanca</em>. Wife to Itzamna, she gave birth to other
                  gods including the god of corn or maise, <em>Yum Kaax</em>.
                  Like all the Mayan gods, Ix Chel had several attributes
                  including fertility, pregancy, and harvests.
                  <br />
                  <br />
                  <Heading as='h5' size='sm'>
                    Kinich Ahau
                  </Heading>
                  The Sun god of the Maya is called <em>Kinich Ahau</em>. This
                  was a powerful Maya god was that was idolized for war and
                  royal aspects. The importance of Kinich Ahau was such that
                  rulers in the Classic Period used the word 'Kinich' in their
                  titles
                  <br />
                  <br />
                  <Heading as='h5' size='sm'>
                    Kukulkan
                  </Heading>
                  The Plumbed Serpent goes by many names throughout Mesoamerica,
                  including <em>Quetzocatl</em>, <em>Kukulkan</em>, and{' '}
                  <em>Qucumatz</em>. Sometimes considered a Late-Classic
                  addition to the Maya religious paradigm, Kukulkan was a great
                  feathered-serpent deity whose influence can be relived every
                  year during the spring equinox by observing the north
                  staircase of the Pyramid of Kukulkan at Chitchen Itza.
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
                <Box p={2} fontWeight={'light'} fontSize={'md'} rounded={'md'}>
                  <Heading as={'h3'} size={'lg'} pb={3}>
                    Sacred Kingship
                  </Heading>{' '}
                  Maya kings ruled in a divine-kingship style. The role of the
                  Maya kings was to align the social world of the humans with
                  the supernatural world of the gods. They sponsored public
                  rituals and directed Maya ritual life alongside the priestly
                  class of Maya society.
                  <ProjectImage
                    img={pakal}
                    alt={
                      'Sarcophagus Lid, Temple of the Inscriptions, Palenque, Chiapas, Mexico, 683<sub>CE</sub>.'
                    }
                    cite={
                      'Sarcophagus Lid, Temple of the Inscriptions, Palenque, Chiapas, Mexico, 683 CE.'
                    }
                    size={'sm'}
                  />
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
                <Box p={2} fontWeight={'light'} fontSize={'md'} rounded={'md'}>
                  {''}
                  <Heading as={'h3'} size={'lg'} pb={3}>
                    Maya Ritual Life
                  </Heading>
                  <Heading as={'h4'} size={'md'} pb={1}>
                    Bloodletting and Sacrifice
                  </Heading>
                  The main ritual action that was believed to have sustained
                  gods and agriculture was ritual bloodletting.
                  <ProjectImage
                    img={bloodletting}
                    alt={'maya bloodletting ritual'}
                    cite={'Montgomery, John. "Yaxchitlan | Lintel 24"'}
                  />
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Center>
    </GridItem>
  )
}

export default AspectJesse
