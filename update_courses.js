const fs = require('fs');

function main() {
    let content = fs.readFileSync('index.html', 'utf8');

    // 1. Title
    content = content.replace('<title>Painel Interno Decole | Cursos</title>', '<title>Catálogo de Cursos | Decole</title>');
    
    // 2. Header UI
    content = content.replace('<strong>Painel interno</strong>', '<strong>Decole Cursos</strong>');
    
    // 3. Hero Title
    content = content.replace('<h1>Catálogo interno de cursos</h1>', '<h1>Catálogo de Cursos</h1>');
    
    // 4. Hero Subtitle
    content = content.replace('<p>Área simples para consultar e organizar informações dos cursos da Decole: duração, módulos, nível, material, público-alvo e observações comerciais.</p>', '<p>Conheça nossos cursos: duração, módulos, nível e público-alvo. Encontre a formação ideal para o seu futuro profissional.</p>');
    
    // 5. Remove material property from courses
    content = content.replace(/^\s*material:\s*".*",?\r?\n/gm, '');
    
    // 6. Remove material from details panel
    content = content.replace(/\s*<div class="mini"><small>Material<\/small><strong>\$\{course\.material \|\| 'A definir'\}<\/strong><\/div>/g, '');
    
    // 7. Remove material functions
    content = content.replace(/    function moneyFromMaterial\(material\) \{[\s\S]*?\}\r?\n\r?\n/g, '');
    content = content.replace(/    function installmentFromMaterial\(material\) \{[\s\S]*?\}\r?\n\r?\n/g, '');
    
    // 8. WhatsApp text update
    const oldWhatsapp = `    async function copyWhatsappText() {
      const course = courses.find(c => c.id === selectedId);
      if (!course) return;

      const durationMonths = monthsFromDuration(course.duration);
      const materialValue = moneyFromMaterial(course.material);
      const materialInstallments = installmentFromMaterial(course.material);
      const modules = course.modules.map(module => "- " + module[0] + ".").join("\\n");

      let text = course.name.toUpperCase() + "\\n\\n" +
        "TEMPO DE DURAÇÃO: " + course.duration + "\\n" +
        "CARGA HORÁRIA: " + (course.hours || "A definir") + " horas\\n\\n" +
        "MÓDULOS:\\n\\n" + modules + "\\n\\n" +
        "👉 Professores Qualificados\\n" +
        "👉 Material Próprio\\n" +
        "👉 Salas Climatizadas\\n" +
        "👉 Certificado Entregue no Final do Curso.\\n\\n";

      if (course.name.toLowerCase().includes("operador de computador")) {
        text += "Plano de pagamento (Operador de Computador)\\n\\n" +
          "Carnê:\\n\\n" +
          "* Plano Essencial - 2h semanais - 12 parcelas de R$ 160,00 (material em até 10 vezes)\\n" +
          "* Plano Intensivo - 4h semanais - 6 parcelas de R$ 280,00 (material em até 5 vezes)\\n\\n" +
          "Cartão:\\n" +
          "* Plano Total - até 6h semanais - R$ 1900,00 - parcelado em 10 vezes (material poderá ser parcelado em 10 vezes)\\n\\n" +
          "À Vista (dinheiro ou Pix):\\n\\n" +
          "* Plano Premium - até 6h semanais - R$ 1750,00 (sem cobrança de material)";
      } else {
        text += "Investimento\\n\\n" +
          "Matrícula: R$ 100,00\\n\\n" +
          "Material: R$ " + materialValue + (materialInstallments !== "A definir" ? " ou " + materialInstallments + " (no carnê)" : "") + "\\n\\n" +
          "Parcelas " + durationMonths + " x R$ 160,00 - pagando até a data de vencimento você ganha R$ 20,00 de desconto - ficando sua parcela a R$ 140,00";
      }

      try {`;

    const newWhatsapp = `    async function copyWhatsappText() {
      const course = courses.find(c => c.id === selectedId);
      if (!course) return;

      const durationMonths = monthsFromDuration(course.duration);
      const modules = course.modules.map(module => "- " + module[0] + ".").join("\\n");

      let text = course.name.toUpperCase() + "\\n\\n" +
        "TEMPO DE DURAÇÃO: " + course.duration + "\\n" +
        "CARGA HORÁRIA: " + (course.hours || "A definir") + " horas\\n\\n" +
        "MÓDULOS:\\n\\n" + modules + "\\n\\n" +
        "👉 Professores Qualificados\\n" +
        "👉 Material Próprio\\n" +
        "👉 Salas Climatizadas\\n" +
        "👉 Certificado Entregue no Final do Curso.";

      try {`;

    content = content.replace(oldWhatsapp, newWhatsapp);

    fs.writeFileSync('index.html', content, 'utf8');
    console.log('Update completed successfully.');
}

main();
