// Recursion - Factorial

function factorial(n) {
    // Base case - Condition that stops recursion . Without it function will call itself forever.
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));