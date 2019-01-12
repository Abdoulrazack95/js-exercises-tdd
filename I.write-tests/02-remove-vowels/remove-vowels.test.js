var removeVowels = require('./remove-vowels'); 

test("remove the vowel", function(){
    var vowelRemoved = "Hi";
    var expected = "H";

    var output = removeVowels(vowelRemoved);
    expect(output).toEqual(expected);
});


test("does not remove y from the word", function(){
    var letterY = "y";
    var expected = "y";
    var output = removeVowels(letterY);

    expect(output).toEqual(expected);
});

// test for uppercasse 

test("remove uppercase vowels", function(){
    var removeUpper = "HI";
    var expected = "H";

    var output = removeVowels(removeUpper);
    expect(output).toEqual(expected);
})

// test special characters

test("remove special character", function(){
    var removeSpecialChar = "~!@#$%^&*()-_=+[]\{}|;':\",./<>?";
    var expected = "";

    var output = removeVowels(removeSpecialChar);
    expect(output).toEqual(expected);
})

// test all consonants

test("check all consonants", function(){
    var keepCons = "BCDFGHJKLMNPQRSTVXZ";
    var expected = "BCDFGHJKLMNPQRSTVXZ";

    var output = removeVowels(keepCons);
    expect(output).toEqual(expected);
})


// test all vowel

test("remove all vowels", function(){
    var noVowels = "aeiouAEIOU";
    var expected = "";

    var output = removeVowels(noVowels);
    expect(output).toEqual(expected);
})

// test nothing

test("empty array", function(){
    var emptyString = "";
    var expected = "";

    var output = removeVowels(emptyString);
    expect(output).toEqual(expected);
})
