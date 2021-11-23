import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Badge,
} from '@chakra-ui/react'

import { LinkBox, LinkOverlay } from '@chakra-ui/react'

export default function AspectCardBruce() {
  return (
    <Center py={6}>
      <LinkBox>
        <Box
          maxW={'445px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}
        >
          <LinkOverlay href='/maya-architecture'>
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
                src={
                  'https://blog.xcaret.com/en/wp-content/uploads/2020/02/blog-xichen-50-1080x640.jpg'
                }
                alt='maya architecture'
                objectFit={'cover'}
                transition={'0.3s ease-in-out'}
                width={'fill'}
                height={'297px'}
                _hover={{
                  transform: 'scale(1.05)',
                }}
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
              <Badge borderRadius='full' px='2' colorScheme='green'>
                Architecture
              </Badge>
              <Badge
                borderRadius='full'
                px='2'
                colorScheme='blue'
                variant='subtle'
              >
                Art
              </Badge>
            </Stack>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}
              isTruncated
            >
              Art and Architectural Achievments
            </Heading>
            <Text color={'gray.500'}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </Text>
          </Stack>
          <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
            <Avatar src={''} alt={'Author'} name='Bruce Thao' bg='green.500' />
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}>Bruce</Text>
              <Text color={'gray.500'}>Oct 10, 2021 · 6min read</Text>
            </Stack>
          </Stack>
        </Box>
      </LinkBox>
    </Center>
  )
}
