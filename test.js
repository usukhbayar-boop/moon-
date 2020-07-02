
const { ipcRenderer } = require('electron');
const Jimp = require('jimp');


Jimp.read("image.bmp", function(err, image) {
    if(err) {
        console.log(err);
    } else {
        image.write("image.png");

    }
});

Jimp.read("image2.bmp", function(err, image) {
    if(err) {
        console.log(err);
    } else {
        image.write("image2.png");
    }
});
