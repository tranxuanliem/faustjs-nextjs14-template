export type TMessage =
  | string
  | null
  | { message: string; code: string | number; data: { message: string } }

export const handleMessage = (error: TMessage): string => {
  if (!error) return 'Opps something went wrong!'
  if (typeof error === 'string') return error
  else {
    let errorMessage: any = error?.message || error?.data?.message
    if (typeof errorMessage === 'string' && errorMessage.length > 0) {
      if (errorMessage.includes('Response has no error or result for request'))
        return 'Response has no error or result for request'

      if (errorMessage.length > 100) return errorMessage.slice(0, 100) + '...'

      return errorMessage
    } else if (typeof errorMessage === 'object') {
      return errorMessage.join(', ')
    } else {
      return 'Opps something went wrong!'
    }
  }
}
