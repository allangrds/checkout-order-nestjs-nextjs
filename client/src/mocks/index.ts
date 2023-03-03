export const setupMocks = async () => {
  if (typeof window === 'undefined') {
    const { server } = await import('./server')

    return server.listen()
  } else {
    const { worker } = await import('./browser')

    return worker.start()
  }
}
