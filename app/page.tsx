import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl">Home</h1>
      <p className="mb-4">
        This is a Next.js application that leverages Prisma for database
        interactions and Next Route handlers and new server actions. The app
        provides API documentation using a dynamic routing structure and
        showcases a combination of Tailwind CSS for layouts and
        Styled-Components for individual components.
      </p>
      <h2 className="text-2xl">Links</h2>
      <ul>
        <li>
          <Link href="/docs">API Documentation</Link>
        </li>
        <li>
          <Link href="/api/todo">Todos</Link>
        </li>
        <li>
          <Link href="/api/todo">Todo API</Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
