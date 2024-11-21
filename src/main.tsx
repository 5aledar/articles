import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Home from './pages/Home.tsx'
import './index.css'
import Articles from './pages/Articles.tsx'
import ArticlePage from './pages/ArticlePage.tsx'
const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/articles',
        element: <Articles />
      },
      {
        path: '/articles/:id',
        element: <ArticlePage />
      }
    ]
  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>

      <RouterProvider router={router}>

      </RouterProvider>
    </QueryClientProvider>
  </StrictMode>,
)
