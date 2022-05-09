import React from 'react';
import styled from '@emotion/styled';

const MessageContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 10vh;
  width: 100vw;
  background: #111;
  margin: 0 auto;
  border-radius: 10px;
  padding: 1rem;
  color: #FFF;
  z-index: 1;
`
const Message = styled.p`
  font-family: ${props => props.theme.fonts.headings};
`

export const Outcome = ({ outcome }) => {

  return (  
    outcome ? (
      <MessageContainer>
        {
        outcome === 'win'? <Message>You win!</Message> 
        : <Message>Better luck next time!</Message>
        }
      </MessageContainer>
    )
    : <></> 
  )
}