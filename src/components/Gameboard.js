/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Scoreboard } from './Scoreboard';

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
    gap: 10px;
    width: 300px;
  }
`

const TileRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
  @media screen and (min-width: 1024px) {
    gap: 10px;
  }
`

const Tile = styled.div`
  font-family: ${props => props.theme.fonts.headings};
`

export const Gameboard = ({ guesses, feedback }) => {

  const applyTileColor = (number) => {
    switch(number) {
      case '0':
        return '#E37CFF';
      case '1':
        return '#FDAE33';
      case '2':
        return '#A4C61A';
      case '3':
        return '#37A862';
      case '4':
        return '#208EA3';
      case '5':
        return '#7A71F6';
      case '6':
        return '#AA71FF';
      case '7':
        return '#EA4E9D';
      default:
        return '';
    }
  }


  return(
    <div css={{backgroundColor: props => props.theme.colors.background}}>
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
                    border-color: ${applyTileColor(digit)};
                  `}
                >
                  {digit}
                </Tile>
              ))}
            </TileRow>
          ))}
        </TileGrid>
          <Scoreboard feedback={feedback} />
        <div></div>
      </GameContainer>
    </div>
  )
}