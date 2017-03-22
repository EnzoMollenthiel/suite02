/*

    Find Sum By Multiples

    If we list all the natural numbers below 10 that are
    multiples of 3 or 5, we get 3, 5, 6 and 9.

    The sum of these multiples is 23.

    In a function "findSumByMultiples", find the sum of all the multiples of 3 or 5 below 1000.

    Write your own tests !
    
*/

// write your code below this comment
function findSumByMultiples(nb1, nb2, nb3) {
    var multiples = [];
    var sum = 0;

    for (let i = 0; i <= nb3; i++) {
        if (i % nb1 == 0 || i % nb2 == 0) {
            multiples.push(i)
        }
    }
    for (j in multiples) {
        sum = sum + multiples[j];
    }

    return sum
}
console.log(findSumByMultiples(3, 5, 1000));