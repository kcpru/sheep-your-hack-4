import { Helmet } from 'react-helmet'

import { useAuth } from '../../hooks'

const Dashboard = () => {
  const { user } = useAuth()

  console.log(user)
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <h1>Home</h1>
      <p>Home page</p>
    </>
  )
}

export default Dashboard
