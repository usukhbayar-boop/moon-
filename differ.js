/*const { ipcMain } = require('electron');
const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

ipcMain.on('image:send', function ('image-send', 'image.png', 'image2.png') {
    const img1 = PNG.sync.read(fs.readFileSync('image.png'));
const img2 = PNG.sync.read(fs.readFileSync('image2.png'));
const {width, height} = img1;
const diff = new PNG({width, height});

pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.1});

fs.writeFileSync('diff.png', PNG.sync.write(diff));

});*/

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('hello world!');
}).listen(8080);


