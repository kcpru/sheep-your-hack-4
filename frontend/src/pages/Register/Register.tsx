import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

import {
  Button,
  CheckboxGroup,
  FormControl,
  FormLabel,
  Heading,
  SimpleGrid,
  VStack,
  useRadioGroup,
} from '@chakra-ui/react'

import { BsFillPersonFill } from 'react-icons/bs'
import { IoMdUnlock } from 'react-icons/io'
import { MdAlternateEmail } from 'react-icons/md'

import { Input } from '../../components'
import { CheckboxCard } from './components'

import { TRegisterInput, register } from '../../services/authService'

const Register = () => {
  const [formData, setFormData] = useState<TRegisterInput>()
  const navigate = useNavigate()

  const handleFormSend = async (e: any) => {
    e.preventDefault()
    if (formData)
      await register(formData)
        .then(() => navigate('/login'))
        .catch(console.error)
  }

  const { getRadioProps } = useRadioGroup({
    onChange: function (value) {
      setFormData((prev: any) => ({
        ...prev,
        role: value,
      }))
    },
  })

  const registerinputprops = [
    {
      type: 'name',
      name: 'firstname',
      label: 'Imię',
      placeholder: 'Jan',
      icon: BsFillPersonFill,
      value: formData?.firstname as string,
      onChange: (e: any) =>
        setFormData((prev: any) => ({
          ...prev,
          firstname: e.target.value,
        })),
    },
    {
      type: 'name',
      name: 'lastname',
      label: 'Nazwisko',
      placeholder: 'Kowalski',
      icon: BsFillPersonFill,
      value: formData?.lastname as string,
      onChange: (e: any) =>
        setFormData((prev: any) => ({
          ...prev,
          lastname: e.target.value,
        })),
    },
    {
      type: 'text',
      name: 'nickname',
      label: 'nickname',
      placeholder: 'TestowyNick',
      icon: BsFillPersonFill,
      value: formData?.nickname as string,
      onChange: (e: any) =>
        setFormData((prev: any) => ({
          ...prev,
          nickname: e.target.value,
        })),
    },
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      placeholder: 'testowy@email.pl',
      icon: MdAlternateEmail,
      value: formData?.email as string,
      onChange: (e: any) =>
        setFormData((prev: any) => ({
          ...prev,
          email: e.target.value,
        })),
    },

    {
      type: 'password',
      name: 'password',
      label: 'Hasło',
      placeholder: '********',
      icon: IoMdUnlock,
      value: formData?.password as string,
      onChange: (e: any) =>
        setFormData((prev: any) => ({
          ...prev,
          password: e.target.value,
        })),
    },
    {
      type: 'password',
      name: 'passwordConfirm',
      label: 'Powtórz hasło',
      placeholder: '********',
      icon: IoMdUnlock,
      value: formData?.passwordConfirm as string,
      onChange: (e: any) =>
        setFormData((prev: any) => ({
          ...prev,
          passwordConfirm: e.target.value,
        })),
    },
  ]

  return (
    <>
      <Helmet>
        <title>Załóż konto</title>
      </Helmet>

      <Heading
        textAlign="center"
        color="gray.600"
        mt="20"
        mb="8"
        fontSize="4xl"
      >
        Rejestracja
      </Heading>

      <form onSubmit={handleFormSend}>
        <VStack>
          {registerinputprops.map((props) => (
            <Input {...props} key={props.name} />
          ))}

          <FormControl>
            <FormLabel color="gray.600" mb="1" fontWeight={600}>
              Kim jesteś?
            </FormLabel>

            <CheckboxGroup>
              <SimpleGrid columns={2} spacing={2} w="full">
                {[
                  {
                    name: 'Rodzicem',
                    value: 'parent',
                  },
                  {
                    name: 'Dzieckiem',
                    value: 'child',
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
            bg: 'green.300',
          }}
          _active={{
            bg: 'green.300',
          }}
        >
          Załóż konto
        </Button>
      </form>
    </>
  )
}

export default Register
