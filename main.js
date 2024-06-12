const {app, BrowserWindow, ipcMain} = require("electron");
const path = require("path");
const ipc = ipcMain;

const createWindow = () => {
    const splash = new BrowserWindow({
        width: 300,
        height: 350,
        transparent: true,
        frame: false,
        alwaysOnTop: true,
    });
    splash.setIcon(path.join(__dirname, "icon.png"));
    splash.loadFile(path.join(__dirname, "public/splash.html"));
    splash.center();
    const mainWindow = new BrowserWindow({
        width: 500,
        height: 500,
        autoHideMenuBar: true,
        maximizable: false,
        resizable: false,
        frame: false,
        show: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, "preload.js"),
        },
    })
    mainWindow.setIcon(path.join(__dirname, "icon.png"));
    mainWindow.loadFile('public/index.html')
    setTimeout(function () {
        splash.close();
        mainWindow.show();
    }, 3500);
    ipc.on("app/minimize", () => {
        mainWindow.minimize();
    });
    ipc.on("app/maximize", () => {
        //
    });
    ipc.on("app/quit", () => {
        app.quit();
    });
}
app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})