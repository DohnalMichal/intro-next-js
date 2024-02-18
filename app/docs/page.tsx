import { docs } from '@/docs/content'
import DocItem from '@/components/DocItem'

const Docs = () => {
  const apiEndpoints = Object.keys(docs)

  return (
    <div>
      <ul className="flex flex-col gap-4">
        {apiEndpoints.map((endpoint) => {
          const { method, description } = docs[endpoint]

          return (
            <DocItem
              key={endpoint}
              href={`/docs/${endpoint}`}
              method={method}
              description={description}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default Docs
