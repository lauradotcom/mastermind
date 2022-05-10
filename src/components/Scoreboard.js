import React from 'react';
import styled from '@emotion/styled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

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

const FeedbackHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:-1rem;
`
const FeedbackRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const FeedbackColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
`

const FeedbackCountWrapper = styled.div`
  height: 1.75rem;
  width: 1.75rem;
  background-color: #444;
  border-radius: 50%;
`
const FeedbackCount = styled.span`
  display: block;
  text-align: center;
  line-height: 1.75rem;
`

export const Scoreboard = ({ feedback }) => {

  return (
    <FeedbackContainer>
      {/** 
      <FeedbackRow>
      <FeedbackHeader>
        <CheckCircleIcon 
          sx={{
            color: '#37A862'
          }}
        />
        <CheckCircleOutlinedIcon
          sx={{
            color: '#37A862'
          }}
        />   
      </FeedbackHeader>
      <FeedbackHeader>
        <CheckCircleIcon 
          sx={{
            color: '#37A862'
          }}
        />
        <CancelOutlinedIcon
          sx={{
            color: '#FD817D'
          }}
        />
      </FeedbackHeader>
      </FeedbackRow>
      */}
      {Object.values(feedback).map((hint, i) => (
          <FeedbackRow key={i}>
            {hint.map((count, i) => (
              <FeedbackColumn key={i}>
                <FeedbackCountWrapper>
                  <FeedbackCount>{count}</FeedbackCount>
                </FeedbackCountWrapper>
              </FeedbackColumn>
            ))}
          </FeedbackRow>
        ))}
    </FeedbackContainer>
  )
}