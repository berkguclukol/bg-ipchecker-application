const {ipcRenderer} = require('electron')
const ipc = ipcRenderer

const minimizeBtn = document.getElementById("minimizeBtn");
const maximizeBtn = document.getElementById("maximizeBtn");
const quitBtn = document.getElementById("quitBtn");

minimizeBtn.addEventListener("click", () => {
    ipc.send("app/minimize")
});
maximizeBtn.addEventListener("click", () => {
    ipc.send("app/maximize")
});
quitBtn.addEventListener("click", () => {
    ipc.send("app/quit")
});