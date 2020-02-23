const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
    let win = new BrowserWindow({ 
        width: 800, 
        height: 600,
        icon: 'snapdrop.ico'
    });

    win.on('closed', () => win = null);

    win.loadURL('https://snapdrop.net');
    win.setMenuBarVisibility(false);
});
