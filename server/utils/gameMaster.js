var random4Digit = function () {
    return shuffle("123456789".split('')).join('').substring(0, 3);
}

function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

exports.random4Digit = random4Digit;