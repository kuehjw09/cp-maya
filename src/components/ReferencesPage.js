import React from 'react'
import {
  GridItem,
  Heading,
  Box,
  Center,
  Stack,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'

function ReferencesPage() {
  return (
    <GridItem colStart={1} colSpan={4}>
      <Center>
        <Box
          bg={useColorModeValue('whiteAlpha.400', 'blackAlpha.400')}
          rounded={'md'}
          boxShadow={'xl'}
          maxW={'80vw'}
          p={6}
        >
          <Heading fontWeight={'light'} pb={3}>
            References Page
          </Heading>{' '}
          <Text fontSize={'lg'}>
            Use this page to explore the Maya further, or to view the sources we
            used in our research.
          </Text>
          <Stack fontFamily={'monospace'} fontSize={'sm'} py={9} spacing={3}>
            <Text>
              [1] Tedlock, Dennis. Popol Vuh: The Mayan Book of the Dawn of
              Life. Revised Edition ed. New York: Simon & Schuster, 1996.
            </Text>
            <Text>
              [2] Carrasco, David. Religions of Mesoamerica. Second Edition ed.
              Long Grove, IL: Waveland Press, Inc., 2014, 113-147.
            </Text>
            <Text>
              [3] Davies, Diane E. Maya Gods and Religious Beliefs. Maya
              Archaeologist.{' '}
              <a
                color='teal.500'
                href='https://www.mayaarchaeologist.co.uk/public-resources/maya-world/maya-gods-religious-beliefs/'
                isExternal
              >
                Link
              </a>
            </Text>
            <Text>
              [4] Pollard, Elizabeth, et al., "Worlds Together, Worlds Apart,"
              Consise Second Edition ed. Vol: 1. pages 375-378.
            </Text>
            <Text>
              [5] Kelly, David H. Deciphering Mayan Script. 2nd ed. Austin
              Texas: University of Austin Texas, 1976 .
            </Text>
            <Text>
              [6] Miller, Mary. Mayance Nations and Languages. 2nd ed. Vol. 1 .
              N.p.: W.W Norton, 1995 .
            </Text>
            <Text>
              [7] Liderman, Herbert. Culture, infancy and the Human experience
              of Mayans. Vol. 1 . N.p.: Harper Collins, 1977 .
            </Text>
            <Text>
              [8] Tarlton Law Library . Last modified November 8, 2018 .{' '}
              <a
                color='teal.500'
                href='https://tarlton.law.utexas.edu/aztec-and-maya-law/maya-social-structure'
                isExternal
              >
                {' '}
                Link{' '}
              </a>
            </Text>
            <Text>
              [9] Willey, Gordan. "The Collapse of Classic Mayan Civilization."
              University of Chicago Press 1 (April 8, 1971): 1-18.
            </Text>
            <Text>
              [10] Webster, David. "The Uses and Abuses of the Anicent Maya ."
              PDF . Last modified , 2009.{' '}
              <a
                color='teal.500'
                href='https://anth.la.psu.edu/documents/Webster_GermanyMaya.pdf'
                isExternal
              >
                Link
              </a>
            </Text>
          </Stack>
        </Box>
      </Center>
    </GridItem>
  )
}

export default ReferencesPage
