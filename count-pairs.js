// add whatever parameters you deem necessary
function countPairs(integers, sum) {
    //keeps track of pairs
    let pairs = 0;

    //go through each value of array; j is increased since no need to check previous vals
    for (let i = 0; i < integers.length; i++) {
        for (let j = i + 1; j < integers.length; j++) {
            if (integers[i] + integers[j] === sum) {
                pairs++;
                break;
            }
        }
    }

    return pairs;
}

