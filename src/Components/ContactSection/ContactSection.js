import React from 'react';
import styled from 'styled-components';
import PrimaryButton from '../Button/PrimaryButton';
import ParagraphText from '../ParagraphText/ParagraphText';
import AboutTitle from '../Titles/AboutTitle';
import FormField from './FormField';


const ContactSectionStyles = styled.div`
  padding: 10rem 0;


  .contactWrapper{
    max-width:800px;
    margin: 0 auto;
    text-align: center;

  }

  .contactInfo{
    margin-bottom: 4rem;
  }

  .contactForm{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.5rem;
    row-gap: 3rem;

    .contactItemFullWidth{
      grid-column: span 2;
    }

    .button{
      width: max-content;
      cursor: pointer;

    }
  }

  @media only screen and (max-width:768px){
    .contactForm{
      grid-template-columns: 1fr;
      row-gap: 2rem;
      .contactItemFullWidth{
        grid-column: span 1;
      }
    }
  }

  






`;

function ContactSection() {
  return (
    <ContactSectionStyles id='Contact'>
      <div className='container'>
        <div className='contactWrapper'>
          <div className='contactInfo'>
            <AboutTitle>get in touch</AboutTitle>
            <ParagraphText>we would love to hear from you</ParagraphText>
          </div>
          <form className='contactForm'>
            <FormField
              className='contactItemFullWidth'
              label='Name'
              id='name'
              type='text'
              name='name'
              required>
            </FormField>
            <FormField
              label='Email'
              id='email'
              type='email'
              name='email'
              required>
            </FormField>
            <FormField
              label='Subject'
              id='subject'
              type='text'
              name='subject'
              required>
            </FormField>
            <FormField
              className='contactItemFullWidth'
              label='Message'
              id='message'
              type='message'
              name='message'
              required rows={ 6 }>
            </FormField>
            <PrimaryButton
              buttonType='button'
              className='button'
              type='submit'>Submit
            </PrimaryButton>  
          </form>
        </div>
      </div>
    </ContactSectionStyles>
  )
}

export default ContactSection