var removeVowels = require('./remove-vowels'); 

test('remove vowels from word', function () {
    var word = "abdoulrazack";
    // Arrange
    var expected = "_bd__lr_z_ck";
    // Act
    var output = removeVowels(word);
    // Assert
    expect(output).toEqual(expected);
})