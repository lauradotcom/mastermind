/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '../styles';

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
  font-family: ${props => props.theme.fonts.headings};
`

export const Gameboard = ({ guesses }) => {

  const applyTileColor = (number) => {
    switch(number) {
      case '0':
        return '#E8384F';
      case '1':
        return '#FDAE33';
      case '2':
        return '#EECC16';
      case '3':
        return '#62BB35';
      case '4':
        return '#208EA3';
      case '5':
        return '#7A71F6';
      case '6':
        return '#AA71FF';
      case '7':
        return '#EA4E9D';
      default:
        return 'F9F8F8';
    }
  }


  return(
    <div>
      <GameContainer>
        <div>{ /** Empty div to create space on the left side of gameboard in desktop */ }</div>
        <TileGrid>
          {Object.values(guesses).map((guess, i) => (
            <TileRow key={i}>
              {guess.map((digit, i) => (
                <Tile 
                  key={i}
                  css={css`
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    height: 56px;
                    border: 1px solid #8D9F9B;
                    font-size: 2rem;
                    user-select: none;
                    color: #FFF;
                    background-color: ${applyTileColor(digit)};
                  `}
                >
                  {digit}
                </Tile>
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