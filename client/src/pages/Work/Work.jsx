import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import axios from 'axios';


import {motion} from 'framer-motion';
import {pageAnimation} from '../../animation';

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
         {movies.data.map(movie=>(
            <MovieStyle key={movie.id}>
               <h2>{movie.title}</h2>
               <div className="line"></div>
                  <Link to={`/work/${movie.id}`}>
                     <img src={movie.mainImg} alt={movie.mainImg}/>
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