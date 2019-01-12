var removeVowels = require('./remove-vowels'); 

test("remove the vowel", function(){
    var vowelRemoved = "Hi";
    var expected = "H";

    var output = removeVowels(vowelRemoved);
    expect(output).toEqual(expected);
});


test.only("does not remove y from the word", function(){
    var letterY = "y";
    var expected = "y";
    var output = removeVowels(letterY);
    expect(output).toEqual(expected);
});