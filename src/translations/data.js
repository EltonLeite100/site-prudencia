import { 
  Users, FileText, ShieldCheck, Target, Briefcase, AlertTriangle, MapPin, 
  Droplet, Anchor, HardHat, Zap, Shield, Building2, Cog, Hammer, Package, Wrench, Clock, TrendingUp
} from 'lucide-react';

export const getPortfolioSections = (lang) => [
  {
    id: 'treinamentos',
    title: lang === 'pt' ? 'Treinamentos Normativos e Técnicos' : 'Capacitaciones Normativas y Técnicas',
    icon: Users,
    groups: [
      {
        subtitle: lang === 'pt' ? 'Soluções em Normas Regulamentadoras (NRs)' : 'Soluciones en Normas Regulatorias (NRs)',
        items: [
          { name: 'NR-01 – Gerenciamento de Riscos', desc: lang === 'pt' ? 'Identificação estrutural de perigos, elaboração do Inventário de Riscos e formulação integral do PGR da corporação.' : 'Identificación estructural de peligros, elaboración del Inventario de Riesgos y formulación integral del PGR de la corporación.' },
          { name: 'NR-05 – CIPA e CIPAMIN', desc: lang === 'pt' ? 'Implantação de comissões, organização do processo eleitoral, mapeamento local de riscos e capacitação oficial dos membros.' : 'Implantación de comisiones, organización del proceso electoral, mapeo local de riesgos y capacitación oficial de los miembros.' },
          { name: 'NR-06 – Gestão de EPIs', desc: lang === 'pt' ? 'Especificação técnica, estudos de luvas/vestimentas de alta performance (arco elétrico/químico) e gestão de entrega.' : 'Especificación técnica, estudios de guantes/vestimentas de alto rendimiento (arco eléctrico/químico) y gestión de entrega.' },
          { name: 'NR-09 – Avaliação Ambiental', desc: lang === 'pt' ? 'Dosimetrias e coleta instrumentada de agentes químicos, físicos e biológicos para atestar segurança das exposições.' : 'Dosimetrías y recolección instrumentada de agentes químicos, físicos y biológicos para atestiguar la seguridad de las exposiciones.' },
          { name: 'NR-10 – Eletricidade', desc: lang === 'pt' ? 'Gestão integral do risco elétrico: desde elaboração de prontuários (PIE) e inspeções estruturais, até treinamentos de segurança.' : 'Gestión integral del riesgo eléctrico: desde la elaboración de prontuarios (PIE) e inspecciones estructurales, hasta capacitaciones de seguridad.' },
          { name: 'NR-11 – Movimentação de Cargas', desc: lang === 'pt' ? 'Planos de içamento (Rigging), assessoria para transporte de materiais e treinamento de operações logísticas/guindastes.' : 'Planes de izaje (Rigging), asesoría para el transporte de materiales y capacitación de operaciones logísticas/grúas.' },
          { name: 'NR-12 – Máquinas e Equipamentos', desc: lang === 'pt' ? 'Apreciação de risco, emissão de laudos de engenharia, projetos de adequação física e instrução técnica de operação.' : 'Apreciación de riesgo, emisión de informes de ingeniería, proyectos de adecuación física e instrucción técnica de operación.' },
          { name: 'NR-13 – Caldeiras e Tubulações', desc: lang === 'pt' ? 'Inspeções de integridade, testes hidrostáticos e acompanhamento de válvulas de segurança em vasos de pressão.' : 'Inspecciones de integridad, pruebas hidrostáticas y seguimiento de válvulas de seguridad en recipientes de presión.' },
          { name: 'NR-15 e NR-16 – Periculosidade', desc: lang === 'pt' ? 'Consultoria técnica e formulações precisas para gestão e atenuantes do passivo trabalhista de graus de risco.' : 'Consultoría técnica y formulaciones precisas para la gestión y atenuantes del pasivo laboral de grados de riesgo.' },
          { name: 'NR-17 – Ergonomia Ocupacional', desc: lang === 'pt' ? 'Elaboração da Análise Ergonômica do Trabalho (AET) e readaptação de postos industriais para conforto e performance.' : 'Elaboración del Análisis Ergonómico del Trabajo (AET) y readaptación de puestos industriales para confort y rendimiento.' },
          { name: 'NR-18 – Condições na Construção Civil', desc: lang === 'pt' ? 'Organização estrutural e documentária, controle de gruas/elevadores e proteções da indústria de canteiros temporários.' : 'Organización estructural y documentaria, control de grúas/elevadores y protecciones de la industria de campamentos temporales.' },
          { name: 'NR-20 – Combustíveis e Inflamáveis', desc: lang === 'pt' ? 'Consultoria, elaboração da documentação legal e suporte tático para prevenir ocorrências em áreas de armazenamento.' : 'Consultoría, elaboración de documentación legal y soporte táctico para prevenir ocurrencias en áreas de almacenamiento.' },
          { name: 'NR-22 – Indústria da Mineração', desc: lang === 'pt' ? 'Adequação de SSPD, Saúde Ocupacional especializada e CIPAMIN nas frentes complexas de escavação e garimpo.' : 'Adecuación de SSPD, Salud Ocupacional especializada y CIPAMIN en los frentes complejos de excavación y minería.' },
          { name: 'NR-26 – Sinalização e Cores', desc: lang === 'pt' ? 'Mapeamento de rotas fotoluminescentes, demarcação física perimetral e diagramação de alertas no maquinário.' : 'Mapeo de rutas fotoluminiscentes, demarcación física perimetral y diagramación de alertas en la maquinaria.' },
          { name: 'NR-29 – Trabalho Portuário', desc: lang === 'pt' ? 'Blindagem de processos na operação terrestre de portos e integração segura para os Trabalhadores Avulsos.' : 'Blindaje de procesos en la operación terrestre de puertos e integración segura para los Trabajadores Eventuales.' },
          { name: 'NR-30 – Segurança Aquaviária', desc: lang === 'pt' ? 'Assessoria de saúde e segurança desenvolvida especificamente para a embarcação, trabalhadores e plataformas civis.' : 'Asesoría de salud y seguridad desarrollada específicamente para la embarcación, trabajadores y plataformas civiles.' },
          { name: 'NR-33 – Espaços Confinados', desc: lang === 'pt' ? 'Inventário de frentes, padronização de procedimentos (PET), monitoramento de ar e fornecimento de equipe de resgate.' : 'Inventario de frentes, estandarización de procedimientos (PET), monitoreo de aire y suministro de equipo de rescate.' },
          { name: 'NR-34 – Indústria Naval', desc: lang === 'pt' ? 'Gestão preventiva na montagem e desmonte em serviços a quente e manobras extremas em estaleiros de reparação.' : 'Gestión preventiva en el montaje y desmontaje en servicios en caliente y maniobras extremas en astilleros de reparación.' },
          { name: 'NR-35 – Trabalho em Altura', desc: lang === 'pt' ? 'Projetos de linhas de vida defintivas, sistemas de ancoragem, inspeção de fitas/harness e resgates dinâmicos escalados.' : 'Proyectos de líneas de vida definitivas, sistemas de anclaje, inspección de cintas/arnés y rescates dinámicos escalados.' },
          { name: 'NR-37 – Plataformas de Petróleo', desc: lang === 'pt' ? 'Adequação rigorosa do sistema offshore para aderir diretamente ao complexo marco normativo de Exploração e Produção (E&P).' : 'Adecuación rigurosa del sistema offshore para adherirse directamente al complejo marco normativo de Exploración y Producción (E&P).' },
        ],
      },
      {
        subtitle: lang === 'pt' ? 'Emergência e Resposta Operacional' : 'Emergencia y Respuesta Operativa',
        items: [
          { name: lang === 'pt' ? 'Respostas Estratégicas e Resgates' : 'Respuestas Estratégicas y Rescates', desc: lang === 'pt' ? 'Instrução tática abrangente na estruturação de Brigadas, suporte tático ao abandono, salvamento veicular e resgates críticos em altura/confinado.' : 'Instrucción táctica integral en la estructuración de Brigadas, soporte táctico al abandono, salvamento vehicular y rescates críticos en altura/confinado.' },
          { name: lang === 'pt' ? 'Segurança Operacional Específica' : 'Seguridad Operativa Específica', desc: lang === 'pt' ? 'Execução e implantação de movimentações (Rigging), controle total de energias letais (LOTO), emissão de permissões de trabalho locais e ATEX.' : 'Ejecución e implantación de movimientos (Rigging), control total de energías letales (LOTO), emisión de permisos de trabajo locales y ATEX.' },
        ],
      },
    ],
  },
  {
    id: 'programas',
    title: lang === 'pt' ? 'Programas Legais e SST' : 'Programas Legales y SST',
    icon: FileText,
    groups: [
      {
        subtitle: lang === 'pt' ? 'Engenharia e Gestão Contínua' : 'Ingeniería y Gestión Continua',
        items: [
          { name: lang === 'pt' ? 'Soluções Documentais e Laudos Legais' : 'Soluciones Documentales e Informes Legales', desc: lang === 'pt' ? 'Elaboração ponta a ponta e atualização do passivo de saúde e segurança, compreendendo PGR, PCMSO, LTCAT e aprovações complexas de insalubridade e periculosidade.' : 'Elaboración de punta a punta y actualización del pasivo de salud y seguridad, incluyendo PGR, PCMSO, LTCAT y aprobaciones complejas de insalubridad y peligrosidad.' },
          { name: lang === 'pt' ? 'Gestão Integrada eSocial' : 'Gestión Integrada eSocial', desc: lang === 'pt' ? 'Sustentação dos eventos obrigatórios do Governo Federal (eSocial SST), auditando a coerência das informações e prevenindo a empresa de multas e notificações fiscais.' : 'Sustentación de los eventos obligatorios del Gobierno Federal (eSocial SST), auditando la coherencia de la información y previniendo a la empresa de multas y notificaciones fiscales.' },
          { name: lang === 'pt' ? 'Planejamento Técnico e APRs' : 'Planificación Técnica y APRs', desc: lang === 'pt' ? 'Engenharia de campo na formulação de Análises Preliminares de Risco, confecção assertiva de Mapas de Risco, padronização de procedimentos (POPs) e desenvolvimento do corpo de CIPA/CIPLAT.' : 'Ingeniería de campo en la formulación de Análisis Preliminares de Riesgo, confección asertiva de Mapas de Riesgo, estandarización de procedimientos (POPs) y desarrollo del cuerpo de CIPA/CIPLAT.' },
        ],
      },
    ],
  },
  {
    id: 'auditorias',
    title: lang === 'pt' ? 'Auditorias e Conformidade' : 'Auditorías y Cumplimiento',
    icon: ShieldCheck,
    groups: [
      {
        subtitle: lang === 'pt' ? 'Processos Investigativos' : 'Procesos Investigativos',
        items: [
          { name: lang === 'pt' ? 'Inspeções e Avaliações Direcionadas' : 'Inspecciones y Evaluaciones Dirigidas', desc: lang === 'pt' ? 'Diagnóstico legal aprofundado Onshore, Offshore e Naval. Levamos a pente-fino instalações, equipamentos e compliance normativo do seu canteiro para garantir aderência corporativa e legal.' : 'Diagnóstico legal profundo Onshore, Offshore y Naval. Revisamos a fondo instalaciones, equipos y cumplimiento normativo de su sitio para garantizar la adherencia corporativa y legal.' },
          { name: lang === 'pt' ? 'Auditoria Comportamental e Investigação' : 'Auditoría de Comportamiento e Investigación', desc: lang === 'pt' ? 'Identificação preditiva de vulnerabilidades, auditorias de comportamento humano no campo e investigações metódicas de causa-raiz para evitar a repetição de sinistros.' : 'Identificación predictiva de vulnerabilidades, auditorías de comportamiento humano en el campo e investigaciones metódicas de causa raíz para evitar la repetición de siniestros.' },
        ],
      },
    ],
  },
  {
    id: 'consultoria',
    title: lang === 'pt' ? 'Consultoria Técnica em Segurança' : 'Consultoría Técnica en Seguridad',
    icon: Target,
    groups: [
      {
        subtitle: lang === 'pt' ? 'Estratégia e Sistemas de Gestão' : 'Estrategia y Sistemas de Gestión',
        items: [
          { name: lang === 'pt' ? 'Engenharia de Riscos e SMS' : 'Ingeniería de Riesgos y SMS', desc: lang === 'pt' ? 'Sustentação sênior do seu Sistema de Gestão. Assessoramos elaborações técnicas pesadas de engenharia como HAZID/HAZOP, modelagem de Planos de Contingência e implementação da sua cultura de segurança.' : 'Sustento senior de su Sistema de Gestión. Asesoramos elaboraciones técnicas pesadas de ingeniería como HAZID/HAZOP, modelado de Planes de Contingencia e implementación de su cultura de seguridad.' },
        ],
      },
    ],
  },
  {
    id: 'maodeobra',
    title: lang === 'pt' ? 'Fornecimento de Mão de Obra Técnica' : 'Suministro de Mano de Obra Técnica',
    icon: Briefcase,
    groups: [
      {
        subtitle: lang === 'pt' ? 'Atendimento Operacional' : 'Atención Operativa',
        items: [
          { name: lang === 'pt' ? 'Gestão Integrada e Alocação' : 'Gestión Integrada y Asignación', desc: lang === 'pt' ? 'Fornecimento ágil de Técnicos de Segurança, Supervisores SMS, Resgatistas e Especialistas. Suprimos desde coberturas até contratos contínuos de operação com reposições imediatas.' : 'Suministro ágil de Técnicos de Seguridad, Supervisores SMS, Rescatistas y Especialistas. Cubrimos desde coberturas hasta contratos continuos de operación con reposiciones inmediatas.' },
          { name: lang === 'pt' ? 'Paradas e Campanhas Offshore' : 'Paradas y Campañas Offshore', desc: lang === 'pt' ? 'Equipes táticas embarcadas e perfis comumente desafiadores de recrutar para paradas crônicas de plantas, comissionamento de navios/plataformas e auditorias emergenciais.' : 'Equipos tácticos embarcados y perfiles comúnmente difíciles de reclutar para paradas crónicas de plantas, comisionamiento de barcos/plataformas y auditorías de emergencia.' },
        ],
      },
    ],
  },
  {
    id: 'emergencia',
    title: lang === 'pt' ? 'Emergência e Resposta Operacional' : 'Emergencia y Respuesta Operativa',
    icon: AlertTriangle,
    groups: [
      {
        subtitle: lang === 'pt' ? 'Prontidão e Comando' : 'Preparación y Comando',
        items: [
          { name: lang === 'pt' ? 'Gestão Pró-Ativa de Crises' : 'Gestión Proactiva de Crisis', desc: lang === 'pt' ? 'Projetamos Sistemas de Comando de Incidentes eficientes. Realizamos mapeamento tático para abandono seguro da instalação e simulados realistas mensuráveis, formando times resilientes.' : 'Diseñamos Sistemas de Comando de Incidentes eficientes. Realizamos mapeo táctico para el abandono seguro de la instalación y simulacros realistas medibles, formando equipos resilientes.' },
        ],
      },
    ],
  },
  {
    id: 'sinalizacao',
    title: lang === 'pt' ? 'Sinalização de Segurança' : 'Señalización de Seguridad',
    icon: MapPin,
    groups: [
      {
        subtitle: lang === 'pt' ? 'Soluções Turnkey para Indústrias' : 'Soluciones Turnkey para Industrias',
        items: [
          { name: lang === 'pt' ? 'Projetos, Fornecimento e Execução Global' : 'Proyectos, Suministro y Ejecución Global', desc: lang === 'pt' ? 'Atendimento completo desde o mapa de riscos, desenvolvimento do projeto direcional nas normas em vigor, até a industrialização e execução correta em campo dos totens e painéis com materiais de máxima retenção fotoluminescente e durabilidade.' : 'Atención completa desde el mapa de riesgos, desarrollo del proyecto direccional según las normas vigentes, hasta la industrialización y ejecución correcta en el campo de tótems y paneles con materiales de máxima retención fotoluminiscente y durabilidad.' },
        ],
      },
    ],
  },
];

export const getAreas = (lang) => [
  { title: lang === 'pt' ? 'Petróleo e Gás' : 'Petróleo y Gas', icon: Droplet },
  { title: lang === 'pt' ? 'Offshore e Marítimo' : 'Offshore y Marítimo', icon: Anchor },
  { title: lang === 'pt' ? 'Portuário' : 'Portuario', icon: MapPin },
  { title: lang === 'pt' ? 'Industrial' : 'Industrial', icon: Target },
  { title: lang === 'pt' ? 'Construção Civil' : 'Construcción Civil', icon: HardHat },
  { title: lang === 'pt' ? 'Energia' : 'Energía', icon: Zap },
  { title: lang === 'pt' ? 'Logística' : 'Logística', icon: Briefcase },
  { title: lang === 'pt' ? 'Estaleiros e Obras' : 'Astilleros y Obras', icon: ShieldCheck },
  { title: lang === 'pt' ? 'FPSO e Plataformas' : 'FPSO y Plataformas', icon: Anchor },
  { title: lang === 'pt' ? 'Infraestrutura' : 'Infraestructura', icon: HardHat },
];
