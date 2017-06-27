const { app, BrowserWindow } = require('electron');
const { join } = require('path');
const { format } = require('url');

function createWindow() {
  // create window
  const win = new BrowserWindow({ width: 1280, height: 800 });

  // load main html
  win.loadURL(format({
    protocol: 'http:',
    host: 'localhost:3000',
    pathname: '/',
    slashes: true
  }));
};

app.on('ready', createWindow);
