import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MovieDetail = (props) => {

   const [singleMovie, setSingleMovie] = useState({data:[]})

   useEffect(() => {
      axios.get(`http://localhost:5000/movieDetails/${props.match.params.id}`)
      .then(setSingleMovie)
   }, [props.match.params.id])

   return (
      <div>
         <h2>{singleMovie.data.title}</h2>
      </div>
   )
}

export default MovieDetail;
