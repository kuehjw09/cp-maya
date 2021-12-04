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
import background from '../../images/000016.jpg'

export default function AspectCardJalaine() {
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
        <LinkOverlay href='/maya-social-structure'>
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
              alt='maya social structure'
              objectFit={'cover'}
              transition='0.3s ease-in-out'
              width={'full'}
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
              colorScheme='orange'
              variant='subtle'
            >
              Social Structure
            </Badge>
            <Badge borderRadius='full' px='2' colorScheme='pink'>
              Gender Roles
            </Badge>
          </Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
            isTruncated
          >
            Maya Social Pyramid
          </Heading>
          <Text color={'gray.500'} noOfLines={5}>
            The social structure of a society will determine it’s destiny. While
            often times the social structure of a society, parictualry how a
            society treats it’s working class and poor, is often times dismissed
            as something which isn’t a priority or important. However, it truly
            is. Social structure will determine the strength and stability of
            the economy, business production and warfare. One can see this
            through Mayan empire. After reading this, hopefully, the reader will
            understand how the Mayans social structure shaped it’s overall
            economy and society.
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar src={''} alt={'Author'} name='Jalaine Olks' bg='pink.400' />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Jalaine</Text>
            <Text color={'gray.500'}>Oct 10, 2021 · 6min read</Text>
          </Stack>
        </Stack>
      </Box>
    </LinkBox>
  )
}
