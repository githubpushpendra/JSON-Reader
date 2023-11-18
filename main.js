const { app, BrowserWindow } = require('electron');
const path = require('path');

app.on('ready', () => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.onload = () => {
    createJSONFile();
    const productData = readJSONFile();
    insertProductRows(10);
  };

  win.loadFile('index.html');
  win.on('closed', () => {
    win = null;
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
