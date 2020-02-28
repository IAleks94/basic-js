const chainMaker = {
  linkArr: [],
  getLength() {
    return this.linkArr.length;
  },
  addLink(value) {
   this.linkArr.push(`( ${value} )`);
   console.log(this.linkArr);
   return this;
  },
  removeLink(position) {
    if (this.linkArr[position-1] === undefined || position >= this.linkArr.length) {
      throw new Error;
    }
    this.linkArr.splice(position-1, 1);
    return this;
  },
  reverseChain() {
   this.linkArr.reverse();
   return this;
  },
  finishChain() {
    let strChain = this.linkArr.join('~~');
    this.linkArr = [];
    return strChain;
  }
};

module.exports = chainMaker;

