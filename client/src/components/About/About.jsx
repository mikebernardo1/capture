import React from 'react';

import home1 from '../../assets/images/home1.jpg'

import './About.scss';

import styled from 'styled-components';
import {AboutStyle, DescriptionStyle, ImageStyle, HideStyle} from '../../styles/styles';
import {motion} from 'framer-motion';
import {titleAnimation, photoAnimation, fade} from '../../animation';
import Wave from '../Wave/Wave';

const About = () => {

   return (
      <AboutStyle>
         <DescriptionStyle>
            <motion.div>
               <HideStyle>
                  <motion.h2 variants={titleAnimation}>
                     We work to make
                  </motion.h2>
               </HideStyle>
               <HideStyle>
                  <motion.h2 variants={titleAnimation}>your <span>dreams</span> come
                  </motion.h2>
               </HideStyle>
               <HideStyle>
                  <motion.h2 variants={titleAnimation}>true.</motion.h2>
               </HideStyle>
            </motion.div>
            <motion.p variants={fade}> Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</motion.p>
            <motion.button variants={fade}>Contact Us</motion.button>
         </DescriptionStyle>
         <ImageStyle>
            <motion.img variants={photoAnimation} src={home1} alt="photographer"></motion.img>
         </ImageStyle>
         <Wave/>
      </AboutStyle>
   )
}

export default About;