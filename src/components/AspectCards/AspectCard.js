import {
  Box,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Badge,
} from '@chakra-ui/react'

import { LinkBox, LinkOverlay } from '@chakra-ui/react'
import background from '../../images/000019.jpg'
export default function AspectCard() {
  return (
    <LinkBox>
      <Box
        maxW={'445px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
        transition='0.3s ease-in-out'
        _hover={{
          transform: 'scale(1.02)',
        }}
      >
        <LinkOverlay href='/maya-religion'>
          <Box
            h={'210px'}
            bg={'blackAlpha.100'}
            mt={-6}
            mx={-6}
            mb={-9}
            pos={'relative'}
          >
            <Image
              transform='scale(1.0)'
              src={background}
              alt='maya religion'
              objectFit={'cover'}
              transition='0.3s ease-in-out'
              height='297px'
            />
          </Box>
        </LinkOverlay>
        <Stack mt={36}>
          <Text
            color={'primary'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}
          >
            Teaching Tool
          </Text>
          <Stack direction='row'>
            <Badge
              borderRadius='full'
              px='2'
              colorScheme='purple'
              variant='subtle'
            >
              Cosmology
            </Badge>
            <Badge borderRadius='full' px='2' colorScheme='teal'>
              Religion
            </Badge>
          </Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
            isTruncated
          >
            Maya Ritual Life, Mythology, and Cosmology
          </Heading>
          <Text color={'gray.500'}>
            Religion and ritual was integrated into every facet of Maya society
            during the Classic Period. To better understand the Mesoamerican
            civilization of the Maya, the best place to begin is in the study of
            their religious beliefs, rituals, and creation myth.
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar src={''} alt={'Author'} name='Jesse Kuehl' bg='teal.400' />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Jesse</Text>
            <Text color={'gray.500'}>Oct 10, 2021 · 6min read</Text>
          </Stack>
        </Stack>
      </Box>
    </LinkBox>
  )
}
