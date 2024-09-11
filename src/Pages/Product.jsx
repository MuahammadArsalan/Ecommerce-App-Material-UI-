import { Box, CardActions, CircularProgress, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ActionAreaCard from '../assets/Components/Card'
import ImgMediaCard from '../assets/Components/Card'
import { Button } from 'bootstrap'


function Product() { 

let [data,setData] = useState('')

 useEffect(()=>{
axios('https://fakestoreapi.com/products')
.then((res)=>{
    console.log(res.data);
  setData(res.data)  
})
.catch((err)=>{
    console.log(err);
    
})

},[])


  return (
<>


{data ? data.map((item)=>{


    return  <Box className= 'gap-8' sx={{ display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center',}} key={item.id}>
<ImgMediaCard  src={item.image} desc={item.description} category={item.category} />

    </Box>


}):<CircularProgress sx={{
   fontSize:"4rem",textAlign:"center",
marginTop:"2000px"
}} />
 }





</>
)
}

export default Product