
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let newArr = []
  for (let i = 0; i < matrix.length; i++) {
    newArr = newArr.concat(matrix[i])
  }
  return newArr.sort()
  
}
