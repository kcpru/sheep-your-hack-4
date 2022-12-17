import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

import { TLoginInput, login } from '../../services/authService'

const Home = () => {
  const [formData, setFormData] = useState<TLoginInput>()
  const navigate = useNavigate()

  const handleFormSend = async () => {
    if (formData)
      await login(formData)
        .then(() => navigate('/login'))
        .catch(console.error)
  }

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <button />

      <h1>Home</h1>
      <p>Home page</p>
    </>
  )
}

export default Home
