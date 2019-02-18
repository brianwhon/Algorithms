/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    let aDiv = []
    for (let i=2; i<(a/2); i++) {
      if (a%i === 0) {
        aDiv.push(i)
      }
    }
    let bDiv = []
    for (let j=2; j<(b/2); j++) {
      if (b%j === 0) {
        bDiv.push(j)
      }
    }
    console.log(aDiv)
    console.log(bDiv)
    for (let k=0; k<aDiv.length; k++) {
        if (aDiv[k]-bDiv[k] !== 0) {
            return aDiv[k-1]
        }
    }
}
 
  console.log('expect 6', gcd(36,24))