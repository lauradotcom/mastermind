import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Button } from '../styles';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const MessageModal = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
`

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  align-items: center;
  height: 65%;
  width: 90%;
  background: #111;
  margin: 0 auto;
  border-radius: 10px;
  padding: 1rem;
  color: #F9F8F8;
  z-index: 1;
  @media screen and (min-width: 758px) {
    height: 45%;
    width: 50%;
  }
  @media screen and (min-width: 1024px) {
    width: 30%
  }
  @media screen and (min-width: 1440px) {
    width: 25%;
  }
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

export const Outcome = ({ outcome, setOutcome, answer }) => {

  const closeModal = () => {
    setOutcome('');
  }

  return (  
    outcome ? (
      <MessageModal>
        <MessageContainer>
        <CancelOutlinedIcon
          onClick={() => closeModal()}
          sx={{
            alignSelf: 'flex-end',
            color: '#F9F9F8',
            cursor: 'pointer',
          }}
        />
          {
          outcome === 'win'? 
            <Message>You win!</Message> 
          : <Message>
              Better luck next time!
              <Answer>Correct answer: {answer}</Answer>
            </Message>
          }
          <Button>{outcome === 'win' ? 'Play Again' : 'Try Again'}</Button>
        </MessageContainer>
      </MessageModal>
    )
    : <></> 
  )
}