import React from 'react';
import styled from '@emotion/styled';

const KeyboardSection = styled.section`
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  @media screen and (min-width: 1024px) {
    width: 40%;
    margin: 0 auto;
  }
`

const KeyboardRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const KeyboardButton = styled.button`
  display: flex;
  justify-items: center;
  height: 50px;
  background-color: #8D9F9B;
  color: #F8F8F8;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  padding: 0.5rem;
  @media screen and (min-width: 1024px) {
    margin: 0.5rem;
    padding: 1rem;
  }
`

export const Keyboard = () => {

  const keyButtons = ['Enter', 0, 1, 2, 3, 4, 5, 6, 7, 'Back'];

  /** Add event listeners */
  const handleClick = (e) => {
    console.log('You clicked the button');
  }

  const handleKeyPress = (e) => {
    console.log(e.target.value);
  }

  return (
    <KeyboardSection>
      <KeyboardRow>
        {keyButtons.map((digit) => {
          return <KeyboardButton 
                    key={digit}
                    onClick={handleClick}
                    onKeyDown={handleKeyPress}
                  >
                    {digit}
                  </KeyboardButton>
        })}
      </KeyboardRow>
    </KeyboardSection>
  )
}