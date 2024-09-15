import React from 'react'

function About() {
  return (
    
<>

<h1 style={{
  textAlign:"center",
  fontSize:"3rem",
  fontWeight:"bold"  ,
  marginTop:"2rem",
  fontFamily:"sans-serif"
}}>About</h1>


<div  style={{
display:"flex",
justifyContent:"space-around",
alignItems:"center",

}}>


<div style={{
  width:"45vw",
  fontFamily:"sans-serif"
}}>
<p>Elevate your wardrobe with our exceptional range of jeans, where fashion meets functionality. Each pair is meticulously designed with attention to detail, from the perfect cut to premium fabric that molds to your shape while maintaining its integrity. Whether you’re dressing up for a night out or keeping it casual for the weekend, our jeans provide the ultimate blend of comfort and style. Embrace the versatility of our collection and redefine your denim experience with jeans that promise to be your go-to for any occasion. Shop now and find your new favorite fit!</p>
</div>


<div>
  <img src="Images/jeans.jpg" width='400px'  alt="" />
</div>

</div>



<div  style={{
display:"flex",
justifyContent:"space-around",
alignItems:"center",

}}>







<div>
  <img src="Images/jeans2.jpg" width='400px'  alt="" />
</div>





<div style={{
  width:"35vw",
  fontFamily:"sans-serif"  
}}>
<p>Discover the perfect blend of style and comfort with our collection of premium jeans. Crafted from high-quality denim, our jeans offer a flattering fit and durable construction for everyday wear. Whether you prefer a classic straight leg, trendy skinny, or relaxed fit, our diverse range ensures you'll find the ideal pair to suit your personal style. Elevate your wardrobe with our versatile jeans, designed to make you look and feel great from morning to night. Explore our selection today and step into effortless fashion.</p>
</div>



</div>





<div>
<footer className="footer mt-5 bg-base-300 text-base-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
</footer></div>



</>  )
}

export default About