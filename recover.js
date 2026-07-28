const fs = require('fs');

function main() {
    // We assume index.html is freshly restored from git
    let content = fs.readFileSync('index.html', 'utf8');

    // 1. Add CSS for ribbons
    const cssTarget = `
    .course-card {
      background: white;
      border: 1px solid rgba(7,29,58,.08);
      border-radius: 20px;
      padding: 18px;
      cursor: pointer;
      transition: .2s;
      position: relative;
      overflow: hidden;
    }
`;
    const cssReplacement = `
    .course-card {
      background: white;
      border: 1px solid rgba(7,29,58,.08);
      border-radius: 20px;
      padding: 18px;
      cursor: pointer;
      transition: .2s;
      position: relative;
      overflow: hidden;
    }

    .ribbon {
      position: absolute;
      bottom: 18px;
      right: -28px;
      background: #990a10;
      color: #fff;
      padding: 3px 25px;
      font-size: 0.55rem;
      font-weight: bold;
      transform: rotate(-45deg);
      box-shadow: 0 -2px 4px rgba(0,0,0,0.2);
      z-index: 10;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      text-align: center;
      width: 110px;
    }

    .ribbon-premium {
      position: absolute;
      bottom: 18px;
      right: -28px;
      background: linear-gradient(135deg, #2563eb, #1e40af);
      color: #fff;
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
    content = content.replace(cssTarget.trim(), cssReplacement.trim());

    // 2. Add bestSeller flags
    content = content.replace(
        'name: "Operador de Computador Completo",\r\n        category: "Informática",',
        'name: "Operador de Computador Completo",\r\n        bestSeller: 1,\r\n        category: "Informática",'
    ).replace(
        'name: "Operador de Computador Completo",\n        category: "Informática",',
        'name: "Operador de Computador Completo",\n        bestSeller: 1,\n        category: "Informática",'
    );

    content = content.replace(
        'name: "Inglês",\r\n        category: "Inglês",',
        'name: "Inglês",\r\n        bestSeller: 2,\r\n        category: "Inglês",'
    ).replace(
        'name: "Inglês",\n        category: "Inglês",',
        'name: "Inglês",\n        bestSeller: 2,\n        category: "Inglês",'
    );

    // 3. Extract array and add manual courses
    const startStr = "const starterCourses = [";
    const endStr = "];\n\n    let courses = starterCourses;";
    let endIndex = content.indexOf(endStr);
    if (endIndex === -1) endIndex = content.indexOf("];\r\n\r\n    let courses = starterCourses;");
    
    let startIndex = content.indexOf(startStr);
    let arrayStr = content.substring(startIndex + "const starterCourses = ".length, endIndex + 1);
    
    let starterCourses = eval("(" + arrayStr + ")");

    // Add Analista de Recursos Humanos
    starterCourses.push({
        id: 25,
        code: "ARH-001",
        name: "Analista de Recursos Humanos",
        category: "Gestão & Administração",
        level: "Avançado",
        duration: "16 meses",
        hours: null,
        audience: "Profissionais que desejam atuar na área de Recursos Humanos e Departamento Pessoal de forma completa.",
        description: "Formação completa em RH, desde rotinas e cálculos até gestão avançada de pessoas e Excel.",
        modules: [
          ["Rotinas Administrativas", "2 meses"],
          ["Matemática Financeira na HPC", "1 mês"],
          ["Assistente Contábil", "2,2 meses"],
          ["Gestão de Pessoas", "1 mês"],
          ["Excel Essencial", "1 mês"],
          ["Excel Intermediário", "1 mês"],
          ["Excel Avançado", "1 mês"],
          ["Departamento Pessoal", "5 meses"],
          ["Assistente de Recursos Humanos", "2 meses"]
        ]
    });

    // Add Inglês Kids
    starterCourses.push({
        id: 26,
        code: "ING-KIDS",
        name: "Inglês Kids",
        category: "Inglês",
        level: "Essencial",
        duration: "1 ano por módulo",
        hours: null,
        audience: "Inglês para crianças a partir de 9 anos.",
        description: "Curso de inglês voltado para o público infantil.",
        modules: [
          ["Kids I", "1 ano"],
          ["Kids II", "1 ano"],
          ["Kids III", "1 ano"],
          ["Kids IV", "1 ano"],
          ["Kids V", "1 ano"]
        ]
    });

    // Rename Info Games Kids
    let igk = starterCourses.find(c => c.name === "Info Games Kids");
    if (igk) igk.name = "Informática Kids";

    // Add Games Kids
    starterCourses.push({
        id: 27,
        code: "G-KIDS",
        name: "Games Kids",
        category: "Informática",
        level: "Essencial",
        duration: "A definir",
        hours: null,
        audience: "Crianças a partir de 9 anos.",
        description: "A definir",
        modules: []
    });

    // Add Premium Courses
    let idCounter = 28;
    function addPremium(name, baseCourse1Name, baseCourse2Name, desc = "Formação completa unindo dois cursos para criar um profissional em T.") {
        let c1 = starterCourses.find(c => c.name.toLowerCase().includes(baseCourse1Name.toLowerCase()));
        let c2 = starterCourses.find(c => c.name.toLowerCase().includes(baseCourse2Name.toLowerCase()));
        
        if (c1 && c2) {
            let newMods = [...(c1.modules || []), ...(c2.modules || [])];
            starterCourses.push({
                id: idCounter++,
                code: "PREM-" + idCounter,
                name: name,
                category: "Cursos Premium",
                level: "Avançado",
                isPremium: true,
                duration: "A definir",
                hours: (c1.hours || 0) + (c2.hours || 0),
                audience: "Alunos buscando formação completa.",
                description: desc,
                modules: newMods
            });
        }
    }

    addPremium("Info Games Kids", "Informática Kids", "Games Kids");
    addPremium("Informática Master", "Operador de Computador", "Designer Gráfico");
    addPremium("Designer Pro", "Designer Gráfico", "Marketing Pro: Canva + IA");
    addPremium("Gestor Administrativo", "Assistente Administrativo", "Analista Exbi");
    addPremium("Gestor Projetizado", "Assistente Administrativo", "Gestão de Projetos");
    addPremium("Gestor Contábil", "Assistente Contábil", "Analista Exbi");
    addPremium("Gestor de RH", "Analista de Recursos Humanos", "Power BI");
    addPremium("Gestor Digital Pro", "Pro Adm + IA", "Marketing Pro: Canva + IA");
    addPremium("Informática Master (Manutenção)", "Operador de Computador", "Manutenção de Computadores");

    // Convert array back to string
    let newArrayStr = "\n";
    starterCourses.forEach((c, idx) => {
        newArrayStr += "      {\n";
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
    newArrayStr += "    ]";

    let beforeStr = content.substring(0, startIndex + startStr.length);
    let afterStr = content.substring(endIndex + 1);
    content = beforeStr + newArrayStr + afterStr;

    // 4. Update filters and sorting logic
    content = content.replace(
        'const categories = ["Gestão & Administração", "Informática", "Inglês", "Saúde"];',
        'const categories = ["Cursos Premium", "Gestão & Administração", "Informática", "Inglês", "Saúde"];'
    );

    content = content.replace(
        '}).sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));',
        '}).sort((a, b) => {\n        if (a.bestSeller && !b.bestSeller) return -1;\n        if (!a.bestSeller && b.bestSeller) return 1;\n        if (a.bestSeller && b.bestSeller) return a.bestSeller - b.bestSeller;\n        return a.name.localeCompare(b.name, "pt-BR");\n      });'
    );

    // 5. Update renderCourses HTML
    content = content.replace(
        /(\$\{course\.bestSeller \? '<div class="ribbon">Mais vendido<\/div>' : ''\})/,
        "$1\n          ${course.isPremium ? '<div class=\"ribbon-premium\">Premium</div>' : ''}"
    );

    fs.writeFileSync('index.html', content, 'utf8');
    console.log("Recovery and updates complete!");
}

main();
