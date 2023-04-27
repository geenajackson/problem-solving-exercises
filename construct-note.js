// add whatever parameters you deem necessary
function constructNote(msg, letters) {
    //if length of msg is bigger than letters, there can't be enough letters
    if (msg.length > letters.length) return false;
    //if msg is empty, return true
    if (!msg) return true;

    let msgFreq = freqCounter(msg);
    let lettersFreq = freqCounter(letters);

    //if the freq of a letter of msg is ever bigger than freq of a letter in letters, cannot be enough letters
    for (let letter of msg) {
        if (msgFreq[letter] > lettersFreq[letter]) {
            return false;
        }
    }

    return true;

}

//get the freq of letters of each string
function freqCounter(str) {
    const freq = {};
    for (let letter of str) {
        freq[letter] ? freq[letter]++ : freq[letter] = 1;
    }

    return freq;
}