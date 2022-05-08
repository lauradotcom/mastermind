/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from '@emotion/react';
import { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Gameboard } from './components/Gameboard';
import { Keyboard } from './components/Keyboard';
import { theme } from './styles.js';
import './App.css';

function App() {

  /** Initialize the gameboard contents */
  const [guesses, setGuesses] = useState({
    0: Array.from({ length: 4 }).fill(''),
    1: Array.from({ length: 4 }).fill(''),
    2: Array.from({ length: 4 }).fill(''),
    3: Array.from({ length: 4 }).fill(''),
    4: Array.from({ length: 4 }).fill(''),
    5: Array.from({ length: 4 }).fill(''),
    6: Array.from({ length: 4 }).fill(''),
    7: Array.from({ length: 4 }).fill(''),
    8: Array.from({ length: 4 }).fill(''),
    9: Array.from({ length: 4 }).fill(''),
  })

  /** Define inputs for number entry */
  const keyButtons = ['Enter', '0', '1', '2', '3', '4', '5', '6', '7', 'Backspace'];

  /** Add event listeners to support keyboard entry or Keyboard component clicks */
  const handleClick = (key) => {
    const pressedKey = key;
    enterDigit(pressedKey);
    console.log(`You clicked the ${pressedKey} button`);
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      const pressedKey = e.key;
      if (keyButtons.includes(pressedKey)) {
        enterDigit(pressedKey);
        console.log(`You pressed the ${pressedKey} key`);
      }
    }

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  });

  /** Render number guesses in gameboard on click/keypress */
  let digit = useRef(0);
  let round = useRef(0);

  const enterDigit = (pressedKey) => {
    if (pressedKey === 'Backspace') {
      erase();
      console.log('Time to go back!')
    } else if (pressedKey !== 'Enter') {
      display(pressedKey);
      console.log('Adding the digit to the grid...')
    } else {
      submitGuess();
    }
  }

  const erase = () => {
    const _digit = digit.current;
    const _round = round.current;

    if (_digit !== 0) {
      setGuesses((prev) => {
        const newGuesses = { ...prev };
        newGuesses[_round][_digit - 1] = '';
        return newGuesses;
      });
      digit.current = _digit - 1;
    }
  }

  const display = (pressedKey) => {
    const _digit = digit.current;
    const _round = round.current;

    if (_digit < 4) {
    setGuesses((prev) => {
      const newGuesses = {...prev };
      newGuesses[_round][_digit] = pressedKey;
      //console.log(newGuesses);
      return newGuesses;
    })

    digit.current = _digit + 1;
  }
  }

  /** TODO: Add submitGuess function */
  /** Need to check if ALL digits exist */
  const submitGuess = () => {
    const _round = round.current;
    console.log(guesses);
    if (guesses[_round].every(value => value)) {
      console.log('Submitting your guess for evaluation...');
      /** Add a getFeedback function here? */

      /** Advance to the next round */ 
      round.current = _round + 1;
      digit.current = 0;
    } else {
      console.log('Hey you need to do all the numbers!');
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Gameboard
        guesses={guesses}
        display={display}
      />
      <Keyboard
        keyButtons={keyButtons}
        handleClick={handleClick}
        setGuesses={setGuesses}
        display={display}
        erase={erase}
      />
    </ThemeProvider>
  );
}

export default App;
