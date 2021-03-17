import React from 'react';

import AboutUs from './pages/AboutUs/AboutUs';
import GlobalStyle from './styles/GlobalStyle';
import Nav from './components/Nav/Nav';
import Contact from './pages/Contact/Contact';
import Work from './pages/Work/Work';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

export default function App() {
   return (
      <div className='App'>
         <BrowserRouter>
            <GlobalStyle/>
            <Nav/>
            <Switch>
               <Route exact path ='/' component={AboutUs}/>
               <Route path ='/contact' component={Contact}/>
               <Route path ='/work' component={Work}/>
            </Switch>
         </BrowserRouter>
      </div>
   )
}
