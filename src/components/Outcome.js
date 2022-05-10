import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Button } from '../styles';

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
  display: block;
  font-family: ${props => props.theme.fonts.headings};
  font-size: 1.25rem;
  text-align: center;
  margin-top: 1rem;
`

const Answer = styled.span`
  display: block;
  font-size: 1rem;
  text-align: center;
`

export const Outcome = ({ outcome, answer }) => {

  return (  
    outcome ? (
      <MessageContainer>
        {
        outcome === 'win'? 
          <Message>You win!
            <Button>Play Again</Button>
          </Message> 
        : <Message>
            Better luck next time!
            <Answer>Correct answer: {answer}</Answer>
            <Button>Try Again</Button>
          </Message>
        }
      </MessageContainer>
    )
    : <></> 
  )
}