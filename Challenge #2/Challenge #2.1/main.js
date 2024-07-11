function findSmallestNumber(arr) {
    if (!arr.length) return null;
    return arr.reduce((smallest, num) => num < smallest ? num : smallest, arr[0]);
}

function findLeastFrequentItem(arr) {
    if (!arr.length) return null;
    const counts = arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});

    const minCount = Math.min(...Object.values(counts));
    return Object.keys(counts).find(item => counts[item] === minCount);
}

function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

function main() {
    const arr1 = [12, 6, 10, 2, 45, 100];
    const arr2 = [3, 'c', 'c', 'a', 2, 3, 'c', 3, 'c', 2, 4, 9, 9];
    const arr3 = [7, 9, 1, 'a', 'a', 'f', 9 , 4, 2, 'd', 'd'];

    console.log("Smallest number in arr1:", findSmallestNumber(arr1)); 
    console.log("Least frequent item in arr2:", findLeastFrequentItem(arr2)); 
    console.log("Array with duplicates removed from arr3:", removeDuplicates(arr3)); 
}

main();
