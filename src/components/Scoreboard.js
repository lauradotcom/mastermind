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
  flex-direction: column;
  padding: 0.25rem 1rem;
`

const FeedbackHeader = styled.div`
  border-bottom: 1px solid pink;
`

export const Scoreboard = ({ getFeedback }) => {

  return (
    <FeedbackContainer>
      <FeedbackColumn>
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
          {/** Generate a FeedbackRow(?) mapped to each count */}
          </FeedbackHeader>
      </FeedbackColumn>
      <FeedbackColumn>
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
      </FeedbackColumn>
    </FeedbackContainer>
  )
}