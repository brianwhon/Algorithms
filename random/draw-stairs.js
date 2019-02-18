/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.

 For example:
 drawStairs(6) ->
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
    for (let i=0; i<n; i++) {
      array.push(' ')
    }
    //insert star at last, then last and last -1, then last and last-1 and last -2
    for (let j=n-1; j>=0; j--) {
      array[j] = "*"
      console.log(array.join(''))
    }
}