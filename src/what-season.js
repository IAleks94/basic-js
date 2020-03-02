module.exports = function getSeason(date) {
  let answer = "Unable to determine the time of year!";
  if (date !== undefined) {
    if (toString.call(date) !== "[object Date]") {
      throw new Error();
    }
    const seasons = ["winter", "spring", "summer", "fall"];

    switch (date.getMonth()) {
      case 11:
      case 0:
      case 1:
        answer = seasons[0];
        break;
      case 2:
      case 3:
      case 4:
        answer = seasons[1];
        break;
      case 5:
      case 6:
      case 7:
        answer = seasons[2];
        break;
      case 8:
      case 9:
      case 10:
        answer = seasons[3];
        break;
    }
  }
  return answer;
};