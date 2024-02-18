'use client'
import Link from 'next/link'
import { Method, Root } from './styles'
import type { Props } from './types'

const DocItem = ({ href, method, description }: Props) => {
  return (
    <Link href={href}>
      <Root>
        <Method>{method}</Method> - {description}
      </Root>
    </Link>
  )
}

export default DocItem
