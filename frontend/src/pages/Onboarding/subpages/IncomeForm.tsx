import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

import { Container, Heading, Input, Text, VStack } from '@chakra-ui/react'

import { FaCoins } from 'react-icons/fa'

import { NavButton } from '../components'

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
          Pierwszy krok
        </Heading>
        <Text>
          Wprowadź twoje miesięczne przychody, na przykład zarobek czy
          kieszonkowe od rodziców
        </Text>

        <Input
          _placeholder={{
            color: 'gray.400',
            fontWeight: '00',
          }}
          border="5px solid"
          size="lg"
          borderColor="gray.200"
          color="gray.600"
          autoComplete="off"
          textAlign={"center"}
          fontWeight="600"
          _focus={{
            borderColor: 'blue.100',
            bg: 'blue.50',
            boxShadow: 'none',
          }}
          {...inputProps}
        />

        <NavButton onClick={() => handleNextStep()}>Dalej</NavButton>
      </Container>
    </>
  )
}

export default IncomeForm
