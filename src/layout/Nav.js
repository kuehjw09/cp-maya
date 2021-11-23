import React from 'react'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  GridItem,
  Heading,
  Text,
  Center,
} from '@chakra-ui/react'

// import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const Links = ['Home']

const NavLink = (Links) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={Links[0] ? '/homepage' : '/quiz'}
    onClick={() => {
      console.log()
    }}
  >
    {Links}
  </Link>
)

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <GridItem colSpan='5'>
        <Box
          bg={useColorModeValue('whiteAlpha.400', 'blackAlpha.400')}
          p={6}
          rounded={'xl'}
          boxShadow={'xl'}
        >
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}
              >
                <Link
                  p={3}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                  }}
                  href={Links[0] ? '/homepage' : '/quiz'}
                >
                  Homepage
                </Link>
              </HStack>
            </HStack>
            <Center>
              <Box
                maxW='30rem'
                display={{ base: 'inline', md: 'inline' }}
                direction={'row-reverse'}
              >
                <Heading
                  fontWeight={'thin'}
                  fontSize={{ base: '2xl', md: '4xl' }}
                >
                  The Classic Period Maya,{' '}
                </Heading>
                <Stack direction={'row-reverse'}>
                  <Text textAlign='right' fontWeight={'semibold'}>
                    250 - 900 C.E.
                  </Text>
                  <Text></Text>
                </Stack>
              </Box>
            </Center>
            <Flex alignItems={'center'}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar
                    size={'xl'}
                    borderColor='orange.500'
                    borderWidth='2px'
                    src={
                      'https://images.squarespace-cdn.com/content/v1/58274743e6f2e13993af0ae3/1588454867627-REBSBXPZN1WKJ4098F77/Quetzalcoatl.png?format=1500w'
                    }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>Meet the authors</MenuItem>
                  <MenuItem>Project details page</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </GridItem>
    </>
  )
}
