# snapdrop-desktop
A Snapdrop Desktop app written using Electron.

## How to:
* Windows: Download the .exe and run it, head to C:/Program Files(x86)/Snapdrop Desktop and run the snapdrop-desktop.exe and thats it!
    * Alternatively, you can unzip and run the file from there.<br>

* Linux: Unzip and `chmod +x snapdrop-desktop && ./snapdrop-desktop`. Thats it!<br>

* macOS: Not even sure to be honest. There's a .app file inside of the `snapdrop-desktop-darwin-x86.zip`.<br>

## How to run from source:
<strong>Ensure that you have NodeJS LTS installed.</strong><br>
`git clone https://github.com/infin1tyy/snapdrop-desktop.git` then `npm install` followed by `npm start`. That's it!

## How to build from source:
<strong>Ensure that you have NodeJS LTS installed.</strong><br>
`git clone https://github.com/infin1tyy/snapdrop-desktop.git` then `npm install`.<br>

* Windows: `npm run package-win`
* Linux: `npm run package-linux`
* macOS: `npm run package-mac`

## Credits:
* The NodeJS team.
* The Electron team.
* The people over at <a href="https://github.com/electron-userland/electron-packager">Electron Packager</a>.
* <a href="https://github.com/RobinLinus/snapdrop">RobinLinus</a> for Snapdrop.