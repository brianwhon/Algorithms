/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let result = 1;
    if (array.length <= 3) {
        for (let j=0; j<array.length; j++) {
            result = result*array[j]
        }
    } else {
        const sorted = array.sort(function(a,b) {return b-a});
        for (let i=0; i<3; i++) {
          result = result*sorted[i]
        }
    }
    return result;
}
