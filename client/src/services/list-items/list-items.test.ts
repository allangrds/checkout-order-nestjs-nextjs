import { listItems } from './list-items'

const mockResponse = {
  items: [
    {
      "category_id": 1,
      "id": 1,
      "image_id": "293202f9d9f7f4",
      "name": "Bagel",
      "price": 2.0
    },
    {
      "category_id": 1,
      "id": 2,
      "image_id": "808916fd5ddf96",
      "name": "Croissant",
      "price": 1.0
    },
  ],
}

const mockApi = {
  get: jest.fn().mockResolvedValue(mockResponse),
  post: jest.fn().mockResolvedValue(mockResponse),
}

describe('services', () => {
  describe('listItems', () => {
    it('should call the endpoint and return data', async () => {
      const expectedEndpoint = 'items'
      const response = await listItems(mockApi)

      expect(mockApi.get).toHaveBeenCalledWith(expectedEndpoint)
      expect(response).toEqual(mockResponse)
    })
  })
})
