/* eslint-disable @typescript-eslint/no-explicit-any */
import * as http from 'http'

export type Api = {
  get: (endpoint: string, options?: http.RequestOptions) => Promise<any>
  post: (endpoint: string, body: string) => Promise<any>
  put: (endpoint: string, options: http.RequestOptions) => Promise<any>
  delete: (endpoint: string, options?: http.RequestOptions) => Promise<any>
}
