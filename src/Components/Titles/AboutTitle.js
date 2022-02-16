import React from 'react'
import styled from 'styled-components';
import themeList from '../../data/themeList';


const AboutTitleStyles = styled.h3`

  font-size:5rem;
  text-transform: capitalize;
  font-weight: 900;
  color:${({ theme: { theme } }) => theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};

  @media only screen and (max-width:768px){
    font-size: 3rem;
  }

`;


function AboutTitle ({ children }, ...rest) {
  return (
    <AboutTitleStyles
      { ...rest }>
      { children }
    </AboutTitleStyles>
  )
}

export default AboutTitle