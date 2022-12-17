import { useState } from 'react'
import { Helmet } from 'react-helmet'
import Lottie from 'react-lottie'
import { useNavigate } from 'react-router-dom'

import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react'

import { NavButton } from '../components'

import confettiAnimation from '../../../assets/lottie/confetti.json'

const OnboadingGoalForm = () => {
  const [celebrationModalToggle, setCelebrationModalToggle] =
    useState<boolean>(false)
  const navigate = useNavigate()

  const handleNextStep = () => {
    console.log('HIT')
    setCelebrationModalToggle(true)
    setTimeout(() => {
      navigate('/dashboard')
    }, 2000)
  }
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: confettiAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <>
      <Helmet>
        <title>OnboadingGoalForm</title>
      </Helmet>

      {celebrationModalToggle && (
        <Box
          zIndex={999}
          height="100%"
          width={'100%'}
          position="fixed"
          top={0}
          left={0}
          backgroundColor={'white'}
        >
          <Lottie options={defaultOptions} height="100%" width={'100%'} />
        </Box>
      )}
      <Container
        maxW="xs"
        textAlign={'center'}
        color="gray.500"
        h="90vh"
        as={VStack}
        justifyContent="center"
        spacing={7}
      >
        <Heading as={'h3'} color="gray.600">
          Stwórz swój pierwszy cel!
        </Heading>
        <Text>
          Wprowadź twoje miesięczne przychody, na przykład zarobek czy
          kieszonkowe od rodziców
        </Text>

        <NavButton onClick={() => handleNextStep()}>Zakończ</NavButton>
      </Container>
    </>
  )
}

export default OnboadingGoalForm
