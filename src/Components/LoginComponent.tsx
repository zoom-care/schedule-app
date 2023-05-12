import { useState } from 'react'
import Styles from './LoginComponent.module.css'
import { useAuth } from '../Contexts/AuthContext'

const PASSWORD_MIN = 4

export const LoginComponent = () => {
  const { login } = useAuth()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const validCredentials =
    !!username && !!password && password?.length > PASSWORD_MIN

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    validCredentials && login({ username, password })
  }

  return (
    <div className={Styles.background}>
      <div className={Styles.content}>
        <form onSubmit={onSubmit}>
          <h3>Log in</h3>

          <label htmlFor="username">
            Username
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              required
              value={username}
              onChange={({ target: { value } }) => setUsername(value)}
            />
          </label>

          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              min={PASSWORD_MIN}
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
            />
          </label>

          <input type="submit" value="Log in" disabled={!validCredentials} />
        </form>
      </div>
    </div>
  )
}
