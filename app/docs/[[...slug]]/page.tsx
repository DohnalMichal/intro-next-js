import { docs } from '@/docs/content'
import DetailedDocItem from '@/components/DetailedDocItem'
import { getPath } from '@/utils/path'

type Props = {
  params: {
    slug: string | string[]
  }
}

export const generateStaticParams = () => {
  return Object.keys(docs).map((slug) => ({
    slug: slug.split('/'),
  }))
}

const getData = (slug: string | string[]) => {
  const path = getPath(slug)

  return docs[path]
}

const DocsIDPage = ({ params }: Props) => {
  const apiData = getData(params.slug)

  if (!apiData) {
    return (
      <div>
        <p className="text-xl">API documentation not found</p>
      </div>
    )
  }

  return <DetailedDocItem item={apiData} />
}

export default DocsIDPage
