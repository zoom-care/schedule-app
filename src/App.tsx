import React from 'react'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Schedules from './pages/Schedules'
import { AuthProvider } from './context/Auth'
import ProtectedRoute from './components/ProtectedRoute'
import { Provider } from 'react-redux'
import store from './state/store'

function App () {
  return (
    <AuthProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<ProtectedRoute />}>
                <Route path="/" element={<Schedules />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </AuthProvider>
  )
}

export default App
