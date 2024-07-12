function removeDuplicates(arr) {
    return arr.reduce((unique, item) => {
        if (!unique.includes(item)) {
            unique.push(item);
           // console.log (unique);
           // console.log(item);
        }
        return unique;
    }, []);
}

function concatenateArrays(arr) {
    return arr.reduce((result, subArray) => {
        result.push(subArray.join(' '));
        return result;
    }, []);
}

function main() {
    let arr2 = [7, 9, 1, 'a', 'a', 'f', 9 , 4, 2, 'd', 'd'];
    let data = [
        ["The", "little", "horse"],
        ["Plane", "over", "the", "ocean"],
        ["Chocolate", "ice", "cream", "is", "awesome"],
        ["this", "is", "a", "long", "sentence"]
    ];

    console.log("Array with duplicates removed:", removeDuplicates(arr2));
    console.log("Concatenated arrays:", concatenateArrays(data));
}

main();
