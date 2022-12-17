import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

import { Button, Heading, Input, Text } from '@chakra-ui/react'

import { FaCoins } from 'react-icons/fa'

const IncomeForm = () => {
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
    navigate('/onboarding?step=expenses')
  }
  return (
    <>
      <Helmet>
        <title>ExpensesForm</title>
      </Helmet>

      <Heading as={'h3'}>Krok pierwszy:</Heading>
      <Text>
        Wprowadź twoje miesięczne przychody, na przykład zarobek czy kieszonkowe
        od rodziców
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
        Dalej
      </Button>
    </>
  )
}

export default IncomeForm
