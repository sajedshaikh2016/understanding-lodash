const myList = [
    "Water",
    "Chicken",
    "Banana",
    "Banana",
    "Cake",
    "Water",
    false, 
    null, 
    0, 
    "", 
    undefined, 
    NaN
];

console.log("Initial Array =>", myList);

const myNewArrayChunk = _.chunk(myList, 3)
console.log("chunk =>", myNewArrayChunk);

const myNewArrayCompact = _.compact(myList);
console.log("compact =>", myNewArrayCompact);

const myNewArrayConcat = _.concat(myList, 3, 4, [[44, 55]]);
console.log("concat =>", myNewArrayConcat);

const myNewArrayDifference = _.difference(myList, ['Water', 'Banana'])
console.log("difference =>", myNewArrayDifference);

