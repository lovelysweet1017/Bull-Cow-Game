var random3Digit = function () {
    return shuffle("123456789".split('')).join('').substring(0, 3);
}

function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

var checkGuess = function (guess) {
    var masterNumber = global.Number;
    var c = 0;
    var b = 0;
    var m = (masterNumber + '').split('');
    var g = (guess + '').split('');
}
exports.random3Digit = random3Digit;