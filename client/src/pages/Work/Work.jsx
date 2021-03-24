import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axios from 'axios';

import {motion} from 'framer-motion';
import {fade, pageAnimation, photoAnimation, lineAnimation, slider, sliderContainer} from '../../animation';

const Work = () => {

   const [movies, setMovies] = useState({data:[]})

   useEffect(()=>{
      axios.get('http://localhost:5000/movieDetails')
      .then(setMovies)
   },[])

   return (
      <WorkStyle 
      exit='exit'
      variants={pageAnimation} 
      initial='hidden' 
      animate='show'
      style={{background:'#ffffff'}}
      >
         <motion.div variants={sliderContainer}>
            <Frame1 variants={slider}></Frame1>
            <Frame2 variants={slider}></Frame2>
            <Frame3 variants={slider}></Frame3>
            <Frame4 variants={slider}></Frame4>
         </motion.div>
         {movies.data.map(movie=>(
            <MovieStyle key={movie.id}>
               <motion.h2 variants={fade}>{movie.title}</motion.h2>
               <motion.div variants={lineAnimation} className="line"></motion.div>
                  <Link to={`/work/${movie.id}`}>
                     <Hide>
                        <motion.img variants={photoAnimation} src={movie.mainImg} alt={movie.mainImg}/>
                     </Hide>
                  </Link>
            </MovieStyle>
            )
            )}
      </WorkStyle>
   )
}

const WorkStyle = styled(motion.div)`
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
      background: #23d997;
      margin-bottom: 3rem;
   }
   img{
      width:100%;
      height:70vh;
      object-fit: cover;
   }
`

const Hide = styled.div`
overflow:hidden;
`

const Frame1 = styled(motion.div)`
position:fixed;
left:0;
top: 10%;
width: 100%;
height: 100vh;
background: #fffebf;
z-index: 2;
`

const Frame2 = styled(Frame1)`
background: #ff8efb;
`

const Frame3 = styled(Frame1)`
background:#8ed2ff;
`

const Frame4 = styled(Frame1)`
background: #8effa0;
`

export default Work;