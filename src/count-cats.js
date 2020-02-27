module.exports = function countCats(arr) {
  let count = 0;
  arr.forEach(element => {
    element.forEach(item => {
      if (item === "^^") {
        count++;
      }
    });
  });
  return count;
};