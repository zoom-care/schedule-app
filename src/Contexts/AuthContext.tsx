import { ReactNode, createContext, useContext, useState } from 'react'
import { setNewToken, validateCredentials } from '../Adapters/api'
import { Login } from '../zoomcare-api'
import { LoginComponent } from '../Components/LoginComponent'

const Provider = createContext({} as AuthContextValues)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false)
  const [user, setUser] = useState<string | null>(null)

  const login = (credentials: Login) =>
    validateCredentials(credentials).then(({ username }) => {
      setIsAuth(true)
      setUser(username)
    })

  const logout = () => {
    setIsAuth(false)
    setNewToken(undefined)
  }

  return (
    <Provider.Provider value={{ user, isAuth, login, logout }}>
      {isAuth ? children : <LoginComponent />}
    </Provider.Provider>
  )
}

export const useAuth = () => useContext(Provider)

interface AuthContextValues {
  user: string | null
  isAuth: boolean
  login: (credentials: Login) => unknown
  logout: () => void
}
