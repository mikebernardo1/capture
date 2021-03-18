import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


import athlete from '../../assets/images/athlete-small.png';
import athlete2 from '../../assets/images/athlete2.png';
import theracer from '../../assets/images/theracer-small.png';
import theracer2 from '../../assets/images/the-racer2.jpeg';
import goodtimes from '../../assets/images/goodtimes-small.png';
import goodtimes2 from '../../assets/images/good-times2.jpeg';

import MovieDetail from '../MovieDetail/MovieDetail';

const workData = [
   {
      id:uuidv4(),
      title: "The Athlete",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/work/the-athlete",
      awards: [
         {
            title: "Truly A masterpiece",
            description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
         },
         {
            title: "Fresh look on a brutal sport.",
            description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
         },
         {
            title: "It’s okay lmao.",
            description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
         },
      ],
   },
   {
      id:uuidv4(),
      title: "Good Times",
      mainImg: goodtimes,
      url: "/work/good-times",
      secondaryImg: goodtimes2,
      awards: [
         {
            title: "Truly A masterpiece",
            description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
         },
         {
            title: "Fresh look on a brutal sport.",
            description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
         },
         {
            title: "It’s okay lmao.",
            description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
         },
      ],
   },
   {
      id:uuidv4(),
      title: "The Racer",
      mainImg: theracer,
      url: "/work/the-racer",
      secondaryImg: theracer2,
      awards: [
         {
            title: "Truly A masterpiece",
            description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
         },
         {
            title: "Fresh look on a brutal sport.",
            description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
         },
         {
            title: "It’s okay lmao.",
            description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
         },
      ],
   },
];
console.log(workData)

const Work = () => {
   return (
      <WorkStyle>
         {workData.map(data=>(
            <MovieStyle key={data.id}>
               <h2>{data.title}</h2>
               <div className="line"></div>
                  <Link to={`/work/${data.id}`}>
                     <img src={data.mainImg} alt={data.mainImg}/>
                     <MovieDetail
                     key={data.id}
                     title={data.title}
                     secondaryImg={data.secondaryImg}
                     awards={data.awards}
                     />
                  </Link>
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