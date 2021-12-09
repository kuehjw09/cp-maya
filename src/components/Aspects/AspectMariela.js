import React from 'react'

import { GridItem, Center, Box, Container, Heading } from '@chakra-ui/react'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'

import { CheckCircleIcon } from '@chakra-ui/icons'

import background from '../../images/000017.jpg'
import map from '../../images/000047.jpg'
import HM618 from '../../images/000046.png'
import sword from '../../images/000045.png'
import ProjectImage from '../ProjectImage'
import ProjectCite from '../ProjectCite'
import AspectHeader from './AspectHeader'

const AspectMariela = () => {
  return (
    <GridItem colSpan={5}>
      <AspectHeader
        title='Agriculture and Warfare'
        img={background}
        subt='Maya Agriculture and Warfare'
        minread={6}
        name='Mariela Aranda'
        color='orange'
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
              <Box fontWeight={'semibold'} fontSize={'lg'} rounded={'md'}>
                <List spacing={5}>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    (278 CE) An early war started between Tikal and Uxtacun
                    around
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    (546 CE) Hok Kauil ruler of Caracol took over Naranjo
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    (562 CE) Wars between Tikal and Caracol started and ended
                    with Tikal’s defeat
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    (652 CE)Tikal kills and sacrificed Calakuml king which
                    tension increases with the Tikal/Caracol wars
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    (700CE) Rivalry Wars had started to worsen which ended up
                    their collapse
                  </ListItem>
                </List>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Center>
      <Container
        width={'rem'}
        maxW={'4xl'}
        bg={'blackAlpha.20'}
        rounded={'md'}
        p={4}
      >
        <Heading>Introduction</Heading>
        There was a myth that went around with historians that talked about how
        the Classic Mayan Civilization were a very peaceful civilization just
        because of their golden age of constructing their own Solar Calendar and
        their temples. Essentially, they were a violent civilization because
        their significant wars were always in their own cities rather than other
        civilizations. Their collapse is still a mystery for many historians,
        however, it is known that the Mayans suffered poor harvesting which led
        to kings taking over major cities and also sacrificing their enemies.
        Although they fought wars and even built temples or walls to show how
        many wars they fought some of them collapsed or were broken down by
        other Mayan kings or the Spainards.
        <br />
        <br />
        <Heading size={'lg'}>Maya Agriculture</Heading>
        During the Classic era of the Mayan Civilization (250 CE - 900 CE),
        although it was the golden age for the Mayans, their population in land
        increased around by 324,000 km2 around the southern parts of Mexico,
        Guatemala,El Salvador, and Honduras, on the highlands of Mesoamerica
        which is full of tropical forests.
        <ProjectCite
          cite=' Webster, David, “Conception of Maya War”, Journal of World Prehistory Vol. 14, No.1, March 2000'
          num={1}
          color={'orange'}
        />{' '}
        In the lowlands of Mesoamerica in which the Mayan Civilization occupied
        around 250,000 km2 in western area of Belize because in the Lowlands
        there was more humidity than in highlands and the more humidity there
        was the more rain they would have a near source of water to grow crops,
        slash and burn methods were used to clear forests. However, historians
        had discovered that the Highlands and Lowlands of Mesoamerica would have
        a big amount of droughts, fires, storms, and insect infestation, mostly
        without even looking into risks or having like a Plan B to were to save
        their harvest which lead to Mayans to scatter around to look for rich
        soil.
        <ProjectCite
          cite=' Webster, David, “Conception of Maya War”, Journal of World Prehistory Vol. 14, No.1, March 2000'
          num={2}
          color={'orange'}
        />{' '}
        <ProjectImage
          img={map}
          alt={'Map of the Maya empire'}
          cite={"'Map of the Maya empire'"}
          size={'xs'}
        />{' '}
        Mayans did not have many tools to use for harvesting because most of the
        minerals went to creating weapons and all of harvesting was by human
        labor since the their were simpler than advanced
        <ProjectCite
          cite=' Webster, David, “Conception of Maya War”, Journal of World Prehistory Vol. 14, No.1, March 2000'
          num={3}
          color={'orange'}
        />{' '}
        ; also, it is very easy to tell that Mayans didn’t have horses, cows, or
        sheep to help with carrying crops or heavy metals to a certain location.
        <br />
        <br />
        <Heading size={'md'} color={'orange.400'}>
          Major Conflicts
        </Heading>
        Typically Mayans lived in independent cities like Tikal, Copan, and
        Palenque were major political cities where nobleles, priests, and Kings
        would rule over a certain city.
        <ProjectCite
          cite=' Webster, David, “Conception of Maya War”, Journal of World Prehistory Vol. 14, No.1, March 2000'
          num={4}
          color={'orange'}
        />{' '}
        The Classic Wars were either motivated by political movements,
        territorial conquest, protection of frontiers, and the elimination of
        enemies, or rituals which most wars were caused by looking for
        sacrifices from nobles or kings to supplement their gods.
        <ProjectCite
          cite=' Webster, David, “Conception of Maya War”, Journal of World Prehistory Vol. 14, No.1, March 2000'
          num={5}
          color={'orange'}
        />{' '}
        However, there is not enough evidence to show how many Wars did the
        Mayans fought because there are patterns in Architecture in which Mayans
        would portray their wars in a temple or wall but some of them collapsed
        during the Late Classic era or when the Spainiards arrived in
        Mesoamerica (Mexico & Central America).
        <ProjectImage
          img={sword}
          alt={''}
          cite={'Hok Kauli depicted after his victory over Tikal'}
        />
        The major war that we now know is the battle of Tikal and Caracol
        because there was a ruler who ascended to the throne around 553 CE,
        however, the tension was so famously big that the City of Caracol wanted
        to independent from Tikal the major city with all the amount of pressure
        of political stabilization which led to a civil war in the end Caracol
        won.
        <ProjectCite
          cite=' Webster, David, “Conception of Maya War”, Journal of World Prehistory Vol. 14, No.1, March 2000'
          num={6}
          color={'orange'}
        />{' '}
        A ruler named Hok Kauli, had a monument that had 8 captives of different
        cities to show their descendants that the ruler of Caracol was a
        powerful ruler alongside with his allies who defeated the city of Tikal.
        <ProjectCite
          cite=' Webster, David, “Conception of Maya War”, Journal of World Prehistory Vol. 14, No.1, March 2000'
          num={7}
          color={'orange'}
        />{' '}
        <br />
        <br />
        <Heading size={'md'} color={'orange.400'}>
          Maya Weapons
        </Heading>
        Nevertheless, since Mayans went to a lot of wars most of their weapons
        were very simplistic, warriors would wear a costume with feline skin to
        be know as a deity which is mostly the jaguar that represents war and
        deity for warriors to be superior to their enemies, would use throwing
        spears and spikes to kill and capture their enemies.
        <ProjectCite
          cite=' Webster, David, “Conception of Maya War”, Journal of World Prehistory Vol. 14, No.1, March 2000'
          num={8}
          color={'orange'}
        />{' '}
        Some of their weapons are a little confusing to understand what were
        they used for which is a weapon that is almost shaped like a horseshoe,
        it seems to be made from stone or clay, the round-oval ‘horseshoe’ shape
        is more of a brick color with designs of an animal like a feline animal
        due to shape of a head and a tail.
        <ProjectCite
          cite=' Webster, David, “Conception of Maya War”, Journal of World Prehistory Vol. 14, No.1, March 2000'
          num={9}
          color={'orange'}
        />{' '}
        <ProjectImage img={HM618} alt={''} cite={''} size={'xs'} />
        My questions was what did The Mayans expected for the prisoners to feel
        after they been hit by this weapon, if landed on the neck, should they
        should have difficulties of breathing or make the prisoner collapse or
        pass out or if the weapon landed on the feet of the prisoner would they
        make them fall down to the ground and damage a bone like what will the
        physical effects would be.
      </Container>
    </GridItem>
  )
}

export default AspectMariela
