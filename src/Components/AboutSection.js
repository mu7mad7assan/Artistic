import React from 'react'
import Link from 'react-scroll/modules/components/Link';
import styled from 'styled-components';
import AboutImg from '../assets/images/about.png';
import PrimaryButton from './Button/PrimaryButton';
import ParagraphText from './ParagraphText/ParagraphText';
import AboutTitle from './Titles/AboutTitle';


const AboutSectionStyles = styled.div`

  display: flex;
  justify-content:center;
  align-items: center;
  min-height: 100vh;
  padding-top: calc(var(--HeaderHeight) + 10px);

  .aboutWrapper{
    display: flex;
    justify-content:center;
    align-items: center;
    width: 100%;
    gap: 1rem;
  }

  .aboutImg{
    flex: 4;
    

    img{
      object-fit: contain;
    }
  }

  .aboutInfo{
    flex: 3;
  }
  .qMark{
    font-size: 1.8rem;
    font-weight: 500;
    color: var(--mediumSlateBlue);

  }

  .aboutTitle{
    margin-bottom: 1rem;
    max-width: 400px;
  }

  .aboutDescribtion{
    margin-bottom: 1.5rem;
    max-width: 280px;

  }

  @media only screen and (max-width: 768px){

    .aboutWrapper{

      flex-direction: column;
    }

    .aboutImg{
      max-width:400px;
      margin-top: auto;
    }
  }



`;


function AboutSection() {
  return (
    <AboutSectionStyles id='About'>
      <div className='container' >
        <div className='aboutWrapper'>
          <div className='aboutImg'>
            <img src={ AboutImg } alt='AboutImg'/>
          </div>
          <div className='aboutInfo'>
            <h3 className = 'qMark'>Who are we</h3>
            <AboutTitle className='aboutTitle'>
              Capturing life as it happens
            </AboutTitle>
            <ParagraphText className='aboutDescribtion'>
              “Artistic” is a studio of some passionate photographer. Our Goal is to capture your experience.
            </ParagraphText>
            <PrimaryButton buttonType={Link} to='Contact'>get in touch</PrimaryButton>
          </div>

        </div>
      </div>
    </AboutSectionStyles>
  )
}

export default AboutSection