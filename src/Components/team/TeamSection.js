import React from 'react'
import styled from 'styled-components';
import TeamTitle from '../Titles/TeamTitle';
import TeamMembesOne from '../../assets/images/team1.png';
import TeamMembesTwo from '../../assets/images/team2.png';
import TeamMembesThree from '../../assets/images/team3.png';


const TeamSectionStyles = styled.div`
  display: flex;
  justify-content:center;
  align-items: center;
  min-height: 100vh;
  padding-top: calc(var(--HeaderHeight) + 10px);

  .teamWrapper{
    display: flex;
    justify-content:space-between;
    align-items: center;
  }
  
  .teamInfo{
    flex: 1;
    .qMark{
      color: var(--mediumSlateBlue);
      font-size: 1.8rem;
      font-weight: 500;
      text-transform: capitalize;
    }
  }  

  .teamPhotos{
    flex: 3;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 4rem;
    .photographer{
      position: relative;
      z-index: -1;
      img{
        object-fit: contain;
        border-radius: 15px;
      }
      .imgInfo{
        display: flex;
        flex-direction: column;
        position: absolute;
        bottom: 1.5rem;
        left: 3rem;
        color: var(--white);
        h3{
          font-size:2rem
        }
        p{
          font-size:1.5rem
        }
      }
    }
  }

  @media only screen and (max-width: 992px){
    .teamWrapper{
      display: flex;
      flex-direction: column;
      align-items: left;
      
    }
    .teamWrapper{
      gap: 3rem;
    }
  }


  @media only screen and (max-width:786px){
    .teamPhotos{
      flex-direction: column;
    }
  }
  `;

function TeamSection() {
  return (
    <TeamSectionStyles>
      <div className='container'>
        <div className='teamWrapper'>
          <div className='teamInfo'>
            <h1 className='qMark'>team members</h1>
            <TeamTitle className='aboutTitle'>The best<br/>team<br/>available</TeamTitle>
          </div>
          <div className='teamPhotos'>
            <div className='photographer'>
              <div className='img'>
                <img src={ TeamMembesOne } alt='TeamMembesOne' />
              </div>
              <div className='imgInfo'>
                <h3>Rasu</h3>
                <p>Photo Editor</p>
              </div>
            </div>
            <div className='photographer'>
              <div className='img'>
                <img src={ TeamMembesTwo } alt='TeamMembesTwo' />
              </div>
              <div className='imgInfo'>
                <h3>Shaif Arfan</h3>
                <p>Photographer</p>
              </div>
            </div>
            <div className='photographer'>
              <div className='img'>
                <img src={ TeamMembesThree } alt='TeamMembesThree' />
              </div>
              <div className='imgInfo'>
                <h3>Ayan Bilai</h3>
                <p>Photographer</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </TeamSectionStyles>
  )
}

export default TeamSection