module.exports = function repeater(str, options) {
    let repArr = [];
    let {
        repeatTimes = 0, separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = ''
    } = options;
    let addit = [];
    for (i = 0; i < (additionRepeatTimes || 1); i++) { //
        addit.push(addition + '');
    }
    let repAddit = addit.join(additionSeparator);
    str += repAddit;
    for (i = 0; i < (repeatTimes || 1); i++) {
        repArr.push(str);
    }
    let repStr = repArr.join(separator);

    return repStr;
}

//  console.log(repeater('LALA', { repeatTimes: 3, separator: 's', addition: '++', additionRepeatTimes: 1 })); //'la+la+la');
//  console.log(repeater('TESTstr', { repeatTimes: undefined, separator: 'ds', addition: 'ADD!', additionRepeatTimes: undefined, additionSeparator: ')))000' })); // 'TESTstrADD!');
//  console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' })); //'i7v9VAiIYfFeBa2b7RLLTEn9kEcy0MFeBa2b7RLL');


// (repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }), 'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null');  
//nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null
// repeatTimes устанавливает numberповторения str;
// separator является stringразделяющие повторений str;
// addition является дополнительным, string который будет добавляться к каждому повторению str;
// additionRepeatTimes устанавливает number повторения addition;
// additionSeparator это string разделительные повторения addition.