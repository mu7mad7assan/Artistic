import React from 'react'
import styled from 'styled-components';



const NewsLetterStyles = styled.div`

  display: flex;
  justify-content:center;
  align-items: center;
  margin-top: 20rem;
  .newsLetter{
    text-align: center;
    background-color:var(--mediumSlateBlue);
    padding:1rem 0;
    border-radius: 10px;
    .title{
    font-size: 4rem;
    color: var(--white);
    margin-bottom: 0;
    }
    .paragraph{
    font-size: 1.6rem;
    color: var(--white);

  
    }
  }

  .form{
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    form{
      display: flex;
      justify-content:center;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      width: 100%;  

      input{
        display: block;
        margin-top: 2rem;
        width: 50%;
        height: 4rem;
        border: none;
        border-radius: 5px;
        padding: 1rem;
        font-size: 1.4rem;
        color: var(--darkBlue_2);
      }
      button{
        display: block;
        border: none;
        font-size: 1.4rem;
        color: var(--darkBlue_2);
        padding: 1rem 2rem;
        border-radius:8px;
      }
    }


  }


`;

function NewsLetter() {
  return (
    <NewsLetterStyles>
      <div className='container'>
        <div className='newsLetter'>
          <h1  className='title'>Join Newsletter</h1>
          <p className='paragraph'>Get regular updates every week</p>
          <div className='form'>
            <form>
              <input className='input' type='mail' placeholder='Enter your email' />
              <button>Join</button>
            </form>
          </div>
        </div>
      </div>
    </NewsLetterStyles>
  )
}

export default NewsLetter