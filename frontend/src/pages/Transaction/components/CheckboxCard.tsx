import { Box, Flex, useColorModeValue, useRadio } from '@chakra-ui/react'

const CheckboxCard = (props) => {
  const { getCheckboxProps, getInputProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label" flex={1}>
      <input {...input} hidden />

      <Flex
        {...checkbox}
        cursor="pointer"
        borderRadius="md"
        bg={useColorModeValue('gray.100', 'gray.600')}
        color={useColorModeValue('gray.500', 'gray.300')}
        fontWeight={600}
        border={'5px solid'}
        borderColor="gray.200"
        textAlign="center"
        h="100%"
        justifyContent="center"
        alignItems="center"
        userSelect="none"
        transition={'all 0.1s ease-in-out'}
        _hover={{
          bg: useColorModeValue('gray.200', 'gray.500'),
        }}
        _checked={{
          bg: useColorModeValue('green.100', 'green.200'),
          color: useColorModeValue('green.600', 'green.600'),
          borderColor: useColorModeValue('green.200', 'green.600'),
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Flex>
    </Box>
  )
}

export default CheckboxCard
