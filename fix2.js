const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

let target = 'const categories = ["Gestão & Atendimento", "Informática", "Inglês", "Saúde"];';
let replacement = 'const categories = [...new Set(courses.map(c => c.category))].sort();';
html = html.replace(target, replacement);

let target2 = 'const levels = ["Essencial", "Avançado", "Profissionalizante"];';
let replacement2 = 'const levels = [...new Set(courses.map(c => c.level))];';
html = html.replace(target2, replacement2);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Filters updated!');
