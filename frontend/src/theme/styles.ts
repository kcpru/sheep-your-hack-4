import { mode } from '@chakra-ui/theme-tools'
import { StyleFunctionProps } from '@chakra-ui/theme-tools'

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('#F6F6F6', 'gray.800')(props),
    },
  }),
}

export default styles
