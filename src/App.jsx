import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  HardHat,
  FileText,
  Users,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  CheckCircle2,
  Building2,
  BookOpen,
  Anchor,
  Globe,
  Target,
  LifeBuoy,
  Award,
  Flame,
  ArrowLeft,
  Zap,
  Activity
} from 'lucide-react';

// --- DADOS COMPLETOS DO PORTFÓLIO (SUBPÁGINAS) ---
const portfolioData = {
  treinamentos: {
    title: 'Treinamentos Normativos e Técnicos',
    icon: <BookOpen size={40} />,
    description: 'Capacitação completa e rigorosa para garantir a segurança, a conformidade legal e a excelência operacional da sua equipe, mesmo nos cenários mais desafiadores.',
    sections: [
      {
        subtitle: 'Normas Regulamentadoras',
        items: [
          { name: 'NR-10 – Segurança em Eletricidade', desc: 'Capacita profissionais que interagem direta ou indiretamente com instalações elétricas, prevenindo choques, arcos elétricos e incêndios.' },
          { name: 'NR-20 – Inflamáveis e Combustíveis', desc: 'Treinamento focado no manuseio, armazenamento e controle de líquidos e gases inflamáveis, essencial para evitar explosões e vazamentos.' },
          { name: 'NR-33 – Espaços Confinados', desc: 'Prepara trabalhadores e vigias para entrada, operação e resgate em locais com ventilação deficiente e risco de asfixia ou explosão.' },
          { name: 'NR-35 – Trabalho em Altura', desc: 'Obrigatório para atividades acima de 2 metros. Foca em planejamento, uso de EPIs específicos e técnicas de ancoragem e resgate.' },
          { name: 'NR-37 – Segurança em Plataformas', desc: 'Direcionado ao setor de Petróleo e Gás, aborda os riscos específicos e as medidas de controle em plataformas offshore.' },
          { name: 'NR-30 – Segurança Aquaviária', desc: 'Capacitação voltada para a proteção e saúde dos trabalhadores embarcados em embarcações comerciais e de apoio.' },
          { name: 'NR-34 – Indústria Naval', desc: 'Estabelece diretrizes para atividades de construção, reparo e desmonte naval, garantindo a segurança nos estaleiros.' },
          { name: 'NR-12 – Máquinas e Equipamentos', desc: 'Instrui sobre a operação segura, manutenção e dispositivos de proteção em maquinários industriais, prevenindo amputações e acidentes graves.' },
        ]
      },
      {
        subtitle: 'Emergência e Resposta',
        items: [
          { name: 'Combate a Incêndio', desc: 'Técnicas teóricas e práticas de uso de extintores, mangueiras e táticas de extinção em fase inicial.' },
          { name: 'Abandono de Área e Evacuação', desc: 'Treinamento para liderar rotas de fuga e evacuação ordenada em caso de sinistros, evitando pânico.' },
          { name: 'Primeiros Socorros e APH', desc: 'Atendimento Pré-Hospitalar para estabilizar vítimas de traumas, paradas cardiorrespiratórias e lesões até a chegada de socorro médico.' },
          { name: 'Resgate Industrial e Offshore', desc: 'Técnicas avançadas de salvamento em ambientes complexos, estruturas elevadas e áreas restritas.' },
          { name: 'Uso de Equipamentos Autônomos', desc: 'Treinamento para uso correto de EPR (Equipamento de Proteção Respiratória) em atmosferas IPVS (Imediatamente Perigosas à Vida ou Saúde).' },
          { name: 'Brigada de Emergência', desc: 'Formação completa da equipe interna de resposta a emergências, englobando fogo, resgate e primeiros socorros.' },
        ]
      },
      {
        subtitle: 'Segurança Operacional',
        items: [
          { name: 'Movimentação de Cargas', desc: 'Procedimentos seguros para elevação e transporte de cargas pesadas, prevenindo quedas e esmagamentos.' },
          { name: 'Rigging e Içamento', desc: 'Cálculos, planejamento e execução de içamentos complexos utilizando guindastes e acessórios adequados.' },
          { name: 'LOTO (Lockout/Tagout)', desc: 'Bloqueio e etiquetagem de energias perigosas durante manutenções, garantindo que máquinas não sejam ligadas acidentalmente.' },
          { name: 'Trabalhos a Quente', desc: 'Prevenção de incêndios e explosões durante atividades de solda, corte ou uso de chamas abertas.' },
          { name: 'Atmosferas Explosivas (ATEX)', desc: 'Segurança em áreas classificadas com presença de gases ou poeiras combustíveis, exigindo equipamentos e procedimentos blindados.' },
          { name: 'Permissão de Trabalho (PT)', desc: 'Treinamento na emissão e controle do documento que autoriza atividades de alto risco após avaliação criteriosa.' },
        ]
      }
    ]
  },
  programas: {
    title: 'Programas Legais e SST',
    icon: <FileText size={40} />,
    description: 'Elaboração e gestão de toda a documentação obrigatória por lei, blindando sua empresa contra passivos trabalhistas e multas.',
    sections: [
      {
        subtitle: 'Documentação e Laudos',
        items: [
          { name: 'PGR – Programa de Gerenciamento de Riscos', desc: 'O coração da gestão de SST. Identifica, avalia e propõe planos de ação para mitigar todos os riscos ocupacionais da empresa (substituto do antigo PPRA).' },
          { name: 'PCMSO – Programa de Controle Médico', desc: 'Acompanhamento da saúde dos trabalhadores, definindo exames admissionais, periódicos e demissionais com base nos riscos do PGR.' },
          { name: 'LTCAT', desc: 'Laudo Técnico das Condições Ambientais de Trabalho. Documento fundamental para comprovar a necessidade ou não de aposentadoria especial.' },
          { name: 'Laudos de Insalubridade e Periculosidade', desc: 'Avaliações técnicas e quantitativas para determinar legalmente se os funcionários têm direito a adicionais no salário devido à exposição a agentes nocivos ou riscos iminentes.' },
          { name: 'Inventário de Riscos', desc: 'Mapeamento detalhado e quantificação de todos os perigos presentes no ambiente de trabalho.' },
        ]
      },
      {
        subtitle: 'Gestão e Procedimentos',
        items: [
          { name: 'APR / JSA (Análise Preliminar de Risco)', desc: 'Estudos feitos antes do início de atividades não rotineiras para prever acidentes e estabelecer barreiras.' },
          { name: 'Procedimentos de Segurança', desc: 'Criação de manuais operacionais (POP) com o passo a passo seguro para execução de tarefas críticas.' },
          { name: 'Planos de Emergência', desc: 'Documentação estratégica que define rotas, responsabilidades e ações imediatas em cenários de crise.' },
          { name: 'Mapas de Risco', desc: 'Representação gráfica e visual dos riscos presentes nos setores da empresa, obrigatório e de fácil compreensão para os funcionários.' },
          { name: 'Gestão de CIPA e CIPLAT', desc: 'Consultoria para formação, treinamento e acompanhamento da Comissão Interna de Prevenção de Acidentes (CIPA) e sua vertente em plataformas (CIPLAT).' },
          { name: 'eSocial SST', desc: 'Envio correto, dentro do prazo e auditoria dos eventos S-2210 (CAT), S-2220 (Saúde) e S-2240 (Riscos) para o sistema do Governo Federal.' },
        ]
      }
    ]
  },
  auditorias: {
    title: 'Auditorias e Conformidade',
    icon: <ShieldCheck size={40} />,
    description: 'Diagnósticos precisos para garantir que sua operação esteja alinhada com as melhores práticas globais e 100% aderente à legislação.',
    sections: [
      {
        subtitle: 'Tipos de Auditorias',
        items: [
          { name: 'Auditorias de Segurança do Trabalho', desc: 'Avaliação geral do sistema de gestão de SMS da empresa para identificar falhas processuais ou físicas.' },
          { name: 'Auditorias NR e Legislação SST', desc: 'Inspeção focada no cumprimento estrito dos itens das Normas Regulamentadoras do Ministério do Trabalho.' },
          { name: 'Auditorias Offshore e Marítimas', desc: 'Inspeções rigorosas em plataformas e navios, atendendo a normativas da Marinha, ANP e regulamentações internacionais.' },
          { name: 'Inspeções Técnicas', desc: 'Verificações pontuais em equipamentos, EPIs, EPCs e instalações físicas.' },
          { name: 'Diagnóstico de Conformidade Legal', desc: 'Levantamento da situação atual da empresa (Gap Analysis) em relação ao que a lei exige, com plano de adequação.' },
          { name: 'Avaliação de Riscos Operacionais', desc: 'Auditoria com foco no chão de fábrica e na operação real, verificando como as tarefas são efetivamente executadas.' },
          { name: 'Auditorias Comportamentais', desc: 'Focada no comportamento humano, observa atos inseguros e cultura organizacional, base para programas de segurança baseada em comportamento (BBS).' },
          { name: 'Investigação de Acidentes', desc: 'Aplicação de metodologias (como Árvore de Causas ou Ishikawa) para descobrir a causa-raiz de acidentes e evitar reincidências.' },
        ]
      }
    ]
  },
  consultoria: {
    title: 'Consultoria Técnica em Segurança',
    icon: <Activity size={40} />,
    description: 'Engenharia de ponta e soluções sob medida para desafios complexos em ambientes industriais e offshore.',
    sections: [
      {
        subtitle: 'Engenharia e Gestão',
        items: [
          { name: 'Gerenciamento de Riscos Industriais', desc: 'Implementação de processos sistêmicos para identificar e controlar riscos inerentes à atividade fim da indústria.' },
          { name: 'Análise de Perigos Operacionais', desc: 'Estudos profundos de processos e fluxos para antecipar falhas.' },
          { name: 'HAZID / HAZOP (Apoio Técnico)', desc: 'Suporte em metodologias de identificação de perigos (HAZID) e análises de operabilidade (HAZOP) em projetos de engenharia complexos.' },
          { name: 'Sistemas de Gestão de SMS', desc: 'Estruturação e acompanhamento de sistemas de Saúde, Meio Ambiente e Segurança (frequentemente baseados em ISO 45001 e ISO 14001).' },
          { name: 'Procedimentos Operacionais Seguros', desc: 'Redação técnica de padrões operacionais que alinham produtividade e máxima segurança.' },
          { name: 'Gestão de Emergências', desc: 'Criação de comitês de crise e protocolos de comunicação e ação para grandes desastres ambientais ou operacionais.' },
          { name: 'Implantação de Cultura de Segurança', desc: 'Programas educacionais de longo prazo para transformar a segurança em um valor intrínseco de cada colaborador.' },
          { name: 'Planos de Contingência', desc: 'Planejamento para manter o negócio operando ou retomar as atividades o mais rápido possível após uma emergência.' },
        ]
      }
    ]
  },
  maodeobra: {
    title: 'Fornecimento de Mão de Obra',
    icon: <Users size={40} />,
    description: 'A PRUDÊNCIA fornece profissionais de segurança do trabalho altamente qualificados para atuação temporária ou contínua em ambientes industriais e offshore.',
    sections: [
      {
        subtitle: 'Modalidades de Atendimento',
        items: [
          { name: 'Cobertura de Férias', desc: 'Garantimos que sua empresa não fique descoberta durante o descanso legal do seu time de SST.' },
          { name: 'Substituições Temporárias', desc: 'Profissionais prontos para assumir postos em casos de licenças médicas ou afastamentos.' },
          { name: 'Campanhas Offshore', desc: 'Embarque de especialistas para acompanhamento de campanhas curtas ou longas em plataformas e navios.' },
          { name: 'Paradas e Manutenção', desc: 'Reforço no time de segurança durante paradas programadas de manutenção industrial, onde os riscos se multiplicam.' },
          { name: 'Start-up e Comissionamento', desc: 'Acompanhamento de segurança na fase crítica de teste e início de operação de novas plantas ou equipamentos.' },
          { name: 'Projetos Específicos', desc: 'Alocação de mão de obra direcionada para uma obra, demolição ou expansão pontual.' },
        ]
      },
      {
        subtitle: 'Profissionais Disponibilizados',
        items: [
          { name: 'Técnicos de Segurança do Trabalho', desc: 'Profissionais com registro ativo e experiência prática.' },
          { name: 'Técnicos Offshore', desc: 'Especialistas com CBSP, HUET e vivência marítima.' },
          { name: 'Supervisores de SMS', desc: 'Líderes para coordenar equipes de campo e garantir o cumprimento de metas de segurança.' },
          { name: 'Instrutores de Segurança', desc: 'Educadores técnicos para ministrar DDS e treinamentos locais.' },
          { name: 'Brigadistas e Resgatistas', desc: 'Equipe de prontidão imediata para espaços confinados e trabalhos em altura.' },
          { name: 'Especialistas NR-33 / NR-35 / NR-37', desc: 'Mão de obra com certificação e proficiência máxima nas normas mais críticas.' },
        ]
      },
      {
        subtitle: 'Nossos Diferenciais',
        items: [
          { name: 'Profissionais Treinados', desc: 'Toda nossa equipe passa por reciclagens constantes pela própria Prudência.' },
          { name: 'Integração Rápida', desc: 'Profissionais com perfil proativo que se adaptam rapidamente à cultura do cliente.' },
          { name: 'Substituição Garantida', desc: 'Em caso de incompatibilidade ou falta, garantimos a reposição imediata do profissional.' },
          { name: 'Gestão pela Prudência', desc: 'Nós cuidamos de todos os encargos, treinamentos e gestão de EPIs do profissional alocado.' },
        ]
      }
    ]
  },
  emergencia: {
    title: 'Emergência e Resposta Operacional',
    icon: <Flame size={40} />,
    description: 'Prontidão absoluta para agir nos momentos de crise. Estruturamos e treinamos equipes garantindo resposta rápida em cenários críticos.',
    sections: [
      {
        subtitle: 'Gestão de Crise e Resgate',
        items: [
          { name: 'Planos de Abandono', desc: 'Criação e execução de projetos de rotas de fuga, pontos de encontro e sinalização de emergência.' },
          { name: 'Simulados de Emergência', desc: 'Organização de exercícios práticos realistas (incêndios, vazamentos, resgates) para testar o tempo de resposta e a eficácia das equipes.' },
          { name: 'Treinamento de Equipes', desc: 'Capacitação contínua para manter a memória muscular e técnica dos times de resposta.' },
          { name: 'Estruturação de Brigadas', desc: 'Dimensionamento normativo, seleção, treinamento e equipamento da brigada de incêndio da empresa.' },
          { name: 'Resgate Técnico', desc: 'Equipes especializadas mantidas em standby durante atividades críticas (como entrada em silos ou tanques) prontas para agir.' },
          { name: 'Coordenação de Evacuação', desc: 'Protocolos de liderança para garantir que 100% dos colaboradores deixem as áreas de risco de forma segura.' },
          { name: 'Sistemas de Comando de Incidentes (SCI)', desc: 'Implementação do sistema padronizado de gerenciamento de emergências, organizando a hierarquia, recursos e comunicação durante uma crise.' },
        ]
      }
    ]
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  // SISTEMA DE ROTEAMENTO (Navegação de Páginas)
  // 'home' é a página principal. Qualquer outra string é a chave do objeto portfolioData
  const [currentView, setCurrentView] = useState('home');

  // Rolar para o topo sempre que mudar de view
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const navigateTo = (view, sectionId = null) => {
    setCurrentView(view);
    setIsMenuOpen(false);

    // Se precisar rolar para uma seção específica na home
    if (view === 'home' && sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus(''), 5000);
  };

  // --- COMPONENTE: PÁGINA DE DETALHES DO SERVIÇO ---
  const ServiceDetailPage = ({ serviceId }) => {
    const data = portfolioData[serviceId];

    if (!data) return <div className="pt-32 text-center h-screen">Página não encontrada.</div>;

    return (
      <div className="pt-20 bg-gray-50 min-h-screen pb-20 animate-fadeIn">
        {/* Cabeçalho da Subpágina */}
        <div className="bg-[#1a2b6d] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => navigateTo('home')}
              className="flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" /> Voltar para o Início
            </button>
            <div className="flex items-center mb-4">
              <div className="bg-blue-800/50 p-4 rounded-xl mr-6 text-[#f4ea24] border border-blue-700">
                {data.icon}
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold">{data.title}</h1>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mt-4 leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>

        {/* Conteúdo Detalhado */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Coluna Principal (Textos) */}
            <div className="lg:col-span-2 space-y-12">
              {data.sections.map((section, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold text-[#1a2b6d] mb-6 flex items-center border-b pb-4">
                    <CheckCircle2 className="mr-3 text-[#f4ea24]" size={28} />
                    {section.subtitle}
                  </h2>
                  <div className="space-y-6">
                    {section.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex">
                        <div className="mt-1 flex-shrink-0 mr-4 text-blue-500">
                          <ChevronRight size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
                          <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Coluna Lateral (Sidebar / Call to Action) */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-[#f4ea24] rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-extrabold text-[#1a2b6d] mb-4">Precisa desta solução?</h3>
                <p className="text-[#1a2b6d] mb-6 opacity-90 font-medium">
                  Nossos especialistas estão prontos para avaliar a necessidade da sua empresa e propor a melhor estratégia.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-[#1a2b6d]">
                    <Phone size={20} className="mr-3" />
                    <span className="font-bold">+55 (00) 00000-0000</span>
                  </div>
                  <div className="flex items-center text-[#1a2b6d]">
                    <Mail size={20} className="mr-3" />
                    <span className="font-bold">Solicite via E-mail</span>
                  </div>
                </div>
                <button
                  onClick={() => navigateTo('home', 'contato')}
                  className="w-full bg-[#1a2b6d] text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-900 transition-colors shadow-md flex justify-center items-center"
                >
                  Falar com Consultor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col [&_p]:text-justify">
      {/* HEADER / NAVBAR */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => navigateTo('home')}>
              <img
                src="LOGO NOVA PRUDÊNCIA.JPG.jpeg"
                alt="Logo Prudência Engenharia"
                className="h-16 md:h-[4.5rem] object-contain py-1"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => navigateTo('home')} className={`font-medium transition-colors ${currentView === 'home' ? 'text-[#1a2b6d] font-bold' : 'text-gray-600 hover:text-[#1a2b6d]'}`}>Início</button>
              <button onClick={() => navigateTo('home', 'servicos')} className="text-gray-600 hover:text-[#1a2b6d] font-medium transition-colors">Portfólio</button>
              <button onClick={() => navigateTo('home', 'sobre')} className="text-gray-600 hover:text-[#1a2b6d] font-medium transition-colors">Sobre Nós</button>
              <button
                onClick={() => navigateTo('home', 'contato')}
                className="bg-[#f4ea24] text-[#1a2b6d] px-6 py-2 rounded-md font-bold hover:bg-yellow-400 transition-colors shadow-sm"
              >
                Fale com um Especialista
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#1a2b6d]">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-2 pt-2 pb-4 space-y-1 shadow-lg absolute w-full">
            <button onClick={() => navigateTo('home')} className="block w-full text-left px-3 py-3 text-gray-700 font-medium border-b border-gray-50">Início</button>
            <button onClick={() => navigateTo('home', 'servicos')} className="block w-full text-left px-3 py-3 text-gray-700 font-medium border-b border-gray-50">Portfólio de Serviços</button>
            <button onClick={() => navigateTo('home', 'sobre')} className="block w-full text-left px-3 py-3 text-gray-700 font-medium border-b border-gray-50">Sobre a Empresa</button>
            <button onClick={() => navigateTo('home', 'contato')} className="block w-full text-center px-3 py-3 text-[#1a2b6d] bg-yellow-400 font-bold rounded-md mt-4">
              Fale com um Especialista
            </button>
          </div>
        )}
      </nav>

      {/* CONDITIONAL RENDER: HOMEPAGE OR SUBPAGE */}
      {currentView !== 'home' ? (
        <ServiceDetailPage serviceId={currentView} />
      ) : (
        <div className="flex-grow">
          {/* HERO SECTION */}
          <section id="home" className="pt-28 pb-16 md:pt-40 md:pb-24 bg-[#1a2b6d] text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="currentColor" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
              </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center space-x-2 bg-blue-800/50 rounded-full px-4 py-1 mb-6 border border-blue-700">
                    <ShieldCheck size={18} className="text-[#f4ea24]" />
                    <span className="text-sm font-medium text-blue-100">Segurança do Trabalho & Conformidade</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                    Protegendo Pessoas,<br />
                    <span className="text-[#f4ea24]">Potencializando Empresas.</span>
                  </h1>
                  <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg">
                    Especialistas em Saúde, Segurança do Trabalho, Gerenciamento de Riscos e Capacitação Técnica para os setores industrial, offshore e marítimo.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                      onClick={() => navigateTo('home', 'contato')}
                      className="bg-[#f4ea24] text-[#1a2b6d] px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg flex justify-center items-center"
                    >
                      Solicite um Orçamento
                      <ChevronRight size={20} className="ml-2" />
                    </button>
                    <button
                      onClick={() => navigateTo('home', 'servicos')}
                      className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-[#1a2b6d] transition-all flex justify-center items-center"
                    >
                      Ver Portfólio
                    </button>
                  </div>
                </div>
                <div className="hidden md:block relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#1a2b6d] to-transparent z-10 rounded-lg"></div>
                  <img
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Engenheiro analisando projeto"
                    className="rounded-lg shadow-2xl object-cover h-[500px] w-full"
                  />
                  <div className="absolute bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl z-20 flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <CheckCircle2 size={32} className="text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-900 font-bold text-xl">+30 Anos</p>
                        <p className="text-gray-500 text-sm">de Experiência</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Users size={32} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-gray-900 font-bold text-xl">+50.000</p>
                        <p className="text-gray-500 text-sm">Profissionais Capacitados</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ABOUT US SECTION */}
          <section id="sobre" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-[#1a2b6d] font-bold tracking-wide uppercase text-sm mb-2">Quem Somos</h2>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Integração entre Engenharia, Segurança e Operação</h3>
                  <p className="text-gray-600 text-lg mb-6">
                    A <strong>Prudência Engenharia & Consultoria</strong> é uma empresa brasileira especializada em Saúde, Segurança do Trabalho, Gerenciamento de Riscos e Capacitação Técnica.
                  </p>
                  <p className="text-gray-600 text-lg mb-8">
                    Nosso alcance é global, atendendo empresas em todo o Brasil e no exterior, com ampla experiência em equipes multinacionais, operações embarcadas e treinamentos bilíngues.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Target className="text-[#1a2b6d] mt-1 mr-4 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-bold text-gray-900">Nossa Missão</h4>
                        <p className="text-gray-600">Promover a preservação da vida e a segurança operacional nas organizações através de engenharia, gestão de riscos e capacitação técnica.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Globe className="text-[#1a2b6d] mt-1 mr-4 flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-bold text-gray-900">Nossa Visão</h4>
                        <p className="text-gray-600">Ser referência nacional e internacional em soluções integradas de SST, treinamentos normativos e mão de obra técnica para ambientes industriais e offshore.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <h4 className="text-xl font-bold text-[#1a2b6d] mb-6 text-center border-b pb-4">Nossas Áreas de Atuação</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'Petróleo e Gás', 'Offshore e Marítimo',
                      'Portuário', 'Industrial',
                      'Construção Civil', 'Energia',
                      'Logística', 'Estaleiros',
                      'FPSO e Plataformas', 'Infraestrutura'
                    ].map((sector, i) => (
                      <div key={i} className="flex items-center space-x-2 bg-gray-50 p-2 rounded border border-gray-100 hover:bg-yellow-50 transition-colors">
                        <CheckCircle2 size={16} className="text-[#1a2b6d] text-opacity-80 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{sector}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* MAIN SERVICES GRID (PORTFOLIO) */}
          <section id="servicos" className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-[#1a2b6d] font-bold tracking-wide uppercase text-sm mb-2">Soluções Completas</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Portfólio Institucional</h3>
                <p className="text-gray-600 text-lg">Selecione uma área abaixo para conhecer detalhadamente nossas especialidades e soluções para sua empresa.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* 1. Treinamentos */}
                <div className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all p-8 flex flex-col group cursor-pointer" onClick={() => navigateTo('treinamentos')}>
                  <div className="bg-[#1a2b6d] text-[#f4ea24] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                    <BookOpen size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Treinamentos Normativos e Técnicos</h4>
                  <p className="text-gray-600 mb-6 flex-grow">Capacitações em NRs, Segurança Operacional, Resposta a Emergências e certificações vitais para áreas de risco.</p>
                  <div className="flex items-center font-bold text-[#1a2b6d] group-hover:text-blue-600">
                    Saber mais <ArrowLeft size={18} className="ml-2 rotate-180" />
                  </div>
                </div>

                {/* 2. Programas Legais */}
                <div className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all p-8 flex flex-col group cursor-pointer" onClick={() => navigateTo('programas')}>
                  <div className="bg-[#1a2b6d] text-[#f4ea24] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                    <FileText size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Programas Legais e SST</h4>
                  <p className="text-gray-600 mb-6 flex-grow">Elaboração de PGR, PCMSO, LTCAT, laudos de insalubridade, gestão do eSocial e toda documentação obrigatória.</p>
                  <div className="flex items-center font-bold text-[#1a2b6d] group-hover:text-blue-600">
                    Saber mais <ArrowLeft size={18} className="ml-2 rotate-180" />
                  </div>
                </div>

                {/* 3. Auditorias */}
                <div className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all p-8 flex flex-col group cursor-pointer" onClick={() => navigateTo('auditorias')}>
                  <div className="bg-[#1a2b6d] text-[#f4ea24] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                    <ShieldCheck size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Auditorias e Conformidade</h4>
                  <p className="text-gray-600 mb-6 flex-grow">Auditorias Offshore, Marítimas, comportamentais, investigações de acidentes e diagnóstico de conformidade legal.</p>
                  <div className="flex items-center font-bold text-[#1a2b6d] group-hover:text-blue-600">
                    Saber mais <ArrowLeft size={18} className="ml-2 rotate-180" />
                  </div>
                </div>

                {/* 4. Consultoria */}
                <div className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all p-8 flex flex-col group cursor-pointer" onClick={() => navigateTo('consultoria')}>
                  <div className="bg-[#1a2b6d] text-[#f4ea24] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                    <Activity size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Consultoria Técnica em Segurança</h4>
                  <p className="text-gray-600 mb-6 flex-grow">Engenharia de risco, HAZID/HAZOP, sistemas de gestão SMS, implantação de cultura de segurança e contingência.</p>
                  <div className="flex items-center font-bold text-[#1a2b6d] group-hover:text-blue-600">
                    Saber mais <ArrowLeft size={18} className="ml-2 rotate-180" />
                  </div>
                </div>

                {/* 5. Mão de Obra */}
                <div className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all p-8 flex flex-col group cursor-pointer" onClick={() => navigateTo('maodeobra')}>
                  <div className="bg-[#1a2b6d] text-[#f4ea24] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                    <Users size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Fornecimento de Mão de Obra Técnica</h4>
                  <p className="text-gray-600 mb-6 flex-grow">Técnicos de Segurança, Offshore, Supervisores e Brigadistas para paradas, campanhas offshore ou coberturas.</p>
                  <div className="flex items-center font-bold text-[#1a2b6d] group-hover:text-blue-600">
                    Saber mais <ArrowLeft size={18} className="ml-2 rotate-180" />
                  </div>
                </div>

                {/* 6. Emergência */}
                <div className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all p-8 flex flex-col group cursor-pointer" onClick={() => navigateTo('emergencia')}>
                  <div className="bg-[#1a2b6d] text-[#f4ea24] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                    <Flame size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Emergência e Resposta Operacional</h4>
                  <p className="text-gray-600 mb-6 flex-grow">Planos de abandono, simulados realistas, estruturação de brigadas e sistemas de comando de incidentes.</p>
                  <div className="flex items-center font-bold text-[#1a2b6d] group-hover:text-blue-600">
                    Saber mais <ArrowLeft size={18} className="ml-2 rotate-180" />
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* CTA SECTION */}
          <section className="py-16 bg-[#f4ea24] text-[#1a2b6d] text-center">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Pronto para elevar o nível de segurança da sua operação?</h2>
              <p className="text-lg md:text-xl font-medium mb-8 opacity-90">Não espere uma fiscalização ou acidente. Fale com nossos engenheiros agora mesmo e receba uma avaliação preliminar sem compromisso.</p>
              <button
                onClick={() => navigateTo('home', 'contato')}
                className="bg-[#1a2b6d] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-900 transition-all shadow-lg inline-flex items-center"
              >
                Falar no WhatsApp
                <Phone size={20} className="ml-2" />
              </button>
            </div>
          </section>

          {/* CONTACT / LEAD FORM SECTION */}
          <section id="contato" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-16">
                {/* Contact Info */}
                <div>
                  <h2 className="text-[#1a2b6d] font-bold tracking-wide uppercase text-sm mb-2">Contato</h2>
                  <h3 className="text-3xl font-extrabold text-gray-900 mb-6">Vamos conversar?</h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    Preencha o formulário e um de nossos especialistas entrará em contato para entender a realidade da sua empresa e propor a melhor solução.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-50 p-3 rounded-full mr-4 text-[#1a2b6d]">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Telefone / WhatsApp</h4>
                        <p className="text-gray-600">+55 (00) 00000-0000</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-50 p-3 rounded-full mr-4 text-[#1a2b6d]">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">E-mail</h4>
                        <p className="text-gray-600">contato@prudenciaengenharia.com.br</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-50 p-3 rounded-full mr-4 text-[#1a2b6d]">
                        <Users size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Responsável Técnico</h4>
                        <p className="text-gray-600">Professor Eng. Elton Leite</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lead Form */}
                <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Solicitar Orçamento</h4>

                  {formStatus === 'success' ? (
                    <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg text-center">
                      <CheckCircle2 size={48} className="mx-auto mb-4 text-green-500" />
                      <h5 className="font-bold text-xl mb-2">Mensagem Enviada!</h5>
                      <p>Obrigado pelo contato. Nossa equipe retornará em breve.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo *</label>
                        <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1a2b6d] focus:border-transparent outline-none transition-all" placeholder="Seu nome" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Empresa *</label>
                        <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1a2b6d] focus:border-transparent outline-none transition-all" placeholder="Nome da sua empresa" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
                          <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1a2b6d] focus:border-transparent outline-none transition-all" placeholder="seu@email.com" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Telefone/WhatsApp *</label>
                          <input type="tel" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1a2b6d] focus:border-transparent outline-none transition-all" placeholder="(00) 00000-0000" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Qual a sua necessidade principal? *</label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1a2b6d] focus:border-transparent outline-none transition-all bg-white">
                          <option value="">Selecione uma opção</option>
                          <option value="treinamento">Treinamento Normativo e Técnico</option>
                          <option value="laudos">Programas Legais e SST</option>
                          <option value="auditoria">Auditorias e Conformidade</option>
                          <option value="consultoria">Consultoria Técnica</option>
                          <option value="mao_de_obra">Fornecimento de Mão de Obra</option>
                          <option value="emergencia">Emergência e Resposta Operacional</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem (Opcional)</label>
                        <textarea rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1a2b6d] focus:border-transparent outline-none transition-all" placeholder="Detalhe um pouco mais sua necessidade..."></textarea>
                      </div>
                      <button type="submit" className="w-full bg-[#1a2b6d] text-white py-3 rounded-md font-bold hover:bg-blue-900 transition-colors shadow-md mt-4">
                        Enviar Solicitação
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* FOOTER - VISÍVEL EM TODAS AS PÁGINAS */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6 cursor-pointer bg-white w-fit p-2 rounded-lg" onClick={() => navigateTo('home')}>
                <img
                  src="LOGO NOVA PRUDÊNCIA.JPG.jpeg"
                  alt="Logo Prudência Engenharia"
                  className="h-12 object-contain"
                />
              </div>
              <p className="text-gray-400 max-w-sm mb-4">
                Engenharia, Consultoria e Gestão Empresarial focada em resultados e na segurança total da sua equipe. Especialistas no setor Industrial, Petróleo e Gás e Offshore.
              </p>
              <p className="text-gray-500 text-sm">
                Dirigido por Professor Eng. Elton Leite.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Portfólio</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => navigateTo('treinamentos')} className="hover:text-white transition-colors text-left">Treinamentos e Técnicos</button></li>
                <li><button onClick={() => navigateTo('programas')} className="hover:text-white transition-colors text-left">Programas Legais e SST</button></li>
                <li><button onClick={() => navigateTo('auditorias')} className="hover:text-white transition-colors text-left">Auditorias e Conformidade</button></li>
                <li><button onClick={() => navigateTo('consultoria')} className="hover:text-white transition-colors text-left">Consultoria Técnica</button></li>
                <li><button onClick={() => navigateTo('maodeobra')} className="hover:text-white transition-colors text-left">Fornecimento de Mão de Obra</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">Início</button></li>
                <li><button onClick={() => navigateTo('home', 'sobre')} className="hover:text-white transition-colors">Quem Somos</button></li>
                <li><button onClick={() => navigateTo('home', 'contato')} className="hover:text-white transition-colors">Fale Conosco</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Prudência Engenharia e Consultoria. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
