
function reverseArray(table) {
    let reversedTable = [];
    const tableLength = table.length;
    for (let i = 0; i < tableLength; i++) {
       let lastElement = table.pop();
       reversedTable.push(lastElement); 
    }
    return reversedTable;
}

console.log(reverseArray(["A", "B", "C"]))

function reverseArrayInPlace(arrayValue) {
    for(let i = 0; i < table; i++) {
        let x = arrayValue[i]
        arrayValue.splice(i, 1);
        arrayValue.unshift(x);
    }
    return arrayValue;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

