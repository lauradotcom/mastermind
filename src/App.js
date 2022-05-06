/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from '@emotion/react';
import { Header } from './components/Header';
import { Gameboard } from './components/Gameboard';
import { Keyboard } from './components/Keyboard';
import { theme } from './styles.js';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Gameboard />
      <Keyboard />
    </ThemeProvider>
  );
}

export default App;
