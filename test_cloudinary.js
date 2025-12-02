require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

console.log('Checking Cloudinary Config...');
console.log('Cloud Name:', process.env.CLOUDINARY_CLOUD_NAME);
console.log('API Key:', process.env.CLOUDINARY_API_KEY);
console.log('API Secret:', process.env.CLOUDINARY_API_SECRET ? '******' : 'Missing');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Create a dummy file to upload
fs.writeFileSync('test_image.txt', 'This is a test image content');

cloudinary.uploader.upload('test_image.txt', { resource_type: "raw" }, (error, result) => {
    if (error) {
        console.error('Upload Failed:', error);
    } else {
        console.log('Upload Success:', result);
    }
    // Clean up
    fs.unlinkSync('test_image.txt');
});
