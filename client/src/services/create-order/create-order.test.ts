import { createOrder } from './create-order'

const mockResponse = {
  id: 1,
  created_at: '2021-01-01T00:00:00.000Z',
}

const mockApi = {
  get: jest.fn().mockResolvedValue(mockResponse),
  post: jest.fn().mockResolvedValue(mockResponse),
}

describe('services', () => {
  describe('createOrder', () => {
    it('should call the endpoint and return data', async () => {
      const mockRequest = {
        card_cvv: '123',
        card_expiration_at: '10/23',
        card_holder_name: 'Joao S Silva',
        card_number: '4111111111111111',
      }
      const expectedEndpoint = 'orders'
      const response = await createOrder(mockApi, mockRequest)
      const endpointCalled = mockApi.post.mock.calls[0][0]

      expect(mockApi.post).toHaveBeenCalledWith(
        expectedEndpoint,
        JSON.stringify(mockRequest)
      )
      expect(endpointCalled).toBe(expectedEndpoint)
      expect(response).toEqual(mockResponse)
    })
  })
})
