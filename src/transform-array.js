module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("Немассив!");
  }
  let transformArr = [];
  // console.log("перебераю массив");
  if (arr.length === 0) {
    return transformArr;
  }

  for (index = 0; index < arr.length; index++) {
    let item = arr[index];
    if (item === "--discard-next" || item === "--double-next") {
      if (arr[index + 1] === undefined) {
        continue;
      }
    } else if (item === "--discard-prev" || item === "--double-prev") {
      if (arr[index - 1] === undefined) {
        continue;
      }
    }
    if (item === "--discard-next") {
      index++;
      continue;
    } else if (item === "--discard-prev") {
      transformArr.pop();
    } else if (item === "--double-next") {
      transformArr.push(arr[index + 1]);
    } else if (item === "--double-prev") {
      transformArr.push(arr[index - 1]);
    } else if (
      item !== "--discard-next" ||
      item !== "--discard-prev" ||
      item !== "--double-next" ||
      item !== "--double-prev"
    ) {
      transformArr.push(item);
    } else if (item === undefined) {
      transformArr.push();
    }
  }
  return transformArr;
};
