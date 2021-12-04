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
  Divider,
  Flex,
  VStack,
} from '@chakra-ui/react'

import map from '../images/000005.png'
import tikal from '../images/000002.jpg'
import pyramids from '../images/000004.jpg'
import AspectHeader from './Aspects/AspectHeader'

function ProjectPage() {
  return (
    <GridItem colStart={1} colSpan={4}>
      <Center>
        <Flex
          h={'40rem'}
          maxH={'60vw'}
          maxW={'100vw'}
          backgroundImage={pyramids}
          backgroundSize={'cover'}
          backgroundPosition={'center center'}
          mb={9}
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
        <Stack spacing={3} fontWeight={'medium'}>
          <Box>
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
                width={'40rem'}
                py={9}
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

            <Text>
              {' '}
              At the height of Maya civilization these centers numbered roughly
              40 major and minor cities that were densely populated. Population
              estimates range from five thousand to fifty thousand people in
              each city.{' '}
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
              What remains of the Maya are the native Guatemalans (40% of which
              are living decedents of the Maya) and their palaces, pyramids,
              temples, and stone plazas which are plentifully adorned with the
              their writing, glyphs, and pictograms.
            </Text>
            <Text>
              We have focused on four aspects of Classic Period Maya
              civilization: religion, social structure, agriculture, and
              architecture. Click through the sections on our homepage to learn
              more about the Classic Period Maya.
            </Text>
          </Box>
        </Stack>
      </Center>
    </GridItem>
  )
}

export default ProjectPage
