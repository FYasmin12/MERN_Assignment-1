const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });
function fetchWithTimeout(url, ms) {
    let timer;
    const timeout = new Promise((_, reject) => {
        timer = setTimeout(() => reject(new Error('Request Timed Out')), ms);
    });
    return Promise.race([fetch(url), timeout]).finally(() => clearTimeout(timer));
}
rl.question('Enter URL: ', url => {
    rl.question('Enter timeout in ms: ', ms => {
        fetchWithTimeout(url, Number(ms))
            .then(r => console.log('Status:', r.status))
            .catch(e => console.log(e.message))
            .finally(() => rl.close());
    });
});
