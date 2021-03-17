import React from 'react';

import home1 from '../../assets/images/home1.jpg'

import './About.scss';

import styled from 'styled-components';
import {AboutStyle, DescriptionStyle, ImageStyle, HideStyle} from '../../styles/styles';

const About = () => {
   return (
      <AboutStyle>
         <DescriptionStyle>
            <div className="title">
               <HideStyle>
                  <h2>We work to make</h2>
               </HideStyle>
               <HideStyle>
                  <h2>your <span>dreams</span> come
                  </h2>
               </HideStyle>
               <HideStyle>
                  <h2>true.</h2>
               </HideStyle>
            </div>
            <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
            <button>Contact Us</button>
         </DescriptionStyle>
         <ImageStyle>
            <img src={home1} alt="photographer"></img>
         </ImageStyle>
      </AboutStyle>
   )
}

export default About;