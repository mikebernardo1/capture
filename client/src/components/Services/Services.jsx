import React from 'react';

import clock from '../../assets/icons/clock.svg';
import diaphragm from '../../assets/icons/diaphragm.svg';
import money from '../../assets/icons/money.svg';
import teamwork from '../../assets/icons/teamwork.svg';
import home2 from '../../assets/images/home2.jpg';

import styled from 'styled-components';
import {AboutStyle, DescriptionStyle, ImageStyle} from '../../styles/styles';

const Services = () => {
   return (
      <ServicesStyle>
         <DescriptionStyle>
            <h2>High <span>quality</span> services</h2>
            <CardsStyle>
               <Card>
                  <div className="icon">
                     <img src ={clock} alt='clock'/>
                     <h3>Efficient</h3>
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
               </Card>
               <Card>
                  <div className="icon">
                     <img src ={teamwork} alt='teamwork'/>
                     <h3>Teamwork</h3>
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
               </Card>
               <Card>
                  <div className="icon">
                     <img src ={diaphragm} alt='diaphragm'/>
                     <h3>Diaphragm</h3>
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
               </Card>
               <Card>
                  <div className="icon">
                     <img src ={money} alt='money'/>
                     <h3>Affordable</h3>
                  </div>
                  <p>Lorem ipsum dolor sit amet.</p>
               </Card>
            </CardsStyle>
         </DescriptionStyle>
         <ImageStyle>
            <img src={home2} alt='camera'/>
         </ImageStyle>
      </ServicesStyle>
   );
};

const ServicesStyle = styled(AboutStyle)`
h2{
   padding-bottom: 5rem;
}
p{
   width: 70%;
   padding: 2rem 0rem 4rem 0rem;
}
`;

const CardsStyle = styled.div`
   display:flex;
   flex-wrap: wrap;
`;

const Card = styled.div`
   flex-basis: 20rem;
   .icon{
      display:flex;
      align-items: center;
      h3{
         margin-left: 1rem;
         background: white;
         color: black;
         padding: 1rem;
      }
   }
`

export default Services;