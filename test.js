
    const starterCourses = [
      {
        id: 1,
        code: "000070",
        name: "Informática para Melhor Idade",
        category: "Informática",
        level: "Essencial",
        duration: "10 meses",
        hours: 72,
        audience: "Pessoas da melhor idade que precisam aprender informática com calma, prática e segurança.",
        description: "Curso introdutório para desenvolver autonomia no computador, internet, aplicativos e ferramentas essenciais do Microsoft 365.",
        modules: [
          ["Introdução à Informática", "8h"],
          ["Internet, redes sociais e aplicativos", "20h"],
          ["Conectividade, dispositivos móveis", "8h"],
          ["Windows 11 Essencial", "12h"],
          ["Microsoft 365 - PowerPoint Essencial", "8h"],
          ["Microsoft 365 - Word Essencial", "8h"],
          ["Microsoft 365 - Excel Essencial", "8h"]
        ]
      },
      {
        id: 2,
        code: "000071",
        name: "Operador de Computador Completo",
        bestSeller: 1,
        category: "Informática",
        level: "Essencial",
        duration: "12 meses",
        hours: 90,
        audience: "Iniciantes, jovens em busca do primeiro emprego e adultos que precisam de base em informática.",
        description: "Curso completo para aprender informática do zero, com Windows, pacote Microsoft 365, Excel e aulas práticas integradas.",
        modules: [
          ["Introdução à Informática", "8h"],
          ["Windows 11 Essencial", "12h"],
          ["Microsoft 365 - PowerPoint Avançado", "8h"],
          ["Microsoft 365 - Word Avançado", "8h"],
          ["Microsoft 365 - Excel Essencial", "8h"],
          ["Microsoft 365 - Excel Intermediário", "8h"],
          ["Microsoft 365 - Excel Avançado", "8h"],
          ["Aulas práticas - Operador Completo", "30h"]
        ]
      },
      {
        id: 3,
        code: "000140",
        name: "Designer Gráfico",
        category: "Informática",
        level: "Profissionalizante",
        duration: "12 meses",
        hours: 92,
        audience: "Alunos que querem atuar com criação visual, peças gráficas, redes sociais e identidade visual.",
        description: "Formação prática em design gráfico com CorelDRAW e ferramentas Adobe para criação de materiais visuais profissionais.",
        modules: [
          ["CorelDRAW - Graphics Suite - Módulo I", "12h"],
          ["CorelDRAW - Graphics Suite - Módulo II", "16h"],
          ["Adobe Photoshop", "16h"],
          ["Adobe Photoshop - Módulo avançado", "16h"],
          ["Adobe Premiere", "16h"],
          ["Adobe Illustrator", "16h"]
        ]
      },
      {
        id: 4,
        code: "000092",
        name: "Desenvolvedor de Games",
        category: "Informática",
        level: "Profissionalizante",
        duration: "14 meses",
        hours: 111,
        audience: "Jovens e iniciantes que gostam de jogos e querem aprender lógica, criação e desenvolvimento de games.",
        description: "Trilha prática para introduzir o aluno ao universo de games, lógica, pixel art, Kodu, Minecraft e desenvolvimento 3D.",
        modules: [
          ["Lógica de Programação - Versão 1", "15h"],
          ["Pixel Art", "12h"],
          ["Kodu Game Lab", "8h"],
          ["Minecraft", "12h"],
          ["Desenvolvimento de Games", "24h"],
          ["Desenvolvimento de Games 3D", "24h"],
          ["Desenvolvimento de Games 3D - Módulo final", "16h"]
        ]
      },
      {
        id: 5,
        code: "ADM-001",
        name: "Assistente Administrativo",
        category: "Gestão & Atendimento",
        level: "Profissionalizante",
        duration: "12 meses",
        hours: null,
        audience: "Pessoas que querem trabalhar em rotinas administrativas, departamento pessoal, finanças e apoio empresarial.",
        description: "O profissional terá capacidade para gerenciar um departamento administrativo, realizar fechamentos fiscais e contábeis, operar folhas de pagamento complexas e criar ferramentas automatizadas no Excel.",
        modules: [
          ["Rotinas Administrativas", "2 meses"],
          ["Departamento Pessoal", "4,5 meses"],
          ["Excel Essencial", "1 mês"],
          ["Excel Intermediário", "1 mês"],
          ["Excel Avançado", "1 mês"],
          ["Assistente Contábil", "2 meses"]
        ]
      },
      {
        id: 6,
        code: "BI-001",
        name: "Analista Exbi",
        category: "Informática",
        level: "Avançado",
        duration: "10 meses",
        hours: null,
        audience: "Profissionais que querem trabalhar melhor com dados, relatórios, automação e tomada de decisão.",
        description: "Trilha de alta performance para transformar o aluno em especialista em dados e produtividade, unindo Excel Avançado/VBA, Power BI e IA com automação de fluxos.",
        modules: [
          ["Excel Essencial", "1 mês"],
          ["Excel Intermediário", "1 mês"],
          ["Excel Avançado", "1 mês"],
          ["Power BI Módulo I", "2 meses"],
          ["Power BI Módulo II", "2 meses"],
          ["Power BI Módulo III", "2 meses"],
          ["Automatização com IA", "1 mês"]
        ]
      },
      {
        id: 7,
        code: "CONT-001",
        name: "Assistente Contábil",
        category: "Gestão & Atendimento",
        level: "Profissionalizante",
        duration: "10 meses",
        hours: null,
        audience: "Alunos que querem atuar com apoio contábil, cobrança, finanças e apresentações executivas.",
        description: "Abordagem prática para dominar legislação tributária brasileira, ferramentas de alta performance, HP 12C e PowerPoint para apresentações executivas.",
        modules: [
          ["Assistente Contábil", "2 meses"],
          ["Crédito e Cobrança", "1,5 meses"],
          ["Matemática Financeira na HP12C", "1 mês"],
          ["PowerPoint Essencial", "1 mês"],
          ["PowerPoint Avançado", "1 mês"],
          ["Excel Essencial", "1 mês"],
          ["Excel Intermediário", "1 mês"],
          ["Excel Avançado", "1 mês"]
        ]
      },
      {
        id: 8,
        code: "GP-001",
        name: "Gestão de Projetos",
        category: "Gestão & Atendimento",
        level: "Profissionalizante",
        duration: "6 meses",
        hours: null,
        audience: "Profissionais que querem liderar projetos, organizar processos e transformar ideias em resultados.",
        description: "Curso para preparar o profissional para liderar iniciativas complexas, dominando planejamento detalhado, metodologias e ferramentas de gestão.",
        modules: [
          ["Fundamentos da Gestão de Projetos", "2 meses"],
          ["Metodologias de Gestão de Projetos", "2 meses"],
          ["Ferramentas para Gestão de Projetos", "2 meses"]
        ]
      },
      {
        id: 9,
        code: "IA-001",
        name: "IA na Prática Profissional",
        category: "Informática",
        level: "Avançado",
        duration: "4 meses",
        hours: null,
        audience: "Pessoas que querem usar IA no trabalho para ganhar produtividade em vendas, marketing e gestão.",
        description: "Curso prático para aplicar Inteligência Artificial nas principais áreas de uma empresa, delegando tarefas operacionais e focando em estratégia.",
        modules: [
          ["Automatização com IA", "1 mês"],
          ["Vendas com IA", "1 mês"],
          ["Marketing com IA", "1 mês"],
          ["Gestão com IA", "1 mês"]
        ]
      },
      {
        id: 10,
        code: "ADMIA-001",
        name: "Pro Adm + IA",
        category: "Informática",
        level: "Avançado",
        duration: "8 meses",
        hours: null,
        audience: "Alunos que querem atuar em rotinas administrativas modernas com apoio de IA.",
        description: "Formação administrativa com finanças, vendas, gestão, pessoas e Inteligência Artificial aplicada à produtividade profissional.",
        modules: [
          ["Rotinas Administrativas", "2 meses"],
          ["Auxiliar de Serviços Financeiros", "2 meses"],
          ["Vendas com IA", "1 mês"],
          ["Gestão com IA", "1 mês"],
          ["Gestão de Pessoas", "1 mês"]
        ]
      },
      {
        id: 13,
        code: "000244",
        name: "Administrativo Essencial - New",
        category: "Gestão & Atendimento",
        level: "Essencial",
        duration: "12 meses",
        hours: 92,
        audience: "Alunos que querem começar na área administrativa, com base em rotinas, contabilidade, RH, departamento pessoal e gestão de pessoas.",
        description: "Curso administrativo de base para preparar o aluno para rotinas essenciais de escritório e apoio empresarial.",
        modules: [
          ["Rotinas Administrativas - New", "16h"],
          ["Assistente Contábil - New", "16h"],
          ["Assistente de Recursos Humanos", "16h"],
          ["Departamento Pessoal", "36h"],
          ["Gestão de Pessoas", "8h"]
        ]
      },
      {
        id: 14,
        code: "000088",
        name: "Pacote Office",
        category: "Informática",
        level: "Essencial",
        duration: "12 meses",
        hours: 86,
        audience: "Alunos que já têm noções básicas de computador e precisam dominar ferramentas de escritório para estudo, trabalho e produtividade.",
        description: "Formação prática em Microsoft 365 e ferramentas Google, com foco em documentos, apresentações, planilhas e uso profissional do pacote Office.",
        modules: [
          ["Microsoft 365 - PowerPoint Essencial", "8h"],
          ["Microsoft 365 - PowerPoint Avançado", "8h"],
          ["Apresentações Google", "10h"],
          ["Microsoft 365 - Word Essencial", "8h"],
          ["Microsoft 365 - Word Avançado", "8h"],
          ["Documentos Google", "10h"],
          ["Microsoft 365 - Excel Essencial", "8h"],
          ["Microsoft 365 - Excel Intermediário", "8h"],
          ["Microsoft 365 - Excel Avançado", "8h"],
          ["Planilhas Google", "10h"]
        ]
      },
      {
        id: 15,
        code: "000019",
        name: "Informática Kids",
        category: "Informática",
        level: "Essencial",
        duration: "2 anos",
        hours: 64,
        audience: "Crianças e pré-adolescentes que querem aprender informática, lógica e criação de jogos de forma lúdica.",
        description: "Curso introdutório para unir informática, criatividade e jogos, desenvolvendo raciocínio lógico e familiaridade com tecnologia.",
        modules: [
          ["Introdução à Informática", "8h"],
          ["Roblox", "16h"],
          ["Minecraft", "12h"],
          ["Pixel Art", "12h"],
          ["Kodu Game Lab", "8h"]
        ]
      },
      {
        id: 16,
        code: "000010",
        name: "Montagem e Manutenção de Computadores",
        category: "Informática",
        level: "Profissionalizante",
        duration: "8 meses",
        hours: 64,
        audience: "Alunos que querem aprender manutenção, redes e suporte técnico para computadores.",
        description: "Curso prático para entender infraestrutura, redes, lógica, montagem e manutenção de computadores.",
        modules: [
          ["Redes - Cabeamento e Infraestrutura", "13h"],
          ["Redes - Tecnologias Wireless", "8h"],
          ["Redes - Lógica e Estruturação", "12h"],
          ["Montagem e Manutenção de Computadores", "16h"],
          ["Montagem Prática", "15h"]
        ]
      },
      {
        id: 17,
        code: "000201",
        name: "Power BI",
        category: "Informática",
        level: "Avançado",
        duration: "6 meses",
        hours: 48,
        audience: "Alunos e profissionais que querem criar dashboards, relatórios e análises visuais para tomada de decisão.",
        description: "Curso focado nos módulos essenciais de Microsoft Power BI, com construção de relatórios e visualização de dados.",
        modules: [
          ["Microsoft Power BI - Módulo I", "16h"],
          ["Microsoft Power BI - Módulo II", "16h"],
          ["Microsoft Power BI - Módulo III", "16h"]
        ]
      },
      {
        id: 18,
        code: "000260",
        name: "Rotinas Administrativas Essencial",
        category: "Gestão & Atendimento",
        level: "Essencial",
        duration: "6 meses",
        hours: 40,
        audience: "Alunos que querem começar na área administrativa e entender rotinas básicas de escritório, RH, contabilidade e gestão.",
        description: "Curso de entrada para a área administrativa, com módulos essenciais para apoio em empresas e escritórios.",
        modules: [
          ["Assistente de Recursos Humanos", "16h"],
          ["Assistente Contábil - New", "16h"],
          ["Gestão de Pessoas", "8h"]
        ]
      },
      {
        id: 19,
        code: "000224",
        name: "Técnicas de Vendas e Marketing Digital",
        category: "Gestão & Atendimento",
        level: "Profissionalizante",
        duration: "8 meses",
        hours: 62,
        audience: "Alunos que querem atuar com vendas, telemarketing, marketing digital e campanhas online.",
        description: "Curso voltado para técnicas comerciais e marketing digital, com prática em vendas, telemarketing, marketing e Google Ads.",
        modules: [
          ["Agente de Vendas", "16h"],
          ["Telemarketing", "12h"],
          ["Marketing Digital I", "16h"],
          ["Marketing Digital II", "12h"],
          ["Google Adwords", "6h"]
        ]
      },
      {
        id: 20,
        code: "000118",
        name: "Informática Premium - Operador de Computador + Manutenção",
        category: "Informática",
        level: "Profissionalizante",
        duration: "20 meses",
        hours: 156,
        audience: "Alunos que querem uma formação ampla em informática, pacote Office, redes e manutenção de computadores.",
        description: "Trilha completa que une Operador de Computador com fundamentos de redes e manutenção, formando uma base técnica mais robusta.",
        modules: [
          ["Introdução à Informática", "8h"],
          ["Windows 11 Essencial", "12h"],
          ["Windows 11 Avançado", "8h"],
          ["Microsoft 365 - Outlook Essencial", "8h"],
          ["Microsoft 365 - PowerPoint Essencial", "8h"],
          ["Microsoft 365 - PowerPoint Avançado", "8h"],
          ["Microsoft 365 - Word Essencial", "8h"],
          ["Microsoft 365 - Word Avançado", "8h"],
          ["Microsoft 365 - Excel Essencial", "8h"],
          ["Microsoft 365 - Excel Intermediário", "8h"],
          ["Microsoft 365 - Excel Avançado", "8h"],
          ["Redes - Tecnologias Wireless", "8h"],
          ["Redes - Lógica e Estruturação", "12h"],
          ["Redes - Cabeamento e Infraestrutura", "13h"],
          ["Montagem e Manutenção de Computadores", "16h"],
          ["Montagem Prática", "15h"]
        ]
      },
      {
        id: 21,
        code: "000061",
        name: "Gestor Administrativo Informatizado",
        category: "Gestão & Atendimento",
        level: "Profissionalizante",
        duration: "24 meses",
        hours: 179,
        audience: "Alunos que querem uma formação administrativa completa unindo informática, Office, RH, departamento pessoal, contabilidade e gestão.",
        description: "Curso avançado que une informática profissional com formação administrativa completa, preparando o aluno para atuar em múltiplos setores empresariais.",
        modules: [
          ["Introdução à Informática", "8h"],
          ["Windows 11 Essencial", "12h"],
          ["Windows 11 Avançado", "8h"],
          ["Microsoft 365 - Word Essencial", "8h"],
          ["Microsoft 365 - Word Avançado", "8h"],
          ["Microsoft 365 - PowerPoint Essencial", "8h"],
          ["Microsoft 365 - PowerPoint Avançado", "8h"],
          ["Microsoft 365 - Excel Essencial", "8h"],
          ["Microsoft 365 - Excel Intermediário", "8h"],
          ["Microsoft 365 - Excel Avançado", "8h"],
          ["Assistente de Recursos Humanos", "16h"],
          ["Assistente Contábil", "17h"],
          ["Gestão de Pessoas", "8h"],
          ["Departamento Pessoal", "36h"],
          ["Rotinas Administrativas", "16h"],
          ["Desenvolvimento Profissional", "2h"]
        ]
      },
      {
        id: 22,
        code: "000021",
        name: "Atendente de Farmácia",
        category: "Gestão & Atendimento",
        level: "Profissionalizante",
        duration: "8 meses",
        hours: 58,
        audience: "Alunos que querem trabalhar em farmácias, drogarias e atendimento ao público na área farmacêutica.",
        description: "Curso voltado para introduzir o aluno ao atendimento em farmácias, vendas, operação de caixa e comunicação com clientes.",
        modules: [
          ["Como Conquistar um Emprego", "5h"],
          ["Agente de Vendas", "16h"],
          ["Atendente de Farmácia", "13h"],
          ["Operador de Caixa", "12h"],
          ["Telemarketing", "12h"]
        ]
      },
      {
        id: 23,
        code: "0000222",
        name: "Marketing Pro: Canva + IA",
        category: "Informática",
        level: "Profissionalizante",
        duration: "8 meses",
        hours: 60,
        audience: "Alunos que querem desenvolver expertise em marketing digital, social media, design no Canva e marketing em geral.",
        description: "Curso voltado para introduzir o aluno ao marketing digital e a criação de conteúdo para a internet",
        modules: [
          ["Marketing Digital - Módulo 1", "12h"],
          ["Marketing Digital - Módulo 2", "16h"],
          ["IA Criativa", "8h"],
          ["Marketing com IA", "8h"],
          ["Design com Canva", "16h"]
        ]
      },
      {
        id: 24,
        code: "ING-001",
        name: "Inglês",
        bestSeller: 2,
        category: "Inglês",
        level: "Essencial",
        duration: "1 ano por módulo",
        hours: null,
        audience: "Pessoas que querem aprender e dominar o idioma inglês.",
        description: "Fazemos teste de nivelamento, turmas multinível, duas horas por semana.",
        modules: [
          ["Básico I", "1 ano"],
          ["Básico II", "1 ano"],
          ["Intermediário I", "1 ano"],
          ["Intermediário II", "1 ano"],
          ["Avançado I", "1 ano"],
          ["Avançado II", "1 ano"]
        ]
      },
      {
        id: 25,
        code: "ARH-001",
        name: "Analista de Recursos Humanos",
        category: "Gestão & Atendimento",
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
        id: 27,
        code: "G-KIDS",
        name: "Games Kids",
        category: "Informática",
        level: "Essencial",
        duration: "A definir",
        hours: null,
        audience: "Crianças a partir de 9 anos.",
        description: "A definir",
        modules: [
        ]
      },
      {
        id: 28,
        code: "PREM-29",
        name: "Info Games Kids",
        category: "Premium",
        level: "Profissionalizante",
        isPremium: true,
        duration: "A definir",
        hours: 64,
        audience: "Alunos buscando formação completa.",
        description: "Formação completa unindo dois cursos para criar um profissional em T.",
        modules: [
          ["Introdução à Informática", "8h"],
          ["Roblox", "16h"],
          ["Minecraft", "12h"],
          ["Pixel Art", "12h"],
          ["Kodu Game Lab", "8h"]
        ]
      },
      {
        id: 29,
        code: "PREM-30",
        name: "Informática Master",
        category: "Premium",
        level: "Profissionalizante",
        isPremium: true,
        duration: "24 meses",
        hours: 182,
        audience: "Alunos buscando formação completa.",
        description: "Formação completa unindo dois cursos para criar um profissional em T.",
        modules: [
          ["Introdução à Informática", "8h"],
          ["Windows 11 Essencial", "12h"],
          ["Microsoft 365 - PowerPoint Avançado", "8h"],
          ["Microsoft 365 - Word Avançado", "8h"],
          ["Microsoft 365 - Excel Essencial", "8h"],
          ["Microsoft 365 - Excel Intermediário", "8h"],
          ["Microsoft 365 - Excel Avançado", "8h"],
          ["Aulas práticas - Operador Completo", "30h"],
          ["CorelDRAW - Graphics Suite - Módulo I", "12h"],
          ["CorelDRAW - Graphics Suite - Módulo II", "16h"],
          ["Adobe Photoshop", "16h"],
          ["Adobe Photoshop - Módulo avançado", "16h"],
          ["Adobe Premiere", "16h"],
          ["Adobe Illustrator", "16h"]
        ]
      },
      {
        id: 30,
        code: "PREM-31",
        name: "Designer Pro",
        category: "Premium",
        level: "Profissionalizante",
        isPremium: true,
        duration: "20 meses",
        hours: 152,
        audience: "Alunos buscando formação completa.",
        description: "Formação completa unindo dois cursos para criar um profissional em T.",
        modules: [
          ["CorelDRAW - Graphics Suite - Módulo I", "12h"],
          ["CorelDRAW - Graphics Suite - Módulo II", "16h"],
          ["Adobe Photoshop", "16h"],
          ["Adobe Photoshop - Módulo avançado", "16h"],
          ["Adobe Premiere", "16h"],
          ["Adobe Illustrator", "16h"],
          ["Marketing Digital - Módulo 1", "12h"],
          ["Marketing Digital - Módulo 2", "16h"],
          ["IA Criativa", "8h"],
          ["Marketing com IA", "8h"],
          ["Design com Canva", "16h"]
        ]
      },
      {
        id: 31,
        code: "PREM-32",
        name: "Gestor Administrativo",
        category: "Premium",
        level: "Profissionalizante",
        isPremium: true,
        duration: "22 meses",
        hours: 0,
        audience: "Alunos buscando formação completa.",
        description: "Formação completa unindo dois cursos para criar um profissional em T.",
        modules: [
          ["Rotinas Administrativas", "2 meses"],
          ["Departamento Pessoal", "4,5 meses"],
          ["Excel Essencial", "1 mês"],
          ["Excel Intermediário", "1 mês"],
          ["Excel Avançado", "1 mês"],
          ["Assistente Contábil", "2 meses"],
          ["Excel Essencial", "1 mês"],
          ["Excel Intermediário", "1 mês"],
          ["Excel Avançado", "1 mês"],
          ["Power BI Módulo I", "2 meses"],
          ["Power BI Módulo II", "2 meses"],
          ["Power BI Módulo III", "2 meses"],
          ["Automatização com IA", "1 mês"]
        ]
      },
      {
        id: 32,
        code: "PREM-33",
        name: "Gestor Projetizado",
        category: "Premium",
        level: "Profissionalizante",
        isPremium: true,
        duration: "18 meses",
        hours: 0,
        audience: "Alunos buscando formação completa.",
        description: "Formação completa unindo dois cursos para criar um profissional em T.",
        modules: [
          ["Rotinas Administrativas", "2 meses"],
          ["Departamento Pessoal", "4,5 meses"],
          ["Excel Essencial", "1 mês"],
          ["Excel Intermediário", "1 mês"],
          ["Excel Avançado", "1 mês"],
          ["Assistente Contábil", "2 meses"],
          ["Fundamentos da Gestão de Projetos", "2 meses"],
          ["Metodologias de Gestão de Projetos", "2 meses"],
          ["Ferramentas para Gestão de Projetos", "2 meses"]
        ]
      },
      {
        id: 33,
        code: "PREM-34",
        name: "Gestor Contábil",
        category: "Premium",
        level: "Profissionalizante",
        isPremium: true,
        duration: "20 meses",
        hours: 0,
        audience: "Alunos buscando formação completa.",
        description: "Formação completa unindo dois cursos para criar um profissional em T.",
        modules: [
          ["Assistente Contábil", "2 meses"],
          ["Crédito e Cobrança", "1,5 meses"],
          ["Matemática Financeira na HP12C", "1 mês"],
          ["PowerPoint Essencial", "1 mês"],
          ["PowerPoint Avançado", "1 mês"],
          ["Excel Essencial", "1 mês"],
          ["Excel Intermediário", "1 mês"],
          ["Excel Avançado", "1 mês"],
          ["Excel Essencial", "1 mês"],
          ["Excel Intermediário", "1 mês"],
          ["Excel Avançado", "1 mês"],
          ["Power BI Módulo I", "2 meses"],
          ["Power BI Módulo II", "2 meses"],
          ["Power BI Módulo III", "2 meses"],
          ["Automatização com IA", "1 mês"]
        ]
      },
      {
        id: 34,
        code: "PREM-35",
        name: "Gestor de RH",
        category: "Premium",
        level: "Profissionalizante",
        isPremium: true,
        duration: "22 meses",
        hours: 48,
        audience: "Alunos buscando formação completa.",
        description: "Formação completa unindo dois cursos para criar um profissional em T.",
        modules: [
          ["Rotinas Administrativas", "2 meses"],
          ["Matemática Financeira na HPC", "1 mês"],
          ["Assistente Contábil", "2,2 meses"],
          ["Gestão de Pessoas", "1 mês"],
          ["Excel Essencial", "1 mês"],
          ["Excel Intermediário", "1 mês"],
          ["Excel Avançado", "1 mês"],
          ["Departamento Pessoal", "5 meses"],
          ["Assistente de Recursos Humanos", "2 meses"],
          ["Microsoft Power BI - Módulo I", "16h"],
          ["Microsoft Power BI - Módulo II", "16h"],
          ["Microsoft Power BI - Módulo III", "16h"]
        ]
      },
      {
        id: 35,
        code: "PREM-36",
        name: "Gestor Digital Pro",
        category: "Premium",
        level: "Profissionalizante",
        isPremium: true,
        duration: "16 meses",
        hours: 60,
        audience: "Alunos buscando formação completa.",
        description: "Formação completa unindo dois cursos para criar um profissional em T.",
        modules: [
          ["Rotinas Administrativas", "2 meses"],
          ["Auxiliar de Serviços Financeiros", "2 meses"],
          ["Vendas com IA", "1 mês"],
          ["Gestão com IA", "1 mês"],
          ["Gestão de Pessoas", "1 mês"],
          ["Marketing Digital - Módulo 1", "12h"],
          ["Marketing Digital - Módulo 2", "16h"],
          ["IA Criativa", "8h"],
          ["Marketing com IA", "8h"],
          ["Design com Canva", "16h"]
        ]
      },
      {
        id: 36,
        code: "PREM-37",
        name: "Informática Master (Manutenção)",
        category: "Premium",
        level: "Profissionalizante",
        isPremium: true,
        duration: "20 meses",
        hours: 154,
        audience: "Alunos buscando formação completa.",
        description: "Formação completa unindo dois cursos para criar um profissional em T.",
        modules: [
          ["Introdução à Informática", "8h"],
          ["Windows 11 Essencial", "12h"],
          ["Microsoft 365 - PowerPoint Avançado", "8h"],
          ["Microsoft 365 - Word Avançado", "8h"],
          ["Microsoft 365 - Excel Essencial", "8h"],
          ["Microsoft 365 - Excel Intermediário", "8h"],
          ["Microsoft 365 - Excel Avançado", "8h"],
          ["Aulas práticas - Operador Completo", "30h"],
          ["Redes - Cabeamento e Infraestrutura", "13h"],
          ["Redes - Tecnologias Wireless", "8h"],
          ["Redes - Lógica e Estruturação", "12h"],
          ["Montagem e Manutenção de Computadores", "16h"],
          ["Montagem Prática", "15h"]
        ]
      }
    ];

    let courses = starterCourses;
    let selectedId = courses[0]?.id;

    const search = document.getElementById("search");
    const categoryFilter = document.getElementById("categoryFilter");
    const levelFilter = document.getElementById("levelFilter");
    const coursesEl = document.getElementById("courses");
    const detailsEl = document.getElementById("details");

    function save() {
      localStorage.setItem("decoleCourses", JSON.stringify(courses));
    }

    function parseDuration(text) {
      const match = String(text).replace(",", ".").match(/[0-9]+([.][0-9]+)?/);
      return match ? Number(match[0]) : 0;
    }

    function monthsFromDuration(duration) {
      const months = Math.round(parseDuration(duration));
      return months || "A definir";
    }

    function populateFilters() {
      const categories = ["Gestão & Atendimento", "Informática", "Inglês", "Saúde"];
      const levels = ["Essencial", "Avançado", "Profissionalizante"];
      categoryFilter.innerHTML = '<option value="todos">Todas as categorias</option>' + categories.map(c => `<option value="${c}">${c}</option>`).join("");
      levelFilter.innerHTML = '<option value="todos">Todos os níveis</option>' + levels.map(l => `<option value="${l}">${l}</option>`).join("");
    }

    function filteredCourses() {
      const term = search.value.toLowerCase().trim();
      return courses.filter(course => {
        const text = [course.name, course.category, course.level, course.audience, course.description, course.modules.flat().join(" ")].join(" ").toLowerCase();
        const matchesSearch = !term || text.includes(term);
        const matchesCategory = categoryFilter.value === "todos" || course.category === categoryFilter.value;
        const matchesLevel = levelFilter.value === "todos" || course.level === levelFilter.value;
        return matchesSearch && matchesCategory && matchesLevel;
      }).sort((a, b) => {
        if (a.bestSeller && !b.bestSeller) return -1;
        if (!a.bestSeller && b.bestSeller) return 1;
        if (a.bestSeller && b.bestSeller) return a.bestSeller - b.bestSeller;
        return a.name.localeCompare(b.name, "pt-BR");
      });
    }


    function renderCourses() {
      const list = filteredCourses();
      if (!list.length) {
        coursesEl.innerHTML = '<div class="empty">Nenhum curso encontrado com esse filtro.</div>';
        detailsEl.innerHTML = '';
        return;
      }

      if (!list.some(c => c.id === selectedId)) selectedId = list[0].id;

      coursesEl.innerHTML = list.map(course => `
        <article class="course-card ${course.id === selectedId ? 'active' : ''}" onclick="selectCourse(${course.id})">
          ${course.bestSeller ? '<div class="ribbon">Mais vendido</div>' : ''}
          ${course.isPremium ? '<div class="ribbon-premium">Premium</div>' : ''}
          <div class="card-head">
            <div>
              <h3>${course.name}</h3>
              <div class="meta">
                <span>${course.category}</span>
                <span>${course.level || 'Nível a definir'}</span>
              </div>
            </div>
            <div class="pill">${course.duration}</div>
          </div>
          <p>${course.audience || course.description}</p>
        </article>
      `).join("");

      renderDetails();
    }

    function renderDetails() {
      const course = courses.find(c => c.id === selectedId) || courses[0];
      if (!course) return;

      detailsEl.innerHTML = `
        <button class="mobile-close" onclick="closeDetails()" aria-label="Fechar detalhes">×</button>
        <div class="print-header">
          <img class="print-logo" src="LOGO_SEM FUNDO(2).png" alt="Decole Cursos Profissionalizantes e Idiomas" />
          <div class="print-title">
            <small>Ficha de curso</small>
            <h1>${course.name}</h1>
          </div>
        </div>

        <div class="details-banner">
          <div class="code">Código ${course.code || 'sem código'}</div>
          <h2>${course.name}</h2>
          <div class="pill" style="display:inline-block;background:rgba(255,255,255,.14);color:white;">${course.category}</div>
        </div>
        <div class="details-content">
          <div class="detail-grid">
            <div class="mini"><small>Duração</small><strong>${course.duration}</strong></div>
            <div class="mini"><small>Nível</small><strong>${course.level || 'A definir'}</strong></div>
          </div>

          <h3 class="section-title">Para quem é</h3>
          <p>${course.audience || 'Público-alvo ainda não cadastrado.'}</p>

          <h3 class="section-title">Objetivo do curso</h3>
          <p>${course.description || 'Descrição ainda não cadastrada.'}</p>

          <h3 class="section-title">Módulos do curso</h3>
          <div class="modules">
            ${course.modules.map((module, index) => `
              <div class="module">
                <div class="num">${index + 1}</div>
                <strong>${module[0]}</strong>
                <small>${module[1] || ''}</small>
              </div>
            `).join("")}
          </div>

          <div class="modal-actions">
            <a class="btn whatsapp" href="https://wa.me/5521991143254?text=${encodeURIComponent('Olá, tenho interesse em saber mais sobre esse curso: ' + course.name)}" target="_blank" style="text-decoration: none; display: inline-block; text-align: center;">Quero esse</a>
          </div>
        </div>
      `;
    }

    function selectCourse(id) {
      selectedId = id;
      renderCourses();
      if (window.matchMedia("(max-width: 980px)").matches) {
        document.body.classList.add("details-open");
      }
    }

    function closeDetails() {
      document.body.classList.remove("details-open");
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeDetails();
    });



    search.addEventListener("input", renderCourses);
    categoryFilter.addEventListener("change", renderCourses);
    levelFilter.addEventListener("change", renderCourses);

    populateFilters();
    renderCourses();
  