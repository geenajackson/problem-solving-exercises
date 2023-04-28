// add whatever parameters you deem necessary
function separatePositive(integers) {
    //get pointers for left and right
    let left = 0;
    let right = integers.length - 1;
    //while half still hasn't been sorted:
    while (left < right) {
        //left pointer will keep track of what we still need to sort
        let currVal = integers[left];
        if (currVal > 0) {
            integers.splice(left, 1);
            integers.unshift(currVal);
            //leftmost value is in correct place, so we move the left pointer over
            left++;
        }
        //rightmost value is in correct place, so we move the right pointer over
        else {
            integers.splice(left, 1);
            integers.push(currVal);
            right--;
        }
    }
    //return the array
    return integers;
}
