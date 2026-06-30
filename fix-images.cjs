const fs = require('fs');
const path = require('path');
const dir = 'd:/OFFICE/admission-trident/admission/src/pages';
fs.readdirSync(dir).filter(f => f.endsWith('.jsx')).forEach(f => {
  let p = path.join(dir, f);
  let c = fs.readFileSync(p, 'utf8');
  let d = c.replace(/https:\/\/images\.unsplash\.com\/[^"]+/g, '/indian_students_hero.png');
  if (c !== d) {
    fs.writeFileSync(p, d);
    console.log('Updated ' + f);
  }
});
