import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

import { Button, Heading, Input, Text } from '@chakra-ui/react'

import { FaCoins } from 'react-icons/fa'

const ExpensesForm = () => {
  const inputProps = {
    type: 'number',
    name: 'income',
    label: 'Przychód',
    placeholder: '100',
    icon: FaCoins,
    // value: formData?.password as string,
    // onChange: (e: any) =>
    //   setFormData((prev: any) => ({
    //     ...prev,
    //     password: e.target.value,
    //   })),
  }

  const navigate = useNavigate()

  const handleNextStep = () => {
    navigate('/onboarding?step=goal')
  }
  return (
    <>
      <Helmet>
        <title>ExpensesForm</title>
      </Helmet>

      <Heading as={'h3'}>Krok drugi:</Heading>
      <Text>
        Świetnie ci idzie! Kolejnym krokiem jest policzenie twoich miesięcznych
        wydatków, zastanów się ile wydałeś w ostatnim miesiącu
      </Text>
      <Input {...inputProps} />

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
        Do ostatniego kroku
      </Button>
    </>
  )
}

export default ExpensesForm
