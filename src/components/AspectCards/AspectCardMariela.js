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
import background from '../../images/000017.jpg'
export default function AspectCardMariela() {
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
        <LinkOverlay href='/maya-agriculture'>
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
              alt='maya agriculture'
              objectFit={'cover'}
              transition='0.3s ease-in-out'
              width={'120%'}
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
              colorScheme='yellow'
              variant='subtle'
            >
              Agriculture
            </Badge>
            <Badge borderRadius='full' px='2' colorScheme='red'>
              Warfare
            </Badge>
          </Stack>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}
            isTruncated
          >
            Mayan Agriculture and Warfare
          </Heading>
          <Text color={'gray.500'} noOfLines={5}>
            There was a myth that went around with historians that talked about
            how the Classic Mayan Civilization were a very peaceful civilization
            just because of their golden age of constructing their own Solar
            Calendar and their temples. Essentially, they were a violent
            civilization because their significant wars were always in their own
            cities rather than other civilizations. Their collapse is still a
            mystery for many historians, however, it is known that the Mayans
            suffered poor harvesting which led to kings taking over major cities
            and also sacrificing their enemies. Although they fought wars and
            even built temples or walls to show how many wars they fought some
            of them collapsed or were broken down by other Mayan kings or the
            Spainards.
          </Text>
        </Stack>
        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={''}
            alt={'Author'}
            name='Mariela Aranda'
            bg={'orange.400'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Mariela</Text>
            <Text color={'gray.500'}>Dec 06, 2021 · 6min read</Text>
          </Stack>
        </Stack>
      </Box>
    </LinkBox>
  )
}
