// remove duplicates

let arr = [1, 1, 2, 2, 3, 4, 4];
let j = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
        j++;
        arr[j] = arr[i];
    }
}

console.log(arr.slice(0, j + 1));
