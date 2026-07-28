const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const ribbonPremiumCss = `
    .ribbon-premium {
      color: #990a10;
      font-style: italic;
      font-weight: 700;
      font-size: 14px;
      position: absolute;
      bottom: 18px;
      right: 18px;
    }
`;

html = html.replace(/\.ribbon-premium\s*\{[\s\S]*?\}/, ribbonPremiumCss.trim());
fs.writeFileSync('index.html', html, 'utf8');
console.log('Moved to bottom right!');
