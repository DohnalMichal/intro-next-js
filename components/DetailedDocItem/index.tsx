'use client'
import { Details, Header, Method, Path, Root } from './styles'
import type { Props } from './types'

const DetailedDocItem = ({ item }: Props) => {
  return (
    <Root>
      <Header>
        <Method>{item.method}</Method>
        <Path>{item.path}</Path>
      </Header>

      {item.description}
      <Details>{item.details}</Details>
    </Root>
  )
}

export default DetailedDocItem
