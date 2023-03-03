import * as http from 'http'

import { variables } from '@/config'

const baseUrl = variables.API_BASE_URL

class FetchError extends Error {
  constructor (public res: Response, message?: string) {
    super(message)
  }
}

const requester = (endpoint: string, options?: http.RequestOptions) => {
  const url = `${baseUrl}${endpoint}`
  const newOptions = {
    ...options,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(options?.headers ? options.headers : {}),
    },
  }

  return fetch(url, newOptions).then(async (response) => {
    if (!response.ok) {
      throw new FetchError(response)
    }

    try {
      const data = await response.json()

      return data
    } catch (error) {
      return response
    }
  })
}

const get = (endpoint: string, options?: http.RequestOptions) => {
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

const put = (endpoint: string, options: http.RequestOptions) => {
  const newOptions = {
    ...options,
    method: 'PUT',
  }

  return requester(endpoint, newOptions)
}

const deleteMethod = (endpoint: string, options?: http.RequestOptions) => {
  const newOptions = {
    ...options,
    method: 'DELETE',
  }

  return requester(endpoint, newOptions)
}

export const request = {
  delete: deleteMethod,
  get,
  post,
  put,
}
