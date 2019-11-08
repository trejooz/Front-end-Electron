const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow

const btnregistro = document.getElementById('btnregistro')
const btnunidades = document.getElementById('btnunidades')
const btnmantenimiento = document.getElementById('btnmantenimiento')


btnregistro.addEventListener('click', function (event) {
  const modalPath = path.join('file://', __dirname, './add.html')
  let win = new BrowserWindow({ width: 800, height: 600 })
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()
})

btnunidades.addEventListener('click', function (event) {
  const modalPath = path.join('file://', __dirname, './unidades.html')
  let win = new BrowserWindow({ width: 800, height: 600 })
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()
})

btnmantenimiento.addEventListener('click', function (event) {
  const modalPath = path.join('file://', __dirname, './mantenimiento.html')
  let win = new BrowserWindow({ width: 800, height: 600 })
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()
})
