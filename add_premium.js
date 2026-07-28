const fs = require('fs');

function extractArray(content) {
    const startStr = "const starterCourses = [";
    const endStr = "];\n\n    let courses = starterCourses;";
    
    let startIndex = content.indexOf(startStr);
    let endIndex = content.indexOf(endStr);
    
    if (endIndex === -1) {
        // Try Windows line endings
        endIndex = content.indexOf("];\r\n\r\n    let courses = starterCourses;");
    }

    if (startIndex === -1 || endIndex === -1) {
        throw new Error("Could not find the array boundaries");
    }

    const arrayStr = content.substring(startIndex + "const starterCourses = ".length, endIndex + 1);
    const beforeStr = content.substring(0, startIndex + "const starterCourses = ".length);
    const afterStr = content.substring(endIndex + 1);
    
    return { arrayStr, beforeStr, afterStr };
}

function main() {
    let content = fs.readFileSync('index.html', 'utf8');
    const { arrayStr, beforeStr, afterStr } = extractArray(content);
    
    // Evaluate the array to get JS objects
    // Since the array might contain things we need to stringify back perfectly, we can't just JSON.stringify it because it contains functions/expressions if any? No, it's just objects.
    let starterCourses;
    try {
        starterCourses = eval("(" + arrayStr + ")");
    } catch (e) {
        console.error("Eval failed", e);
        return;
    }

    // Helper to find a course and its modules
    function getCourse(nameSnippet) {
        return starterCourses.find(c => c.name.toLowerCase().includes(nameSnippet.toLowerCase()));
    }

    // 1. Rename existing "Info Games Kids" to "Informática Kids"
    let infoGamesOld = getCourse("Info Games Kids");
    if (infoGamesOld) {
        infoGamesOld.name = "Informática Kids";
    }

    // 2. Add "Games Kids" (placeholder)
    const gamesKids = {
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
    };
    starterCourses.push(gamesKids);

    // 3. Create Premium courses
    let idCounter = 28;

    function addPremium(name, baseCourse1Name, baseCourse2Name, desc = "Formação completa unindo dois cursos para criar um profissional em T.") {
        let c1 = getCourse(baseCourse1Name);
        let c2 = getCourse(baseCourse2Name);
        if (!c1) console.log("Missing " + baseCourse1Name);
        if (!c2) console.log("Missing " + baseCourse2Name);
        
        if (c1 && c2) {
            let mods1 = c1.modules || [];
            let mods2 = c2.modules || [];
            // Merge modules avoiding duplicates if we want, or just concat
            let newMods = [...mods1, ...mods2];
            
            starterCourses.push({
                id: idCounter++,
                code: "PREM-" + idCounter,
                name: name,
                category: "Cursos Premium",
                level: "Avançado",
                isPremium: true, // Tag for badge
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
    addPremium("Gestor de RH", "Analista de Recursos Humanos", "Power BI"); // using Analista de Recursos Humanos as base
    addPremium("Gestor Digital Pro", "Pro Adm + IA", "Marketing Pro: Canva + IA");
    addPremium("Informática Master (Manutenção)", "Operador de Computador", "Montagem e Manutenção");

    // Convert back to string
    let newArrayStr = "[\n";
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

    let newContent = beforeStr + newArrayStr + afterStr;

    // 4. Update populateFilters to include "Cursos Premium"
    newContent = newContent.replace(
        'const categories = ["Gestão & Administração", "Informática", "Inglês", "Saúde"];',
        'const categories = ["Cursos Premium", "Gestão & Administração", "Informática", "Inglês", "Saúde"];'
    );

    fs.writeFileSync('index.html', newContent, 'utf8');
    console.log("Premium courses added!");
}

main();
