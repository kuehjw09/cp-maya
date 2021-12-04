import { Center, Box, Image, Text } from '@chakra-ui/react'

import ProjectCite from './ProjectCite'

const ProjectImage = (props) => {
  return (
    <Center p={3}>
      <Box my={9}>
        <Image src={props.img} alt={props.alt} width='30rem' />
        <Text fontSize={'xs'} as='cite'>
          {props.cite}{' '}
        </Text>
      </Box>
    </Center>
  )
}

export default ProjectImage
