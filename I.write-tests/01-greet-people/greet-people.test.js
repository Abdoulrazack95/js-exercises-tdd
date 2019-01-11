var greetPeople = require('./greet-people.js');

test('print list of names prefixed with Hello', function () {
    // Arrange
    var mentors = ["Abdou", "Ahmed", "Paulina"];
    // Act
    var expected = ["Hello Abdou", "Hello Ahmed", "Hello Paulina"];
    // Assert
    var output = greetPeople(mentors);
    expect(output).toEqual(expected);
})