import { Flex, HStack, Heading, Image, Spacer } from '@chakra-ui/react'

const UserCard = ({ nickname, points, image, order }) => {
  let color = {
    bg: 'gray.100',
    font: 'gray.600',
    card: 'gray.200',
    fontCard: 'gray.400',
  }

  switch (order) {
    case 0:
      color = {
        bg: 'yellow.200',
        font: 'yellow.500',
        card: 'yellow.300',
        fontCard: 'yellow.400',
      }
      break
    case 1:
      color = {
        bg: 'gray.300',
        font: 'gray.500',
        card: 'gray.400',
        fontCard: 'gray.200',
      }
      break
    case 2:
      color = {
        bg: 'orange.400',
        font: 'orange.100',
        card: 'orange.500',
        fontCard: 'orange.200',
      }
      break
  }

  return (
    <HStack
      w="full"
      bg={color.bg}
      rounded="xl"
      border="5px solid"
      borderColor={color.card}
      fontWeight={600}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex
        bg={color.card}
        justifyContent="center"
        alignItems={'center'}
        color={color.fontCard}
        fontWeight={600}
        fontSize="3xl"
        w={14}
        h="16"
      >
        {order + 1}.
      </Flex>
      <Image src={image} h="16" p={2} />

      <Heading as="h3" fontSize="xl" color={color.font}>
        {nickname}
      </Heading>

      <Spacer />

      <Flex
        justifyContent="center"
        alignItems={'center'}
        color={color.fontCard}
        fontWeight={600}
        fontSize="3xl"
        w={20}
        h="16"
      >
        {points}
      </Flex>
    </HStack>
  )
}

export default UserCard
