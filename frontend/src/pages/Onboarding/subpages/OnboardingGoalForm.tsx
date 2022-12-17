import { useState } from 'react'
import { Helmet } from 'react-helmet'
import Lottie from 'react-lottie'
import { useNavigate } from 'react-router-dom'

import { Box, Button, Heading, Text } from '@chakra-ui/react'

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
          position="absolute"
          backgroundColor={'white'}
        >
          <Lottie options={defaultOptions} height="100%" width={'100%'} />
        </Box>
      )}

      <Heading as={'h3'}>Stwórz swój pierwszy cel!</Heading>
      <Text>
        Wprowadź twoje miesięczne przychody, na przykład zarobek czy kieszonkowe
        od rodziców
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
        Dalej
      </Button>
    </>
  )
}

export default OnboadingGoalForm
