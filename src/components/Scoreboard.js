import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

/** Styled Components */

const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const FeedbackColumn = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.25rem 1rem;
`

export const Scoreboard = ({ getFeedback }) => {

  return (
    <FeedbackContainer>
      <FeedbackColumn>
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
      </FeedbackColumn>
      <FeedbackColumn>
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
      </FeedbackColumn>
    </FeedbackContainer>
  )
}