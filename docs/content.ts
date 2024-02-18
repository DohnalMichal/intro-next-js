import type { DocsContent } from '@/types/docs'

export const docs: DocsContent = {
  'api/todo/get': {
    method: 'GET',
    path: 'api/todo',
    description: 'This is how to get all todos',
    details:
      'Detailed information about how to make a GET request to retrieve todos.',
  },
  'api/todo/post': {
    method: 'POST',
    path: 'api/todo',
    description: 'This is how to create a todo',
    details:
      'Detailed information about how to make a POST request to create todos.',
  },
  'api/todo/id/get': {
    method: 'GET',
    path: 'api/todo/[id]',
    description: 'Get a specific todo by ID',
    details:
      'Detailed information about how to make a GET request to retrieve a specific todo by ID.',
  },
  'api/todo/id/delete': {
    method: 'DELETE',
    path: 'api/todo/[id]',
    description: 'Delete a specific todo by ID',
    details:
      'Detailed information about how to make a DELETE request to delete a specific todo by ID.',
  },
}
