/***************************************************************************************************************************
 *
 * Module name    : Electron.js
 * Module version : 9.0.4
 * File name      : main.js
 *
 * Copyright (C), All Rights Reserved

*****************************************************************************************************************************/


/*!
   @brief   Image comparing desktop application   
   @ingroup 
   @details 
   Note: Choosing two folders to comparing two images for show differences
*/

/************************************************************************************************************************
 * 
 *                                                  GLOBAL MODULES
 * 
 * 
 ************************************************************************************************************************/

const electron = require('electron');                              /* Declaring "electron" module */
const url = require('url');                                        /* Declaring "url" module */
const path = require('path');                                      /* Declaing "path" module */

const { app, BrowserWindow, Menu, ipcMain } = electron;

let mainWindow;                                                    /* variable that contains main window html page*/
let addwindow;                                                     /* that contains */

app.on('ready', () => {                                            /* Listen for app to be ready */
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });                                                            /* Create new window */
                                                                   /* Load html into window */
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
    mainWindow.on('closed', () => {
        app.quit();
    });

                                                                    /* Build menu*/
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert menu
    Menu.setApplicationMenu(mainMenu);                                          
});
  
    function createAddWindow() {                                    /* Handle add create window */
    addWindow = new BrowserWindow({
    width: 600,
    height: 300,
    title: 'Compare Images',
    webPreferences: {
        nodeIntegration: true
    }     
    });                                                            /* Create new window */
                                                                   /* Load html into window */
    addWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'addWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
                                                                   /* Garbage Collection */
    addWindow.on('close', () => {
        addwindow = null;
    });
}



// Catch file name
ipcMain.on('item:add', (e, displayOne, displayTwo) => {
    mainWindow.webContents.send('item:add', displayOne, displayTwo);
    addWindow.close();
});

const mainMenuTemplate = [                                         /* Create menu template */
    {
        label: 'Харьцуулах',                                       /* use label keyword to create menu items */
        submenu: [                                                 /* create submenu */
            {
                label: 'Зураг нэмэх',
                click() {
                    createAddWindow();
                }
            },
            {
                label: 'Гарах',
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click() {
                    app.quit();
                }
            }
        ]
    },
    {
        label: 'Тохиргоо'
    },
    {
        label: 'Түүх'
    }
];

if(process.env.NODE_ENV !== 'production') {
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu: [
            {
                label: 'Toggle DevTools',
                accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]

    });
}