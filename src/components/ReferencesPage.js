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
  List,
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
            Use this page to explore further, or to view the sources curated in
            our research.
          </Text>
          <Stack fontFamily={'monospace'} fontSize={'sm'} py={9} spacing={3}>
            <List id='Alphabeta' spacing={3}>
              <li>
                Carrasco, David. Religions of Mesoamerica. Second Edition ed.
                Long Grove, IL: Waveland Press, Inc., 2014, 113-147.
              </li>
              <li>
                Davies, Diane E. Maya Gods and Religious Beliefs. Maya
                Archaeologist.{' '}
                <a
                  color='teal.500'
                  href='https://www.mayaarchaeologist.co.uk/public-resources/maya-world/maya-gods-religious-beliefs/'
                  isExternal={true}
                >
                  Link.
                </a>
              </li>

              <li>
                Kelly, David H. Deciphering Mayan Script. 2nd ed. Austin Texas:
                University of Austin Texas, 1976.
              </li>
              <li>
                Lessing, Erich, Temple of Quetzalcoatl and Tlaloc; Mariposa
                Palace; Detail of Pillars with reliefs of Quetzal Birds, (N.Y.:
                Art Resource)
              </li>
              <li>
                Liderman, Herbert. Culture, infancy and the Human experience of
                Mayans. Vol. 1 . N.p.: Harper Collins, 1977.
              </li>
              <li>
                Miller, Mary. Mayance Nations and Languages. 2nd ed. Vol. 1 .
                N.p.: W.W Norton, 1995.
              </li>
              <li>
                Parmington, Alexander, Space and Sculpture of the Classic Maya
                City, (New York: Cambridge University Press, 2011)
              </li>
              <li>
                Pollard, Elizabeth, et al., "Worlds Together, Worlds Apart,"
                Consise Second Edition ed. Vol: 1. pages 375-378.
              </li>

              <li>
                Tarlton Law Library . Last modified November 8, 2018.{' '}
                <a
                  color='teal.500'
                  href='https://tarlton.law.utexas.edu/aztec-and-maya-law/maya-social-structure'
                  isExternal
                >
                  {' '}
                  Link.{' '}
                </a>
              </li>
              <li>
                Tedlock, Dennis. Popol Vuh: The Mayan Book of the Dawn of Life.
                Revised Edition ed. New York: Simon & Schuster, 1996.
              </li>
              <li>
                Webster, David. "The Uses and Abuses of the Anicent Maya ." PDF
                . Last modified , 2009.{' '}
                <a
                  color='teal.500'
                  href='https://anth.la.psu.edu/documents/Webster_GermanyMaya.pdf'
                  isExternal
                >
                  Link
                </a>
              </li>
              <li>
                Willey, Gordan. "The Collapse of Classic Mayan Civilization."
                University of Chicago Press 1 (April 8, 1971): 1-18.
              </li>
            </List>
          </Stack>
        </Box>
      </Center>
    </GridItem>
  )
}

export default ReferencesPage
