import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/Auth'
import { login } from '../../services'
import styles from './styles.module.scss'

export default function Login (): React.ReactElement {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const navigate = useNavigate()
  const auth = useAuth()

  async function onSubmit (event: React.FormEvent) {
    event.preventDefault()

    const response = await login({ username, password })

    auth.login(response.username, response.authToken)
  }

  useEffect(() => {
    if (auth.username && auth.authToken) {
      navigate('/', { replace: true })
    }
  }, [auth, navigate])

  return (
    <div className={styles.outerContainer}>
      <section className={styles.container}>
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <div className={styles.fields}>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <button>
            Enter
          </button>
        </form>
      </section>
    </div>
  )
}
