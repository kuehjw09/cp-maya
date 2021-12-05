import React from 'react'
import { Text, Tooltip } from '@chakra-ui/react'

const ProjectCite = (props) => {
  return (
    <Tooltip
      label={
        <Text as='cite' fontSize={'sm'}>
          <n /> Source: {props.cite}
        </Text>
      }
    >
      <Text
        as='sup'
        cursor={'pointer'}
        fontSize={'xs'}
        color={props.color + '.400'}
        fontWeight={'semibold'}
      >
        <n />
        {props.num}{' '}
      </Text>
    </Tooltip>
  )
}

export default ProjectCite
