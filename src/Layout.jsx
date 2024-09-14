import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './assets/Components/Navbar'
import ResponsiveAppBar from './assets/Components/Navbar'
import Product from './Pages/Product'

function Layout() {



  return (<>
    

    <ResponsiveAppBar/> 
    <Product/> 

    <Outlet/>  
    </>
)
}

export default Layout