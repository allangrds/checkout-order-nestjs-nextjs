/* eslint-disable @typescript-eslint/no-explicit-any */

export type Api = {
  get: (endpoint: string, options?: RequestInit) => Promise<any>
  post: (endpoint: string, body: string) => Promise<any>
}
