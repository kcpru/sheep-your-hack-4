import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header, Layout } from './components'

import { About, Home, NoMatch } from './pages'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login'
import Onboading from './pages/Onboarding'
import Register from './pages/Register'

const App = () => {
  return (
    <BrowserRouter>
      <Header siteTitle="Chaos" />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/onboarding" element={<Onboading />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
