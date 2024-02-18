export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

type ExampleType = {
  action: 'complete' | 'undo'
}

export type DocsItem = {
  method: Method
  path: string
  description: string
  details: string
  example?: ExampleType
}

export type DocsContent = {
  [key: string]: DocsItem
}
