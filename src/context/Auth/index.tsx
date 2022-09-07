import React, { PropsWithChildren, useContext, useEffect, useState } from 'react'
import { LoginResponse } from '../../zoomcare-api'
import { login as loginService } from '../../services'

const USERNAME = 'fe_username'
const AUTHTOKEN = 'fe_authToken'

interface Auth extends Partial<LoginResponse> {
  login: (username: string, authToken: string) => void
  logout: () => void
}

const noop = (): void => {}
const AuthContext = React.createContext<Auth>({
  login: noop,
  logout: noop
})

export function useAuth (): Auth {
  return useContext(AuthContext)
}

export function getAuthToken (): string | null {
  return localStorage.getItem(AUTHTOKEN)
}

export function AuthProvider ({ children }: PropsWithChildren<React.ReactNode>): React.ReactElement {
  const [username, setUsername] = useState<string>(localStorage.getItem(USERNAME) ?? '')
  const [authToken, setAuthToken] = useState<string>(localStorage.getItem(AUTHTOKEN) ?? '')

  async function login (username: string, password: string): Promise<void> {
    const { username: loggedUsername, authToken } = await loginService({ username, password })

    setUsername(loggedUsername)
    setAuthToken(authToken)
  }

  function logout (): void {
    setUsername('')
    setAuthToken('')
  }

  useEffect(() => {
    localStorage.setItem(USERNAME, username ?? '')
    localStorage.setItem(AUTHTOKEN, authToken ?? '')
  }, [username, authToken])

  return (
    // TODO: fix next line
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <AuthContext.Provider value={{ username, authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
