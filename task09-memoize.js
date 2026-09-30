const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });
function memoize(fn) {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) { console.log('from cache'); return cache.get(key) }
        console.log('computed');
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}
const factorial = memoize(n => n <= 1 ? 1 : n * factorial(n - 1));
function ask() {
    rl.question('Enter n for factorial (or q to quit): ', s => {
        if (s.toLowerCase() === 'q') { rl.close(); return }
        console.log(factorial(Number(s)));
        ask();
    });
}
ask();
