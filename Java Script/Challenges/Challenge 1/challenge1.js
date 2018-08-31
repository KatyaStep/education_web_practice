console.log("CONNECTED!")

//Write a function that takes an array as an argument and prints out the elements in the array in reverse order

function printReverse(numbers){
    for ( i = numbers.length-1; i>=0; i--) {
        console.log (numbers[i]);
    }
}
printReverse([1,2,3,4])

//Write a function which takes an array as an argument and returns true if all elements in the array are identical
function isUniform(numbers){
    var first_item = numbers[0];
    var result = true;
    for (i =1 ; i!=numbers.length; i++){
            if (first_item != numbers[i]){
                result = false;
                break;
            }
    }
console.log ("Your result is ", result);
}
isUniform([1,1,2,1])


//Write a function that accepts an array of numbers and returns the sum of all numbers in the array
var sum = 0;
function sumArray(numbers){
    for ( i=0; i< numbers.length; i++ ){
        sum = sum + numbers[i];
        }
    return sum;
}
sumArray([1,2,3,4])

//Write a function that accepts an array of numbers and returns the maximum number in the array
var max = 0;
function maxArray(numbers){
    for ( i=0; i<numbers.length; i++ ){
        if (numbers[i] > max){
            max = numbers[i];
        }
        }
    return max;
}
maxArray([100,8,5,-4])