function covert_uppercase(words) {
    var  sep_word = words.toLowerCase().split(' ');
    for (var i = 0; i < sep_word.length; i++) {
        sep_word[i] = sep_word[i].charAt(0).toUpperCase() +
        sep_word[i].substring(1);
    }
    return sep_word.join(' ');
 }
 console.log(covert_uppercase("the quick brown fox"));