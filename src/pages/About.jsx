import React from "react";
import about from './image/img3.jpg';
function About(){
    return(
        <div className='about mt-5'>
    <div className="row">
      <div className="col col-lg-6 col-md-6 col-12">
        <img src={about} className='img-fluid' alt='group discus'/> 
      </div>
      <div className="col col-lg-6 col-md-6 col-12 pt-5">
        <h5 className="mt-3">About Us</h5>
        <h1 className='text mt-3'>Creative Digital Exprience <br/> Company</h1>
        <p className='para mt-4'>Qui ex dolore at repellat, quia neque doloribus omnis adipisci, ipsum eos odio fugit ut eveniet blanditiis praesentium totam non nostrum dignissimos nihil eius facere et eaque. Qui, animi obcaecati</p>  
        <button className='btn mt-3 '>Read More</button>
      </div>
    </div>
</div>

    )
}
export default About;