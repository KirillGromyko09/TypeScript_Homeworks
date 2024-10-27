const arr: number[] = [1,2,3];

function reverseArr(arr: number[]) {
    return arr.reverse();
}

const reversedArr = reverseArr(arr)
console.log(arr);
console.log(reversedArr);
console.log(reversedArr === arr);
