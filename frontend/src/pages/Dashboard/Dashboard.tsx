import { Helmet } from 'react-helmet'

import {
  AspectRatio,
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Progress,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react'

import { AiOutlineAppstoreAdd } from 'react-icons/ai'

import { Goal, ProgressChart } from './components'

import { useAuth } from '../../hooks'

const Dashboard = () => {
  const { user } = useAuth()

  console.log(user)
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <ProgressChart />

      <HStack justifyContent="space-between">
        <Heading as="h2" my="5" color="gray.600">
          Twoje cele
        </Heading>

        <IconButton
          icon={<AiOutlineAppstoreAdd />}
          aria-label={'Dodaj cel'}
          fontSize="2xl"
        />
      </HStack>

      <VStack spacing={3} w="full">
        {[
          {
            cost: '350',
            name: 'Rower',
            currentAmount: '235',
            image:
              'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fola4kids.pl%2Fuserdata%2Fpublic%2Fgfx%2F48695%2Frower-dzieciecy.jpg&f=1&nofb=1&ipt=b5de1f09c36292ac4333d660c55df81952a8ab4f4d0c43ed4dc7086df4cccfcf&ipo=images',
          },
          {
            cost: '125',
            name: 'Buty',
            currentAmount: '35',
            image:
              'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1202%2F6102%2Fproducts%2Fvans-old-skool-black-white-2.jpg%3Fv%3D1482167737&f=1&nofb=1&ipt=a367918f34505059761dbe2844fd6e19fe0f135e91e474305069ad2659d93352&ipo=images',
          },
        ].map((props, idx) => (
          <Goal {...props} key={idx} />
        ))}
      </VStack>
    </>
  )
}

export default Dashboard
