import fetchMock from 'fetch-mock'

import { request } from './request'

const mockResponse = {
  data: {
    name: 'Allan Silva',
    age: 29,
  },
}

describe('services', () => {
  describe('request', () => {
    beforeEach(() => {
      fetchMock.restore()
    })

    it('should make a GET request and return data', async () => {
      fetchMock.mock(
        'http://example.com/api/user',
        mockResponse.data,
        {
          method: 'GET',
        }
      )

      const api = request('http://example.com/api/')
      const response = await api.get('user')

      expect(fetchMock.calls()).toHaveLength(1)
      expect(fetchMock.calls()[0][0]).toEqual('http://example.com/api/user')
      expect(response).toEqual(mockResponse.data)
    })

    it('should make a POST request and return data', async () => {
      const mockBody = {
        name: 'Allan Silva',
        age: 29,
      }

      fetchMock.post('http://example.com/api/user', mockResponse.data)

      const api = request('http://example.com/api/')
      const response = await api.post('user', JSON.stringify(mockBody))

      expect(fetchMock.calls()).toHaveLength(1)
      expect(fetchMock.calls()[0][0]).toEqual('http://example.com/api/user')
      expect(fetchMock.calls()[0][1].body).toEqual(JSON.stringify(mockBody))
      expect(response).toEqual(mockResponse.data)
    })
  })
})
