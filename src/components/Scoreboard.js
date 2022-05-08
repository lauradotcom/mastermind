import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';




export const Scoreboard = () => {

  return (
    <div> 
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
      <CancelOutlinedIcon
        sx={{
          color: '#FD817D'
        }}
      />
    </div>
  )
}