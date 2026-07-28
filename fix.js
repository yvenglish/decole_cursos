const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
const startStr = 'const starterCourses = [';
const endStr = '];\n\n    let courses = starterCourses;';
let startIndex = html.indexOf(startStr);
let endIndex = html.indexOf(endStr);
if (endIndex === -1) endIndex = html.indexOf('];\r\n\r\n    let courses = starterCourses;');

let arrayStr = html.substring(startIndex + startStr.length - 1, endIndex + 1);
let starterCourses = eval('(' + arrayStr + ')');

starterCourses.forEach(c => {
  if (c.isPremium || c.category === 'Cursos Premium') {
    c.category = 'Premium';
    c.level = 'Profissionalizante';
  }
});

// Helper to sum durations
function parseDuration(d) {
  if (!d) return 0;
  let match = d.match(/(\d+)/);
  return match ? parseInt(match[1]) : 0;
}

function updatePremium(name, base1, base2) {
  let p = starterCourses.find(c => c.name === name);
  let c1 = starterCourses.find(c => c.name.toLowerCase().includes(base1.toLowerCase()));
  let c2 = starterCourses.find(c => c.name.toLowerCase().includes(base2.toLowerCase()));
  if (p && c1 && c2) {
    let d1 = parseDuration(c1.duration);
    let d2 = parseDuration(c2.duration);
    let totalD = d1 + d2;
    p.duration = totalD > 0 ? totalD + ' meses' : 'A definir';
  }
}

updatePremium('Informática Master', 'Operador de Computador', 'Designer Gráfico');
updatePremium('Designer Pro', 'Designer Gráfico', 'Marketing Pro: Canva + IA');
updatePremium('Gestor Administrativo', 'Assistente Administrativo', 'Analista Exbi');
updatePremium('Gestor Projetizado', 'Assistente Administrativo', 'Gestão de Projetos');
updatePremium('Gestor Contábil', 'Assistente Contábil', 'Analista Exbi');
updatePremium('Gestor de RH', 'Analista de Recursos Humanos', 'Power BI');
updatePremium('Gestor Digital Pro', 'Pro Adm + IA', 'Marketing Pro: Canva + IA');
updatePremium('Informática Master (Manutenção)', 'Operador de Computador', 'Manutenção de Computadores');

// For Info Games Kids, duration is base Informática Kids + Games Kids. Games Kids has no duration defined, so maybe just 2 anos or 'A definir'.
let igk = starterCourses.find(c => c.name === 'Informática Kids'); // Was Info Games Kids
if (igk) igk.duration = '2 anos'; // 1 ano + 1 ano

let newArrayStr = '[\n';
starterCourses.forEach((c, idx) => {
    newArrayStr += '      {\n';
    for (let key in c) {
        let val = c[key];
        if (key === 'modules') {
            newArrayStr += '        modules: [\n';
            val.forEach((m, i) => {
                newArrayStr += `          ["${m[0]}", "${m[1]}"]${i < val.length - 1 ? ',' : ''}\n`;
            });
            newArrayStr += '        ]\n';
        } else if (typeof val === 'string') {
            newArrayStr += `        ${key}: ${JSON.stringify(val)},\n`;
        } else {
            newArrayStr += `        ${key}: ${val},\n`;
        }
    }
    newArrayStr += `      }${idx < starterCourses.length - 1 ? ',' : ''}\n`;
});
newArrayStr += '    ]';

let beforeStr = html.substring(0, startIndex + startStr.length - 1);
let afterStr = html.substring(endIndex + 1);
html = beforeStr + newArrayStr + afterStr;

fs.writeFileSync('index.html', html, 'utf8');
console.log('Premium courses updated successfully!');
