import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import athlete from '../../assets/images/athlete-small.png';
import theracer from '../../assets/images/theracer-small.png';
import goodtimes from '../../assets/images/goodtimes-small.png';

const workData = [
   {
      image: athlete,
      title: 'The Athlete'
   },
   {
      image: theracer,
      title: 'The Racer'

   },
   {
      image: goodtimes,
      title: 'Good Times'
   }
]

const Work = () => {
   return (
      <WorkStyle>
         {workData.map(data=>(
            <MovieStyle>
               <h2>{data.title}</h2>
               <div className="line"></div>
                  {/* <Link> */}
                     <img src={data.image} alt={data.image}/>
                  {/* </Link> */}
            </MovieStyle>
         )
         )}
      </WorkStyle>
   )
}

const WorkStyle = styled.div`
   min-height: 100vh;
   overflow: hidden;
   padding: 5rem 10rem;
   h2{
      padding: 1rem 0rem;
   }
`

const MovieStyle = styled.div`
   padding-bottom:10rem;
   .line{
      height:0.5rem;
      background: #cccccc;
      margin-bottom: 3rem;
   }
   img{
      width:100%;
      height:70vh;
      object-fit: cover;
   }
`

export default Work;