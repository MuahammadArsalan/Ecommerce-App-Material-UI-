// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import '../assets/CSS/Custom.css'
// import '../assets/CSS/Custom.css'

import {  useNavigate } from 'react-router-dom';
import '../CSS/Custom.css'
//  function ImgMediaCard(props) {



//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         component="img"
//         alt="green iguana"
//         height="100px"
//         image={props.src}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {props.category}
//         </Typography>
//         <Typography  className="desc" variant="body2" sx={{ color: 'text.secondary' }}>
         
//           {props.desc}

//         </Typography>
//       </CardContent>
//       <CardActions>
//      {props.btn}
//          </CardActions>
     
//     </Card>
//   );
// }
// export default ImgMediaCard

















import React from 'react'

function Card(props) {
  
  let navigateToSingle = useNavigate()
  function SinglePage(id){
    console.log(id);

    navigateToSingle(`singleProduct/${id}`)
    
  }
  
  
  
  
  
  
  
  
  
  
  return (

<>

<div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img width={'100px'} height={'20px'}
      src={props.src}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.category}</h2>
    <p className='desc'>{props.desc > 30 ? props.desc.slice(0,30):props.desc}
    </p>
    <p>{props.price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>{SinglePage(props.id)}} > Show more</button>
    </div>
  </div>
</div>


</>


  )
}

export default Card