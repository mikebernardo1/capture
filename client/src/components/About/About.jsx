import React from 'react';

import home1 from '../../assets/images/home1.jpg'

import './About.scss';

import styled from 'styled-components';
import {AboutStyle, DescriptionStyle, ImageStyle, HideStyle} from '../../styles/styles';
import {motion} from 'framer-motion';

const About = () => {

   return (
      <AboutStyle>
         <DescriptionStyle>
            <motion.div>
               <HideStyle>
                  <motion.h2>
                     We work to make
                  </motion.h2>
               </HideStyle>
               <HideStyle>
                  <motion.h2>your <span>dreams</span> come
                  </motion.h2>
               </HideStyle>
               <HideStyle>
                  <motion.h2>true.</motion.h2>
               </HideStyle>
            </motion.div>
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