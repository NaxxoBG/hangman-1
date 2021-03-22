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

class Hangman extends Component {
    static defaultProps = {
        numMistakes: 0,
        images: [img0, img1, img2, img3, img4, img5, img6]
    }

    constructor(props) {
        super(props)
        this.state = {
            mistakes: 0,
            //guessed: new Set([]),
            answer: randomWord()
        }
    }
    render() {
        return (
            <div className="Hangman container">
                <h1 className="text-center">Hangman</h1>
            </div>
        )
    }
}

export default Hangman;