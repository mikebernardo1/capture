import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import {motion} from 'framer-motion';
import {pageAnimation} from '../../animation';

const MovieDetail = (props) => {

   const [singleMovie, setSingleMovie] = useState({data:[]})


   useEffect(() => {
      axios.get(`http://localhost:5000/movieDetails/${props.match.params.id}`)
      .then(setSingleMovie)
      .then(window.scrollTo(0, 0))
   }, [props.match.params.id])

   return (
      <Details
      exit='exit' 
      variants={pageAnimation} 
      initial='hidden' 
      animate='show'>
         <Headline>
            <h2>{singleMovie.data.title}</h2>
            <img src={singleMovie.data.mainImg} alt={singleMovie.data.title}/>
         </Headline>
         <Awards>
            {singleMovie.data.awards && singleMovie.data.awards.map(award=>{
               return(
                  <div className='awardsstyle' key={uuidv4()}>
                     <h3>{award.title}</h3>
                     <div className="line"></div>
                     <p>{award.description}</p>
                  </div>
               )
            })}
         </Awards>
         <ImageDisplay>
            <img src={singleMovie.data.secondaryImg} alt={singleMovie.data.title}/>
         </ImageDisplay>
      </Details>
   )
}

const Details = styled(motion.div)`
   color: white;
`

const Headline = styled.div`
   min-height:90vh;
   padding-top:20vh;
   position:relative;
   h2{
      position:absolute;
      top:10%;
      left: 50%;
      transform:translate(-50%, -10%)
   }
   img{
      width: 100%;
      height: 70vh;
      object-fit: cover;
   }
`
const Awards = styled.div`
min-height:80vh;
display:flex;
margin: 5rem 10rem;
align-items:center;
justify-content:space-around;

h3{
   font-size:1.8rem;
}
.awardsstyle{
   padding:5rem;

   .line{
   width:100%;
   background: #23d997;
   height: 0.5rem;
   margin: 1rem 0rem;
   }
   p{
      padding: 2rem 0rem;

   }
}
`

const ImageDisplay = styled.div`
min-height:50vh;
img{
   width:100%;
   height: 100vh;
   object-fit:cover;
}
`
export default MovieDetail;