import { Helmet } from 'react-helmet'
import Lottie from 'react-lottie'
import { useNavigate } from 'react-router-dom'

import { Button, Heading, Text } from '@chakra-ui/react'

import helloAnimation from '../../../assets/lottie/hello-piggy.json'

const Welcome = () => {
  const navigate = useNavigate()

  const handleNextStep = () => {
    console.log('HIT')
    navigate('/onboarding?step=income')
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: helloAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <>
      <Helmet>
        <title>Witaj</title>
      </Helmet>

      <Lottie options={defaultOptions} height="350px" width={'300px'} />

      <Heading as={'h3'}>Witaj w Świnkappce!</Heading>
      <br />
      <Text as={'h4'}>
        Razem uda nam się w łatwy sposób zaoszczędzic na twoje cele!
      </Text>
      <br />
      <Text as={'p'}>
        Przed tobą kilka prostych kroków aby rozpocząc swoją przygodę z
        finansami.
      </Text>

      <Button
        type="submit"
        colorScheme="green"
        mt="8"
        w="full"
        border="5px solid"
        borderColor="green.300"
        bg="green.200"
        color="green.500"
        _hover={{
          bg: 'green.300',
        }}
        _active={{
          bg: 'green.300',
        }}
        onClick={() => handleNextStep()}
      >
        Zaczynajmy
      </Button>
    </>
  )
}

export default Welcome
