import React from 'react';

import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import FAQ from '../../components/FAQ/FAQ';
import {motion} from 'framer-motion';
import {pageAnimation} from '../../animation';

const AboutUs = () => {
   return (
      <motion.div 
      exit='exit' 
      variants={pageAnimation} 
      initial='hidden' 
      animate='show'
      >
         <About/>
         <Services/>
         <FAQ/>
      </motion.div>
   )
}

export default AboutUs;