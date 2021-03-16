import React from 'react';

import home1 from '../../assets/images/home1.jpg'

import './About.scss';

const About = () => {
   return (
      <div>
         <div className="description">
            <div className="title">
               <div className="hide">
                  <h2>We work to make</h2>
               </div>
               <div className="hide">
                  <h2>your <span>dreams</span> come
                  </h2>
               </div>
               <div className="hide">
                  <h2>true.</h2>
               </div>
               <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
               <button>Contact Us</button>
            </div>
            <div className="imageg">
               <img src={home1} alt="photographer"></img>
            </div>
         </div>
         
      </div>
   )
}

export default About;