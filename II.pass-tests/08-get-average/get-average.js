// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings




function average(average){
     var filtered = average.filter(function(x){
        return typeof x !== "string";
    })
    
    var sum = 0;
    for(var i = 0; i < filtered.length; i++){
        sum += filtered[i];
    } 
    var avg = sum / filtered.length;
    return avg;
}

module.exports = average;