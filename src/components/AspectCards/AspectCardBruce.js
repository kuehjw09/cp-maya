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
import background from '../../images/000018.jpg'

export default function AspectCardBruce() {
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
              src={background}
              alt='maya architecture'
              objectFit={'cover'}
              transition={'0.3s ease-in-out'}
              width={'fill'}
              height={'297px'}
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
          </Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
            isTruncated
          >
            Classic Period Maya Architecture
          </Heading>
          <Text color={'gray.500'} noOfLines={5}>
            Architecture plays an important role in understanding the Maya
            civilization. The layout of cities and the symbols engraved into the
            architecture provide insight into the social structure, religion,
            and culture. The Maya had different architectural styles depending
            on the region, which were affected by customs and traditions as well
            as environmental factors, such as landscape.
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar src={''} alt={'Author'} name='Bruce Thao' bg='green.500' />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Bruce</Text>
            <Text color={'gray.500'}>Dec 06, 2021 · 6min read</Text>
          </Stack>
        </Stack>
      </Box>
    </LinkBox>
  )
}
