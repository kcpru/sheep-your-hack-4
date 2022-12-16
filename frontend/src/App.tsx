import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header, Layout } from './components'

import { About, Home, NoMatch } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Header siteTitle="Chaos" />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
