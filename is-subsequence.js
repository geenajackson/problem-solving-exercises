// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    //follow chars of str1
    let charIdx = 0;

    //if chars of str1 match curr char of str2, add to str1 counter
    for (let i = 0; i < str2.length; i++) {
        if (str1[charIdx] === str2[i]) {
            charIdx++;
        }
    }

    //if all chars were found, the charIdx will equal the length of the string
    if (charIdx === str1.length) {
        return true;
    }

    //else, return false
    return false;
}
