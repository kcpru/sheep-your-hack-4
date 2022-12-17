import { useContext, useEffect } from 'react'

import { AuthContext } from '../context'

const useAuth = () => {
  return useContext(AuthContext)
}

export default useAuth
