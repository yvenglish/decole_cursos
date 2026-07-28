const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const ribbonPremiumCss = `
    .ribbon-premium {
      color: #990a10;
      font-style: italic;
      font-weight: 700;
      font-size: 14px;
      margin-bottom: 2px;
    }
`;

// Replace the entire .ribbon-premium block
html = html.replace(/\.ribbon-premium\s*\{[\s\S]*?\}/, ribbonPremiumCss.trim());

fs.writeFileSync('index.html', html, 'utf8');
console.log('Premium text simplified!');
