// Rotate an array

function rotateArr(arr, d) {
    let n = arr.length;

    d = d % n;

    reverse(arr, 0, d - 1);
    reverse(arr, d, n - 1);
    reverse(arr, 0, n - 1);
}

function reverse(arr, i, j) {
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        i++;
        j--;
    }
}

// Example
let arr = [1, 2, 3, 4, 5];
let d = 2;

rotateArr(arr, d);

console.log(arr);
        
