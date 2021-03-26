import styled from 'styled-components';
import {motion} from 'framer-motion'

export const AboutStyle = styled(motion.div)`
min-height: 90vh;
display: flex;
align-items:center;
justify-content: center;
padding: 5rem 10rem;
color:white;
`

export const DescriptionStyle = styled.div`
flex: 1;
padding-right: 5rem;
h2{
   font-weight: lighter;
}
`

export const ImageStyle = styled.div`
flex: 1;
overflow: hidden;
img{
   width:100%;
   height: 80vh;
   object-fit: cover;
}
`

export const HideStyle = styled.div`
overflow:hidden;
`
