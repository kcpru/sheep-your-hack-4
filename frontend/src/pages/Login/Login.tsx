import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

import { Button, Heading, VStack } from '@chakra-ui/react'

import { IoMdUnlock } from 'react-icons/io'
import { MdAlternateEmail } from 'react-icons/md'

import { Input } from '../../components'

import { TLoginInput, login } from '../../services/authService'

const Home = () => {
  const [formData, setFormData] = useState<TLoginInput>()
  const navigate = useNavigate()
  const { setUser } = useAuth()

  const handleFormSend = async (e) => {
    e.preventDefault()

    if (formData)
      await login(formData)
        .then(() => navigate('/login'))
        .catch(console.error)
  }

  const loginInputProps = [
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      placeholder: 'testowy@email.pl',
      icon: MdAlternateEmail,
      value: formData?.email,
      onChange: (e) =>
        setFormData((prev) => ({
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
      value: formData?.password,
      onChange: (e) =>
        setFormData((prev) => ({
          ...prev,
          password: e.target.value,
        })),
    },
  ]

  return (
    <>
      <Helmet>
        <title>Logowanie</title>
      </Helmet>

      <Heading
        textAlign="center"
        color="gray.600"
        mt="20"
        mb="8"
        fontSize="4xl"
      >
        Logowanie
      </Heading>

      <form onSubmit={handleFormSend}>
        <VStack>
          {loginInputProps.map((props) => (
            <Input {...props} key={props.name} />
          ))}
        </VStack>

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
        >
          Zaloguj się
        </Button>
      </form>
    </>
  )
}

export default Home
