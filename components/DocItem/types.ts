import type { DocsItem, Method } from '@/types/docs'

export type Props = {
  method: DocsItem['method']
  description: DocsItem['description']
  href: string
}
