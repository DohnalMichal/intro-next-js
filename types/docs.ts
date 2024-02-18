export type Method = 'GET' | 'POST' | 'DELETE'

export type DocsItem = {
  method: Method
  path: string
  description: string
  details: string
}

export type DocsContent = {
  [key: string]: DocsItem
}
