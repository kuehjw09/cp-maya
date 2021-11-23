import React from 'react'
import { Grid } from '@chakra-ui/react'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Grid
        minH='100vh'
        templateColumns='repeat(4, 1fr)'
        templateRows='max-content'
        gap={6}
        p={3}
      >
        <Nav />
        {children}
      </Grid>
      <Footer />
    </>
  )
}

export default Layout
