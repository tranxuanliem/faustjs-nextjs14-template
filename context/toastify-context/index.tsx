'use client'
import { handleMessage, type TMessage } from '@/helpers/toastify-helper'
import { ReactNode, createContext, useContext } from 'react'
import Swal from 'sweetalert2'

const ToastifyContext = createContext({
  raiseErrorMessage: (message: TMessage) => {},
  showSuccessMessage: (message: TMessage) => {}
})

const toast = (type: 'success' | 'error', message: TMessage) => {
  Swal.fire({
    icon: type,
    title: handleMessage(message),
    showConfirmButton: false,
    showCloseButton: true,
    customClass: {
      closeButton: '!shadow-none',
      container: '',
      popup: '',
      title: '',
      icon: '!text-md',
      image: '',
      htmlContainer: '',
      input: '',
      inputLabel: '',
      validationMessage: '',
      actions: '',
      confirmButton: '',
      denyButton: '',
      cancelButton: '',
      loader: '',
      footer: '',
      timerProgressBar: ''
    }
  })
}

export const ToastifyContextProvider = ({ children }: { children: ReactNode }) => {
  const raiseErrorMessage = (message: TMessage) => {
    toast('error', message)
  }

  const showSuccessMessage = (message: TMessage) => {
    toast('success', message)
  }

  return (
    <ToastifyContext.Provider value={{ raiseErrorMessage, showSuccessMessage }}>
      {children}
    </ToastifyContext.Provider>
  )
}

const useToastifyContext = () => useContext(ToastifyContext)

export default useToastifyContext
