console.log("---> In preload")
console.log(require)
const {shell, webFrame} = require('electron')
const path = require('path')
const fs = require('fs');

// Set a variable in the page before it loads
webFrame.executeJavaScript('window.foo = "foo";')

// The loaded page will not be able to access this, it is only available
// in this context
window.bar = 'bar'
window.secure = "PRELOAD SECURE"

document.addEventListener('DOMContentLoaded', () => {
  // Will log out 'undefined' since window.foo is only available in the main
  // context
  // console.log(window.foo)

  // Will log out 'bar' since window.bar is available in this context
  // console.log(window.bar)

  // console.log(['m1', 'm2'].map((x) => {console.log(x)}));
  console.log("--> Preload window");

  const db = JSON.parse(fs.readFileSync(path.join(__dirname, "db.config.json")).toString('utf-8'));
  console.log("---> Loaded DB");

  console.log(window.secure)

  document.body.addEventListener('click', (event) => {
    // Open clicked links externally
    if (event.target.tagName === 'A') {
      shell.openExternal(event.target.href)
      event.preventDefault()
    }
  })
})

window.addEventListener('message', (event) => {
  // Beep when the page requests it
  if (event.data === 'beep') {
    shell.beep()
  }
})
