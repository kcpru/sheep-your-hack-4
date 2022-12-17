import { useState } from 'react'
import { Helmet } from 'react-helmet'
import Lottie from 'react-lottie'
import { useNavigate } from 'react-router-dom'

import {
  Box,
  Button,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  useRadioGroup,
} from '@chakra-ui/react'

import { BsCurrencyDollar, BsFillPersonFill } from 'react-icons/bs'
import { IoMdUnlock } from 'react-icons/io'
import { MdAlternateEmail } from 'react-icons/md'

import { Input } from '../../components'
import { CheckboxCard } from './components'

import CoinIn from '../../assets/lottie/coin-in.json'
import CoinOut from '../../assets/lottie/coin-out.json'
import { TRegisterInput, register } from '../../services/authService'
import { createExpense } from '../../services/expenseService'
import { ICreateExpenseInput } from '../../services/expenseService'
import { createIncome } from '../../services/incomeService'

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: CoinIn,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Register = () => {
  const [formData, setFormData] = useState<ICreateExpenseInput>()
  const [type, setType] = useState<string>()
  const [celebrationModalToggle, setCelebrationModalToggle] =
    useState<boolean>(false)
  const [options, setOptions] = useState<any>(defaultOptions)
  const navigate = useNavigate()

  const handleFormSend = async (e: any) => {
    e.preventDefault()
    if (formData)
      if (type === 'out') await createExpense(formData).catch(console.error)
      else if (type === 'in') await createIncome(formData).catch(console.error)

    if (type === 'in') {
      setCelebrationModalToggle(true)
      const updatedOptions = defaultOptions
      updatedOptions.animationData = CoinIn
      setOptions(updatedOptions)
      setTimeout(() => {
        navigate('/dashboard')
      }, 2500)
    } else {
      setCelebrationModalToggle(true)
      const updatedOptions = defaultOptions
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      updatedOptions.animationData = CoinOut
      setOptions(updatedOptions)
      setTimeout(() => {
        navigate('/dashboard')
      }, 2500)
    }
  }

  const { getRadioProps } = useRadioGroup({
    onChange: function (value) {
      setType(value)
    },
  })

  const registerinputprops = [
    {
      type: 'number',
      name: 'sum',
      label: 'Kwota',
      placeholder: '100',
      icon: BsCurrencyDollar,
      value: formData?.sum as unknown as string,
      onChange: (e: any) =>
        setFormData((prev: any) => ({
          ...prev,
          firstname: Number(e.target.value),
        })),
    },
  ]

  return (
    <>
      <Helmet>
        <title>Nowy zapis</title>
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
          <Lottie options={options} height="50%" width={'100%'} />
        </Box>
      )}

      <Heading
        textAlign="center"
        color="gray.600"
        mt="20"
        mb="8"
        fontSize="4xl"
      >
        Nowy zapis
      </Heading>

      <form onSubmit={handleFormSend}>
        <VStack>
          {registerinputprops.map((props) => (
            <Input {...props} key={props.name} />
          ))}

          <FormControl>
            <FormLabel color="gray.600" mb="1" fontWeight={600}>
              Typ zmiany
            </FormLabel>

            <CheckboxGroup>
              <SimpleGrid columns={2} spacing={2} w="full">
                {[
                  {
                    name: 'Przychód',
                    value: 'in',
                  },
                  {
                    name: 'Wydatek',
                    value: 'out',
                  },
                ].map(({ name, value }) => (
                  <CheckboxCard key={value} {...getRadioProps({ value })}>
                    {name}
                  </CheckboxCard>
                ))}
              </SimpleGrid>
            </CheckboxGroup>
          </FormControl>
        </VStack>

        <Button
          type="submit"
          colorScheme="green"
          mt="8"
          w="full"
          border="5px solid"
          borderColor="green.200"
          bg="green.100"
          color="green.500"
          _hover={{
            bg: 'green.200',
          }}
          _active={{
            bg: 'green.200',
          }}
        >
          Zapisz
        </Button>
      </form>
    </>
  )
}

export default Register
