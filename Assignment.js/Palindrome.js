// Palindrome: write a function that checks whether a string or number reads the same forward and backward

function isPalindrome(value){
    let str = String(value);
    let left=0;
    let right=str.length-1;

    while(left<right){
        if(str[left]!==str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome(121));
console.log(isPalindrome("hello"));
console.log(isPalindrome(123));

