import React from 'react';

import AboutUs from './pages/AboutUs/AboutUs';
import GlobalStyle from './styles/GlobalStyle';
import Nav from './components/Nav/Nav'

export default function App() {
   return (
      <div className='App'>
         <GlobalStyle/>
         <Nav/>
         <AboutUs/>
      </div>
   )
}
