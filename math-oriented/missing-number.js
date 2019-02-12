/* 
A zero-indexed array A consisting of N different integers is given. 
The array contains integers in the range [1..(N + 1)], which means 
that exactly one element is missing.Your goal is to find that missing element.
Write a function that, given an array A, returns the value of the missing element.
For example, given array A such that:
  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.
Assume that:
 * N is an integer within the range [0..100,000];
 * the elements of A are all distinct;
 * each element of array A is an integer within the range [1..(N + 1)].
 Complexity:
expected worst-case time complexity is O(N);
expected worst-case space complexity is O(N), beyond input storage (not counting 
the storage required for input arguments).
Challange: 
  ** cannot use additional storage, variables are okay not any TYPE of object
  ** keep in mind time complexity
*/

/*
APPROACH 1
Time complexity: O(N) as completion of reduce on line 34 will increase linearly with input size
Notes: Line 33 utilizes the Gauss summation formula for the sum of all consecutive numbers from 
1 to n. 
*/
const test = [4, 2, 6, 5, 1, 3, 8, 7, 10]
function missingNum(Array) {
  const n = Array.length+1;
  const fullSum = n*(n+1)/2;
  const arraySum = Array.reduce((a, b) => a+b);
  return fullSum - arraySum;
}

//APPROACH 1 in one line
function missingNum1Line(Array) {
    return (Array.length+1)*(Array.length+2)/2 - Array.reduce((a, b) => a+b);
}

console.log("Expect 9: ", 9 === missingNum(test));