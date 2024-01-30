'use client'
import { AppProviders } from '@/providers'
import { ReactNode, createContext } from 'react'
import { ToastifyContextProvider } from './toastify-context'

const AppContext = createContext({})

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AppContext.Provider value={{}}>
      <ToastifyContextProvider>
        <AppProviders>{children}</AppProviders>
      </ToastifyContextProvider>
    </AppContext.Provider>
  )
}
