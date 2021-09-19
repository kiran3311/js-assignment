// Question 1:
//Write a program that prints even numbers from 1 to 100 
//in descending order the output should show: 100 98 96 . . . 2

for (var i = 100; i >= 1; i--) {
    if (i % 2 == 0) {
        console.log(i)
    }
}


//Question 2
/* Write a function which accepts list of country 
names as parameter and returns the longest country name as output. */
var arr = ["India", "china", "America"]
function country(arr) {
    var result = " "
    for (i = 0; i < arr.length; i++) {
        var output = arr[i]
        if (output.length > result.length) {
            result = arr[i]
        }
    }
    return result
}
console.log(country(arr))



//Question 3
/* Write a function which accept a number and reverse a number 
as output. For Example n = 83343; Output : 34338 */
function Number(num) {
    console.log(num.reverse())

}
var num = [8, 5, 8, 4]
Number(num)



//Question 4
/* Write a function to accept a number as parameter and return false or true
based on weather the number is prime or not. A prime number
(or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. */

var isPrime = true
function prime(number) {
    if(number%2==0||number%3==0){
        console.log("false")
    }
    else{
        console.log("true")
    }
}

var number = 11
prime(number) 