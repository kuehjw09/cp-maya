import React from 'react'

import {
  GridItem,
  Heading,
  Text,
  Stack,
  Center,
  Box,
  Image,
} from '@chakra-ui/react'

// import map from '../images/000003.jpg'
import tikal from '../images/000002.jpg'
function ProjectPage() {
  return (
    <GridItem colStart={1} colSpan={4}>
      <Center>
        <Box
          bg={'blackAlpha.200'}
          rounded={'md'}
          boxShadow={'xl'}
          maxW={'80vw'}
          p={6}
        >
          <Heading fontWeight={'light'} pb={3}>
            HIS 103 - CGP | The Americas
          </Heading>
          <Stack spacing={3}>
            <Text>
              The Maya occupied a diverse region in Mesoamerica that has been
              divided by scholars into three subregions referred to as the
              southern, central, and northern subregions. This area includes
              what is today Guatemala, Belize, the Yucatan Peninsula, and the
              western portions of Honduras and El Salvador.{' '}
            </Text>
            {/* <Image
              src={map}
              alt='Mesoamerican Civilizations'
              width={'50rem'}
            ></Image> */}
            <Text>
              The Maya in the southern lowland region of what is today Guatemala
              famously reached its height around 250 CE and lasted until around
              900 CE. This period has been called a Golden Age of the Maya and
              has been designated by scholars as the Classic Period. It was in
              this time that the Maya ritual, writing, and calendrical systems
              had matured and reached widespread observance across the three
              subregions.
            </Text>
            <Text>
              {' '}
              It is during the Classic Period that the Maya they had organized
              into densely populated agricultural bureaucracies that built and
              occupied the large stone cities and monuments are left to us
              today. The Classic Period was also a time of intense competition
              in the Maya world which led at times to bloody rivalries between
              powerful city centers as they vied for territory, ritual and
              religious notoriety, and ultimately, the dominance of regional
              resources and wealth.{' '}
            </Text>
            <Center>
              <Image src={tikal} alt='tikal' width='50rem' rounded='xl'></Image>
            </Center>
            <Text>
              {' '}
              It is important to remember as we try to decipher the Maya that
              they were not a unified political entity but rather a collection
              of ritual ceremonial centers and city-states which shared a
              similar culture, language, writing system, rituals, and religious
              practices. It is evident that these centers grew in number to
              about 40 major and minor cities and that they were densely
              populated. Population estimates range from five thousand to fifty
              thousand people in each city.{' '}
            </Text>
            <Text>
              {' '}
              It is difficult to define the specifics of a culture that had
              already thrived and collapsed prior to the discovery of the
              Americas in the 15th century. This difficulty is doubled by the
              fact that many of what had existed of the Classic Maya codices and
              texts were sadistically burned following the arrival of the
              Spanish and has been lost to us forever as a result. What remains
              of this culture are the native Guatemalans (40% of which are the
              living decedents of the Maya) and its monumental architecture –
              palaces, pyramids, temples, and stone plazas – which are
              plentifully adorned with the now-famous Maya writing, glyphs, and
              pictograms in stone relief.
            </Text>
            <Text>
              {' '}
              These remnants give life to the things that the Maya viewed as
              important and worthy of remembrance, and what is clear about what
              was important for the Maya is that religion and ritual was a part
              of everything that they had done during the golden age of the
              Classic Period. To better understand the still mysterious
              Mesoamerican world of the Maya, we have selected four aspects that
              we will focus on in detail throughout this website.
            </Text>
            <Text>
              These aspects include the religion, social structure, agriculture,
              and architecture of the Classic Period. Click through the sections
              on our homepage to learn more about the Classic Maya.
            </Text>
          </Stack>
        </Box>
      </Center>
    </GridItem>
  )
}

export default ProjectPage
