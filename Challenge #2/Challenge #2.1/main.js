
function findSmallestNumber(arr) {
    if (arr.length === 0) return null;
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

function findLeastFrequentItem(arr) {
    if (arr.length === 0) return null;
    let counts = {};
    for (let item of arr) {
        counts[item] = (counts[item] || 0) + 1;
    }
    let leastFrequentItem;
    let minCount = Infinity;
    for (let item in counts) {
        if (counts[item] < minCount) {
            minCount = counts[item];
            leastFrequentItem = item;
        }
    }
    return leastFrequentItem;
}

function removeDuplicates(arr) {
    return [...new Set(arr)];
}


function main() {
    let arr1 = [12, 6, 10, 2, 45, 100];
    let arr2 = [3, 'c', 'c', 'a', 2, 3, 'c', 3, 'c', 2, 4, 9, 9];
    let arr3 = [7, 9, 1, 'a', 'a', 'f', 9 , 4, 2, 'd', 'd'];

    console.log("Smallest number in arr1:", findSmallestNumber(arr1)); 
    console.log("Least frequent item in arr2:", findLeastFrequentItem(arr2)); 
    console.log("Array with duplicates removed from arr3:", removeDuplicates(arr3)); 
}


main();
