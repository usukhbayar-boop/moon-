const electron = require('electron'); 
    const path = require('path'); 
    const ipc = require('electron').ipcMain;
  

const dialog = electron.remote.dialog;                       /* Importing dialog module using remote */ 
  
var uploadFile = document.querySelector('.select-1'); 
var uploadFileTwo = document.querySelector('.select-2');
  
                                                            /* Defining a Global file path Variable to store */
                                                            /* user-selected file */
global.filepath = undefined; 
  
uploadFile.addEventListener('click', () => { 
                                                            /* If the platform is 'win32' or 'Linux' */
    if (process.platform !== 'darwin') { 
                                                            /* Resolves to a Promise<Object> */
        dialog.showOpenDialog({ 
            title: 'Select the File to be uploaded', 
            defaultPath: path.join(__dirname, '../assets/'), 
            buttonLabel: 'Upload', 
                                                               
            filters: [                                      /* Restricting the user to only Image Files. */
                { 
                    name: 'Image Files', 
                    extensions: ['png', 'bmp'] 
                }, ], 
             
            properties: ['openFile']                       /* Specifying the File Selector Property */
        }).then(file => { 
                                                           /* Stating whether dialog operation was */
                                                           /* cancelled or not. */ 
            console.log(file.canceled); 
            if (!file.canceled) { 
                                                           /* Updating the GLOBAL filepath variable */  
                                                           /* to user-selected file. */
              global.filepath = file.filePaths[0].toString(); 
              //console.log(global.filepath); 
              
            }   
        }).catch(err => { 
            console.log(err); 
        }); 
    } 
    else { 
                                                            /* If the platform is 'darwin' (macOS) */
        dialog.showOpenDialog({ 
            title: 'Select the File to be uploaded', 
            defaultPath: path.join(__dirname, '../assets/'), 
            buttonLabel: 'Upload', 
            filters: [ 
                { 
                    name: 'Image file', 
                    extensions: ['png', 'bmp'] 
                }, ], 
                                                            /* Specifying the File Selector and Directory */ 
                                                            /* Selector Property In macOS */ 
            properties: ['openDirectory'] 
        }).then(file => { 
            console.log(file.canceled); 
            if (!file.canceled) { 
              global.filepath = file.filePaths[0].toString(); 
              console.log(global.filepath); 
            }   
        }).catch(err => { 
            console.log(err); 
        }); 
    } 
});



/************                    Button2                   *******************/


global.filepath = undefined; 
  
uploadFileTwo.addEventListener('click', () => { 
                                                            /* If the platform is 'win32' or 'Linux' */
    if (process.platform !== 'darwin') { 
                                                            /* Resolves to a Promise<Object> */
        dialog.showOpenDialog({ 
            title: 'Select the File to be uploaded', 
            defaultPath: path.join(__dirname, '../assets/'), 
            buttonLabel: 'Upload', 
                                                               
            filters: [                                      /* Restricting the user to only Image Files. */
                { 
                    name: 'Image Files', 
                    extensions: ['png', 'bmp'] 
                }, ], 
             
            properties: ['openFile']                       /* Specifying the File Selector Property */
        }).then(file => { 
                                                           /* Stating whether dialog operation was */
                                                           /* cancelled or not. */ 
            console.log(file.canceled); 
            if (!file.canceled) { 
                                                           /* Updating the GLOBAL filepath variable */  
                                                           /* to user-selected file. */
              global.filepath = file.filePaths[0].toString(); 
              console.log(global.filepath); 
            }   
        }).catch(err => { 
            console.log(err); 
        }); 
    } 
    else { 
                                                            /* If the platform is 'darwin' (macOS) */
        dialog.showOpenDialog({ 
            title: 'Select the File to be uploaded', 
            defaultPath: path.join(__dirname, '../assets/'), 
            buttonLabel: 'Upload', 
            filters: [ 
                { 
                    name: 'Image file', 
                    extensions: ['png', 'bmp'] 
                }, ], 
                                                            /* Specifying the File Selector and Directory */ 
                                                            /* Selector Property In macOS */ 
            properties: ['openDirectory'] 
        }).then(file => { 
            console.log(file.canceled); 
            if (!file.canceled) { 
              global.filepath = file.filePaths[0].toString(); 
              console.log(global.filepath); 
            }   
        }).catch(err => { 
            console.log(err); 
        }); 
    } 
}); 