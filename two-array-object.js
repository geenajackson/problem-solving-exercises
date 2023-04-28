// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    //create an object
    let obj = {};

    //loop through lengths of keys
    for (let i = 0; i < keys.length; i++) {
        //if there exists a value at i, add that value to key; else add null
        values[i] ? obj[keys[i]] = values[i] : obj[keys[i]] = null;
    }

    //return object
    return obj;
}
