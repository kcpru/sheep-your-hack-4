import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChakraProvider } from '@chakra-ui/react'

// import '@fontsource/bitter/variable.css'
import '@fontsource/bitter/700.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/600.css'

import App from './App'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
