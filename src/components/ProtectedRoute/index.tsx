import React from 'react'
import { Outlet, RouteProps, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/Auth'

export default function ProtectedRoute (props: RouteProps): React.ReactElement | null {
  const { username } = useAuth()
  const location = useLocation()

  return (
    username
      ? <Outlet />
      : <Navigate to={'/login'} state={{ from: location }} replace />
  )
}
