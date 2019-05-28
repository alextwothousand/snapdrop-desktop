const { app, BrowserWindow } = require('electron')

function createWindow() {
    let win = new BrowserWindow({ 
        width: 800, 
        height: 600,
        icon: 'snapdrop.ico'
    })

    win.on('closed', () => {
        win = null
    })

    win.loadURL('https://snapdrop.net')
    win.setMenuBarVisibility(false)
}

app.on('ready', createWindow)