import React from 'react'
import styled from 'styled-components';
import themeList from '../../data/themeList';

const FormFieldStyles = styled.div`


  label{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:center;
    font-size: 1.6rem;
    text-transform: capitalize;
    color: ${({ theme: { theme }})=> theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
  }

  input,textarea{
    margin-top: 1rem;
    width: 100%;
    height: 40px;
    padding: 1rem;
    border: none;
    border-radius: 4px;
    font-size: 1.6rem;
    background-color:var(--lightBlue_2);
    
  }

  textarea{
    height:auto;
    resize: vertical;
  }
  



  @media only screen and (max-width:768){
    input{
      font-size: 1.4rem;

    }
  }





`;

function FormField({label,id,rows = 1,className,...rest}) {
  return (
    <FormFieldStyles className={className}>
      <label htmlFor={ id }>
        { label }
        { rows <= 1 ? (<input type='text' id={ id } />) : (<textarea rows={ rows } id={ id } {...rest}/>)}
      </label>
    </FormFieldStyles>
  )
}

export default FormField