import React from 'react';
import styled from '@emotion/styled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

/** Styled Components */

const FeedbackContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr repeat(10, 4fr);
  gap: 6px;
  justify-content: center;
  padding: 1rem;
  font-size: 1.5rem;
  font-family: ${props => props.theme.fonts.body}
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

const FeedbackCount = styled.div`
  display: flex;
  justify-content: center;
`

export const Scoreboard = ({ feedback }) => {

  return (
    <FeedbackContainer>
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
      {Object.values(feedback).map((hint, i) => (
          <FeedbackRow key={i}>
            {hint.map((count, i) => (
              <FeedbackCount key={i}>{count}</FeedbackCount>
            ))}
          </FeedbackRow>
        ))}
    </FeedbackContainer>
  )
}