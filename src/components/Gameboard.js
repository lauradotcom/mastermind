import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '../styles';

export const Gameboard = ({ guesses }) => {

  /** Styled Components */
  const GameContainer = styled.div`
    display: grid;
    grid-template-columns: 0fr 3fr 1fr;
    width: 100%;
    @media screen and (min-width: 1024px) {
      grid-template-columns: 1fr 2fr 1fr;
    }
  `

  const TileGrid = styled.div`
    display: grid;
    grid-template-rows: repeat(10, 1fr);
    gap: 6px;
    width: 275px;
    padding: 16px;
    margin: 0 auto;
    @media screen and (min-width: 1024px) {
      gap: 16px;
      width: 300px;
    }
  `

  const TileRow = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
  `

  const Tile = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    border: 1px solid #8D9F9B;
    font-size: 2rem;
    user-select: none;
    color: #FFF;
    background-color: blueviolet;
    font-family: ${props => props.theme.fonts.headings}
  `

  /** Add functionality here */


  return(
    <div>
      <GameContainer>
        <div>{ /** Empty div to create space on the left side of gameboard in desktop */ }</div>
        <TileGrid>
          {Object.values(guesses).map((guess, i) => (
            <TileRow key={i}>
              {guess.map((digit, i) => (
                <Tile key={i}>{digit}</Tile>
              ))}
            </TileRow>
          ))}
        </TileGrid>
        { /** Scoreboard */}
        <div></div>
      </GameContainer>
    </div>
  )
}