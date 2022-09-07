import React from 'react'
import { Outlet, RouteProps, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/Auth'

export default function ProtectedRoute (props: RouteProps): React.ReactElement | null {
  const { authToken } = useAuth()
  const location = useLocation()

  return (
    [undefined, ''].includes(authToken)
      ? <Navigate to={'/login'} state={{ from: location }} replace />
      : <Outlet />
  )
}
