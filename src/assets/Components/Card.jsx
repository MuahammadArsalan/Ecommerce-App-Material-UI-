import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import '../assets/CSS/Custom.css'
// import '../assets/CSS/Custom.css'

import {  useNavigate } from 'react-router-dom';
// import 'src/assets/Components/Card.jsx'
 function ImgMediaCard(props,{id}) {

let navigate =useNavigate();

function SingleProduct(id){

  console.log(id);
  
navigate(`/singleProduct/${id}`)  
}



  return (
    <Card sx={{ maxWidth: 335 }}>
      <CardMedia sx={{
        width:"250px",
        height:"200px",
      
      }}
        component="img"
        alt="green iguana"
        image={props.src}
/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.category}
        </Typography>
        <Typography  className="desc" variant="body2" sx={{ color: 'text.secondary' }}>
         
          {props.desc.length  > 160 ? props.desc.slice(0,160) + '....':props.desc}

        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" onClick={()=>{SingleProduct(props.id)}}>Show More</Button>

         </CardActions>
     
    </Card>
  );
}
export default ImgMediaCard

















// import React from 'react'

// function Card(props) {
  


//   const navigate = useNavigate();
//   const getSingleProduct = (id) => {
//     navigate(`/singleproduct/${id}`)
//   };
  
  
  
  
  
  
  
  
  
  
//   return (

// <>

// <div className="card card-compact bg-base-100 w-96 shadow-xl">
//   <figure>
//     <img width={'100px'} height={'20px'}
//       src={props.src}
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">{props.category}</h2>
//     <p className='desc'>{props.desc > 30 ? props.desc.slice(0,30):props.desc}
//     </p>
//     <p>{props.price}</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary" onClick={()=>{getSingleProduct(props.id)}} > Show more</button>
//     </div>
//   </div>
// </div>


// </>


//   )
// }

// export default Card