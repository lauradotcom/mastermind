import React from 'react';

export const Digit = ({ digitPos, attemptVal, board }) => {
  const digit = board[digitPos][attemptVal];
  return <div>{digit}</div>
}