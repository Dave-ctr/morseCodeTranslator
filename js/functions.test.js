import { convertToEnglish, convertToMorse } from './functions';

describe( 'Tests for convertToMorse function', () =>
{
  // 1. it should translate a to .-
  it( ' should translate "A" to ".-" ', () =>
  {
    const result = convertToMorse( 'A' );
    expect( result ).toBe( '.-' );
  } )

  // 2. it should translate 1 to .----
  it( ' should translate "1" to ".----" ', () =>
  {
    const result = convertToMorse( '1' );
    expect( result ).toBe( '.----' );
  } )

  // 3. It should translate hello to .... . .-.. .-.. ---
  it( ' should translate "HELLO" to ".... . .-.. .-.. ---" ', () =>
  {
    const result = convertToMorse( 'HELLO' );
    expect( result ).toBe( '.... . .-.. .-.. ---' )
  } )

  // 4. it should translate 38 to ...-- ---..
  it( ' should translate "38" to "...-- ---.." ', () =>
  {
    const result = convertToMorse( '38' );
    expect( result ).toBe( '...-- ---..' );
  } )

  // 5. it should translate hello world to .... . .-.. .-.. --- / .-- --- .-. .-.. -..
  it( ' should translate "HELLO WORLD" to ".... . .-.. .-.. --- / .-- --- .-. .-.. -.." ', () =>
  {
    const result = convertToMorse( 'HELLO WORLD' );
    expect( result ).toBe( '.... . .-.. .-.. --- / .-- --- .-. .-.. -..' );
  } )

  // 6. it should translate bond 007 to -... --- -. -.. / ----- ----- --... 
  it( ' should translate "BOND 007" to "-... --- -. -.. / ----- ----- --..." ', () =>
  {
    const result = convertToMorse( 'BOND 007' );
    expect( result ).toBe( '-... --- -. -.. / ----- ----- --...' );
  } )

  // 7. it should translate ?!.,:;+-/=()&_"$@ to ..--.. -.-.-- .-.-.- --..-- ---... -.-.-. .-.-. -....- -..-. -...- -.--. -.--.-.-... ..--.- .-..-. ...-..- .--.-.
  it( ' should translate "?!.,:;+-/=()&_"$@" to "..--.. -.-.-- .-.-.- --..-- ---... -.-.-. .-.-. -....- -..-. -...- -.--. -.--.-.-... ..--.- .-..-. ...-..- .--.-." ', () =>
  {
    const result = convertToMorse( '?!.,:;+-/=()&_"$@' );
    expect( result ).toBe( '..--.. -.-.-- .-.-.- --..-- ---... -.-.-. .-.-. -....- -..-. -...- -.--. -.--.- .-... ..--.- .-..-. ...-..- .--.-.' );
  } );

  // 8. it should display an error message if a character is not convertable
  it( ' should display an error message if a character is not convertable ', () =>
  {
    const result = convertToMorse( '*' );
    expect( result ).toBe( 'Only Enter Convertible Characters' );
  } )

  // 9. it should display an error message if user input is an empty string, null or undefined
  it( ' should display an error message if user input is an empty string, null or undefined ', () =>
  {
    const result = convertToMorse( '' );
    expect( result ).toBe( 'Please Enter An Input Value' );
  } )

  // 10. it should translate mixed case input correctly
  it( ' should translate "HeLlO" to ".... . .-.. .-.. ---" ', () =>
  {
    const result = convertToMorse( 'HeLlO' );
    expect( result ).toBe( '.... . .-.. .-.. ---' );
  } );

} )

describe( 'Tests for convertToEnglish function', () =>
{
  // 1. it should translate .- to a
  it( ' should translate ".-" to "A" ', () =>
  {
    const result = convertToEnglish( '.-' );
    expect( result ).toBe( 'A' );
  } )

  // 2. it should translate .---- to 1
  it( ' should translate "1" to ".----" ', () =>
  {
    const result = convertToEnglish( '.----' );
    expect( result ).toBe( '1' );
  } )

  // 3. It should translate .... . .-.. .-.. --- to hello
  it( ' should translate ".... . .-.. .-.. ---" to "HELLO" ', () =>
  {
    const result = convertToEnglish( '.... . .-.. .-.. ---' );
    expect( result ).toBe( 'HELLO' )
  } )

  // 4. it should translate ...-- ---.. to 38
  it( ' should translate "...-- ---.." to"38" ', () =>
  {
    const result = convertToEnglish( '...-- ---..' );
    expect( result ).toBe( '38' );
  } )

  // 5. it should translate .... . .-.. .-.. --- / .-- --- .-. .-.. -.. to hello world
  it( ' should translate ".... . .-.. .-.. --- / .-- --- .-. .-.. -.." to "HELLO WORLD" ', () =>
  {
    const result = convertToEnglish( '.... . .-.. .-.. --- / .-- --- .-. .-.. -..' );
    expect( result ).toBe( 'HELLO WORLD' );
  } )

  // 6. it should translate -... --- -. -.. / ----- ----- --... to bond 007
  it( ' should translate "-... --- -. -.. / ----- ----- --..." to "BOND 007" ', () =>
  {
    const result = convertToEnglish( '-... --- -. -.. / ----- ----- --...' );
    expect( result ).toBe( 'BOND 007' );
  } )

  // 7. it should translate ..--.. -.-.-- .-.-.- --..-- ---... -.-.-. .-.-. -....- -..-. -...- -.--. -.--.- .-... ..--.- .-..-. ...-..- .--.-. to ?!.,:;+-/=()&_"$@
  it( ' should translate "..--.. -.-.-- .-.-.- --..-- ---... -.-.-. .-.-. -....- -..-. -...- -.--. -.--.- .-... ..--.- .-..-. ...-..- .--.-." to "?!.,:;+-/=()&_"$@" ', () =>
  {
    const result = convertToEnglish( '..--.. -.-.-- .-.-.- --..-- ---... -.-.-. .-.-. -....- -..-. -...- -.--. -.--.- .-... ..--.- .-..-. ...-..- .--.-.' );
    expect( result ).toBe( '?!.,:;+-/=()&_"$@' );
  } );

  // 8. it should display an error message if a character is not convertable
  it( ' should display an error message if a character is not convertable ', () =>
  {
    const result = convertToEnglish( '*' );
    expect( result ).toBe( 'Only Enter Convertible Characters' );
  } )

  // 9. it should display an error message if user input is an empty string, null or undefined
  it( ' it should display an error message if user input is an empty string, null or undefined ', () =>
  {
    const result = convertToEnglish( '' );
    expect( result ).toBe( 'Please Enter An Input Value' );
  } )

} )