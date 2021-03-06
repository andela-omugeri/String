String.prototype.hasVowels = function() {
    return /[aeiou]/i.test(this);
};
String.prototype.toUpper = function() {
    return this.replace(/[a-z]/g, (lowerChar) => {
      return String.fromCharCode(lowerChar.charCodeAt(0)-32);
    });
};
String.prototype.toLower = function() {
    return this.replace(/[A-Z]/g, (upperChar) => {
      return String.fromCharCode(upperChar.charCodeAt(0)+32);
    });
};
String.prototype.ucFirst = function() {
    return this.replace(/^[a-z]/, (upperFirst) => {
      return upperFirst.toUpper();
    });
};
String.prototype.isQuestion = function() {
    return /[?]$/.test(this);
};
String.prototype.words = function() {
    var uWords = [];
    var wordArray = this.replace(/\W+/g, ' ').trim().split(' ');
    wordArray.forEach(function(word){
      if(uWords.indexOf(word) === -1){
        uWords.push(word);
      }
    });
    return uWords;
};

String.prototype.wordCount = function() {
    return this.words().length;
};

String.prototype.toCurrency = function() {
    var money = Number(this);
    return money.toString().split(/(?=(?:\d{3})+(?:\.|$))/g).join(',');
}

String.prototype.fromCurrency = function() {
    var currency = this.replace(/,/g, '');
    return Number(currency);
};
