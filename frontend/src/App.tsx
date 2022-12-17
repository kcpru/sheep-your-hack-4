import { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useSearchParams,
} from 'react-router-dom'

import { AnimatePresence, motion } from 'framer-motion'

import { Header, Layout } from './components'

import { AuthContextProvider } from './context'
import { About, Achievements, Home, Leaderboard, NoMatch } from './pages'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login'
import Onboading from './pages/Onboarding'
import Register from './pages/Register'
import Transaction from './pages/Transaction'

const App = () => {
  const [path, setPath] = useState<string>(window.location.pathname)

  useEffect(() => {
    setPath(window.location.pathname)
  }, [window.location])

  const PATHS_WITH_NAV = [
    '/dashboard',
    '/leaderboard',
    '/achievements',
    '/transaction',
  ]

  return (
    <AuthContextProvider>
      <BrowserRouter>
        {PATHS_WITH_NAV.includes(path) && <Header />}

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transaction" element={<Transaction />} />

            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/onboarding" element={<Onboading />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App
