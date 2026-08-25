//  Write a function that checks whether two strings are anagrams of each other; ignore spaces, punctuation, and letter casing

function isAnagram(str1,str2){
    str1 = str1.toLowerCase().replace(/[^a-z0-9]/g,"");
    str2 = str2.toLowerCase().replace(/[^a-z0-9]/g,"");

    if(str1.length!=str2.length){
        return false;
    }
    str1 = str1.split("").sort().join("");
    str2 = str2.split("").sort().join("");

    return str1===str2;

}
console.log(isAnagram("Listen","Silent"));