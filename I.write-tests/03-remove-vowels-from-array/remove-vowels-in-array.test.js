var removeVowelsArray = require('./remove-vowels-in-array');

test('remove vowels from all words in array', function () {
    // Arrange
    var input = ["Irina", "Etza", "Daniel"];
    // Act
    var expectedOutput = ["rn", "tz", "Dnl"];
    // Assert
    var output = removeVowelsArray(input);
    expect(output).toEqual(expectedOutput);
})

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]