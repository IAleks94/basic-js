const chainMaker = {
  linkArr: [],
  getLength() {
    return this.linkArr.length;
  },
  addLink(value) {
    this.linkArr.push(`( ${value} )`);
    //console.log(this.linkArr);
    return this;
  },
  removeLink(position) {
    if (this.linkArr[position - 1] === undefined || position >= this.linkArr.length || position % 1 != 0) {
      his.linkArr = [];
      throw new Error("Неправильная позицыя");
    }
    this.linkArr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.linkArr.reverse();
    return this;
  },
  finishChain() {
    let strChain = this.linkArr.join("~~");
    this.linkArr = [];
    return strChain;
  }
};

module.exports = chainMaker;

//() => chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4)
//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4));

//assert.deepEqual(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain(), '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');

// //console.log(
//   chainMaker
//   .addLink("GHI")
//   .addLink(null)
//   .reverseChain()
//   .addLink(333)
//   .reverseChain()
//   .reverseChain()
//   .addLink(0)
//   .reverseChain()
//   .reverseChain()
//   .addLink("GHI")
//   .finishChain()
// );