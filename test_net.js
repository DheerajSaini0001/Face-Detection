const https = require('https');

console.log('Testing Node.js connectivity to api.cloudinary.com...');

const req = https.request('https://api.cloudinary.com', { method: 'HEAD' }, (res) => {
    console.log(`StatusCode: ${res.statusCode}`);
    console.log('Headers:', res.headers);
});

req.on('error', (e) => {
    console.error('Error:', e);
});

req.end();
