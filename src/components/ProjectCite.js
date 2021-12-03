import React from 'react'
import { Text } from '@chakra-ui/react'

const ProjectCite = (props) => {
  return (
    <Text as='cite' fontSize={'sm'}>
      Image Source: {props.cite}
    </Text>
  )
}

export default ProjectCite
