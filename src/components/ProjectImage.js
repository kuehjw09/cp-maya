import { Center, Box, Image } from '@chakra-ui/react'

import ProjectCite from './ProjectCite'

const ProjectImage = (props) => {
  return (
    <Center p={3}>
      <Box my={9}>
        <Image src={props.img} alt={props.alt} width='30rem' />
        <ProjectCite cite={props.cite} />
      </Box>
    </Center>
  )
}

export default ProjectImage
