module.exports = function sum(...nums) {
  let sum = 0

  for(num of nums) {
    sum += num
  }

  return sum
}
