
/*var bmpBuffer = fs.readFileSync('square1.bmp');
var bmpData = bmp.decode(bmpBuffer);

var bmpBufferTwo = fs.readFileSync('square2.bmp');
var bmpDataTwo = bmp.decode(bmpBufferTwo);*/

const fs = require('fs');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

const img1 = PNG.sync.read(fs.readFileSync('ins.png'));
const img2 = PNG.sync.read(fs.readFileSync('ins2.png'));
const {width, height} = img1;
const diff = new PNG({width, height});

pixelmatch(img1.data, img2.data, diff.data, width, height, {threshold: 0.1});

fs.writeFileSync('diff.png', PNG.sync.write(diff));


var firstdiv = document.getElementById('firstdiv');
var seconddiv = document.getElementById('seconddiv');
var differ = document.getElementById('diff');

firstdiv.innerHTML = "<img src = 'ins.png'>";
seconddiv.innerHTML = "<img src = 'ins2.png'>";
differ.innerHTML = "<img src = 'diff.png'>";









