import { Helmet } from 'react-helmet'

import { Box, HStack, Heading, IconButton, VStack } from '@chakra-ui/react'

import { AiFillStar } from 'react-icons/ai'
import { BsFillPersonPlusFill } from 'react-icons/bs'

import { AchievmentCard } from './components'

const Achievements = () => {
  return (
    <>
      <Helmet>
        <title>Osiągnięcia</title>
      </Helmet>

      <HStack justifyContent="space-between">
        <Heading as="h2" my="5" color="gray.600" fontSize="28">
          Osiągnięcia
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
            title: 'Pierwszy cel!',
            description: 'Udało Ci się spełnić pierwszy cel, oby tak dalej!',
            isEarned: true,
          },
          {
            title: 'Pierwsze oszczędności',
            description: 'Oszczędziłeś swoje pierwsze 100 zł',
            isEarned: false,
          },
          {
            title: 'Droga do milionera',
            description: 'Oszczędziłeś swoje pierwsze 1000 zł',
            isEarned: false,
          },
          {
            title: 'Mistrz planowania',
            description: 'Zrealizowałeś swoje trzy cele, jesteś niepowtrzymany',
            isEarned: false,
          },
          {
            title: 'Pierwszy krok',
            description: 'Stworzyłeś swój pierwszy cel',
            isEarned: true,
          },
        ].map((props) => (
          <AchievmentCard {...props} key={props.title} />
        ))}
      </VStack>
      <HStack />

      <Box h={32}></Box>
    </>
  )
}

export default Achievements
