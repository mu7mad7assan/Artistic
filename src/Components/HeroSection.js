import React from 'react'
import styled from 'styled-components';
import HeroTitle from './Titles/HeroTitle';
import ParagraphText from './ParagraphText/ParagraphText';
import PrimaryButton from './Button/PrimaryButton';
import HeroImg from '../assets/images/hero.png'
import Link from 'react-scroll/modules/components/Link';

const HeroSectionStles = styled.div`
  padding-top: calc(var(--HeaderHeight) + 10px);
  min-height:100vh;
  display: flex;
  align-items: center;
  justify-content:center;

  .heroWrapper{
    display: flex;
    align-items: center;
    justify-content:center;
    width: 100%;
    gap: 1rem;
  }

  .heroInfo{
    flex: 3;
  }

  .heroImg{
    flex: 4;

    img{
      object-fit: contain;

    }

  }
  .heroTitle{
    margin-bottom: 1rem;
    max-width: 400px;
  }

  .heroDescribtion{
    margin-bottom: 1.5rem;
    max-width: 280px;

  }

  @media only screen and (max-width: 768px){
    .heroWrapper{
      flex-direction: column-reverse;
      gap: 0.5rem;

    }

    .heroImg{
      max-width:400px;
      margin-top: auto;
    }

  }

`;



function HeroSection() {
  return (
    <HeroSectionStles id='hero'>
      <div className='container'>
        <div className='heroWrapper'>
          <div className='heroInfo'>
            <HeroTitle className='heroTitle'>
              A click of artistic joy
            </HeroTitle>
            <ParagraphText className='heroDescribtion'>
              Because every picture tells a story, let us help you tell yours.
            </ParagraphText>
            <PrimaryButton buttonType={Link} to='Contact'>get In Touch</PrimaryButton>
          </div>
          <div className='heroImg'>
            <img src={HeroImg} alt='HeroImg'/>
          </div>
        </div>
        <div>
        </div>
      </div>
    </HeroSectionStles>
  );
}

export default HeroSection;