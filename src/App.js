/** @jsxImportSource @emotion/react */
import { ThemeProvider } from '@emotion/react';
import { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Gameboard } from './components/Gameboard';
import { Keyboard } from './components/Keyboard';
import { Outcome } from './components/Outcome';
import { initGrade } from './util/GameDefaults';
import { theme } from './styles.js';
import axios from 'axios';
import './App.css';

function App() {

  const getAnswer = async () => {
    try {
      const response = await axios.get(`https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new`);
      if (response.status === 200) {
        const data = response.data.replace(/\s+/g, '').split(''); // Remove spaces and line breaks
        console.log(data);
        setAnswer(data);
      }
    } 
    catch (error) {
      /** TO DO: Write a function to generate an array of random digits */
      console.error(error);
      console.error('No dice bro');
      setAnswer(['6', '4', '2', '1']);
    } 
  }

  /** Answer from Integer Generator API */
  const [answer, setAnswer] = useState([]);

  useEffect(() => {
    getAnswer();
  }, []);

  /** Define initial board variables */
  const initBoard = initGrade(4);
  const initFeedback = initGrade(2);

  /** Initialize the gameboard contents */
  const [guesses, setGuesses] = useState(initBoard);
  const [feedback, setFeedback] = useState(initGrade(2));
  const [outcome, setOutcome] = useState('');
  const [wins, setWins] = useState(0);
  const [losses, setLosses]= useState(0);

  /** Define inputs for number entry */
  const keyButtons = ['Enter', '0', '1', '2', '3', '4', '5', '6', '7', 'Backspace'];

  /** Add event listeners to support keyboard entry or Keyboard component clicks */
  const handleClick = (key) => {
    const pressedKey = key;
    enterDigit(pressedKey);
  }

  const handleKeyPress = (e) => {
    const pressedKey = e.key;
    if (keyButtons.includes(pressedKey)) {
      enterDigit(pressedKey);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }
  });

  /** Render number guesses in gameboard on click/keypress */
  let digit = useRef(0);
  let round = useRef(0);

  const enterDigit = (pressedKey) => {
    if (pressedKey.toLowerCase() === 'backspace') {
      erase();
      console.log('Time to go back!')
    } else if (pressedKey.toLowerCase() !== 'enter') {
      display(pressedKey);
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
      return newGuesses;
    })

    digit.current = _digit + 1;
  }
  }

  const submitGuess = () => {
    const _round = round.current;
    getFeedback();
    /** Make sure current round contains all four digits */
    if (guesses[_round].every(value => value)) {
      /** Evaluate current guess against answer */
      console.log(guesses[_round]);
      console.log(answer); // keeping these in here for quicker game demo
      if (guesses[_round].join() === answer.join()) {
        setOutcome('win');
        setWins(wins + 1);
        console.log(wins);
      } else if (_round !== 9) {
        /** Advance to the next round */ 
        round.current = _round + 1;
        digit.current = 0;
      } else {
        /** End the game */ 
        setOutcome('lose');
        setLosses(losses + 1);
        console.log(losses);
      }
    } else {
      console.log('Hey you need to do all the numbers!');
    }
    console.log(outcome);
  }

  const getFeedback = () => {
    const _round = round.current;
    /** bulls = right # right pos, cows = right # wrong pos */
    let bullsCount = 0;
    let cowsCount = 0;
    for (let i = 0; i < guesses[_round].length; i++) {
      if (guesses[_round][i] === answer.at(i)) {
        bullsCount++;
      }
      else if (answer.includes(guesses[_round][i])) {
        cowsCount++;
      }
    }

    setFeedback((prev) => {
      const newFeedback = {...prev};
      newFeedback[_round] = [bullsCount, cowsCount];
      return newFeedback;
    })
  }

  /** Allow game to be reset */
  const startNewGame = () => {
    setAnswer(getAnswer());
    setGuesses(initBoard);
    setFeedback(initFeedback);
    setOutcome('');
    round.current = 0;
    digit.current=0;
  }

  return (
    <ThemeProvider theme={theme}>
      <Header
        startNewGame={startNewGame}
      />
      <Gameboard
        guesses={guesses}
        display={display}
        feedback={feedback}
      />
      <Keyboard
        keyButtons={keyButtons}
        handleClick={handleClick}
        setGuesses={setGuesses}
        display={display}
        erase={erase}
      /> 
      <Outcome
        outcome={outcome}
        setOutcome={setOutcome}
        answer={answer}
        startNewGame={startNewGame}
        wins={wins}
        losses={losses}
      />
    </ThemeProvider>
  );
}

export default App;
