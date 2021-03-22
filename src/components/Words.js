var words = [
    'borgar',
    'tree'
]

function randomWord() {
    return words[Math.floor(Math.random() * words.length)] // Returns random word
}

export { randomWord }