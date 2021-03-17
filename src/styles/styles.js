import styled from 'styled-components';

export const AboutStyle = styled.div`
min-height: 100vh;
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
