function removeVowels(word) {
    var characters = word.split('');

    var result = [];
    var specialCharact = "~!@#$%^&*()-_=+[]\{}|;':\",./<>?".split("");

    characters.forEach(function (character) {
        if (character.toLowerCase() !== 'a' && character.toLowerCase() !== 'o' && character.toLowerCase() !== 'i' && character.toLowerCase() !== 'e'
        && character.toLowerCase() !== 'u' && !specialCharact.includes(character)){ 
        
        // && character !== 'A' && character !== 'O' && character !== 'I' && character !== 'E'
        // && character !== 'U') {
            result.push(character)
        } else {
            result.push('');
        }
    })

    return result.join('');
}

module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?
*/