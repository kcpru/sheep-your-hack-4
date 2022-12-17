import { Flex, HStack, Text } from '@chakra-ui/react'

const ProgressChart = () => {
  return (
    <HStack
      w="full"
      bg="teal.100"
      rounded="xl"
      border="5px solid"
      borderColor="teal.200"
      fontWeight={600}
      alignItems="stretch"
    >
      <Text flex={4} color="teal.400" p="3">
        W tym miesiącu możesz <br />
        wydać jeszcze
      </Text>

      <Flex
        bg="teal.200"
        justifyContent="center"
        alignItems={'center'}
        color="teal.400"
        fontWeight={600}
        fontSize="3xl"
        flex={2}
      >
        53 zł
      </Flex>
    </HStack>
  )
}

export default ProgressChart
