# Morse Code Translator
The Morse Code Translator can translate Morse Code to English and vice versa.

It is built with HTMl, CSS and JavaScript.

# Instructions

* Click here to visit the app: <a href="https://davejamieson.github.io/morseCodeTranslator/" >Morse Code Translator</a> 

* Enter the English Characters or Morse Code to be translated into the input field
* Select the desired output via the dropdown menu
* Hit the TRANSLATE button!! 

<img src="./assets/images/blankTranslator.png" alt="Blank Translator"/>
<img src="./assets/images/toMorseCode.png" alt="To Morse Code"/>
<img src="./assets/images/toEnglish.png" alt="To English"/>

## Available Characters

  * Letters
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
  'Y': '-.--', 'Z': '--..',
  * Numbers
  '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
  * Symbols
  '?': '..--..', '!': '-.-.--', ',': '--..--', '.': '.-.-.-', ';': '-.-.-.', ':': '---...', '+': '.-.-.', '-': '-....-', '/': '-..-.', '=': '-...-', '(': '-.--.', ')': '-.--.-', '&': '.-...', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.', '\n': '/'

## Test-Driven Development (TDD) and Unit Testing

This project uses Jest for unit testing to ensure the correctness of the Morse Code translation functions. TDD principles were followed during the development of this project, meaning tests were written before the actual code to define the desired functionality.

### Running Tests

To run the tests, use the following command in the project directory:

In the project directory, you can run:

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Testing Strategy

1. **Unit Tests**: Each function in the `functions.js` file is tested individually to ensure it handles all expected input cases correctly.
2. **Edge Cases**: Tests cover various edge cases, such as empty input, invalid characters, and boundary values.
3. **Integration Tests**: Ensures that the translation from English to Morse Code and vice versa works correctly when the functions are used together.

### Example Tests

Below are examples of unit tests written for the translation functions:

```javascript
const { toMorse, toEnglish } = require('./functions');

test('translates English to Morse Code', () => {
    expect(toMorse('HELLO')).toBe('.... . .-.. .-.. ---');
    expect(toMorse('WORLD')).toBe('.-- --- .-. .-.. -..');
});

test('translates Morse Code to English', () => {
    expect(toEnglish('.... . .-.. .-.. ---')).toBe('HELLO');
    expect(toEnglish('.-- --- .-. .-.. -..')).toBe('WORLD');
});

test('handles empty input', () => {
    expect(toMorse('')).toBe('');
    expect(toEnglish('')).toBe('');
});

test('ignores invalid characters', () => {
    expect(toMorse('HELLO!')).toBe('.... . .-.. .-.. ---');
    expect(toEnglish('.... . .-.. .-.. --- !')).toBe('HELLO');
});
```
