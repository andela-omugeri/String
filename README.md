[![Codacy Badge](https://api.codacy.com/project/badge/Grade/be0684f14d1747669bf56c5643cdb1fe)](https://www.codacy.com/app/olive-nyotu/String?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=andela-omugeri/String&amp;utm_campaign=Badge_Grade)
# String

This code extends the String class in java and adds more function in it.

Functions added include:
- hasVowels()
- toUpper()
- toLower()
- ucFirst()
- isQuestion()
- words()
- wordCount()
- toCurrency()
- fromCurrency()

###hasVowels()
This method returns `true` if a string contains any vowel and `false` otherwise

###toUpper()
This method returns all characters of the given string in uppercase.

###toLower()
This method returns all characters of the given string in lowercase.

###ucFirst()
This method turns the first character of the given string as uppercase.

###isQuestion()
This method returns `true` if the string has a question mark i.e `?`

###words()
This method returns an array of the words in a given string.

###wordCount()
This method returns a count of the unique words in a given string.

###toCurrency()
This method returns a string formatted like currency.

`'4623917297.50'.toCurrency() //will return 4,623,917,297.50`

###fromCurrency()
This method returns a number when given a string formatted like currency.

```4,623,917,297.50.fromCurrency() //will return 4623917297.50```
