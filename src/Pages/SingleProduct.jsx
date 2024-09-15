import axios from 'axios'
import  { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


  function SingleProduct() {

  let [data,setData] = useState('');

  let {id } =useParams()

let navigate = useNavigate()

  useEffect(()=>{
    axios(`https://fakestoreapi.com/products/${id}`)
  .then((res)=>{
    // console.log(res.data);
    setData(res.data)
    
  }).catch((err)=>{console.log(err)
  })

  },[])


function moveBack(){
navigate(`/Product`)

}

    return (
  <>


  

<div style={{
   display:"flex",
   justifyContent:"center",
   alignItems:"center"
}} >
<div style={{
  // boxShadow:" 5px 5px 5px grey",
// marginTop:"2rem",
// marginRight:"15rem",
 margin:"auto"
}} className=" r-4 card bg-base-100 w-[100%] shadow-2xl">
  <figure className="px-10 pt-10">
    <img

      src={data.image}
      alt="Shoes"
      className="rounded-xl w-[300px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{data.category}!</h2>
    <p>{data.description}</p>
    <div className="card-actions">
      <button className="btn btn-primary mt-4" onClick={()=>{moveBack()}}>Back</button>
    </div>
  </div>
</div>
</div>

</>  )
}

export default SingleProduct




// function SingleProduct() {


//   let [data,setData] = useState('');

//   let {id } =useParams()
  
  
  
//   useEffect(()=>{
//     axios(`https://fakestoreapi.com/products/${id}`)
//   .then((res)=>{
//     console.log(res.data);
//     setData(res.data)
    
//   }).catch((err)=>{console.log(err)
//   })
  
//   },[])
  



// function MediaCard() {
//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
//         image="/static/images/cards/contemplative-reptile.jpg"
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           Lizard
//         </Typography>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//           Lizards are a widespread group of squamate reptiles, with over 6,000
//           species, ranging across all continents except Antarctica
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Share</Button>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
// }

// export default SingleProduct