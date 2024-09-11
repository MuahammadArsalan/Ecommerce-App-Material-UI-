import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Product from './Pages/Product.jsx'
import SingleProduct from './Pages/SingleProduct.jsx'
import Layout from './Layout.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>,
        
      },{
        path:"about",
        element:<About/>
      },{
        path:"contact",
        element:<Contact/>
      },{
        path:"product",
        element:<Product/>
      },{
        path:"singleProduct",
        element:<SingleProduct/>
      },{
        path:"*",
        element:<h1>Not found</h1>
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  
  </RouterProvider>,
)
