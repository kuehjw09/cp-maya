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
            Use this page to explore further, or to view the sources of
            information used in our research.
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
              Archaeologist.
            </Text>
            <Text>
              [4] Pollard, Elizabeth, et al., "Worlds Together, Worlds Apart,"
              Consise Second Edition ed. Vol: 1. pages 375-378.
            </Text>
          </Stack>
        </Box>
      </Center>
    </GridItem>
  )
}

export default ReferencesPage
