/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
    const result = [[1], [1,1]];
    for (let i=2; i<numRows; i++) {
      result.push([]);
    }
    for (let j=2; j<result.length; j++) {
      result[j].push(1)
      for (let k=0; k<result[j-1].length; k++) {
        if (k+1<result[j-1].length) {
         result[j].push(result[j-1][k] + result[j-1][k+1])
        }
      }
      result[j].push(1)
    }
    return result;
}

