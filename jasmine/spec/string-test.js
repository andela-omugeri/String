describe('hasVowels', function() {
  it('should check if a string has vowels', function(){
    expect('small baby'.hasVowels()).toBeTruthy();
  });
});

describe('toUpper', function() {
  it('should convert string to uppercase', function() {
    expect('small baby'.toUpper()).toEqual('SMALL BABY');
  });
  it('should convert all alphabetic characters to uppercase', function() {
    expect('Gamble**u'.toUpper()).toEqual('GAMBLE**U');
  });
});

describe('toLower', function() {
  it('should convert all characters in string to lowercase', function() {
    expect('SMALL BABY'.toLower()).toEqual('small baby');
  });
  it('should convert all alphabetic characters to lowercase', function() {
    expect('GAMBLE**U'.toLower()).toEqual('gamble**u');
  });
});

describe('ucFirst', function() {
  it('should convert the first char of a string to uppercase', function() {
    expect('small baby'.ucFirst()).toEqual('Small baby');
  });
  it('should not alter the string at all', function() {
    expect('Kevin'.ucFirst()).toEqual('Kevin');
  });
  it('should not alter the first character of the string', function() {
    expect('?hi there'.ucFirst()).toEqual('?hi there');
  });
});

describe('isQuestion', function() {
  it('should return true', function() {
    expect('small baby?'.isQuestion()).toBeTruthy();
  });
  it('should return false', function() {
    expect('How are you doing? I am doing great'.isQuestion()).toBeFalsy();
    expect('small baby'.isQuestion()).toBeFalsy();
  });
});

describe('words', function() {//add special characters
  it('should return an array of words in the string', function() {//should be more modular
    expect('babies are best'.words()).toEqual(['babies', 'are', 'best']);
  });
  it('should return an array of words without the special characters', function() {
    expect('*why should you?'.words()).toEqual(['why', 'should', 'you']);
  });
  it('should return an array of unique words', function() {
    expect('dawa ya moto ni moto'.words()).toEqual(['dawa', 'ya', 'moto', 'ni']);
  });
});

describe('wordCount', function() {//use spies to check the word function is called
  it('should count the words in the string and return a number', function() {
    expect('small baby'.wordCount()).toEqual(2);
    expect('why oh why should you?'.wordCount()).toEqual(4);
  });
});

describe('toCurrency', function() {
  it('should turn a number, string into currency format', function() {
    expect('1264829'.toCurrency()).toEqual('1,264,829');
    expect('97934.56'.toCurrency()).toEqual('97,934.56');
  });
  it('should not change the number', function() {
    expect('123'.toCurrency()).toEqual('123');
  });
  it('should return NaN when not a number', function() {
    expect('hi how are you'.toCurrency()).toEqual('NaN');
  });
});

describe('fromCurrency', function() {
  it('should change a string from the currency format to a number', function() {
    expect('97,934.56'.fromCurrency()).toEqual(97934.56);
    expect('1,264,829'.fromCurrency()).toEqual(1264829);
  });
  it('should return NaN when not a number', function() {
    expect('hey there'.fromCurrency()).toEqual(NaN);
  });
});
