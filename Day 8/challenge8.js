function get_subset(arr, arr_size) {
    var result_set = [],
        result;

    for (let x = 0; x < Math.pow(2, arr.length); x++) {
        result = [];
        i = arr.length - 1;
        do {
            if ((x & (1 << i)) !== 0) {
                result.push(arr[i]);
            }
        } while (i--);
        if (result.length >= arr_size) {
            result_set.push(result);
        }
    }
    return result_set;
}

console.log(get_subset([1, 2, 3], 2));