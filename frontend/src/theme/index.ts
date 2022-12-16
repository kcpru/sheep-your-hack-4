import { extendTheme } from '@chakra-ui/react'

import components from './components'

import config from './config'
import fonts from './fonts'
import styles from './styles'

const theme = extendTheme({
  components,
  styles,
  fonts,
  config,
})

export default theme
