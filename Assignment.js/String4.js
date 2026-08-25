// check whether a string is a palindrome

let str = "madam";
let left=0;
let right=str.length-1;
let palindrome = true;

while(left<right){
    if(str[left]!==str[right]){
        palindrome=false;
        break;
    }
    left++;
    right--;

}
if(palindrome){
    console.log("Palindrome");
}
else{
    console.log("Not");
}