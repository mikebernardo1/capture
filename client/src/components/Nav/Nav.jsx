import React from 'react';
import styled from 'styled-components';
import {Link, useLocation} from 'react-router-dom';
import {motion} from 'framer-motion';

const Nav = () => {

   const {pathname} = useLocation();
   return (
      <NavStyle>
         <h1><Link to='/'>Capture</Link></h1>
         <ul>
            <li>
               <Link to='/'>1. About Us</Link>
               <Line 
               transition={{duration:0.75}} 
               initial={{width:'0%'}} 
               animate={{width: pathname === '/' ? '50%' : '0%' }}/>
            </li>
            <li>
               <Link to='/work'>2. Our Work</Link>
               <Line 
               transition={{duration:0.75}} 
               initial={{width:'0%'}} 
               animate={{width: pathname === '/work' ? '50%' : '0%' }}/>
            </li>
            <li>
               <Link to='/contact'>3. Contact Us</Link>
               <Line 
               transition={{duration:0.75}} 
               initial={{width:'0%'}} 
               animate={{width: pathname === '/contact' ? '50%' : '0%' }}/>
            </li>
         </ul>
      </NavStyle>
   )
}

const NavStyle = styled.nav`
   min-height: 10vh;
   display: flex;
   margin: auto;
   justify-content: space-between;
   align-items: center;
   padding: 1rem 10rem;
   background: #282828;
   a{
      color: white;
      text-decoration: none;
      font-size: 1.5rem;
   }
   ul{
      display:flex;
      list-style:none;
   }
   h1{
      font-family: 'lobster', cursive;
      font-weight: lighter;
   }
   li{
      padding-left: 10rem;
      position: relative;
   }
   @media (max-width: 1300px){
      flex-direction:column;
      padding: 2rem 0rem;
      ul{
         padding:2rem;
         justify-content:space-around;
         width:100%;
         li{
            padding:0;
         }
      }
   }
`
const Line = styled(motion.div)`
height:0.3rem;
background: #23d997;
width:0%;
position:absolute;
bottom: -80%;
left: 60%;
@media(max-width:1300px){
   left:0%;
}
`
export default Nav;