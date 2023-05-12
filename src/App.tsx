import './App.css'
import Styles from './App.module.css'
import { AppHeader } from './Components/AppHeader'
import { AppointmentsList } from './Components/AppointmentsList'

function App() {
  return (
    <div className={Styles.content}>
      <AppHeader />
      <main>
        <AppointmentsList />
      </main>
      <footer>
        Made by{' '}
        <a
          href="https://www.linkedin.com/in/galiprandi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Germán Aliprandi
        </a>
      </footer>
    </div>
  )
}

export default App
