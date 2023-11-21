function bubbleSort(inputArray) {
    var swapped;
    var arrayLength = inputArray.length - 1;
    var newArray = inputArray.slice();
    do {
        swapped = false;
        for (var i = 0; i < arrayLength; i++) {
            if (newArray[i] < newArray[i + 1]) {
                var temp = newArray[i];
                newArray[i] = newArray[i + 1];
                newArray[i + 1] = temp;
                swapped = true;
            }
        }
        arrayLength--;
    } while (swapped);
    return newArray;
}
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
