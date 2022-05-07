/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import { Header } from './components/Header';
import { Gameboard } from './components/Gameboard';
import { Keyboard } from './components/Keyboard';
import { initBoard } from './components/Numbers';
import { theme } from './styles.js';
import './App.css';

function App() {

  const [board, setBoard] = useState(initBoard);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Gameboard
        board={board}
        setBoard={setBoard}
      />
      <Keyboard />
    </ThemeProvider>
  );
}

export default App;
