import React from 'react';
import styled from '@emotion/styled';

/** Styled Components */

const FeedbackContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(10, 1fr);
  gap: 6px;
  justify-content: center;
  padding: 1rem;
  font-size: 1.25rem;
  font-family: ${props => props.theme.fonts.body}
  @media screen and (min-width: 1024px) {
    gap: 10px;
  }
`

const FeedbackRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
`

const FeedbackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  height: 1.75rem;
  width: 1.75rem;
  background-color: #111;
  border-radius: 50%;
  &:nth-of-type(2n) {
    background-color: #EEE;
    color: #000;
  }
`

const FeedbackCount = styled.span`
  display: block;
  text-align: center;
  line-height: 1.75rem;
`

export const Scoreboard = ({ feedback }) => {

  return (
    <FeedbackContainer>
      {Object.values(feedback).map((hint, i) => (
          <FeedbackRow key={i}>
            {hint.map((count, i) => (
              <FeedbackWrapper key={i}>

                  <FeedbackCount>{count}</FeedbackCount>

              </FeedbackWrapper>
            ))}
          </FeedbackRow>
        ))}
    </FeedbackContainer>
  )
}