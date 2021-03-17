import React from 'react';

import clock from '../../assets/icons/clock.svg';
import diaphragm from '../../assets/icons/diaphragm.svg';
import money from '../../assets/icons/money.svg';
import teamwork from '../../assets/icons/teamwork.svg';
import home2 from '../../assets/images/home2.jpg';


const Services = () => {
   return (
      <div className='services'>
         <div className="description">
            <h2>High<span>quality</span> services</h2>
            <div className="cards">
               <div className="card">
                  <div className="icon">
                     <img src ={clock} alt='clock'/>
                     <h3>Efficient</h3>
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
               </div>
               <div className="card">
                  <div className="icon">
                     <img src ={teamwork} alt='teamwork'/>
                     <h3>Teamwork</h3>
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
               </div>
               <div className="card">
                  <div className="icon">
                     <img src ={diaphragm} alt='diaphragm'/>
                     <h3>Diaphragm</h3>
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
               </div>
               <div className="card">
                  <div className="icon">
                     <img src ={money} alt='money'/>
                     <h3>Affordable</h3>
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
               </div>
            </div>
         </div>
         <img src={home2} alt='camera'/>
      </div>
   )
}

export default Services;