import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks'
import { TLoginInput, login } from '../../services/authService'

const Home = () => {
  const [formData, setFormData] = useState<TLoginInput>()
  const navigate = useNavigate()
  const { setUser } = useAuth()

  const handleFormSend = async () => {
    // if (formData) {
    const user = await login({
      email: 'test@gmail.com',
      password: 'Test123!',
    })
    setUser(user)
    navigate('/dashboard')
    // }
  }

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <h1>Home</h1>
      <p>Home page</p>
      <button onClick={() => handleFormSend()} style={{ height: '100px' }}>
        {' '}
        TEST
      </button>
    </>
  )
}

export default Home
