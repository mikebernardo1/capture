import React from 'react';

import home1 from '../../assets/images/home1.jpg'

import './About.scss';

import styled from 'styled-components';

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

const AboutStyle = styled.div`
   min-height: 90vh;
   display: flex;
   align-items:center;
   justify-content: center;
   padding: 5rem 10rem;
   color:white;
`

const DescriptionStyle = styled.div`
   flex: 1;
   padding-right: 5rem;
   h2{
      font-weight: lighter;
   }
`

const ImageStyle = styled.div`
   flex: 1;
   overflow: hidden;
   img{
      width:100%;
      height: 80vh;
      object-fit: cover;
   }
`

const HideStyle = styled.div`
   overflow:hidden;
`

export default About;