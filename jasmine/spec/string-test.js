describe('hasVowels', function() {
  it('should check if a string has vowels', function(){
    expect('small baby'.hasVowels()).toBeTruthy();
  });
});

describe('toUpper', function() {
  it('should convert string to uppercase', function() {
    expect('small baby'.toUpper()).toEqual('SMALL BABY');
  });
});

describe('toLower', function() {
  it('should convert all characters in string to lowercase', function() {
    expect('SMALL BABY'.toLower()).toEqual('small baby');
  });
});

describe('ucFirst', function() {
  it('should convert the first char of a string to uppercase', function() {
    expect('small baby'.ucFirst()).toEqual('Small baby');
    expect('Kevin'.ucFirst()).toEqual('Kevin');
    expect('?hi there'.ucFirst()).toEqual('?hi there');
  });
});

describe('isQuestion', function() {
  it('should determine if a string is a question', function() {
    expect('small baby'.isQuestion()).toBeFalsy();
    expect('small baby?'.isQuestion()).toBeTruthy();
  });
});

describe('words', function() {
  it('should return an array of words in the string', function() {
    expect('small baby'.words()).toEqual(['small', 'baby']);
    expect('why oh why should you?'.words()).toEqual(['why', 'oh', 'should', 'you']);
  });
});

describe('wordCount', function() {
  it('should count the words in the string and return a number', function() {
    expect('small baby'.wordCount()).toEqual(2);
    expect('why oh why should you?'.wordCount()).toEqual(4);
  });
});

describe('toCurrency', function() {
  it('should turn a number, string into currency format', function() {
    expect('1264829'.toCurrency()).toEqual('1,264,829');
    expect('97934.56'.toCurrency()).toEqual('97,934.56');
    expect('123'.toCurrency()).toEqual('123');
    expect('hi how are you'.toCurrency()).toEqual('NaN');
  });
});

describe('fromCurrency', function() {
  it('should change a string from the currency format to a number', function() {
    expect('97,934.56'.fromCurrency()).toEqual(97934.56);
    expect('1,264,829'.fromCurrency()).toEqual(1264829);
  });
});
