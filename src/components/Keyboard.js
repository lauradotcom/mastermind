import React from 'react';
import styled from '@emotion/styled';
import BackspaceIcon from '@mui/icons-material/Backspace';

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
  align-items: center;
  height: 50px;
  background-color: #8D9F9B;
  color: #F8F8F8;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  padding: 0.5rem;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    margin: 0.5rem;
    padding: 1rem;
  }
`

export const Keyboard = ({ keyButtons, handleClick, submitGuess }) => {

  return (
    <KeyboardSection>
      <KeyboardRow>
        {keyButtons.map((key) => (
          <KeyboardButton 
            key={key}
            onClick={() => handleClick(key)}
          >
            {key === 'Backspace' ? <BackspaceIcon /> : key}
          </KeyboardButton>
        ))}
      </KeyboardRow>
    </KeyboardSection>
  )
}