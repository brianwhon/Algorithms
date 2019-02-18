/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
    let sum = 0
    for(let i=0; i<array.length; i++) {
      sum += array[i]
    }
    console.log("1. sum: ", sum)
    let mean = Math.floor(sum/array.length)
    console.log("2. mean: ", mean)
 
    let counter = {};
    for (let j=0; j<array.length; j++) {
      if (counter[array[j]] === undefined) {
        counter[array[j]] = 1
      } else {
        counter[array[j]]++
      }
    }
    console.log("3. counter: ", counter)
      let mode = 0
    let max = Math.max(...Object.values(counter))
    console.log("4. max: ", max)
    for (let keys in counter) {
      if (counter[keys] === max) {
        mode = keys
      }
    }
    console.log("5. mode: ", mode)
 
    if (mode == mean) {
      return true
    } else {
      return false
    }
}