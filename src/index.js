import { app, BrowserWindow } from 'electron';
import path from 'path'

app.on('ready', () => {
  console.log("creating window");
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    frame: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // and load the index.html of the app.
  // mainWindow.loadURL(`https://trello.com/b/hxsqB6vx/deprecated-nylas-mail-roadmap`);
  mainWindow.loadURL('https://nylas.lightning.force.com/one/one.app')
  mainWindow.webContents.openDevTools();
});
