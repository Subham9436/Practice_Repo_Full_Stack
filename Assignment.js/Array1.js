// Arrays: find the largest and smallest values
let arr=[5,2,9,3,4];

let largest = arr[0];
let smallest = arr[0];

for(let i=1;i<arr.length;i++){
    if(arr[i]>largest)
        largest = arr[i];
    if(arr[i] < smallest)
    smallest = arr[i];
}

console.log("largest:",largest);
console.log("smallest:",smallest);