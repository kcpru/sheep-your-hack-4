import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import { mode } from '@chakra-ui/theme-tools'

const components = {
  Input: {
    baseStyle: {
      field: {
        fontWeight: 'normal',
      },
    },
    variants: {
      filled: (props: StyleFunctionProps) => ({
        field: {
          bg: mode('gray.100', 'gray.600')(props),
          _hover: {
            borderColor: mode('gray.300', 'gray.500')(props),
            bg: mode('gray.100', 'gray.600')(props),
          },
          _focus: {
            bg: mode('blue.50', 'blue.800')(props),
            borderColor: mode('blue.200', 'blue.600')(props),
            color: mode('blue.900', 'blue.100')(props),
          },
        },
      }),
    },
  },
  Textarea: {
    baseStyle: {
      fontWeight: 'normal',
    },
    variants: {
      filled: (props: StyleFunctionProps) => ({
        bg: mode('gray.100', 'gray.600')(props),
        _hover: {
          borderColor: mode('gray.300', 'gray.500')(props),
          bg: mode('gray.100', 'gray.600')(props),
        },
        _focus: {
          bg: mode('blue.50', 'blue.800')(props),
          borderColor: mode('blue.200', 'blue.600')(props),
          color: mode('blue.900', 'blue.100')(props),
        },
      }),
    },
  },
}

export default components
