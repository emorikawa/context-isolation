import { app, BrowserWindow } from 'electron';
import path from 'path'

app.on('ready', () => {
  console.log("creating window");
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // and load the index.html of the app.
  mainWindow.loadURL(`http://localhost:5556/rawr`);
  mainWindow.webContents.openDevTools();
});
