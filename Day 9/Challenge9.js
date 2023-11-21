function findFirstNotRepeatedChar(inputString) {
    var charArray = inputString.split('');
    var result = '';
    var count = 0;
    for (var i = 0; i < charArray.length; i++) {
        count = 0;
        for (var j = 0; j < charArray.length; j++) {
            if (charArray[i] === charArray[j]) {
                count += 1;
            }
        }
        if (count < 2) {
            result = charArray[i];
            break;
        }
    }
    return result;
}
console.log("The first non-repeated character is :- ", findFirstNotRepeatedChar('abacddbec'));
console.log("The first non-repeated character is :- ", findFirstNotRepeatedChar('abmacddbc'));
