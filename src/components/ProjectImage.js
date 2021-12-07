import React from 'react'
import { Center, Box, Image, Text } from '@chakra-ui/react'

const ProjectImage = (props) => {
  return (
    <Center>
      <Box my={9} p={3} rounded={'md'} boxShadow={'sm'}>
        <Image
          src={props.img}
          alt={props.alt}
          width={() => (props.size ? props.size : '33rem')}
        />
        <Text fontSize={'xs'} as='cite' fontWeight={'semibold'}>
          {props.cite}{' '}
        </Text>
      </Box>
    </Center>
  )
}

export default ProjectImage
