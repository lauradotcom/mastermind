import React from 'react';
import styled from '@emotion/styled';

const WinMessage = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  background: #000;
  opacity: 50%;
  margin: 0 auto;
  text-align: center;
  color: #000;
  font-family: ${props => props.theme.fonts.headings}
  z-index: 1;
`

const LoseMessage = styled.div`

`

export const Outcome = ({ submitGuess }) => {

  return (
    <WinMessage>{submitGuess}</WinMessage>
  )
}