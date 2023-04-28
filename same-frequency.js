// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
    let freq1 = freqCounter(int1);
    let freq2 = freqCounter(int2);

    if (Object.keys(freq1).length !== Object.keys(freq2).length) {
        return false;
    }

    for (let key of Object.keys(freq1)) {
        if (freq1[key] !== freq2[key]) {
            return false;
        }
    }

    return true;
}

function freqCounter(nums) {
    let obj = {};
    let arr = nums.toString().split("")
    for (let num of arr) {
        obj[num] ? obj[num]++ : obj[num] = 1;
    }

    return obj;
}
