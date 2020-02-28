module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    if (arr.length) {
      arr.forEach(element => {
        if (Array.isArray(element)) {
        depth = Math.max(1 + this.calculateDepth(element), depth);
        } 
      });
    }
    return depth;
  }
}
