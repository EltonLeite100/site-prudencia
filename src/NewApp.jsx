import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Anchor,
  HardHat,
  ShieldCheck,
  Globe,
  Users,
  FileText,
  CheckCircle,
  MapPin,
  Target,
  Award,
  Briefcase,
  Droplet,
  Zap,
  AlertTriangle,
  ArrowRight,
  Building2,
  Cog,
  Hammer,
  Package,
  Wrench,
  Clock,
  TrendingUp,
  Shield,
  Mail,
} from 'lucide-react';

const resolveAsset = (imgPath) => `${import.meta.env.BASE_URL}${imgPath.replace(/^\/+/, '')}`;

const layerStyle = (imgUrl) => ({
  backgroundImage: `url('${resolveAsset(imgUrl)}')`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundColor: '#0f172a',
  backgroundAttachment: 'fixed',
});

const portfolioSections = [
  {
    id: 'treinamentos',
    title: 'Treinamentos Normativos e Técnicos',
    icon: Users,
    groups: [
      {
        subtitle: 'Normas Regulamentadoras',
        items: [
          { name: 'NR-10 – Segurança em Eletricidade', desc: 'Capacitação para prevenção de choques, arcos elétricos e incêndios em instalações e serviços com eletricidade.' },
          { name: 'NR-20 – Inflamáveis e Combustíveis', desc: 'Boas práticas para manuseio, armazenagem e controle de produtos inflamáveis, reduzindo risco de explosões e vazamentos.' },
          { name: 'NR-33 – Espaços Confinados', desc: 'Formação para entrada, monitoramento atmosférico, operação segura e resgate em espaços confinados.' },
          { name: 'NR-35 – Trabalho em Altura', desc: 'Planejamento, sistemas de ancoragem, uso correto de EPI e técnicas de prevenção e resposta em atividades acima de 2 metros.' },
          { name: 'NR-37 – Segurança em Plataformas', desc: 'Treinamento voltado à rotina offshore, com foco em riscos de processo, evacuação e segurança operacional em plataformas.' },
          { name: 'NR-30 – Segurança Aquaviária', desc: 'Diretrizes de proteção e saúde para trabalhadores embarcados em operações marítimas e portuárias.' },
          { name: 'NR-34 – Indústria Naval', desc: 'Controle de riscos em construção, reparo e desmonte naval, incluindo soldagem, movimentação e espaços confinados.' },
          { name: 'NR-12 – Máquinas e Equipamentos', desc: 'Operação segura de máquinas, proteções coletivas e procedimentos para reduzir acidentes graves em equipamentos industriais.' },
        ],
      },
      {
        subtitle: 'Emergência e Resposta',
        items: [
          { name: 'Combate a incêndio', desc: 'Treinamento prático para avaliação de cenários, uso de extintores e técnicas de primeiro combate.' },
          { name: 'Abandono de área e evacuação', desc: 'Organização de rotas de fuga, pontos de encontro e liderança segura em situações críticas.' },
          { name: 'Primeiros socorros e APH', desc: 'Atendimento inicial à vítima até suporte especializado, com protocolos de estabilização e segurança da cena.' },
          { name: 'Resgate industrial e offshore', desc: 'Técnicas de salvamento em altura, espaços confinados e estruturas complexas em ambiente onshore e offshore.' },
          { name: 'Uso de equipamentos autônomos', desc: 'Operação segura de proteção respiratória em atmosferas perigosas e potencialmente fatais.' },
          { name: 'Brigada de emergência', desc: 'Formação de equipes internas para resposta coordenada em incêndio, evacuação e primeiros socorros.' },
        ],
      },
      {
        subtitle: 'Segurança Operacional',
        items: [
          { name: 'Movimentação de cargas', desc: 'Planejamento e execução segura para evitar quedas, colisões e esmagamentos.' },
          { name: 'Rigging e içamento', desc: 'Seleção de acessórios, cálculo de carga e plano de içamento para operações críticas.' },
          { name: 'LOTO', desc: 'Bloqueio e etiquetagem de energias perigosas para manutenção com zero partida inesperada.' },
          { name: 'Trabalhos a quente', desc: 'Controle de fontes de ignição, isolamento de área e prevenção de incêndio/explosão.' },
          { name: 'Atmosferas explosivas (ATEX)', desc: 'Identificação de zonas classificadas e medidas de controle para ambientes com risco de ignição.' },
          { name: 'Permissão de trabalho', desc: 'Processo formal de autorização com análise prévia de risco e definição de barreiras de segurança.' },
        ],
      },
    ],
  },
  {
    id: 'programas',
    title: 'Programas Legais e SST',
    icon: FileText,
    groups: [
      {
        subtitle: 'Documentação e Gestão Legal',
        items: [
          { name: 'PGR – Programa de Gerenciamento de Riscos', desc: 'Mapeia perigos, avalia riscos ocupacionais e define plano de ação preventivo.' },
          { name: 'PCMSO – Programa de Controle Médico', desc: 'Define monitoramento clínico dos trabalhadores conforme riscos identificados no ambiente.' },
          { name: 'LTCAT', desc: 'Laudo técnico das condições ambientais para enquadramentos previdenciários e aposentadoria especial.' },
          { name: 'Laudos de insalubridade e periculosidade', desc: 'Avaliação técnica para caracterização legal de adicionais e exposições críticas.' },
          { name: 'Inventário de riscos', desc: 'Base estruturada dos perigos existentes por função, setor e atividade.' },
          { name: 'APR / JSA', desc: 'Análise prévia de tarefas com identificação de perigos, consequências e controles antes da execução.' },
          { name: 'Procedimentos de segurança', desc: 'Padronização operacional para execução segura de atividades rotineiras e críticas.' },
          { name: 'Planos de emergência', desc: 'Estrutura de resposta com responsabilidades, recursos e fluxos de comunicação em crise.' },
          { name: 'Mapas de risco', desc: 'Representação visual dos riscos por área para apoio à prevenção e conscientização da equipe.' },
          { name: 'Gestão de CIPA e CIPLAT', desc: 'Suporte técnico para implantação, rotina de inspeção e ações preventivas das comissões.' },
          { name: 'eSocial SST', desc: 'Gestão e envio dos eventos de SST com consistência documental e conformidade legal.' },
        ],
      },
    ],
  },
  {
    id: 'auditorias',
    title: 'Auditorias e Conformidade',
    icon: ShieldCheck,
    groups: [
      {
        subtitle: 'Avaliações Técnicas',
        items: [
          { name: 'Auditorias de segurança do trabalho', desc: 'Verificação sistêmica de práticas, procedimentos e aderência operacional em SST.' },
          { name: 'Auditorias NR e legislação SST', desc: 'Checagem de conformidade normativa com plano de adequação por prioridade.' },
          { name: 'Auditorias offshore e marítimas', desc: 'Avaliação especializada para ambientes embarcados, plataformas e operações navais.' },
          { name: 'Inspeções técnicas', desc: 'Inspeções direcionadas em equipamentos, áreas e sistemas críticos de segurança.' },
          { name: 'Diagnóstico de conformidade legal', desc: 'Levantamento de gaps legais e trilha de regularização com foco em resultado.' },
          { name: 'Avaliação de riscos operacionais', desc: 'Leitura de campo para identificar desvios, exposições e vulnerabilidades reais.' },
          { name: 'Auditorias comportamentais', desc: 'Análise de cultura de segurança e comportamentos de risco para ações de melhoria.' },
          { name: 'Investigação de acidentes', desc: 'Identificação de causa raiz e plano corretivo para prevenir recorrência de incidentes.' },
        ],
      },
    ],
  },
  {
    id: 'consultoria',
    title: 'Consultoria Técnica em Segurança',
    icon: Target,
    groups: [
      {
        subtitle: 'Engenharia e Gestão de Riscos',
        items: [
          { name: 'Gerenciamento de riscos industriais', desc: 'Estruturação de processos para identificar, tratar e monitorar riscos críticos.' },
          { name: 'Análise de perigos operacionais', desc: 'Estudos técnicos de processo para antecipar falhas e aumentar confiabilidade.' },
          { name: 'HAZID / HAZOP (apoio técnico)', desc: 'Condução e suporte metodológico para identificação de perigos e operabilidade.' },
          { name: 'Sistemas de gestão de SMS', desc: 'Implantação e melhoria contínua de práticas de Saúde, Meio Ambiente e Segurança.' },
          { name: 'Procedimentos operacionais seguros', desc: 'Desenvolvimento de padrões técnicos que unem produtividade e prevenção.' },
          { name: 'Gestão de emergências', desc: 'Planejamento de resposta, cadeia de comando e prontidão operacional.' },
          { name: 'Implantação de cultura de segurança', desc: 'Programas para fortalecer comportamento seguro e liderança preventiva.' },
          { name: 'Planos de contingência', desc: 'Estratégias para continuidade do negócio diante de eventos críticos.' },
        ],
      },
    ],
  },
  {
    id: 'maodeobra',
    title: 'Fornecimento de Mão de Obra Técnica Especializada',
    icon: Briefcase,
    groups: [
      {
        subtitle: 'Modalidades',
        items: [
          { name: 'Cobertura de férias', desc: 'Reposição técnica para manter a operação sem perda de controle em SST.' },
          { name: 'Substituições temporárias', desc: 'Alocação rápida para afastamentos, licenças e demandas emergenciais.' },
          { name: 'Campanhas offshore', desc: 'Equipes preparadas para embarques e rotinas de campanha de curta e longa duração.' },
          { name: 'Paradas e manutenção', desc: 'Reforço especializado para períodos de alto risco operacional.' },
          { name: 'Start-up e comissionamento', desc: 'Apoio técnico para partida segura de plantas e sistemas novos.' },
          { name: 'Auditorias e inspeções', desc: 'Profissionais para suporte em verificações técnicas e acompanhamento de conformidade.' },
          { name: 'Projetos específicos', desc: 'Alocação sob medida para escopo técnico pontual com metas definidas.' },
        ],
      },
      {
        subtitle: 'Profissionais Disponibilizados',
        items: [
          { name: 'Técnicos de Segurança do Trabalho', desc: 'Atuação em campo com foco em prevenção, inspeção e orientação operacional.' },
          { name: 'Técnicos Offshore', desc: 'Profissionais com vivência embarcada e domínio de rotina marítima.' },
          { name: 'Supervisores de SMS', desc: 'Coordenação de equipes e indicadores de desempenho em segurança.' },
          { name: 'Instrutores de Segurança', desc: 'Condução de treinamentos normativos e operacionais com abordagem prática.' },
          { name: 'Brigadistas e resgatistas', desc: 'Resposta imediata em cenários de emergência e salvamento técnico.' },
          { name: 'Especialistas NR-33 / NR-35 / NR-37', desc: 'Equipe qualificada para atividades de maior criticidade em SST.' },
          { name: 'Profissionais de emergência', desc: 'Apoio direto à prontidão operacional e gestão de incidentes.' },
        ],
      },
      {
        subtitle: 'Diferenciais da Operação',
        items: [
          { name: 'Profissionais treinados e certificados', desc: 'Equipe atualizada conforme requisitos normativos e operacionais.' },
          { name: 'Experiência offshore e industrial', desc: 'Conhecimento prático em ambientes complexos e de risco elevado.' },
          { name: 'Integração rápida ao cliente', desc: 'Alocação ágil com aderência à cultura e ao processo da contratante.' },
          { name: 'Conformidade legal e SST', desc: 'Atuação alinhada às exigências legais e às melhores práticas de segurança.' },
          { name: 'Gestão pela PRUDÊNCIA', desc: 'Acompanhamento técnico e administrativo contínuo da mão de obra alocada.' },
          { name: 'Substituição garantida', desc: 'Reposição imediata para manter continuidade e desempenho da operação.' },
        ],
      },
    ],
  },
  {
    id: 'emergencia',
    title: 'Emergência e Resposta Operacional',
    icon: AlertTriangle,
    groups: [
      {
        subtitle: 'Prontidão e Resposta',
        items: [
          { name: 'Planos de abandono', desc: 'Estruturação de saída segura, pontos de encontro e tomada de decisão em crise.' },
          { name: 'Simulados de emergência', desc: 'Exercícios práticos para testar tempos de resposta e eficiência de protocolos.' },
          { name: 'Treinamento de equipes', desc: 'Capacitação contínua para consolidar técnica e coordenação em campo.' },
          { name: 'Estruturação de brigadas', desc: 'Dimensionamento, treinamento e organização operacional da brigada.' },
          { name: 'Resgate técnico', desc: 'Procedimentos de salvamento para cenários críticos industriais e offshore.' },
          { name: 'Coordenação de evacuação', desc: 'Comando das ações de retirada com foco em segurança coletiva.' },
          { name: 'Sistemas de comando de incidentes', desc: 'Modelo de gestão para controle tático, comunicação e recursos em emergência.' },
        ],
      },
    ],
  },
];

const HomePage = ({ navigate }) => (
  <section
    className="relative min-h-screen flex items-center justify-center"
    style={layerStyle('/home-offshore-hero.png')}
  >
    <div className="absolute inset-0 bg-black/20"></div>

    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center page-content-reveal" style={{ paddingTop: '80px' }}>
      <div className="flex flex-col items-center gap-8">
        <div className="bg-slate-400/65 backdrop-blur-md p-4 md:p-8 rounded-3xl shadow-2xl border border-white/25">
          <img
            src={resolveAsset('/LOGO NOVA PRUDÊNCIA.JPG-sem fundo.png')}
            alt="Logo Prudência Engenharia e Consultoria"
            className="w-auto object-contain mx-auto mb-3"
            style={{
              height: '550px',
              filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))',
              animation: 'fadeIn 0.8s ease-out'
            }}
          />
          <button
            onClick={() => navigate('sobre')}
            className="inline-flex items-center gap-3 bg-amber-500 text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-400 transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-amber-500/60"
            style={{
              animation: 'fadeIn 1s ease-out 0.5s both'
            }}
          >
            Conhecer a Empresa <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

const SobrePage = () => (
  <section
    className="relative min-h-screen pt-32 pb-20"
    style={layerStyle('/sobre-operacao-maritima.png')}
  >
    <div className="absolute inset-0 bg-black/60"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full page-content-reveal">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-white/20">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <span className="w-10 h-1 bg-amber-500 inline-block"></span>
            Quem Somos
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6 text-justify">
            A <strong>PRUDÊNCIA ENGENHARIA & CONSULTORIA</strong> é uma empresa brasileira especializada em Saúde,
            Segurança do Trabalho, Gerenciamento de Riscos e Capacitação Técnica para os setores industrial,
            portuário, offshore, petróleo e gás, construção e energia.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-6 text-justify">
            Com mais de <strong>30 anos de experiência</strong>, já capacitamos mais de <strong>50.000 profissionais</strong>{' '}
            no Brasil e no exterior, atuando em unidades marítimas, plataformas, navios, estaleiros, indústrias e grandes obras.
          </p>
          <div className="bg-slate-100 p-6 rounded-2xl border-l-4 border-amber-500 mt-8">
            <p className="text-slate-800 font-semibold italic text-justify">
              "O nosso diferencial está na integração entre engenharia, segurança operacional e treinamentos práticos baseados em cenários reais de emergência e alto risco."
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-white shadow-xl hover:-translate-y-1 transition duration-300">
            <div className="flex items-center gap-4 mb-3">
              <Target className="h-8 w-8 text-amber-500" />
              <h3 className="text-2xl font-bold">Missão</h3>
            </div>
            <p className="text-gray-300 text-justify">Promover a preservação da vida, a integridade das pessoas e a segurança operacional nas organizações por meio da engenharia, gestão de riscos e capacitação técnica especializada.</p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-white shadow-xl hover:-translate-y-1 transition duration-300">
            <div className="flex items-center gap-4 mb-3">
              <Globe className="h-8 w-8 text-amber-500" />
              <h3 className="text-2xl font-bold">Visão</h3>
            </div>
            <p className="text-gray-300 text-justify">Ser referência nacional e internacional em soluções integradas de segurança do trabalho, treinamentos normativos e fornecimento de mão de obra técnica especializada.</p>
          </div>

          <div className="bg-amber-500/90 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-slate-900 shadow-xl hover:-translate-y-1 transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <Award className="h-8 w-8" />
              <h3 className="text-2xl font-bold">Valores</h3>
            </div>
            <ul className="grid grid-cols-2 gap-3 text-sm font-bold">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div> Preservação da vida</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div> Ética e responsabilidade</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div> Excelência operacional</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div> Conformidade legal</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div> Inovação</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div> Compromisso</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const AtuacaoPage = () => {
  const [activeArea, setActiveArea] = useState(null);
  // Force rebuild: 2026-03-15

  const handleAreaClick = (title) => {
    console.log('Clicou em:', title);
    setActiveArea(title);
  };

  const areas = [
    { title: 'Petróleo e Gás', icon: Droplet },
    { title: 'Offshore e Marítimo', icon: Anchor },
    { title: 'Portuário', icon: MapPin },
    { title: 'Industrial', icon: Target },
    { title: 'Construção Civil', icon: HardHat },
    { title: 'Energia', icon: Zap },
    { title: 'Logística', icon: Briefcase },
    { title: 'Estaleiros e Obras', icon: ShieldCheck },
    { title: 'FPSO e Plataformas', icon: Anchor },
    { title: 'Infraestrutura', icon: HardHat },
  ];

  if (activeArea === 'Construção Civil') {
    return (
      <section className="relative min-h-screen pt-0 pb-20 animate-fadeIn bg-slate-900">
        <div className="relative h-[55vh] md:h-[65vh] bg-cover bg-center overflow-hidden" style={layerStyle('/construcao-civil-hero.png')}>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-900"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
            <div className="max-w-7xl mx-auto w-full">
              <button onClick={() => setActiveArea(null)} className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold mb-6 transition">← Voltar</button>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">Construção Civil</h1>
              <div className="w-24 h-1 bg-amber-500 mb-4"></div>
              <p className="text-xl text-amber-200 max-w-2xl">Soluções integradas de engenharia, consultoria e execução</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full page-content-reveal pt-12 mb-32">
          <div className="space-y-6 mb-20">
            <div>
              <h2 className="text-4xl font-semibold text-white mb-4">Capacidade Técnica</h2>
              <div className="w-12 h-1 bg-slate-300 rounded-full"></div>
            </div>
            <p className="text-base text-gray-300 leading-relaxed max-w-3xl">A PRUDÊNCIA Engenharia & Consultoria possui sólida experiência no desenvolvimento de projetos, consultoria técnica e execução de obras em infraestrutura, indústria, logística, energia, petróleo e gás.</p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-slate-700/50 text-slate-200 text-sm rounded-full font-medium">30+ Anos</span>
              <span className="px-3 py-1 bg-slate-700/50 text-slate-200 text-sm rounded-full font-medium">Estrutura Própria</span>
              <span className="px-3 py-1 bg-slate-700/50 text-slate-200 text-sm rounded-full font-medium">Mobilização Ágil</span>
            </div>
          </div>

          <div className="space-y-20">
            <section>
              <div className="mb-8">
                <h3 className="text-3xl font-semibold text-white mb-2">Estrutura Operacional</h3>
                <div className="w-12 h-1 bg-slate-300 rounded-full"></div>
              </div>
              <p className="text-gray-300 mb-12 max-w-3xl leading-relaxed">Estrutura própria com unidades modulares containerizadas para mobilização rápida de canteiros e frentes de trabalho.</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Building2, text: 'Construção Civil' },
                  { icon: Cog, text: 'Montagem Industrial' },
                  { icon: Hammer, text: 'Infraestrutura' },
                  { icon: Wrench, text: 'Manutenção' },
                  { icon: Package, text: 'Logística' },
                  { icon: Users, text: 'Serviços Técnicos' },
                ].map((item) => (
                  <div key={item.text} className="group flex flex-col items-start gap-4 pb-6 border-b border-slate-700 hover:border-slate-500 transition">
                    <div className="p-2 rounded-lg"><item.icon className="h-6 w-6 text-slate-400 group-hover:text-slate-200 transition" /></div>
                    <p className="font-medium text-gray-200 group-hover:text-white transition">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="pt-8">
              <div className="mb-12">
                <h3 className="text-4xl font-semibold text-white mb-3">Estrutura Containerizada</h3>
                <div className="w-12 h-1 bg-slate-300 rounded-full"></div>
              </div>
              <div className="relative rounded-xl overflow-hidden h-[600px]">
                <img src={resolveAsset('/equipamentos-oficina-tecnica.png')} alt="Equipamentos Oficina Técnica" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-800/50 to-transparent"></div>
                <div className="absolute inset-0 p-16 flex flex-col justify-between">
                  <div>
                    <h4 className="text-5xl font-bold text-white mb-4" style={{textShadow: '0 4px 12px rgba(0,0,0,0.6)'}}>Oficina Técnica</h4>
                    <p className="text-gray-100 text-base mb-8 leading-relaxed max-w-2xl font-bold" style={{textShadow: '0 2px 8px rgba(0,0,0,0.5)'}}>Equipamentos para soldagem, manutenção e montagem no local da obra.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-base text-gray-100 max-w-2xl">
                    {['Solda MIG/MAG', 'Compressores', 'Furadeiras', 'Esmerilhadeiras', 'Marteletes', 'Ferramentas Pneumáticas'].map((tool) => (
                      <div key={tool} className="flex items-center gap-3 font-bold" style={{textShadow: '0 2px 6px rgba(0,0,0,0.5)'}}><span className="text-slate-400 text-lg">→</span> {tool}</div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-8">
              <div className="mb-12">
                <h3 className="text-4xl font-semibold text-white mb-3">Mobilização & Áreas de Atuação</h3>
                <div className="w-12 h-1 bg-slate-300 rounded-full"></div>
              </div>
              <div className="space-y-10">
                <div className="relative rounded-xl overflow-hidden h-[500px]">
                  <img src={resolveAsset('/mobilizacao-canteiro.png')} alt="Mobilização de Canteiro" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-800/50 to-transparent"></div>
                  <div className="absolute inset-0 p-16 flex flex-col justify-center">
                    <h4 className="text-4xl font-bold text-white mb-6" style={{textShadow: '0 4px 12px rgba(0,0,0,0.6)'}}>Mobilização</h4>
                    <ul className="space-y-3 text-base text-gray-100 max-w-xl font-bold">
                      <li className="flex items-center gap-3" style={{textShadow: '0 2px 6px rgba(0,0,0,0.5)'}}><span className="text-slate-400 text-lg">→</span> Maior agilidade no início</li>
                      <li className="flex items-center gap-3" style={{textShadow: '0 2px 6px rgba(0,0,0,0.5)'}}><span className="text-slate-400 text-lg">→</span> Organização de campo</li>
                      <li className="flex items-center gap-3" style={{textShadow: '0 2px 6px rgba(0,0,0,0.5)'}}><span className="text-slate-400 text-lg">→</span> Autonomia operacional</li>
                      <li className="flex items-center gap-3" style={{textShadow: '0 2px 6px rgba(0,0,0,0.5)'}}><span className="text-slate-400 text-lg">→</span> Redução de custos</li>
                      <li className="flex items-center gap-3" style={{textShadow: '0 2px 6px rgba(0,0,0,0.5)'}}><span className="text-slate-400 text-lg">→</span> Eficiência de gestão</li>
                    </ul>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden h-[500px]">
                  <img src={resolveAsset('/equipe-construcao-civil.png')} alt="Equipe Construção Civil" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-800/50 to-transparent"></div>
                  <div className="absolute inset-0 p-16 flex flex-col justify-center">
                    <h4 className="text-4xl font-bold text-white mb-6" style={{textShadow: '0 4px 12px rgba(0,0,0,0.6)'}}>Áreas de Atuação</h4>
                    <div className="grid grid-cols-2 gap-4 text-base text-gray-100 max-w-xl font-bold">
                      {['Construção', 'Infraestrutura', 'Petróleo & Gás', 'Offshore', 'Portuário', 'Indústria', 'Energia', 'Logística', 'Estaleiros', 'FPSO'].map(area => (
                        <div key={area} className="flex items-center gap-3" style={{textShadow: '0 2px 6px rgba(0,0,0,0.5)'}}><span className="text-slate-400 text-lg">→</span> {area}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-8">
              <div className="mb-8">
                <h3 className="text-3xl font-semibold text-white mb-2">Por Que Escolher a Prudência?</h3>
                <div className="w-12 h-1 bg-slate-300 rounded-full"></div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {[
                  { icon: Clock, title: '30+ Anos', desc: 'Experiência consolidada' },
                  { icon: Building2, title: 'Estrutura Própria', desc: 'Containers operacionais' },
                  { icon: TrendingUp, title: 'Mobilização Ágil', desc: 'Rápida implantação' },
                  { icon: Users, title: 'Equipe Certificada', desc: 'Profissionais qualificados' },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    <item.icon className="h-6 w-6 text-slate-400" />
                    <div>
                      <h5 className="font-semibold text-white mb-2">{item.title}</h5>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="pt-8">
              <div className="mb-8">
                <h3 className="text-3xl font-semibold text-white mb-2">Compromisso com Excelência</h3>
                <div className="w-12 h-1 bg-slate-300 rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="pb-8 border-b border-slate-700 md:border-b-0 md:border-r md:pr-8">
                  <h5 className="text-lg font-semibold text-white mb-3">Segurança</h5>
                  <p className="text-gray-300 text-sm leading-relaxed">Preservação da vida e integridade como prioridade máxima em todas as operações.</p>
                </div>
                <div className="pb-8 border-b border-slate-700 md:border-b-0 md:border-r md:px-8">
                  <h5 className="text-lg font-semibold text-white mb-3">Qualidade</h5>
                  <p className="text-gray-300 text-sm leading-relaxed">Conformidade normativa e excelência técnica em cada projeto executado.</p>
                </div>
                <div className="md:pl-8">
                  <h5 className="text-lg font-semibold text-white mb-3">Eficiência</h5>
                  <p className="text-gray-300 text-sm leading-relaxed">Otimização de processos sem comprometer a segurança operacional.</p>
                </div>
              </div>
            </section>

            <section className="pt-8">
              <div className="mb-8">
                <h3 className="text-3xl font-semibold text-white mb-2">Projetos Estratégicos</h3>
                <div className="w-12 h-1 bg-slate-300 rounded-full"></div>
              </div>
              <p className="text-gray-300 text-sm mb-12">Fortalecimento institucional junto a investidores e empresas internacionais.</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {['Porto Seco / Hub Logístico', 'BR-101 Infraestrutura', 'Projetos Industriais', 'Treinamentos'].map(proj => (
                  <div key={proj} className="pb-4 border-b border-slate-700 text-gray-200 font-medium text-sm">{proj}</div>
                ))}
              </div>
            </section>

            <section className="pt-20 border-t border-slate-700">
              <div className="max-w-2xl mx-auto text-center">
                <h4 className="text-3xl font-semibold text-white mb-4">Pronto para transformar sua operação?</h4>
                <p className="text-gray-300 text-base mb-10 leading-relaxed">Entre em contato com nossos especialistas e descubra como a Prudência Engenharia pode otimizar segurança e eficiência na sua construção.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="flex items-center justify-center gap-2 bg-slate-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-600 transition">
                    <Mail className="h-5 w-5" />
                    Entre em Contato
                  </button>
                  <button className="flex items-center justify-center gap-2 border border-slate-600 text-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition">
                    <FileText className="h-5 w-5" />
                    Solicitar Proposta
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen pt-32 pb-20" style={layerStyle('/atuacao-porto-industrial.png')}>
      <div className="absolute inset-0 bg-slate-900/70"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center min-h-[calc(100vh-10rem)] page-content-reveal">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Onde Atuamos</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto font-light text-center">Especialistas em segurança para operações complexas e de alto risco.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <button key={index} type="button" onClick={() => handleAreaClick(area.title)} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center hover:bg-amber-500/90 group transition-all duration-300 cursor-pointer shadow-lg hover:shadow-amber-500/20 hover:-translate-y-2">
              <area.icon className="h-12 w-12 text-amber-400 group-hover:text-slate-900 mx-auto mb-4 transition duration-300" />
              <h3 className="text-lg font-bold text-white group-hover:text-slate-900 transition duration-300">{area.title}</h3>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicosPage = ({ navigate }) => (
  <section
    className="relative min-h-screen pt-32 pb-20"
    style={layerStyle('/servicos-industria-seguranca.png')}
  >
    <div className="absolute inset-0 bg-black/70"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full page-content-reveal">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Os Nossos Serviços</h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl border-t-8 border-blue-800">
          <Users className="h-12 w-12 text-amber-500 mb-6" />
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Treinamentos Normativos e Técnicos</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-blue-800 uppercase tracking-wider text-sm mb-3">Normas Regulamentadoras:</h4>
              <div className="flex flex-wrap gap-2">
                {['NR-10', 'NR-20', 'NR-33', 'NR-35', 'NR-37', 'NR-30', 'NR-34', 'NR-12'].map((nr) => (
                  <span key={nr} className="bg-slate-100 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-semibold">{nr}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold text-blue-800 uppercase tracking-wider text-sm mb-2">Segurança Operacional:</h4>
              <p className="text-slate-600 leading-relaxed text-sm text-justify">
                Movimentação de cargas, Rigging, LOTO, Trabalhos a quente, Atmosferas explosivas (ATEX), Permissão de trabalho.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl border-t-8 border-amber-500">
          <AlertTriangle className="h-12 w-12 text-blue-800 mb-6" />
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Emergência e Resposta Operacional</h3>
          <ul className="space-y-4 text-slate-700 font-medium">
            <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-amber-500" /> Combate a incêndio e Primeiros socorros</li>
            <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-amber-500" /> Abandono de área e evacuação</li>
            <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-amber-500" /> Resgate industrial e offshore</li>
            <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-amber-500" /> Estruturação de brigadas</li>
            <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-amber-500" /> Uso de equipamentos autônomos</li>
            <li className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-amber-500" /> Sistemas de comando de incidentes</li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl text-white border border-white/10 shadow-xl">
          <FileText className="h-10 w-10 text-amber-500 mb-6" />
          <h3 className="text-xl font-bold mb-4">Programas Legais e SST</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>• PGR / PCMSO / LTCAT</li>
            <li>• Laudos (insalubridade/periculosidade)</li>
            <li>• Inventário de riscos / APR</li>
            <li>• Procedimentos de segurança</li>
            <li>• Planos de emergência</li>
            <li>• Gestão de CIPA e eSocial SST</li>
          </ul>
        </div>

        <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl text-white border border-white/10 shadow-xl">
          <ShieldCheck className="h-10 w-10 text-amber-500 mb-6" />
          <h3 className="text-xl font-bold mb-4">Auditorias e Conformidade</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>• Auditorias de segurança do trabalho</li>
            <li>• Auditorias NR e legislação</li>
            <li>• Auditorias offshore e marítimas</li>
            <li>• Diagnóstico de conformidade legal</li>
            <li>• Investigação de acidentes</li>
          </ul>
        </div>

        <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl text-white border border-white/10 shadow-xl">
          <Target className="h-10 w-10 text-amber-500 mb-6" />
          <h3 className="text-xl font-bold mb-4">Consultoria Técnica</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>• Gerenciamento de riscos industriais</li>
            <li>• Análise de perigos (HAZID / HAZOP)</li>
            <li>• Sistemas de gestão de SMS</li>
            <li>• Procedimentos operacionais</li>
            <li>• Cultura de segurança e contingência</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-amber-500/90 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/20 shadow-2xl flex flex-col md:flex-row items-center gap-8">
        <Briefcase className="h-20 w-20 text-slate-900 flex-shrink-0" />
        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Mão de Obra Técnica Especializada</h3>
          <p className="text-slate-800 text-lg mb-4 font-medium text-justify">
            Fornecimento de profissionais para atuação temporária ou contínua em ambientes industriais e offshore.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Técnicos de Segurança', 'Supervisores SMS', 'Instrutores', 'Brigadistas', 'Especialistas NR'].map((prof) => (
              <span key={prof} className="bg-slate-900 text-white font-bold px-4 py-2 rounded-full text-sm">{prof}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => navigate('portfolio')}
          className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all"
        >
          Ver portfólio completo e significados técnicos
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  </section>
);

const ExperienciaPage = () => (
  <section
    className="relative min-h-screen flex items-center pt-32 pb-20"
    style={layerStyle('/experiencia-global-offshore.png')}
  >
    <div className="absolute inset-0 bg-blue-900/25 mix-blend-multiply"></div>
    <div className="absolute inset-0 bg-slate-900/40"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center page-content-reveal">
      <Globe className="h-24 w-24 text-amber-500 mx-auto mb-6" />
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experiência Internacional</h2>
      <div className="w-24 h-1 bg-amber-500 mx-auto mb-10"></div>

      <div className="max-w-4xl mx-auto bg-slate-900/60 backdrop-blur-xl p-10 md:p-16 rounded-3xl border border-white/10 shadow-2xl">
        <p className="text-2xl md:text-3xl text-white leading-relaxed mb-12 font-light text-center">
          Atendemos empresas em todo o Brasil e no exterior, inclusive em unidades marítimas e operações embarcadas.
          <br />
          <br />
          <span className="text-amber-400 font-medium">Experiência com equipas multinacionais e treinamentos bilíngues.</span>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center"><span className="font-bold text-white">América do Sul</span></div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center"><span className="font-bold text-white">América do Norte</span></div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center"><span className="font-bold text-white">Europa</span></div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center"><span className="font-bold text-white">África</span></div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center col-span-2 md:col-span-1"><span className="font-bold text-white">Oriente Médio</span></div>
        </div>
      </div>
    </div>
  </section>
);

const DiferenciaisPage = () => (
  <section
    className="relative min-h-screen pt-32 pb-20 flex items-center"
    style={layerStyle('/diferenciais-equipe-campo.png')}
  >
    <div className="absolute inset-0 bg-slate-900/45"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full page-content-reveal">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Os Nossos Diferenciais</h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { icon: Award, stat: '30+', text: 'Anos de Experiência', color: 'text-amber-400', border: 'border-amber-500/30' },
          { icon: Users, stat: '50.000+', text: 'Profissionais Capacitados', color: 'text-white', border: 'border-white/20' },
          { icon: Anchor, stat: 'Offshore Real', text: 'Atuação e Vivência', color: 'text-amber-400', border: 'border-amber-500/30' },
          { icon: HardHat, stat: 'Engenheiros', text: 'Instrutores Técnicos', color: 'text-white', border: 'border-white/20' },
          { icon: AlertTriangle, stat: 'Emergências', text: 'Experiência Real', color: 'text-amber-400', border: 'border-amber-500/30' },
          { icon: Target, stat: 'Prática', text: 'Treinamentos Realistas', color: 'text-white', border: 'border-white/20' },
          { icon: FileText, stat: 'Normas', text: 'Forte Base Legal', color: 'text-amber-400', border: 'border-amber-500/30' },
          { icon: ShieldCheck, stat: 'Credibilidade', text: 'Setor Industrial', color: 'text-white', border: 'border-white/20' },
        ].map((item, i) => (
          <div key={i} className={`bg-slate-900/60 backdrop-blur-md p-8 rounded-3xl border ${item.border} text-center shadow-xl hover:-translate-y-2 transition duration-300`}>
            <item.icon className={`h-16 w-16 mx-auto mb-6 ${item.color}`} />
            <h4 className="text-2xl font-bold text-white mb-2">{item.stat}</h4>
            <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContatoPage = () => (
  <section
    className="relative min-h-screen pt-32 pb-20 flex items-center"
    style={layerStyle('/contato-helideck-comunicacao.png')}
  >
    <div className="absolute inset-0 bg-slate-950/80"></div>

    <div className="relative z-10 max-w-5xl mx-auto px-4 w-full page-content-reveal">
      <div className="bg-slate-900/70 backdrop-blur-xl p-10 md:p-16 rounded-[2.5rem] border border-amber-500/30 shadow-2xl">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-8">
              <ShieldCheck className="h-14 w-14 text-amber-500" />
              <div className="flex flex-col">
                <span className="font-bold text-4xl text-white tracking-wider leading-none">PRUDÊNCIA</span>
                <span className="text-sm tracking-widest text-amber-400 uppercase leading-none mt-1.5">Engenharia & Consultoria</span>
              </div>
            </div>
            <p className="text-gray-300 text-xl mb-8 max-w-md mx-auto md:mx-0 font-light leading-relaxed text-justify">
              A excelência em segurança e operações complexas começa aqui. Fale com os nossos especialistas.
            </p>
            <div className="inline-flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full">
              <Globe className="h-6 w-6 text-amber-500 mr-3" />
              <span className="text-white font-semibold text-lg">Atendimento Global</span>
            </div>
          </div>

          <div className="flex-1 w-full bg-black/50 p-10 rounded-3xl border border-white/10">
            <h4 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Contactos Diretos</h4>
            <ul className="space-y-6">
              <li className="flex items-center gap-5">
                <div className="bg-amber-500/20 p-4 rounded-2xl">
                  <Users className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <span className="block font-bold text-white text-lg">Professor Eng. Elton Leite</span>
                  <span className="text-amber-400 text-sm font-medium">Diretor Técnico</span>
                </div>
              </li>
              <li className="flex items-center gap-5">
                <div className="bg-amber-500/20 p-4 rounded-2xl">
                  <MapPin className="h-6 w-6 text-amber-500" />
                </div>
                <span className="text-white font-medium">Brasil (Atendimento Nacional e Internacional)</span>
              </li>
              <li className="flex items-center gap-5">
                <div className="bg-amber-500/20 p-4 rounded-2xl">
                  <FileText className="h-6 w-6 text-amber-500" />
                </div>
                <a href="mailto:contato@prudenciaengenharia.com.br" className="text-white font-medium hover:text-amber-400 transition">contato@prudenciaengenharia.com.br</a>
              </li>
              <li className="flex items-center gap-5">
                <div className="bg-amber-500/20 p-4 rounded-2xl">
                  <Zap className="h-6 w-6 text-amber-500" />
                </div>
                <span className="text-white font-medium">+55 (00) 00000-0000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm text-gray-400">
          <p className="text-center">&copy; {new Date().getFullYear()} Prudência Engenharia & Consultoria. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  </section>
);

const PortfolioPage = () => (
  <section
    className="relative min-h-screen pt-32 pb-20"
    style={layerStyle('/servicos-industria-seguranca.png')}
  >
    <div className="absolute inset-0 bg-slate-950/85"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full page-content-reveal">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Portfólio Institucional Completo</h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        <p className="mt-6 text-lg text-gray-300 max-w-4xl mx-auto text-center">
          Conteúdo completo da PRUDÊNCIA ENGENHARIA & CONSULTORIA com explicações técnicas para cada frente de atuação.
        </p>
      </div>

      <div className="space-y-10">
        {portfolioSections.map((section) => (
          <article key={section.id} className="bg-white/95 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl overflow-hidden">
            <header className="bg-slate-900 px-8 py-6 flex items-center gap-4">
              <section.icon className="h-9 w-9 text-amber-400" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">{section.title}</h3>
            </header>

            <div className="p-8 md:p-10 space-y-8">
              {section.groups.map((group, idx) => (
                <div key={`${section.id}-${idx}`}>
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-4 border-l-4 border-amber-500 pl-4">
                    {group.subtitle}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {group.items.map((item, itemIdx) => (
                      <div key={`${section.id}-${idx}-${itemIdx}`} className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                        <h5 className="text-base font-bold text-slate-900 mb-2">{item.name}</h5>
                        <p className="text-slate-700 text-sm leading-relaxed text-justify">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const NewApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const navigate = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigate={navigate} />;
      case 'sobre':
        return <SobrePage />;
      case 'atuacao':
        return <AtuacaoPage />;
      case 'servicos':
        return <ServicosPage navigate={navigate} />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'experiencia':
        return <ExperienciaPage />;
      case 'diferenciais':
        return <DiferenciaisPage />;
      case 'contato':
        return <ContatoPage />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  const navLinkClass = (page) => `
    cursor-pointer font-medium transition-all duration-300
    ${currentPage === page ? 'text-amber-400 border-b-2 border-amber-400 pb-1' : 'text-white hover:text-amber-400'}
  `;

  return (
    <div className="bg-black font-sans text-slate-800 min-h-screen flex flex-col">
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${currentPage === 'home' ? 'backdrop-blur-0 bg-transparent border-transparent' : 'backdrop-blur-xl bg-slate-950/35 border-b border-white/10'} ${scrolled || currentPage !== 'home' ? 'shadow-2xl py-3' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center cursor-pointer group" onClick={() => navigate('home')}>
              <div className={`p-2 rounded-xl shadow-lg border transition duration-300 group-hover:scale-[1.02] ${currentPage === 'home' ? 'bg-slate-400/65 border-white/25' : 'bg-white/90 border-white/50'}`}>
                <img
                  src={resolveAsset('/LOGO NOVA PRUDÊNCIA.JPG-sem fundo.png')}
                  alt="Logo Prudência Engenharia e Consultoria"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <span onClick={() => navigate('sobre')} className={navLinkClass('sobre')}>Quem Somos</span>
              <span onClick={() => navigate('atuacao')} className={navLinkClass('atuacao')}>Atuação</span>
              <span onClick={() => navigate('servicos')} className={navLinkClass('servicos')}>Serviços</span>
              <span onClick={() => navigate('portfolio')} className={navLinkClass('portfolio')}>Portfólio</span>
              <span onClick={() => navigate('experiencia')} className={navLinkClass('experiencia')}>Global</span>
              <span onClick={() => navigate('diferenciais')} className={navLinkClass('diferenciais')}>Diferenciais</span>
              <span
                onClick={() => navigate('contato')}
                className={`cursor-pointer px-6 py-2.5 rounded-full font-bold transition-all duration-300 ${currentPage === 'contato' ? 'bg-amber-400 text-slate-900 shadow-lg shadow-amber-500/30' : 'bg-amber-500/90 text-slate-900 hover:bg-amber-400 hover:scale-105'}`}
              >
                Contato
              </span>
            </div>

            <div className="lg:hidden flex items-center">
              <button onClick={toggleMenu} className="text-white hover:text-amber-500 p-2 bg-white/5 rounded-lg">
                {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl absolute w-full top-full left-0 border-b border-white/10 text-white shadow-2xl py-4 px-6 flex flex-col gap-4">
            <span onClick={() => navigate('home')} className={`py-2 border-b border-white/5 ${currentPage === 'home' ? 'text-amber-400 font-bold' : ''}`}>Início</span>
            <span onClick={() => navigate('sobre')} className={`py-2 border-b border-white/5 ${currentPage === 'sobre' ? 'text-amber-400 font-bold' : ''}`}>Quem Somos</span>
            <span onClick={() => navigate('atuacao')} className={`py-2 border-b border-white/5 ${currentPage === 'atuacao' ? 'text-amber-400 font-bold' : ''}`}>Onde Atuamos</span>
            <span onClick={() => navigate('servicos')} className={`py-2 border-b border-white/5 ${currentPage === 'servicos' ? 'text-amber-400 font-bold' : ''}`}>Serviços</span>
            <span onClick={() => navigate('portfolio')} className={`py-2 border-b border-white/5 ${currentPage === 'portfolio' ? 'text-amber-400 font-bold' : ''}`}>Portfólio Completo</span>
            <span onClick={() => navigate('experiencia')} className={`py-2 border-b border-white/5 ${currentPage === 'experiencia' ? 'text-amber-400 font-bold' : ''}`}>Experiência Internacional</span>
            <span onClick={() => navigate('diferenciais')} className={`py-2 border-b border-white/5 ${currentPage === 'diferenciais' ? 'text-amber-400 font-bold' : ''}`}>Diferenciais</span>
            <span onClick={() => navigate('contato')} className="py-3 text-slate-900 bg-amber-500 font-bold text-center rounded-xl mt-2">Contato</span>
          </div>
        )}
      </nav>

      <main className="flex-grow relative">
        {renderPage()}
      </main>
    </div>
  );
};

export default NewApp;
