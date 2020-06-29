
/*****************************************************************************************************************************************
 * 
 * Module name    : Electron.js
 * Module version : 9.0.4
 * File name      : index.js
 *
 * Copyright (C), All Rights Reserved
 * 
 ***************************************************************************************************************************************/

/**************************************************************************************************************************************
 * 
 *                                                      GLOBAL MODULES
 * 
 * 
 *************************************************************************************************************************************/
 
const electron = require('electron'); 
const path = require('path'); 
const fs = require('fs');
const { ipcRenderer } = electron;
  
                                                                 
const dialog = electron.remote.dialog;                           /* Importing dialog module using remote */
  
var uploadFile = document.querySelector('.select-1'); 
var uploadFileTwo = document.querySelector('.select-2');
  

global.filepath = undefined; 

var folderOne = [];
var folderTwo = [];

  
uploadFile.addEventListener('click', function() {
  if (process.platform !== 'darwin') { 
                                                                 /* Resolves to a Promise<Object> */ 
dialog.showOpenDialog({ 
title: 'Select the File to be uploaded', 
defaultPath: path.join(__dirname, '../assets/'), 
buttonLabel: 'Upload', 
                                                                  /* Restricting the user to only Text Files. */ 
filters: [ 
{ 
name: 'image files', 
extensions: ['bmp'] 
}, ], 
                                                                  /* Specifying the File Selector Property */
properties: ['openDirectory'] 
}).then(file => { 
                                                                  /* Stating whether dialog operation was */
                                                                  /* cancelled or not. */ 
console.log(file.canceled); 
if (!file.canceled) { 
                                                                  /* Updating the GLOBAL filepath variable */  
                                                                  /* to user-selected file. */ 
global.filepath = file.filePaths[0].toString(); 
console.log(global.filepath); 
document.getElementById('area').value = global.filepath;
fs.readdir(global.filepath, (err, files) => { 
if (err) 
console.log(err); 
else { 
console.log("\nCurrent directory filenames:"); 
files.forEach(file => { 
folderOne.push(file);
console.log(file); 
}) 
} 
})
}   
}).catch(err => { 
console.log(err); 
});    
} 
});





/*const compare = document.querySelector('.btn');
compare.addEventListener('click', () => {
    var node = document.createElement("LI");
  var textnode = document.createTextNode(global.filepath);
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
})*/


/****************************************************************************************************************************************************
 * 
 *                                                                     select-2    
 * 
 * *************************************************************************************************************************************************/

global.filepath = undefined;
  
uploadFileTwo.addEventListener('click', function() {
  if (process.platform !== 'darwin') { 
    /* Resolves to a Promise<Object> */ 
dialog.showOpenDialog({ 
title: 'Select the File to be uploaded', 
defaultPath: path.join(__dirname, '../assets/'), 
buttonLabel: 'Upload', 
                                                               /* Restricting the user to only Text Files. */ 
filters: [ 
{ 
name: 'image files', 
extensions: ['bmp'] 
}, ], 
                                                               /* Specifying the File Selector Property */
properties: ['openDirectory'] 
}).then(file => { 
                                                               /* Stating whether dialog operation was */
                                                               /* cancelled or not. */ 
console.log(file.canceled); 
if (!file.canceled) { 
                                                               /* Updating the GLOBAL filepath variable */  
                                                               /* to user-selected file. */ 
global.filepath = file.filePaths[0].toString(); 
console.log(global.filepath); 
document.getElementById('area2').value = global.filepath;
fs.readdir(global.filepath, (err, files) => { 
if (err) 
console.log(err); 
else { 
console.log("\nCurrent directory filenames:"); 
files.forEach(file => { 
folderTwo.push(file);
console.log(file); 
}) 
} 
})
}   
}).catch(err => { 
console.log(err); 
});    
} 
   
});                                                              /* Second file selector */

const comp = document.querySelector('.btn');
comp.addEventListener('click', (e) => {
    e.preventDefault();
    var displayOne =  folderOne;
    var displayTwo = folderTwo;                              
    ipcRenderer.send('item:add', displayOne, displayTwo);
});