import React from 'react'
import { useHistory } from 'react-router-dom'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Stack,
  GridItem,
  Heading,
  Text,
  Center,
} from '@chakra-ui/react'

// import { HomeIcon } from '@chakra-ui/icons'
// import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'

export default function Nav() {
  const history = useHistory()

  const handleRoute = (props) => {
    props === 1
      ? history.push('references-page')
      : history.push('/project-page')
  }
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
            <HStack spacing={8} alignItems={'center'}>
              <HStack as={'nav'} spacing={4} display={'flex'}>
                <Link
                  p={3}
                  rounded={'md'}
                  _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                  }}
                  href={'/homepage'}
                >
                  Home
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
                  textAlign={'center'}
                  fontSize={{ base: 'md', sm: '2xl', md: '4xl' }}
                >
                  The Classic Period Maya,{' '}
                </Heading>
                <Stack direction={'row-reverse'}>
                  <Text
                    textAlign='right'
                    fontWeight={'semibold'}
                    fontSize={{ base: 'xs', md: 'lg' }}
                  >
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
                  <MenuItem
                    onClick={() => {
                      handleRoute(1)
                    }}
                  >
                    References
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleRoute()
                    }}
                  >
                    Project details page
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
        </Box>
      </GridItem>
    </>
  )
}
