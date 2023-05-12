import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import React, { ReactNode } from 'react'
import { AuthProvider } from '../Contexts/AuthContext'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60,
      },
    },
  })
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>{children}</AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
