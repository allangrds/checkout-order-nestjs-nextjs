class FetchError extends Error {
  constructor (public res: Response, public body: any, message?: string) {
    super(message)
    this.body = body
  }
}

export const request = (baseUrl: string) => {
  const requester = (endpoint: string, options?: RequestInit) => {
    const url = `${baseUrl}${endpoint}`
    const newOptions = {
      ...options,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...(options?.headers ? options.headers : {}),
      },
    }

    return fetch(url, newOptions)
      .then(async (response) => {
        const data = await response.json()

        return { data, response }
      })
      .then(async ({ data, response }) => {
        if (!response.ok) {
          const error = new FetchError(
            response,
            data,
            `Error ${response.status}: ${response.statusText}`
          )

          throw error
        }

        return data
      })
      .catch((error) => {
        if (error instanceof FetchError) {
          throw error
        }

        throw new Error(error)
      })
  }

  const get = (endpoint: string, options?: RequestInit) => {
    const newOptions = {
      ...options,
      method: 'GET',
    }

    return requester(endpoint, newOptions)
  }

  const post = (endpoint: string, body: string) => {
    const newOptions = {
      method: 'POST',
      body,
    }

    return requester(endpoint, newOptions)
  }

  return {
    get,
    post,
  }
}
