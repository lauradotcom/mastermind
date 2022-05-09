import React from 'react';
import styled from '@emotion/styled';

const MessageContainer = styled.div`
  height: 50px;
  width: 100px;
  position: fixed;
  top: 50%;
  left: 50%;
  background: #000;
  margin: 0 auto;
  text-align: center;
  color: #FFF;
  z-index: 1;
`
const Message = styled.p`
  font-family: ${props => props.theme.fonts.headings};
  vertical-align: middle;
`

export const Outcome = ({ outcome }) => {

  return (  
    outcome ? (
      <MessageContainer>
        {
        outcome === 'win'? <Message>You win!</Message> 
        : <Message>You lose!</Message>
        }
      </MessageContainer>
    )
    : <></> 
  )
}