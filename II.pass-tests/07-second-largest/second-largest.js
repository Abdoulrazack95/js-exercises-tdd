

function secondLargest(numbers){
    numbers.sort(function (a, b){
        return a - b;
    })
    return numbers.find(function(greater){
        return greater >= 20;
    })
}

module.exports = secondLargest;