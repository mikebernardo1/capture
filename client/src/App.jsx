import React from 'react';

import AboutUs from './pages/AboutUs/AboutUs';
import GlobalStyle from './styles/GlobalStyle';
import Nav from './components/Nav/Nav';
import Contact from './pages/Contact/Contact';
import Work from './pages/Work/Work';
import MovieDetail from './pages/MovieDetail/MovieDetail';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

export default function App() {
   return (
      <div className='App'>
         <BrowserRouter>
            <GlobalStyle/>
            <Nav/>
            <Route render={({ location }) => (
               <AnimatePresence exitBeforeEnter>
               <Switch location={location} key={location.pathname}>
                  <Route exact path ='/' component={AboutUs}/>
                  <Route path ='/contact' component={Contact}/>
                  <Route exact path ='/work' component={Work}/>
                  <Route path ='/work/:id' component={MovieDetail}/>
               </Switch>
               </AnimatePresence>
            )}
            />
         </BrowserRouter>
      </div>
   )
}
