import {
  Box,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  Spacer,
} from '@chakra-ui/react'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const AchievmentCard = ({ title, description, isEarned }) => {
  const icon = isEarned ? AiFillStar : AiOutlineStar
  const color = isEarned ? 'green' : 'gray'

  return (
    <HStack
      w="full"
      bg={`${color}.100`}
      rounded="xl"
      border="5px solid"
      borderColor={`${color}.200`}
      p={3}
      fontWeight={600}
      alignItems="center"
    >
      <Icon as={icon} color={`${color}.600`} fontSize="3xl" mr={3} w={10} />

      <Box>
        <Heading as="h3" fontSize="xl" color={`${color}.500`}>
          {title}
        </Heading>

        <Box color={`${color}.400`}>{description}</Box>
      </Box>
    </HStack>
  )
}

export default AchievmentCard
