import { GridItem, SimpleGrid, Center } from '@chakra-ui/layout'
import React from 'react'

import AspectCard from './AspectCards/AspectCard'
import AspectCardJalaine from './AspectCards/AspectCardJalaine'
import AspectCardMariela from './AspectCards/AspectCardMariela'
import AspectCardBruce from './AspectCards/AspectCardBruce'

function Homepage() {
  return (
    <>
      <GridItem colStart={1} colSpan={5}>
        <Center>
          <SimpleGrid columns={{ base: 1 }} spacing={6} maxW={'100vw'}>
            <AspectCard />
            <AspectCardJalaine />
            <AspectCardMariela />
            <AspectCardBruce />
          </SimpleGrid>
        </Center>
      </GridItem>
    </>
  )
}

export default Homepage
