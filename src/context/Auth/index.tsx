import React, { PropsWithChildren, useContext, useEffect, useState } from 'react'
import { LoginResponse } from '../../zoomcare-api'

const USERNAME = 'fe_username'
const AUTHTOKEN = 'fe_authToken'

interface Auth extends Partial<LoginResponse> {
  login: (username: string, authToken: string) => void
  logout: () => void
}

const noop = () => {}
const AuthContext = React.createContext<Auth>({
  login: noop,
  logout: noop
})

export function useAuth () {
  return useContext(AuthContext)
}

export function getAuthToken (): string | null {
  return localStorage.getItem(AUTHTOKEN)
}

export function AuthProvider ({ children }: PropsWithChildren<React.ReactNode>): React.ReactElement {
  const [username, setUsername] = useState<string>(localStorage.getItem(USERNAME) ?? '')
  const [authToken, setAuthToken] = useState<string>(localStorage.getItem(AUTHTOKEN) ?? '')

  function login (username: string, authToken: string) {
    setUsername(username)
    setAuthToken(authToken)
  }

  function logout () {
    setUsername('')
    setAuthToken('')
  }

  useEffect(() => {
    localStorage.setItem(USERNAME, username ?? '')
    localStorage.setItem(AUTHTOKEN, authToken ?? '')
  }, [username, authToken])

  return (
    <AuthContext.Provider value={{ username, authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
