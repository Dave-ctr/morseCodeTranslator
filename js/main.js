import { convertToMorse, convertToEnglish } from './functions.js';

// Store the translate button in a variable
const translateButton = document.getElementById( "translateButton" );

// Set a variable to track if translation has been performed
let translated = false;

// Function to translate text
const translateText = () =>
{
  // Get the input text from the textarea
  const inputText = document.getElementById( "translationInput" ).value;
  // Get the selected translation direction
  const translationDirection = document.getElementById( "translationDirection" ).value;
  // Set a variable to store the translated text
  let translatedText = "";

  // Check the selected translation direction
  if ( translationDirection === "toMorse" )
  {
    // Call function to convert text to Morse code
    translatedText = convertToMorse( inputText );
  } else if ( translationDirection === "toEnglish" )
  {
    // Call function to convert Morse code to text
    translatedText = convertToEnglish( inputText );
  }

  // Display the translated text in the output area
  document.getElementById( "translationOutput" ).textContent = translatedText;

  // Update the translated flag to indicate translation has been performed
  translated = true;

  // Toggle the button text and event listener
  toggleButton();
};

// Function to reset translator
const resetTranslator = () =>
{
  // Clear input and output fields
  document.getElementById( "translationInput" ).value = "";
  document.getElementById( "translationOutput" ).textContent = "";
  // Update translated flag to indicate translation has been reset
  translated = false;
  // Toggle the button text and event listener
  toggleButton();
};

// Function to reset translator
const resetTranslatorOutput = () =>
{
  // Clear output field
  document.getElementById( "translationOutput" ).textContent = "";
  // Update translated flag to indicate translation has been reset
  translated = false;
  // Toggle the button text and event listener
  toggleButton();
};

// Function to toggle button text and event listener
const toggleButton = () =>
{
  if ( translated )
  {
    // If translation has been performed change button text to RESET
    translateButton.textContent = "RESET";
    // Remove translation event listener and add reset event listener
    translateButton.removeEventListener( "click", translateText );
    translateButton.addEventListener( "click", resetTranslator );
  } else
  {
    // If translation has not been performed, change button text to TRANSLATE
    translateButton.textContent = "TRANSLATE";
    // Remove reset event listener and add translation event listener
    translateButton.removeEventListener( "click", resetTranslator );
    translateButton.addEventListener( "click", translateText );
  }
};

// Function to handle changing translation direction
const handleTranslationDirectionChange = () =>
{
  // Reset translation when direction changes
  resetTranslatorOutput();
};

// Initially set the button state
toggleButton();

// Add event listener to translation direction dropdown
translationDirection.addEventListener( "change", handleTranslationDirectionChange );
