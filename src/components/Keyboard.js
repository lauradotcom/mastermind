import React, { useEffect } from 'react';
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

  const keyButtons = ['Enter', '0', '1', '2', '3', '4', '5', '6', '7', 'Backspace'];

  /** Add event listeners to support keyboard entry or Keyboard component clicks */
  const handleClick = (key) => {
    console.log(`You clicked the ${key} button`);
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (keyButtons.includes(e.key)) {
        console.log(`You pressed the ${e.key} key`);
      }
    }

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  });

  return (
    <KeyboardSection>
      <KeyboardRow>
        {keyButtons.map((key) => (
          <KeyboardButton 
            key={key}
            onClick={() => handleClick(key)}
          >
            {key}
          </KeyboardButton>
        ))}
      </KeyboardRow>
    </KeyboardSection>
  )
}