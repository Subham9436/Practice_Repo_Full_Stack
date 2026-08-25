// count vowels and characters
let str = "Hello World";

let vowels = 0;
let characters = 0;

for (let i = 0; i < str.length; i++) {
    let ch = str[i].toLowerCase();

    if (ch >= 'a' && ch <= 'z') {
        characters++;

        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            vowels++;
        }
    }
}

console.log("Characters =", characters);
console.log("Vowels =", vowels);