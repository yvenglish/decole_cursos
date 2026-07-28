const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const ribbonPremiumCss = `
    .ribbon-premium {
      position: absolute;
      bottom: 18px;
      right: -28px;
      background: linear-gradient(135deg, #2563eb, #1e40af);
      color: #990a10;
      font-style: italic;
      text-shadow: 1px 1px 0px #fff;
      padding: 3px 25px;
      font-size: 0.55rem;
      font-weight: 800;
      transform: rotate(-45deg);
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      z-index: 10;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      text-align: center;
      width: 110px;
    }
`;

// Insert after .ribbon { ... }
let ribbonMatch = html.match(/\.ribbon\s*\{[\s\S]*?\}/);
if (ribbonMatch) {
  html = html.replace(ribbonMatch[0], ribbonMatch[0] + '\n' + ribbonPremiumCss);
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('CSS ribbon-premium added successfully!');
} else {
  console.log('Could not find .ribbon in index.html');
}
