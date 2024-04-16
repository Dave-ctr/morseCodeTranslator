const characters =
{
  // Letters
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
  'Y': '-.--', 'Z': '--..',
  // Numbers
  '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
  // Symbols
  '?': '..--..', '!': '-.-.--', ',': '--..--', '.': '.-.-.-', ';': '-.-.-.', ':': '---...', '+': '.-.-.', '-': '-....-', '/': '-..-.', '=': '-...-', '(': '-.--.', ')': '-.--.-', '&': '.-...', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.', '\n': '/'
}

// 1. write a function to convert english to morse code
export const convertToMorse = ( englishChars ) =>
{
  // If input is empty, return an error message
  if ( !englishChars )
  {
    return 'Please Enter An Input Value';
  } else
  {
    // Convert input to uppercase to handle mixed case input
    const formattedInput = englishChars.toUpperCase();
    let morseCode = '';

    // Iterate through each character in the input
    for ( let char of formattedInput )
    {
      if ( char === ' ' )
      {
        // If the character is a space append a forward slash to indicate a space between words
        morseCode += '/ ';
      } else if ( characters[ char ] )
      {
        // If the character exists in the characters object append its morse code to the result
        morseCode += characters[ char ] + ' ';
      } else
      {
        // If the character is not valid return an error message
        return 'Only Enter Convertible Characters';
      }
    }

    // Remove trailing space
    morseCode = morseCode.trim();
    console.log( morseCode )
    // Return translation
    return morseCode;
  }
}

// 2. write a function to convert morse code to english
export const convertToEnglish = ( morseCode ) =>
{
  console.log( morseCode )

  // Trim the input morse code to allow for extra space or new line input
  morseCode = morseCode.trim();
  console.log( 'trimed morse: ', morseCode )

  // If input is empty return an error message
  if ( !morseCode ) return 'Please Enter An Input Value';

  // Split the input morse code at spaces to get individual morse code characters
  const morseArray = morseCode.split( ' ' );
  let englishChars = '';

  // Iterate through each morse code character
  for ( let morse of morseArray )
  {
    if ( morse === '/' )
    {
      // If the morse code is a forward slash append a space to add a space between words
      englishChars += ' ';
    } else
    {
      // Find the english character corresponding to the morse code character
      let charFound = false;
      for ( let char in characters )
      {
        if ( characters[ char ] === morse )
        {
          // If a matching english character is found append it to the result
          englishChars += char;
          charFound = true;
          break;
        }
      }
      // If no matching english character is found return an error message
      if ( !charFound )
      {
        return 'Only Enter Convertible Characters';
      }
    }
  }


  console.log( englishChars )
  // Return translation
  return englishChars;
}