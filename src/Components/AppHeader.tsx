import Styles from './AppHeader.module.css'
import { useAuth } from '../Contexts/AuthContext'

export const AppHeader = () => {
  const { logout } = useAuth()
  return (
    <nav className={Styles.nav}>
      <button onClick={logout} className="outlined">
        Logout
      </button>
    </nav>
  )
}
