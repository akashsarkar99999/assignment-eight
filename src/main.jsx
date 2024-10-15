import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import PagesToRead from './Components/PagesToRead/PagesToRead.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/listed",
        element:<ListedBooks></ListedBooks>,
      },
      {
        path:"/pagesto",
        element:<PagesToRead></PagesToRead>
      },
      {
        path:'/book/:book_id',
        element:<BookDetails></BookDetails>,
        loader:()=>fetch('../books.json')
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
