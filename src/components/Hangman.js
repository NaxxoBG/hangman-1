import React, { Component } from 'react'
import './Hangman.css'
import { randomWord } from './Words.js'

import img0 from './images/step0.jpg'
import img1 from './images/step1.jpg'
import img2 from './images/step2.jpg'
import img3 from './images/step3.jpg'
import img4 from './images/step4.jpg'
import img5 from './images/step5.jpg'
import img6 from './images/step6.jpg'
import img7 from './images/step7.jpg'

class Hangman extends Component {
    static defaultProps = {
        maxMistakeNum: 7,
        images: [img0, img1, img2, img3, img4, img5, img6, img7]
    }

    constructor(props) {
        super(props)
        this.state = {
            mistakeNum: 0,
            guessed: new Set([]),
            answer: randomWord()
        }
    }
    handleGuess = e => {
        let letter = e.target.value;
        this.setState(st => ({
            guessed: st.guessed.add(letter),
            mistakeNum: st.mistakeNum + (st.answer.includes(letter) ? 0 : 1)
        }))
    }
    guessedWord() {
        return (this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ ")))
        // If the letter has been guessed correctly, show it. Otherwise, show an underscore.
    }
    generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
            <button
                class='btn btn-lg btn-primary m-2'
                key={letter}
                value={letter}
                onClick={this.handleGuess}
                disabled={this.state.guessed.has(letter)}
            >
                {letter}
            </button>)
        )
        // Creates a button for every single letter in the Latin alphabet.
    }
    resetButton = () => {
        this.setState({
            mistakeNum: 0,
            guessed: new Set([]),
            answer: randomWord()
        });
    }

    render() {
        const gameOver = this.state.mistakeNum >= this.props.maxMistakeNum;
        const isWinner = this.guessedWord().join("") === this.state.answer;
        let gameStat = this.generateButtons();

        if (isWinner) {
            gameStat = "You won!"
        }
        if (gameOver) {
            gameStat = "You lost!"
        }
        return (
            <div className="Hangman container">
                <h1 className="text-center">Hangman</h1>
                <div className="float-right">Wrong Guesses: {this.state.mistakeNum} / {this.props.maxMistakeNum}</div>
                <div className="text-center"><img src={this.props.images[this.state.mistakeNum]} alt="" /></div>
                {/* Current out of total number of mistakes. */}
                <div className="text-center">
                    <p>Mystery Word:</p>
                    <p>{!gameOver ? this.guessedWord() : this.state.answer}</p>
                    <p>{gameStat}</p>
                    <button className="btn btn-info" onClick={this.resetButton}>Reset</button>
                </div>
            </div>
        )
    }
};

export default Hangman;