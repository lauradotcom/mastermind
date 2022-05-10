# Codebreaker

Codebreaker is a Mastermind implementation built with React using the Emotion and Material UI libraries.

## How I Built It
I approached this game as a combination of the original M

### File Structure

### Extensions
I wanted the game to feel similar to vintage Mastermind and be intuitive to play, so I mapped each digit to its own color using a colorblind-safe palette.

### Technologies
* React
* Emotion
* Material UI
* Axios
* npm

## How To Install
1. Fork or clone this repository and install the dependencies: `npm install`
2. Run: `npm start`

Navigate to http://localhost:3000 in a web browser.


## How To Play
Using the provided keyboard or your own keyboard, enter any combination of numbers between 0 and 7.

The pegs on the right contain feedback about your guess:
  * Black circle: number of digits that are correct and in the correct spot
  * White circle: number of digits that are correct but in the wrong spot

You have 10 attempts to guess the correct combination of numbers.