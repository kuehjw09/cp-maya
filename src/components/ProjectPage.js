import React from 'react'

import {
  GridItem,
  Heading,
  Text,
  Stack,
  Center,
  Box,
  useColorModeValue,
  Image,
} from '@chakra-ui/react'

import map from '../images/000005.png'
import tikal from '../images/000002.jpg'
import pyramids from '../images/000004.jpg'

function ProjectPage() {
  return (
    <GridItem colStart={1} colSpan={4}>
      <Center>
        <Box
          bg={useColorModeValue('whiteAlpha.400', 'blackAlpha.400')}
          rounded={'md'}
          boxShadow={'xl'}
          maxW={'80vw'}
          py={12}
          px={6}
        >
          <Heading fontWeight={'light'} pb={3} textAlign={'center'}>
            HIS 103 - CGP | <em>The Americas</em>
          </Heading>
          <Stack spacing={3} fontWeight={'medium'}>
            <Center>
              <Image
                src={pyramids}
                rounded={'md'}
                alt='Tops of Maya Pyramids at Tikal'
                width={'40rem'}
                py={9}
              ></Image>
            </Center>
            <Text>
              The Maya occupied a region of Mesoamerica that includes what is
              today Guatemala, Belize, the Yucatan Peninsula, and the western
              portions of Honduras and El Salvador. The area has been divided by
              scholars into three subregions; the southern region, the central
              region, and the northern region.{' '}
            </Text>
            <Center>
              <Image
                rounded={'sm'}
                src={map}
                alt='Mesoamerican Civilizations'
                width={'30rem'}
              ></Image>
            </Center>
            <Text>
              The Maya flourished from about 250 CE to the tenth century. This
              period has been designated by scholars as the{' '}
              <em>Classic Period</em>. It was the Classic Period Maya that
              witnessed the maturation of their writing and calendrical systems,
              which reached widespread observance across the three subregions.
            </Text>
            <Text>
              {' '}
              The Maya established a number of densely populated agricultural
              bureaucracies and kingdoms around major ritual centers. These
              centers were politically independent from one another but linked
              by a shared Mayan language and commerce.
            </Text>
            <Center>
              <Image src={tikal} alt='tikal' width='40rem' rounded='md'></Image>
            </Center>
            <Text>
              {' '}
              At the height of Maya civilization these centers numbered roughly
              40 major and minor cities that were densely populated. Population
              estimates range from five thousand to fifty thousand people in
              each city.{' '}
            </Text>
            <Text>
              {' '}
              What remains of this culture are the native Guatemalans (40% of
              which are the living decedents of the Maya) and its monumental
              architecture – palaces, pyramids, temples, and stone plazas –
              which are plentifully adorned with the now-famous Maya writing,
              glyphs, and pictograms in stone relief.
            </Text>
            <Text>
              We have focused on four aspects of Classic Period Maya
              civilization: religion, social structure, agriculture, and
              architecture. Click through the sections on our homepage to learn
              more about the Classic Period Maya.
            </Text>
          </Stack>
        </Box>
      </Center>
    </GridItem>
  )
}

export default ProjectPage
