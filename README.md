# Codebreaker 👾
Codebreaker is a Mastermind implementation built with React using the Emotion and Material UI libraries.

  ![Screenshot](/screenshot.png)

## How I Built It
I used styled components via Emotion to minimize the number of component files required and streamline the code. Hooks allowed me to write the game logic using state.

A note on the variable names: I looked back to Mastermind's precursor, Bulls and Cows, for my mental model in providing the feedback for each guess, so some of the functions include this language as shorthand.

### File Structure

* [/src/](/src)
  - Top-level app render
  - Global CSS styles/resets and shared theme variables
* [/src/components](./src/components/) - contains game components and their associated styled components
* [/src/util](/src/util/) - contains default variables used to intialize state


### Extensions
I wanted the game to feel similar to vintage Mastermind and be accessible and visually appealing to play, so I mapped each digit to its own color using a colorblind-safe palette. Additionally, the player gets a modal at the end announcing the outcome of their game and a button to load a new game.

### Technologies
* React
* Emotion
* Material UI
* Axios
* npm

## How To Install
This project was bootstrapped with Create React App and requires Node version 14 or higher.
1. Fork or clone this repository and install the dependencies: `npm install`
2. Run: `npm start`

Navigate to http://localhost:3000 in a web browser.


## How To Play
Using the provided keyboard or your own keyboard, enter any combination of four numbers between 0 and 7.

The pegs on the right contain feedback about your guess:
  * Black circle: number of digits that are **correct** and *in the **correct** spot*
  * White circle: number of digits that are **correct** but *in the **wrong** spot*

You have 10 attempts to guess the correct combination of numbers. Good luck! 🤞