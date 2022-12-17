import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

import { TRegisterInput, register } from '../../services/authService'

const Home = () => {
  const [formData, setFormData] = useState<TRegisterInput>()
  const navigate = useNavigate()

  const handleFormSend = async () => {
    if (formData)
      await register(formData)
        .then(() => navigate('/login'))
        .catch(console.error)
  }

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>

      <button />

      <h1>Home</h1>
      <p>Home page</p>
    </>
  )
}

export default Home
