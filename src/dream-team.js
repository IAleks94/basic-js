module.exports = function createDreamTeam(arrNames) {
  if (Array.isArray(arrNames)) {
    let teamName = [];
    arrNames.forEach(element => {
      if (typeof element === "string") {
        let UpperLetter = element.trim().match(/^[A-Z]/i);
        if (UpperLetter) {
          teamName.push(UpperLetter[0].toUpperCase());
        }
      }
    });

    if (teamName.length) {
      return teamName
        .sort((a, b) => {
          if (a > b) return 1;
          if (a == b) return 0;
          if (a < b) return -1;
        })
        .join("");
    }
  }
  return false;
};
