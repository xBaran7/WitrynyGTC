
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

function reverseArrayInPlace() {

}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
