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

import AspectHeader from './AspectHeader'
import ProjectImage from '../ProjectImage'
import ProjectCite from '../ProjectCite'
import background from '../../images/000018.jpg'
import peten from '../../images/000032.png'
import usamacanta from '../../images/000033.png'
import copan from '../../images/000034.png'
import pucc from '../../images/000035.png'

const AspectBruce = () => {
  return (
    <GridItem colSpan={5}>
      <AspectHeader
        title='Classic Period Maya Architecture'
        subt='Classic Period Maya Architecture'
        name='Bruce Thao'
        color='green'
        img={background}
      />
      <Container
        width={'rem'}
        maxW={'4xl'}
        bg={'blackAlpha.20'}
        rounded={'md'}
        p={4}
      >
        <Heading size={'lg'}>Introduction</Heading>
        Architecture plays an important role in understanding the Maya
        civilization. The layout of cities and the symbols engraved into the
        architecture provide insight into the social structure, religion, and
        culture. The Maya had different architectural styles depending on the
        region, which were affected by customs and traditions as well as
        environmental factors, such as landscape.
        <ProjectCite num={1} cite='' color='green' />
        The appearances of the architecture also differed depending on the
        region, due to differences in resources.{' '}
        <ProjectCite num={2} cite='' color='green' />
        <Heading size={'lg'}>Maya Centers</Heading>
        At the core of every Maya city, existed important structures known
        collectively as centers. This consisted of temples, ballcourts, palaces,
        and plazas.
        <Heading size={'md'}>Palaces</Heading>
        Palaces were structures with the purpose of housing the noble.
        <ProjectCite num={3} cite='' color='green' /> They were large
        multi-roomed structures that contained stone vaults.
        <Heading size={'md'}>Temples</Heading>
        Temples have restricted access, only individuals of high status could
        enter temples, such as the king. They were used as religious structures
        where rituals to the gods and ancestors were performed.
        <ProjectCite num={4} cite='' color='green' />
        <Heading size={'md'}>Ballcourt</Heading>
        Ballcourts are a public location, housing the activities of athletic
        games. They were located within a plaza, close to the temple. Both sides
        of the ballcourt were closed off with walls/slopes.{' '}
        <ProjectCite num={5} cite={''} color='green' />
        <Heading size={'md'}>Plaza</Heading>
        Large public grounds where the Maya would gather for events. There are
        both public plazas with open access, and private plazas surrounded by
        closed off private buildings.
        <Heading size={'lg'}>Architectural Styles</Heading>
        <Heading size={'md'}>Peten Style</Heading>
        The Peten Style is characterized by its large platform, supported by big
        structures with small interior space. It had a single entrance and large
        mosaic roof combs. The style is found from Calakmul to Belize.
        <ProjectCite num={6} cite={''} color='green' />
        <ProjectImage
          img={peten}
          cite={
            'Region containing Peten Style based on the description from Space and Sculpture'
          }
          size={'sm'}
        />
        <Heading size={'md'}>Usamacinta Style</Heading>
        The Usumacinta style is characterized as being built on hills,
        containing multiple doorways, and having light roof combs. The style
        “This architectural style encompasses sites such as Yaxchilan, Piedras
        Negras, and Bonampak, as well as Palenque.”
        <ProjectCite num={7} color='green' />
        <ProjectImage
          img={usamacanta}
          cite={
            'Region containing Usumacinta Style based on the description from Space and Sculpture '
          }
          size={'sm'}
        />
        <Heading size={'md'}>Copan Style</Heading>
        The Copan style was the southeastern architectural style containing
        grand staircases, and stucco sculptures.
        <ProjectCite num={8} cite='' color='green' />
        <ProjectImage
          img={copan}
          cite={
            'Region containing Copan Style based on the description from Space and Sculpture'
          }
          size={'sm'}
        />
        <Heading size={'md'}>Pucc Style</Heading>
        The Puuc style existed in the northern region in areas such as Uxmal,
        Kabah, and Sayil. It is characterized by structures consisting of either
        single or multiple entrances surmounted by a small plain roof comb.
        Stucco sculptures were a typical addition, and the top half of the
        building was decorated with mosaics, while the bottom half was plain.{' '}
        <ProjectCite num={9} cite='' color='green' />
        <ProjectImage
          img={pucc}
          cite={
            'Region containing Pucc Style based off the description from Space and Sculpture '
          }
          size={'sm'}
        />
        <Heading size={'lg'}>Symbolism</Heading>
        The Maya decorated important architecture with symbols. Symbols hold
        meaning which were used to illustrate religious ideas, as well as social
        association. For example, a palace for the priest would contain quetzal
        birds, engraved into the exterior.
        <ProjectCite num={10} cite={''} color='green' />
      </Container>
    </GridItem>
  )
}

export default AspectBruce
