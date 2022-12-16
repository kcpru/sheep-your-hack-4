import { Helmet } from 'react-helmet'

const NoMatch = () => {
  return (
    <div>
      <Helmet>
        <title>404</title>
      </Helmet>

      <h1>Page Not Found</h1>
    </div>
  )
}

export default NoMatch
