const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const morseTable = (morseSymbol) => {
        if (morseSymbol === '**********') {
            return ' ';
        }

        const morseSymbolWithoutZeros = morseSymbol.replace(/^0*/, '');
        const decodedLetter = morseSymbolWithoutZeros
            .replace(/10/g, '.')
            .replace(/11/g, '-');

        return MORSE_TABLE[decodedLetter];
    };

    const symbols = expr.match(/.{10}/g);
    const decodedMessage = symbols.map(morseTable).join('');

    return decodedMessage;
}

module.exports = {
    decode
};
