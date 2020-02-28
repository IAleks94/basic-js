class DepthCalculator {
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


 const instance = new DepthCalculator();
  const calculateDepth = instance.calculateDepth.bind(instance);

  console.log(calculateDepth([1, 2, 3, 4, 5, [7]]));
  console.log(calculateDepth([1, 2, 3, [[1]], 4, 5, [1]]));
  console.log(calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]));
  console.log(calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]));

// console.log(calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]));

// assert.equal(calculateDepth([1, 2, 3, 4, 5, [1]]), 2);
// assert.equal(calculateDepth([1, 2, 3, [1], 4, 5, [1]]), 2);
//assert.equal(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 5);
//calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]), 15)
