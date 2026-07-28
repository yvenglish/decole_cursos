const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Find the .ribbon-premium block and replace the color and add italic
html = html.replace(
  /(\.ribbon-premium\s*\{[\s\S]*?)(color:\s*#fff;)([\s\S]*?\})/,
  '$1color: #990a10;\n      font-style: italic;\n      text-shadow: 1px 1px 0px #fff;$3'
);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Premium text color updated!');
