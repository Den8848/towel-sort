
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let newArr = []
  if (!matrix || matrix.length === 0) {
    return newArr
  }
    
  matrix.forEach((item, index) => {
    if (index%2 !==0) {
    item.reverse()
    }
  })
    
  for (let i = 0; i < matrix.length; i++) {
    newArr = newArr.concat(matrix[i])
  }

  return newArr
}