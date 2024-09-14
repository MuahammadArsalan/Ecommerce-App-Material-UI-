import { Box,  CardActions, CircularProgress, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ActionAreaCard from '../assets/Components/Card'
import Card from '../assets/Components/Card'
import ImgMediaCard from '../assets/Components/Card'
import { Button } from 'bootstrap'
import { useNavigate } from 'react-router-dom'


function Product() { 

let [data,setData] = useState('')

let navigate =useNavigate();


function SinglePage(id){
navigate(`${id}`)  
  }

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

return <div key={item.id} style={{
  display:"inline-flex",
  justifyContent:"flex-end",
  alignItems:"center",
  flexWrap:"wrap",
  margin:"auto"
}}>


<Card id={item.id}  src={item.image} desc={item.description} category={item.category}></Card>

</div>

}):<CircularProgress sx={{
  fontSize:"4rem",textAlign:"center",
  marginTop:"2000px"
}} />}


{/* {data ? data.map((item)=>{


    return  <div className='grid gap-3' key={item.id}>
<ImgMediaCard  src={item.image} desc={item.description} category={item.category} />


</div>

}):<CircularProgress sx={{
  fontSize:"4rem",textAlign:"center",
  marginTop:"2000px"
}} />
 } */}





</>
)
}

export default Product