class VigenereCipheringMachine {
    constructor(isDirect = true) {
        this.isDirect = isDirect;
    }
    encrypt(message, key) { //шифрует
        if ( typeof message === 'string' && typeof key ==='string') {
            if (!this.isDirect) { //есле обратная 
                message = message.split('').reverse().join('');   
            }
            let arrMessage = message.split('');
            let arrKey = [...key];
            while (arrKey.length < message.length) {
                arrKey = arrKey.concat(...key);
            }
            let encryptedArr = [];
            let i = 0;
            arrMessage.forEach((item) => {
                let keyLetter = arrKey[i];
                let regExp = /[A-Z]/i;
                let letter = item.match(regExp);
                if (letter) {
                  let massageCodeNum = item.toUpperCase().codePointAt(0);
                  let keyCodeNum = keyLetter.toUpperCase().codePointAt(0) - 65;
                  let encryptCodeNum = massageCodeNum + keyCodeNum;
                  if (encryptCodeNum > 90) {
                    encryptCodeNum -= 26;
                  }
                  encryptedArr.push(String.fromCodePoint(encryptCodeNum));
                  i++;
                } else {
                    encryptedArr.push(item); 
                }
            });
            return encryptedArr.join('');
        }
        throw Error();
    }

    decrypt(encryptedMessage, key) { //дешефрует
        if ( typeof encryptedMessage === 'string' && typeof key ==='string') {
            if (!this.isDirect) { //есле обратная 
                encryptedMessage = encryptedMessage.split('').reverse().join('');   
            }
            let arrEncryptedMessage = encryptedMessage.split('');
            let arrKey = [...key];
            while (arrKey.length < encryptedMessage.length) {
                arrKey = arrKey.concat(...key);
            }
            let arrMessage = [];
            let i = 0;
            arrEncryptedMessage.forEach((item) => {
                let keyLetter = arrKey[i];
                let regExp = /[A-Z]/i;
                let letter = item.match(regExp);
                if (letter) {
                  let encryptedCodeNum = item.toUpperCase().codePointAt(0);
                  let keyCodeNum = keyLetter.toUpperCase().codePointAt(0) - 65;
                  let messageCodeNum = encryptedCodeNum - keyCodeNum;
                  if (messageCodeNum < 65) {
                    messageCodeNum += 26;
                  }
                  arrMessage.push(String.fromCodePoint(messageCodeNum));
                  i++;
                } else {
                    arrMessage.push(item); 
                }
            });
            return arrMessage.join('');
        }
        throw Error();       
    }
}

module.exports = VigenereCipheringMachine;




