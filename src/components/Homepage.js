import { GridItem, SimpleGrid } from '@chakra-ui/layout'
import React from 'react'

import AspectCard from './AspectCards/AspectCard'
import AspectCardJalaine from './AspectCards/AspectCardJalaine'
import AspectCardMariela from './AspectCards/AspectCardMariela'
import AspectCardBruce from './AspectCards/AspectCardBruce'

function Homepage() {
  return (
    <>
      <GridItem colStart={1} colSpan={4}>
        <SimpleGrid columns={{ xl: 1, lg: 2, sm: 1 }}>
          <AspectCard />
          <AspectCardJalaine />
          <AspectCardMariela />
          <AspectCardBruce />
        </SimpleGrid>
      </GridItem>
    </>
  )
}

export default Homepage
