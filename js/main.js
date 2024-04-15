import { convertToMorse, convertToEnglish } from './functions.js'


console.log( 'js is linked' );

const translateButton = document.getElementById( "translateButton" );

const translateText = () =>
{
  const inputText = document.getElementById( "translationInput" ).value;
  const translationDirection = document.getElementById( "translationDirection" ).value;
  let translatedText = "";

  if ( translationDirection === "toMorse" )
  {
    translatedText = convertToMorse( inputText );
  } else if ( translationDirection === "toEnglish" )
  {
    translatedText = convertToEnglish( inputText );
  }

  document.getElementById( "translationOutput" ).textContent = translatedText;
}

translateButton.addEventListener( "click", translateText );