import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { patch } from "@mui/material";
import Product from "./Pages/Product";
import SingleProduct from "./Pages/SingleProduct";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";




const router = createBrowserRouter([
    {

path:"/",
element:<Layout/>,
children:[{
    path:"",
    element:<Home/>
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
    path:"singleProduct/:id",
    element:<SingleProduct/>
},{
    path:"*",
    element: <h1>Not found</h1>
}
]


      }
])
createRoot(document.getElementById("root")).render(

<RouterProvider router={router}></RouterProvider>
    
  );









