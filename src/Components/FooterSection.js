import React from 'react';
import Logo from './Logo';
import ParagraphText from './ParagraphText/ParagraphText';
import { Link } from 'react-scroll/modules';
import styled from 'styled-components';

const FooterSectionStyles = styled.footer`
  background-color:var(--darkBlue_4);
  padding: 10rem 0;

  .footerWrappper{
    text-align: center;
  }

  .footerLogo{
    max-width:120px;
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  .footerDesc{
    color: var(--white);
    max-width:350px;
    margin: 0 auto;
    margin-bottom: 2rem;

  }

  .footerLink{
    margin-bottom: 2rem;
    li{
      display: inline-block;
      margin: 0 1rem;

    }

    a{
      font-size:1.6rem;
      color: var(--lightBlue_1);
      line-height: 1.5rem;
      text-decoration: none;
    }

    li:hover{
      a{
        color: var(--mediumSlateBlue);
        text-decoration: underline;

      }
    }

  }

  .footerCopyRight{
    font-size:1.2rem;
    color: var(--lightBlue_1);
  }
  @media only screen and (max-width: 768px){
    .footerLink{
      a{
        font-size: 1.4rem;
      }
    } 
  }

`;

function FooterSection() {
  return (
    <FooterSectionStyles>
      <div className='container'>
        <div className='footerWrappper'>
          <Link to='Home' smooth>
            <Logo className='footerLogo'/>
          </Link>
          <ParagraphText className='footerDesc'>“Artistic” is a studio of some passionate photographer. Our Goal is to capture your experience.</ParagraphText>
          <div className='footerLink'>
            <ul>
              <li >
                <Link
                  to="hero" smooth>Home</Link>
              </li>
              <li>
                <Link
                  to="Services" smooth>Services</Link>
              </li>
              <li>
              <Link
                to="About" smooth>About</Link>
              </li>
              <li>
                <Link
                  to="Contact" smooth>Contact</Link>
              </li>
            </ul>
          </div>
            <ParagraphText className='footerCopyRight'>© Artistic Creative 2022. All rights reserved</ParagraphText>
        </div>
      </div>
    </FooterSectionStyles>
  )
}

export default FooterSection;