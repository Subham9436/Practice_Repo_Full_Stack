// Binary Search
function binarySearch(arr,target){
    let low=0;
    let high=arr.length-1;

    while(low<=high){
    let mid = Math.floor((low+high)/2);
      if(arr[mid]===target){
        return mid;
      }
      if(arr[mid]<target){
        low=mid+1;
      }
      else{
        high=mid-1;
      }
    }
    return -1;
}
console.log(binarySearch([10,20,30,40,50],30));