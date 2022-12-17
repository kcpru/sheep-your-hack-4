import { Helmet } from 'react-helmet'
import Lottie from 'react-lottie'
import { useNavigate } from 'react-router-dom'

import { Container, Heading, Text } from '@chakra-ui/react'

import { NavButton } from '../components'

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

      <Container maxW="sm" textAlign={'center'} color="gray.500">
        <Heading as={'h3'} color="gray.600">
          Cześć, jestem{' '}
          <Text as="span" color="#f28f8b">
            Świnkappka
          </Text>
          !
        </Heading>
        <br />
        <Text as={'h4'}>
          Razem uda nam się w łatwy sposób zaoszczędzic na twoje cele!
        </Text>
        <br />
        <Text as={'p'}>
          Przed tobą kilka prostych kroków aby rozpocząc swoją przygodę z
          finansami.
        </Text>

        <NavButton onClick={() => handleNextStep()}>Zaczynajmy</NavButton>
      </Container>
    </>
  )
}

export default Welcome
