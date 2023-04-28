// add whatever parameters you deem necessary
function averagePair(integers, target) {
    //set up pointers for beginning/end of array
    let i = 0;
    let j = integers.length - 1;

    //while the left and right pointers haven't met
    while (i < j) {
        //if average of pair is target, return true
        if ((integers[i] + integers[j]) / 2 === target) {
            return true;
        }
        //else, move pointer; if target is bigger, move left pointer; if target is smaller, move right pointer
        else if ((integers[i] + integers[j]) / 2 > target) {
            j--;
        }
        else i++;
    }

    //if loop finishes, no matches
    return false;
}
