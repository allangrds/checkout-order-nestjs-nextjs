export const setupMocks = async () => {
  if (typeof window !== 'undefined') {
    const { worker } = await import('./browser')

    return worker.start()
  }
}
