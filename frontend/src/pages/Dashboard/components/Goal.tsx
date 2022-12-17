import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Image,
  Progress,
  Tag,
  VStack,
} from '@chakra-ui/react'

interface GoalProps {
  cost: string
  name: string
  currentAmount: string
}

const Goal = ({ cost, name, currentAmount, image }: GoalProps) => {
  const numberCost = Number(cost),
    numberCurrentAmount = Number(currentAmount)
  const progress = (numberCurrentAmount / numberCost) * 100
  const missingAmount = numberCost - numberCurrentAmount

  return (
    <Box
      bg="gray.100"
      border="5px solid"
      w="full"
      rounded="xl"
      borderColor="gray.200"
      color="gray.600"
    >
      <Flex w="full" p={4}>
        <AspectRatio ratio={1} flex={1} minW="24">
          <Image src={image} rounded="lg" mb="3" />
        </AspectRatio>

        <VStack ml={5} flex={3} alignItems="start" spacing={2}>
          <Heading as="h2">{name}</Heading>

          <Tag size="lg" fontWeight={600} bg="gray.200" color="gray.600">
            {cost} zł
          </Tag>

          <Progress
            value={progress}
            rounded="lg"
            colorScheme={'teal'}
            bg="gray.300"
            w="full"
          />
        </VStack>
      </Flex>

      <Box
        p={1}
        textAlign="center"
        fontSize="lg"
        borderTop="5px solid"
        borderColor="gray.200"
        fontWeight={600}
        color="gray.400"
        bg="gray.200"
      >
        Potrzebujesz jeszcze {missingAmount} zł
      </Box>
    </Box>
  )
}

export default Goal
