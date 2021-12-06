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
      <Accordion allowToggle w={'full'} maxW={'100vw'} pb={9} px={3}>
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
            <Box fontWeight={'light'} fontSize={'lg'} rounded={'md'}></Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
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
                  richness of the world.
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
                  <Heading as={'h3'} size={'sm'} pt={6} color={'teal'}>
                    The Earth{' '}
                  </Heading>
                  The middle world, or the world of the earth, was divided into
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
                  <Heading as={'h3'} size={'sm'} pt={6} color={'teal'}>
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
                  <Heading as={'h3'} size={'sm'} color={'teal'}>
                    The Sky{' '}
                  </Heading>
                  The Maya upperworld corresponded to the sky and, like many
                  cultures around the world, they observed what happened in the
                  sky and created mythologies based on these motions. They
                  envisioned the dome of the sky as a ‘cosmic mirror’ that
                  reflected processes on earth. Maya art, architecture, pottery,
                  and culture was like a mapping of the heavens, and they
                  recreated their observations of the sky upon the earth.
                  <br /> <br />
                  <Heading as={'h3'} size={'md'} pb={3}>
                    Sacred Calendar, Cycles of Time
                  </Heading>{' '}
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
                  the underworld. <br />
                  <br />
                  For the Maya, everything happening in the past, present, and
                  future, and everything happening in the sky and on earth was
                  constantly fused together. They experienced their world as an
                  ordered and deeply sacred place that existed within the
                  progressions of a great cosmic cycle bound to begin, end, and
                  repeat itself again. Exploring Maya cosmology further requires
                  us to look at the Popol Vuh for clues about the significance
                  of their rituals and mythology.
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
                    birth, death, and renewal. Imagining the maize crop being
                    sown, sprouting, harvested, and being sown again for the
                    next growth cycle provides a good reference for how these
                    ideas became so signnificant in the Maya worldview.
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
                      cite="Cartwright, Mark. 'Xibalba.' WorldHistoryEncyclopedia. Website. Accessed 11/23/21"
                      color={'teal'}
                      num={6}
                    />
                    After dealing with Seven Macaw, the Hero Twins seek to
                    avenge their father and vanquish the ones who had killed
                    him: The Maya Death Gods.
                    <ProjectImage
                      img={lords}
                      alt={'The Seven Lords of Death'}
                      cite={
                        'Skulls, Bones, and Jaquar features are given to this depiction of the Xibalbans.'
                      }
                    />
                    <Heading as={'h3'} size={'sm'} py={3} color={'teal.400'}>
                      Maya Death Gods{' '}
                    </Heading>
                    The Maya Death Gods mentioned in the Popol Vuh are
                    collectively refered to as 'Xibalbans', or people who dwell
                    in the underworld. The first among the Xibalbans were called{' '}
                    <em>One Death</em> and <em>Seven Death</em>. The remaining
                    have names suggestive of their malignant nature; names like{' '}
                    <em>Blood Gatherer</em>, <em>Demon of Pus</em>, and{' '}
                    <em>Skull Sceptre</em>.
                    <ProjectCite
                      cite="Cartwright, Mark. 'Xibalba.' WorldHistoryEncyclopedia. Webiste. Accessed 11/23/21"
                      color={'teal'}
                      num={7}
                    />
                    <ProjectImage
                      img={ballgame}
                      alt={'Maya Ballgame in Xibalba'}
                      cite={
                        "Photo in 'Tedlock, Dennis. 'Popol Vuh: The Mayan Book of the Dawn of Life.' Revised Edition ed. New York: Simon & Schuster, 1996. 120-121." +
                        ' The Hero Twins play the Lords of Xibalba in a Maya ball game.'
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
                    <br />
                    <br />
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
                  <Heading as='h5' size='sm' color={'teal.400'}>
                    Itzamna
                  </Heading>
                  Chief among the Maya deities is <em>Itzamna</em>, the ruler of
                  the heavens. Identified as the son of the original creator god
                  (Hunab Ku), he is depicted as an pleasent, toothless old man.
                  Itzamna is a cultural hero in Maya mythology and is said to
                  have given the Maya the foundations of civilization. Legends
                  of the Maya tell that Itzamna was a great teacher who taught
                  the Maya how to grow corn, gave them the calendar, and taught
                  them medicine.
                  <br />
                  <br />
                  <Heading as='h5' size='sm' color={'teal.400'}>
                    Chaak
                  </Heading>
                  A god of rain and storms is found throughout Mesoamerica under
                  many different names and instances, testiment to the fact that
                  rain was a vital and nourishing natural occurance. In the Maya
                  pantheon, this god is called <em>Chaak</em> and is considered
                  the protector of agriculture.
                  <br />
                  <br />
                  <Heading as='h5' size='sm' color={'teal.400'}>
                    Ix Chel
                  </Heading>
                  The most important female deity was called <em>Ix Chel</em> or{' '}
                  <em>La Blanca</em>. Wife to Itzamna, she gave birth to other
                  gods including the god of corn or maise, <em>Yum Kaax</em>.
                  Like all the Mayan gods, Ix Chel had several attributes
                  including fertility, pregancy, and harvests.
                  <br />
                  <br />
                  <Heading as='h5' size='sm' color={'teal.400'}>
                    Kinich Ahau
                  </Heading>
                  The Sun god of the Maya is called <em>Kinich Ahau</em>. This
                  was a powerful Maya god was that was idolized for war and
                  royal aspects. The importance of Kinich Ahau was such that
                  rulers in the Classic Period used the word 'Kinich' in their
                  titles
                  <br />
                  <br />
                  <Heading as='h5' size='sm' color={'teal.400'}>
                    Kukulkan
                  </Heading>
                  The Plumbed Serpent goes by many names throughout Mesoamerica,
                  including <em>Quetzalcoatl</em>, <em>Kukulkan</em>, and{' '}
                  <em>Qucumatz</em>. Sometimes considered a Late-Classic
                  addition to the Maya religious paradigm, Kukulkan was a
                  mythical feathered-serpent from whom almost all Mesoamerican
                  peoples claimed descent. The importance of this deity in the
                  Late-Classic Period can be relived every year during the
                  spring equinox by observing the north staircase of the Pyramid
                  of Kukulkan at Chitchen Itza.
                </Box>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left' fontSize='xl'>
                    Rituals
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box p={2} fontWeight={'light'} fontSize={'md'} rounded={'md'}>
                  <Heading as={'h3'} size={'xl'} pb={3}>
                    Maya Ritual Life
                  </Heading>{' '}
                  <Heading as={'h3'} size={'md'} pb={3}>
                    Sacred Kingship
                  </Heading>{' '}
                  The Maya kings ruled in a divine-kingship style. Their role
                  was to align the social world of the humans with the
                  supernatural world of the gods. They sponsored public rituals
                  and directed Maya ritual life alongside the priestly class of
                  Maya society.
                  <ProjectCite
                    cite="Pollard, Elizabeth, et al., 'Worlds Together, Worlds Apart,' Consise Second Edition ed. Vol: 1. pages 375-378."
                    num={7}
                    color={'teal'}
                  />
                  Rulers were the supreme authority in the world who directed
                  Maya society from the planning of intensive agriculture, the
                  building of monumental architecture, the observance of ritual
                  and ceremonial traditions, and the initiation of warfare with
                  other communities.
                  <ProjectCite
                    num={8}
                    cite="Pollard, Elizabeth, et al., 'Worlds Together, Worlds Apart,' Consise Second Edition ed. Vol: 1. pages 375-378."
                    color={'teal'}
                  />
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
                  <br />
                  <br />
                  The immense power of kingship was carried out through the king
                  by deities and royal ancestors who were believed to act
                  through him. These sources of energy were believed to be
                  present in the body, blood, actions, and clothing of the
                  ruler.
                  <ProjectCite
                    num={9}
                    cite={'Carrasco, David. "Religions of Mesoamerica." 2014.'}
                    color={'teal'}
                  />
                  Historian David Carrasco in his book Religions of Mesoamerica
                  describes that it was the role of the sacred kings to align
                  the social world of the humans with the supernatural world of
                  the gods, and it was believed that the king had to demonstrate
                  through ritual his line of descent from the first ancestor who
                  was the source of the divine nature of the royal lineage. He
                  further describes that the main technique for Maya kings to
                  achieve this divine-earthly alignment was through ritual
                  action.
                  <ProjectCite
                    num={10}
                    cite={'Carrasco, David. "Religions of Mesoamerica." 2014.'}
                    color={'teal'}
                  />
                  <br />
                  <br />
                  <Heading size='md'>Reciprocity</Heading>
                  Perhaps the most powerful recurring image in the Maya record
                  is the notion of mankind being in a reciprocal relationship
                  with the gods. Reciprocity refers to the act of fair exchange
                  between two entities. In the case of Maya religion,
                  reciprocity was the way of giving back to the gods who
                  provided them with the essentials of life and can be likened
                  to a contract which bound them in perpetual exchange. This is
                  important to understand when we are confronted with the
                  bloodier aspects of Maya ritual and religious life. The Maya
                  believed that the gods were nourished and that the harmony of
                  the cosmos had to be maintained through the act of
                  bloodletting.
                  <br />
                  <br />
                  It was believed that if ritual sacrifice and bloodletting did
                  not occur that the sacred order and harmony of the universe
                  would cease and fall into disorder. Therefore, the ongoing
                  existence of human life and prosperity depended on how
                  generous the Maya were in giving back the gift of life, which
                  the gods continued to dispense through children, germination,
                  rain, sunshine, and animal life.
                  <ProjectCite
                    cite={'Carrasco, David. "Religions of Mesoamerica." 2014.'}
                    num={11}
                    color={'teal'}
                  />
                  <br />
                  <br />
                  <Heading as={'h4'} size={'md'} pb={1}>
                    Bloodletting and Sacrifice
                  </Heading>
                  Bloodletting (also called “auto-sacrifice”) is the act of
                  self-cutting or piercing of a body part to let blood. This
                  blood would be collected on a piece of paper and burnt as an
                  offering to the gods.
                  <ProjectCite
                    num={12}
                    cite={
                      'Davies, Diane E. Maya Gods and Religious Beliefs. Maya Archaeologist. Website. Accessed 10/23/21 '
                    }
                    color={'teal'}
                  />{' '}
                  <ProjectImage
                    img={bloodletting}
                    alt={'maya bloodletting ritual'}
                    cite={'Lintel 24'}
                  />
                  The passage of ancestors and supernatural beings into the
                  world was believed to be open in the wound on the human body
                  through the blood was let, and it was believed that real
                  reciprocity was achieved between the makers of the world and
                  human kind.
                  <br />
                  <br />
                  The Mayans are also said to have given blood to receive
                  stimulate a vision in which the gods and ancestors appeared in
                  the world and where the people would be able to perceive their
                  spiritual presence.{' '}
                  <ProjectCite
                    num={13}
                    cite={"Carrasco, David. 'Religions of Mesoamerica.' 2014."}
                    color={'teal'}
                  />{' '}
                  Bloodletting was performed at the dedication of buildings and
                  monuments, the birth of children, marriage ceremonies,
                  political events, and at moments of transition in the
                  calendar.
                  <ProjectCite
                    num={14}
                    cite={"Carrasco, David. 'Religions of Mesoamerica.' 2014."}
                    color={'teal'}
                  />
                  <br />
                  <br />
                  The Maya kings and lords offered blood in public settings at
                  specific intervals of their calendar that held ritual
                  significances. The action of bloodletting was believed to
                  integrate all the levels of the cosmos and the social groups
                  into a sense of wholeness.
                  <ProjectCite
                    num={15}
                    cite={"Carrasco, David. 'Religions of Mesoamerica.' 2014."}
                    color={'teal'}
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
