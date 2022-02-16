import React from 'react'
import styled from 'styled-components';
import themeList from '../../data/themeList';
import ParagraphText from '../ParagraphText/ParagraphText';

const ServiceItemStyles = styled.div`
  text-align: left;
  padding: 3rem;
  border-radius: 12px;
  background-color: ${({ theme: { theme } }) => theme === themeList.dark ? 'var(--mediumSlateBlue)' : null};

  .ServiceIcon{
    font-size: 2rem;
    margin-bottom: 1rem;
    background-color:${({ theme: { theme } }) => theme === themeList.dark ? 'var(--white)' : 'var(--mediumSlateBlue)'};
    color: ${({ theme: { theme } }) => theme === themeList.dark ? 'var(--mediumSlateBlue)' : 'var(--white)'};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content:center;
    align-items: center;
    svg{
      width: 60%;
    }
  }

  .ServiceTitle{
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.5em;
    text-transform: capitalize;
    margin-bottom: 1rem;
    color: ${({ theme: { theme }})=> theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
  }

  &:hover{
    background-color:${({ theme: { theme } }) => theme === themeList.light ? 'var(--mediumSlateBlue)' : null};

    .ServiceIcon{
      background-color: var(--white);
      color: var(--mediumSlateBlue);
    }
  }

  @media only screen and (max-width: 768px){

    background-color: var(--mediumSlateBlue);

    .ServiceIcon{
      background-color: var(--lightBlue_1);
      color: var(--mediumSlateBlue);
    }
  }

`;


function ServiceItem({icon,title,desc}) {
  return (
    <ServiceItemStyles>
      
      <div className='ServiceIcon'>
        { icon }
      </div>
      <div className='ServiceTitle'>
        { title }
      </div>
      <ParagraphText className='serviceDesc'>
        { desc }
      </ParagraphText>
    
    </ServiceItemStyles>
  )
}

export default ServiceItem;