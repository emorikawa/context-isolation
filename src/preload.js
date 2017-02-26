const path = require('path')
const fs = require('fs');
document.addEventListener('DOMContentLoaded', () => {
  const db = JSON.parse(fs.readFileSync(path.join(__dirname, "db.config.json")).toString('utf-8'));
})
