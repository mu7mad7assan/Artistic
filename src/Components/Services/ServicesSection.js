import React from 'react'
import SectionTitle from '../Titles/SectionTitle';
import ServiceItem from '../Services/ServiceItem';
import { RiImageEditLine } from 'react-icons/ri';
import styled from 'styled-components';


const ServicesSectionStyles = styled.div`
  padding: 5rem;
  text-align: center;

  .servicesTitle{
    margin: 3rem 0;
  }

  .servicesItems{
    display: flex;
    gap: 2rem;

  }
  @media only screen and (max-width: 768px){
    .servicesItems{
      flex-direction: column;
    }

  }
`;


function ServicesSection() {
  return (
    <ServicesSectionStyles id='Services'>
      <div className='container'>
        <SectionTitle className='servicesTitle'>Our Services</SectionTitle>
        <div className='servicesItems'>
          <ServiceItem
            icon={ <RiImageEditLine /> }
            title='Professional Editing'
            desc='We do professional photo editing. Let us help you to take your photo next level.'/>
          <ServiceItem
            icon={ <RiImageEditLine /> }
            title='Casual Photography'
            desc='You can hire us for any kind of casual Photography. Book us for your next events. '/>
          <ServiceItem
            icon={ <RiImageEditLine /> }
            title='Wedding Photography'
            desc='Wedding is the most memorable events of our life. Let us help you to capture it.'/>
        </div>
      </div>
    </ServicesSectionStyles>
  )
}

export default ServicesSection