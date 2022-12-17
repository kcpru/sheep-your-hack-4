import { createContext, useState } from 'react'

import type { ILoginResponse } from '../services/authService'

interface AuthContextType {
  user: ILoginResponse | null
  setUser: (user: ILoginResponse | null) => void
}

interface AuthContextProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUser: () => {},
})

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<ILoginResponse | null>(null)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
