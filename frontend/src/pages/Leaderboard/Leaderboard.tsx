import { Helmet } from 'react-helmet'

import { Box, HStack, Heading, IconButton, VStack } from '@chakra-ui/react'

import { BsFillPersonPlusFill } from 'react-icons/bs'

import { UserCard } from './components'

const Leaderboard = () => {
  return (
    <>
      <Helmet>
        <title>Znajomi</title>
      </Helmet>

      <HStack justifyContent="space-between">
        <Heading as="h2" my="5" color="gray.600" fontSize="28">
          Ranking znajomych
        </Heading>

        <IconButton
          color="gray.600"
          border=""
          icon={<BsFillPersonPlusFill />}
          aria-label={'Dodaj cel'}
          fontSize="2xl"
        />
      </HStack>

      <VStack spacing={2}>
        {[
          {
            order: 0,
            nickname: 'Janek',
            points: 54,
            image:
              'https://avataaars.io/?avatarStyle=Transparent&topType=Hat&accessoriesType=Round&facialHairType=Blank&clotheType=Hoodie&clotheColor=PastelOrange&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
          },
          {
            order: 1,
            nickname: 'Paweł',
            points: 34,
            image:
              'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Wink&eyebrowType=UpDown&mouthType=Default&skinColor=Pale',
          },
          {
            order: 2,
            nickname: 'Gosia',
            points: 20,
            image:
              'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light',
          },
          {
            order: 3,
            nickname: 'Adam',
            points: 13,
            image:
              'https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Red&eyeType=WinkWacky&eyebrowType=UpDown&mouthType=Default&skinColor=Pale',
          },
          {
            order: 4,
            nickname: 'Agnieszka',
            points: 4,
            image:
              'https://avataaars.io/?avatarStyle=Transparent&topType=LongHairDreads&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=PastelBlue&eyeType=Squint&eyebrowType=UpDown&mouthType=Smile&skinColor=Pale',
          },
        ].map((props) => (
          <UserCard {...props} />
        ))}
      </VStack>

      <Box h={32}></Box>
    </>
  )
}
export default Leaderboard
