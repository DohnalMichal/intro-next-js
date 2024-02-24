# My Next.js App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Overview

This is a Next.js application that leverages Prisma for database interactions and Next Route handlers and new server actions. The app provides API documentation using a dynamic routing structure and showcases a combination of Tailwind CSS for layouts and Styled-Components for individual components.

## Features

Prisma Integration: Utilizes Prisma for seamless interaction with the database, making it easy to manage and query data.

Next API Routes: Leverages Next.js API Route handlers with the new server actions (GET, POST, PUT, DELETE) to handle various CRUD operations.

Dynamic Documentation: Dynamically generates API documentation pages based on the content stored in content.ts.

Styling with Tailwind CSS and Styled-Components: Utilizes Tailwind CSS for layout styling and Styled-Components for component-specific styling, providing a flexible and modular approach to styling.

## Project Structure

`/pages/api/todo`: Next API routes handling todo-related operations.

`/pages/api/todo/[id]`: Next API routes for specific todo operations.

`/pages/docs`: Contains API documentation pages, dynamically generated based on content.ts file.

`/components`: Holds various React components, including ApiListPage and styled components for a consistent and visually appealing UI.

`/utils/db`: Integrates Prisma for database operations, providing a clean separation of concerns.

## Getting Started

1. Clone the repository.

```bash
git clone https://github.com/your-username/your-nextjs-app.git
```

2. Install dependencies.

```
cd intro-next-js
npm install
```

3. Set up your database configuration in prisma/schema.prisma and run migrations.

```bash
npx prisma migrate dev
```

4. Run the development server

```bash
npm run dev
```

5. Open your browser and navigate to http://localhost:3000 to view the app.

## Technologies Used

Next.js: A React framework for building server-rendered applications.

Prisma: A modern database toolkit for TypeScript and Node.js that makes database access easy and efficient.

Tailwind CSS: A utility-first CSS framework for quickly building modern and responsive user interfaces.

Styled-Components: A CSS-in-JS library for styling React components, offering a dynamic and scoped styling solution.

## Credits

This project follows the concepts and techniques taught in the [Frontend Masters](https://frontendmasters.com/) course by [Scott Moss](https://frontendmasters.com/teachers/scott-moss/), with some additional improvements.
