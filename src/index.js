import { ColorModeScript } from '@chakra-ui/react'
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'

import App from './App'
import Theme from './layout/Theme'

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={Theme}>
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
)
