const fs = require('fs');
const https = require('https');
//PDF Viewer потрібно
const fileUrl = 'https://cdn.gdz4you.com/files/books/7b/bbc2ef3516be5411e25de98d718de8a0ad6ccd68.pdf'
const fileName = 'Book.pdf'

https.get(fileUrl, (res) => {
  const file = fs.createWriteStream(fileName);
  res.pipe(file);
  
  file.on('finish', () => {
    console.log('Download complete.');
    file.close();
  });
})