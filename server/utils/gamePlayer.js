var makeGuess = (lastGuess, bull, cow) => {
    if (cow === 0 && bull === 0) {
        var lastGuessArr = (lastGuess + '').split('');
        global.availableDigits = global.availableDigits.replace(lastGuess[0], '');
        global.availableDigits = global.availableDigits.replace(lastGuess[1], '');
        global.availableDigits = global.availableDigits.replace(lastGuess[2], '');
        console.log(global.availableDigits);
        var num = random3Digit(global.availableDigits);
        while (global.usedNumbers.indexOf(num) != -1) {
            num = random3Digit(global.availableDigits);
        }
        global.usedNumbers.push(num);
        return num;
    } else if (bull === 3) {
        return lastGuess;
        console.log(lastGuess)
    } else if ((bull + cow) === 3) {
        global.availableDigits = (lastGuess + '');
        var num = random3Digit(global.availableDigits);
        while (global.usedNumbers.indexOf(num) != -1) {
            num = random3Digit(global.availableDigits);
        }
        global.usedNumbers.push(num);
        return num;
    }
    else {
        return random3Digit(global.availableDigits);
    }
}
var random3Digit = function (numberList) {
    return shuffle(numberList.split('')).join('').substring(0, 3);
}

function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
var i = [
    00, 01, 02, 03, 10, 11, 12, 20, 21, 30
]
exports.makeGuess = makeGuess;
