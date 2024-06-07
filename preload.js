const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('osoLife', {
    platform: process.platform
})