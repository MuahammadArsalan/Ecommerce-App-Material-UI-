import { Box,  CardActions, CircularProgress, circularProgressClasses, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ActionAreaCard from '../assets/Components/Card'
// import Card from '../assets/Components/Card'
import ImgMediaCard from '../assets/Components/Card'
import { Button } from 'bootstrap'
import { useNavigate } from 'react-router-dom'
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

import PropTypes from 'prop-types';



function Product() { 

let [data,setData] = useState('')

let navigate =useNavigate();



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

{/* MAterial Ui wala card h */}
<Box sx={{
  display:"inline-flex",
  justifyContent:"center",
  // justifyContent:"flex-",
  alignItems:"center",
  flexWrap:"wrap",
  margin:"auto",
  gap:"10px"
}}>

{data ? data.map((item,index)=>{
return <ImgMediaCard key={item.id}  id={item.id}  src={item.image} desc={item.description} category={item.category}/>

}):  <CircularProgress sx={{
  fontSizeAdjust:"4rem",
display:"inline-flex",
justifyContent:"center",
alignItems:"center",
margin:"100px"
}}/> 


}


</Box>




{/* 
<CircularProgress  sx={{
  fontSizeAdjust:"4rem",
display:"inline-flex",
justifyContent:"center",
alignItems:"center",
margin:"100px"
}} */}




  {/* Daisy Ui wala card h */}
{/* 
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
}} />} */}


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