import { listCategories } from './list-categories'

const mockResponse = [
  {
    "id": 1,
    "image_id": "f3fbf57b118fa9",
    "name": "Bakery"
  },
  {
    "id": 2,
    "image_id": "b271afbefdc554",
    "name": "Entrees"
  },
]

const mockApi = {
  get: jest.fn().mockResolvedValue(mockResponse),
  post: jest.fn().mockResolvedValue(mockResponse),
}

describe('services', () => {
  describe('listCategories', () => {
    it('should call the endpoint and return data', async () => {
      const expectedEndpoint = 'categories'
      const response = await listCategories(mockApi)

      expect(mockApi.get).toHaveBeenCalledWith(expectedEndpoint)
      expect(response).toEqual(mockResponse)
    })
  })
})
