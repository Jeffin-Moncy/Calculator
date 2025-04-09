const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 300,  // temporary size
    height: 400, // temporary size
    resizable: false,
    autoHideMenuBar: true,
    icon: path.join(__dirname, 'icon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // remove if unused
    }
  });

  win.loadFile('index.html');

  // Once the content is ready, auto-fit the window
  win.webContents.on('did-finish-load', () => {
    win.webContents.executeJavaScript(`
      const { width, height } = document.documentElement.getBoundingClientRect();
      ({ width: Math.ceil(width), height: Math.ceil(height) });
    `).then(({ width, height }) => {
      win.setContentSize(width, height);
    });
  });
}

app.whenReady().then(createWindow);
