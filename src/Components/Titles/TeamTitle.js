import React from 'react'
import styled from 'styled-components';
import themeList from '../../data/themeList';

const TeamTitleStyles = styled.h3`
  font-size: 5rem;
  font-weight: 800;
  color:${({ theme: { theme } }) => theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
  text-transform:capitalize;
  @media only screen and (max-width: 768px){

    font-size: 4rem;
  }
`;

function TeamTitle ({ children, ...rest }) {
  return (
    <TeamTitleStyles { ...rest }>
      { children }
    </TeamTitleStyles>
  )
}

export default TeamTitle