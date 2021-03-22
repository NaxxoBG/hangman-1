var words = [
    'abject',
    'abberation',
    'abjure',
    'abnegnation',
    'abrogate',
    'abscond',
    'abstruse',
    'accede',
    'accost',
    'acceptable',
    'acquire',
    'acquit',
    'bellwether',
    'believe',
    'cemetery',
    'calendar',
    'changeable',
    'column',
    'conscious',
    'collectible',
    'consensus',
    'definitely',
    'discipline',
    'drunkenness',
    'dumbbell',
    'embarassment',
    'equipment',
    'exceed',
    'experience',
    'fiery',
    'foreign',
    'gauge',
    'grateful',
    'guarantee',
    'harass',
    'height',
    'hierarchy',
    'humorous',
    'independent',
    'intelligence',
    'indispensable',
    'immediate'


]

function randomWord() {
    return words[Math.floor(Math.random() * words.length)] // Returns random word
}

export { randomWord }