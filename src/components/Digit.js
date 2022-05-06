import React from 'react';

export const Digit = ({ digitPos, attemptVal }) => {
  const digit = board[digitPos][attemptVal];
  return <div>{digit}</div>
}