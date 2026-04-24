import React, { useState, useEffect } from 'react';
import translations from './translations/translations';
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
  MessageCircle,
} from 'lucide-react';

// Função inteligente para resolver imagens com fallback para PNG
const resolveAsset = (imgPath) => {
  const cleanPath = imgPath.replace(/^\/+/, '');
  const basePath = `${import.meta.env.BASE_URL}${cleanPath}`;

  // Se a imagem não tem extensão, tenta WebP primeiro
  if (!cleanPath.includes('.')) {
    return basePath;
  }

  // Se é PNG ou JPEG, tenta WebP primeiro (fallback automático pelo navegador)
  if (/\.(png|jpg|jpeg)$/i.test(cleanPath)) {
    const webpPath = cleanPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    return `${import.meta.env.BASE_URL}${webpPath}`;
  }

  return basePath;
};

const layerStyle = (imgUrl) => ({
  backgroundImage: `url('${resolveAsset(imgUrl)}')`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundColor: '#0f172a',
});

// Componente para imagem com suporte a WebP
const OptimizedImg = ({ src, alt, className, style }) => (
  <picture>
    <source srcSet={resolveAsset(src.replace(/\.(png|jpg|jpeg)$/i, '.webp'))} type="image/webp" />
    <img src={`${import.meta.env.BASE_URL}${src.replace(/^\/+/, '')}`} alt={alt} className={className} style={style} />
  </picture>
);

const BrazilFlagIcon = ({ className = 'w-7 h-5' }) => (
  <svg viewBox="0 0 60 42" className={className} aria-hidden="true">
    <rect width="60" height="42" rx="4" fill="#009739" />
    <polygon points="30,6 52,21 30,36 8,21" fill="#FEDD00" />
    <circle cx="30" cy="21" r="8.5" fill="#012169" />
    <path d="M22 21c2.5-3 13.5-3 16 0" stroke="#fff" strokeWidth="1.5" fill="none" />
  </svg>
);

const SpainFlagIcon = ({ className = 'w-7 h-5' }) => (
  <svg viewBox="0 0 60 42" className={className} aria-hidden="true">
    <rect width="60" height="42" rx="4" fill="#AA151B" />
    <rect y="10.5" width="60" height="21" fill="#F1BF00" />
    <rect x="13" y="16" width="5" height="10" rx="1" fill="#AA151B" />
    <rect x="14.5" y="18" width="2" height="5" fill="#F1BF00" />
  </svg>
);

const UsaFlagIcon = ({ className = 'w-7 h-5' }) => (
  <svg viewBox="0 0 60 42" className={className} aria-hidden="true">
    <rect width="60" height="42" rx="4" fill="#B22234" />
    <g fill="#fff">
      <rect y="3" width="60" height="3" />
      <rect y="9" width="60" height="3" />
      <rect y="15" width="60" height="3" />
      <rect y="21" width="60" height="3" />
      <rect y="27" width="60" height="3" />
      <rect y="33" width="60" height="3" />
      <rect y="39" width="60" height="3" />
    </g>
    <rect width="26" height="22" rx="2" fill="#3C3B6E" />
    <g fill="#fff">
      <circle cx="4" cy="4" r="1" /><circle cx="9" cy="4" r="1" /><circle cx="14" cy="4" r="1" /><circle cx="19" cy="4" r="1" /><circle cx="24" cy="4" r="1" />
      <circle cx="6.5" cy="7" r="1" /><circle cx="11.5" cy="7" r="1" /><circle cx="16.5" cy="7" r="1" /><circle cx="21.5" cy="7" r="1" />
      <circle cx="4" cy="10" r="1" /><circle cx="9" cy="10" r="1" /><circle cx="14" cy="10" r="1" /><circle cx="19" cy="10" r="1" /><circle cx="24" cy="10" r="1" />
      <circle cx="6.5" cy="13" r="1" /><circle cx="11.5" cy="13" r="1" /><circle cx="16.5" cy="13" r="1" /><circle cx="21.5" cy="13" r="1" />
      <circle cx="4" cy="16" r="1" /><circle cx="9" cy="16" r="1" /><circle cx="14" cy="16" r="1" /><circle cx="19" cy="16" r="1" /><circle cx="24" cy="16" r="1" />
    </g>
  </svg>
);

const ChinaFlagIcon = ({ className = 'w-7 h-5' }) => (
  <svg viewBox="0 0 60 42" className={className} aria-hidden="true">
    <rect width="60" height="42" rx="4" fill="#DE2910" />
    <polygon points="12,8 14,13 19,13 15,16 16.5,21 12,18 7.5,21 9,16 5,13 10,13" fill="#FFDE00" />
    <polygon points="23,7 24,9.5 26.5,9.5 24.5,11 25.3,13.5 23,12 20.7,13.5 21.5,11 19.5,9.5 22,9.5" fill="#FFDE00" />
    <polygon points="27,12 28,14.5 30.5,14.5 28.5,16 29.3,18.5 27,17 24.7,18.5 25.5,16 23.5,14.5 26,14.5" fill="#FFDE00" />
    <polygon points="27,19 28,21.5 30.5,21.5 28.5,23 29.3,25.5 27,24 24.7,25.5 25.5,23 23.5,21.5 26,21.5" fill="#FFDE00" />
    <polygon points="23,24 24,26.5 26.5,26.5 24.5,28 25.3,30.5 23,29 20.7,30.5 21.5,28 19.5,26.5 22,26.5" fill="#FFDE00" />
  </svg>
);

const portfolioSections = [
  {
    id: 'treinamentos',
    title: 'Treinamentos Normativos e Técnicos',
    icon: Users,
    groups: [
      {
        subtitle: 'Soluções em Normas Regulamentadoras (NRs)',
        items: [
          { name: 'NR-01 – Gerenciamento de Riscos', desc: 'Identificação estrutural de perigos, elaboração do Inventário de Riscos e formulação integral do PGR da corporação.' },
          { name: 'NR-05 – CIPA e CIPAMIN', desc: 'Implantação de comissões, organização do processo eleitoral, mapeamento local de riscos e capacitação oficial dos membros.' },
          { name: 'NR-06 – Gestão de EPIs', desc: 'Especificação técnica, estudos de luvas/vestimentas de alta performance (arco elétrico/químico) e gestão de entrega.' },
          { name: 'NR-09 – Avaliação Ambiental', desc: 'Dosimetrias e coleta instrumentada de agentes químicos, físicos e biológicos para atestar segurança das exposições.' },
          { name: 'NR-10 – Eletricidade', desc: 'Gestão integral do risco elétrico: desde elaboração de prontuários (PIE) e inspeções estruturais, até treinamentos de segurança.' },
          { name: 'NR-11 – Movimentação de Cargas', desc: 'Planos de içamento (Rigging), assessoria para transporte de materiais e treinamento de operações logísticas/guindastes.' },
          { name: 'NR-12 – Máquinas e Equipamentos', desc: 'Apreciação de risco, emissão de laudos de engenharia, projetos de adequação física e instrução técnica de operação.' },
          { name: 'NR-13 – Caldeiras e Tubulações', desc: 'Inspeções de integridade, testes hidrostáticos e acompanhamento de válvulas de segurança em vasos de pressão.' },
          { name: 'NR-15 e NR-16 – Periculosidade', desc: 'Consultoria técnica e formulações precisas para gestão e atenuantes do passivo trabalhista de graus de risco.' },
          { name: 'NR-17 – Ergonomia Ocupacional', desc: 'Elaboração da Análise Ergonômica do Trabalho (AET) e readaptação de postos industriais para conforto e performance.' },
          { name: 'NR-18 – Condições na Construção Civil', desc: 'Organização estrutural e documentária, controle de gruas/elevadores e proteções da indústria de canteiros temporários.' },
          { name: 'NR-20 – Combustíveis e Inflamáveis', desc: 'Consultoria, elaboração da documentação legal e suporte tático para prevenir ocorrências em áreas de armazenamento.' },
          { name: 'NR-22 – Indústria da Mineração', desc: 'Adequação de SSPD, Saúde Ocupacional especializada e CIPAMIN nas frentes complexas de escavação e garimpo.' },
          { name: 'NR-26 – Sinalização e Cores', desc: 'Mapeamento de rotas fotoluminescentes, demarcação física perimetral e diagramação de alertas no maquinário.' },
          { name: 'NR-29 – Trabalho Portuário', desc: 'Blindagem de processos na operação terrestre de portos e integração segura para os Trabalhadores Avulsos.' },
          { name: 'NR-30 – Segurança Aquaviária', desc: 'Assessoria de saúde e segurança desenvolvida especificamente para a embarcação, trabalhadores e plataformas civis.' },
          { name: 'NR-33 – Espaços Confinados', desc: 'Inventário de frentes, padronização de procedimentos (PET), monitoramento de ar e fornecimento de equipe de resgate.' },
          { name: 'NR-34 – Indústria Naval', desc: 'Gestão preventiva na montagem e desmonte em serviços a quente e manobras extremas em estaleiros de reparação.' },
          { name: 'NR-35 – Trabalho em Altura', desc: 'Projetos de linhas de vida defintivas, sistemas de ancoragem, inspeção de fitas/harness e resgates dinâmicos escalados.' },
          { name: 'NR-37 – Plataformas de Petróleo', desc: 'Adequação rigorosa do sistema offshore para aderir diretamente ao complexo marco normativo de Exploração e Produção (E&P).' },
        ],
      },
      {
        subtitle: 'Emergência e Resposta Operacional',
        items: [
          { name: 'Respostas Estratégicas e Resgates', desc: 'Instrução tática abrangente na estruturação de Brigadas, suporte tático ao abandono, salvamento veicular e resgates críticos em altura/confinado.' },
          { name: 'Segurança Operacional Específica', desc: 'Execução e implantação de movimentações (Rigging), controle total de energias letais (LOTO), emissão de permissões de trabalho locais e ATEX.' },
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
        subtitle: 'Engenharia e Gestão Contínua',
        items: [
          { name: 'Soluções Documentais e Laudos Legais', desc: 'Elaboração ponta a ponta e atualização do passivo de saúde e segurança, compreendendo PGR, PCMSO, LTCAT e aprovações complexas de insalubridade e periculosidade.' },
          { name: 'Gestão Integrada eSocial', desc: 'Sustentação dos eventos obrigatórios do Governo Federal (eSocial SST), auditando a coerência das informações e prevenindo a empresa de multas e notificações fiscais.' },
          { name: 'Planejamento Técnico e APRs', desc: 'Engenharia de campo na formulação de Análises Preliminares de Risco, confecção assertiva de Mapas de Risco, padronização de procedimentos (POPs) e desenvolvimento do corpo de CIPA/CIPLAT.' },
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
        subtitle: 'Processos Investigativos',
        items: [
          { name: 'Inspeções e Avaliações Direcionadas', desc: 'Diagnóstico legal aprofundado Onshore, Offshore e Naval. Levamos a pente-fino instalações, equipamentos e compliance normativo do seu canteiro para garantir aderência corporativa e legal.' },
          { name: 'Auditoria Comportamental e Investigação', desc: 'Identificação preditiva de vulnerabilidades, auditorias de comportamento humano no campo e investigações metódicas de causa-raiz para evitar a repetição de sinistros.' },
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
        subtitle: 'Estratégia e Sistemas de Gestão',
        items: [
          { name: 'Engenharia de Riscos e SMS', desc: 'Sustentação sênior do seu Sistema de Gestão. Assessoramos elaborações técnicas pesadas de engenharia como HAZID/HAZOP, modelagem de Planos de Contingência e implementação da sua cultura de segurança.' },
        ],
      },
    ],
  },
  {
    id: 'maodeobra',
    title: 'Fornecimento de Mão de Obra Técnica',
    icon: Briefcase,
    groups: [
      {
        subtitle: 'Atendimento Operacional',
        items: [
          { name: 'Gestão Integrada e Alocação', desc: 'Fornecimento ágil de Técnicos de Segurança, Supervisores SMS, Resgatistas e Especialistas. Suprimos desde coberturas até contratos contínuos de operação com reposições imediatas.' },
          { name: 'Paradas e Campanhas Offshore', desc: 'Equipes táticas embarcadas e perfis comumente desafiadores de recrutar para paradas crônicas de plantas, comissionamento de navios/plataformas e auditorias emergenciais.' },
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
        subtitle: 'Prontidão e Comando',
        items: [
          { name: 'Gestão Pró-Ativa de Crises', desc: 'Projetamos Sistemas de Comando de Incidentes eficientes. Realizamos mapeamento tático para abandono seguro da instalação e simulados realistas mensuráveis, formando times resilientes.' },
        ],
      },
    ],
  },
  {
    id: 'sinalizacao',
    title: 'Sinalização de Segurança',
    icon: MapPin,
    groups: [
      {
        subtitle: 'Soluções Turnkey para Indústrias',
        items: [
          { name: 'Projetos, Fornecimento e Execução Global', desc: 'Atendimento completo desde o mapa de riscos, desenvolvimento do projeto direcional nas normas em vigor, até a industrialização e execução correta em campo dos totens e painéis com materiais de máxima retenção fotoluminescente e durabilidade.' },
        ],
      },
    ],
  },
];

const HomePage = ({ navigate, t }) => (
  <section
    className="relative min-h-screen flex items-center justify-center"
    style={layerStyle('/home-offshore-hero.png')}
  >
    <div className="absolute inset-0 bg-black/20"></div>

    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center page-content-reveal pt-12 lg:pt-[80px]">
      <div className="flex flex-col items-center gap-6 md:gap-8">
        <div className="bg-gradient-to-br from-white/70 to-white/20 backdrop-blur-xl p-6 md:p-10 lg:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border border-white/30 border-t-white/80 border-l-white/80 mx-2">
          <img
            src={resolveAsset('/logo-prudencia-sem-fundo.webp')}
            alt="Logo Prudência Engenharia e Consultoria"
            className="w-auto h-[180px] sm:h-[220px] md:h-[300px] lg:h-[380px] object-contain mx-auto mb-6 lg:mb-8"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = `${import.meta.env.BASE_URL}logo-prudencia.jpeg`;
            }}
            style={{
              filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15))',
              animation: 'fadeIn 0.8s ease-out'
            }}
          />
          <h2
            className="text-base sm:text-lg md:text-2xl font-bold tracking-wide max-w-3xl mx-auto mb-6 md:mb-8 text-center leading-relaxed px-4 bg-gradient-to-r from-[#1e3163] via-blue-800 to-[#1e3163] bg-clip-text text-transparent drop-shadow-sm"
            style={{ animation: 'fadeIn 1s ease-out 0.3s both' }}
          >
            {t('home', 'heroSubtitle')}
          </h2>
          <button
            onClick={() => navigate('sobre')}
            className="inline-flex items-center gap-2 md:gap-3 bg-amber-500 text-slate-900 px-6 py-3 md:px-10 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-amber-400 transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-amber-500/60"
            style={{
              animation: 'fadeIn 1s ease-out 0.5s both'
            }}
          >
            {t('home', 'ctaCompany')} <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </section>
);

const SobrePage = ({ t }) => {
  const leaderBio = Array.isArray(t('sobre', 'leaderBio'))
    ? t('sobre', 'leaderBio')
    : [t('sobre', 'leaderP1'), t('sobre', 'leaderP2'), t('sobre', 'leaderP3')];

  return (
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
            {t('sobre', 'title')}
          </h2>
          <p className="text-base text-slate-700 leading-relaxed mb-4 text-justify">
            {t('sobre', 'p1')}
          </p>
          <p className="text-base text-slate-700 leading-relaxed mb-4 text-justify">
            {t('sobre', 'p2')}
          </p>
          <p className="text-base text-slate-700 leading-relaxed mb-4 text-justify">
            {t('sobre', 'p3')}
          </p>
          <p className="text-base text-slate-700 leading-relaxed mb-4 text-justify">
            {t('sobre', 'p4')}
          </p>
          <p className="text-base text-slate-700 leading-relaxed mb-6 text-justify">
            {t('sobre', 'p5')}
          </p>

          <div className="bg-slate-100 p-6 rounded-2xl border-l-4 border-amber-500 mt-6">
            <h4 className="text-lg font-bold text-slate-900 mb-3">{t('sobre', 'diferencialTitle')}</h4>
            <p className="text-slate-800 text-justify">
              {t('sobre', 'diferencialText')}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-white shadow-xl hover:-translate-y-1 transition duration-300">
            <div className="flex items-center gap-4 mb-3">
              <Target className="h-8 w-8 text-amber-500" />
              <h3 className="text-2xl font-bold">{t('sobre', 'mission')}</h3>
            </div>
            <p
              lang="pt-BR"
              className="text-gray-300 leading-relaxed text-justify"
              style={{ hyphens: 'auto', textJustify: 'inter-word' }}
            >
              {t('sobre', 'missionText')}
            </p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-white shadow-xl hover:-translate-y-1 transition duration-300">
            <div className="flex items-center gap-4 mb-3">
              <Globe className="h-8 w-8 text-amber-500" />
              <h3 className="text-2xl font-bold">{t('sobre', 'vision')}</h3>
            </div>
            <p className="text-gray-300 text-justify">{t('sobre', 'visionText')}</p>
          </div>

          <div className="bg-amber-500/90 backdrop-blur-md p-8 rounded-3xl border border-white/20 text-slate-900 shadow-xl hover:-translate-y-1 transition duration-300">
            <div className="flex items-center gap-4 mb-4">
              <Award className="h-8 w-8" />
              <h3 className="text-2xl font-bold">{t('sobre', 'values')}</h3>
            </div>
            <ul className="grid grid-cols-2 gap-3 text-sm font-bold">
              {t('sobre', 'valuesList').map((item) => (
                <li key={item} className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-slate-900/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[100px] -z-10"></div>
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-1">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500 to-amber-200 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <OptimizedImg
                src="/FOTO ELTON.webp"
                alt="Elton Vieira Leite"
                className="relative w-full aspect-[4/5] object-cover object-top rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
            <div className="mt-6 text-center md:text-left">
              <h4 className="text-2xl font-bold text-white">Elton Vieira Leite</h4>
              <p className="text-amber-500 font-medium tracking-wide uppercase text-sm mt-1">{t('sobre', 'leaderRole')}</p>
            </div>
          </div>
          <div className="md:col-span-2 space-y-6">
            <div className="inline-flex items-center gap-3 bg-amber-500/10 px-4 py-2 rounded-full border border-amber-500/20">
              <Award className="h-5 w-5 text-amber-500" />
              <span className="text-amber-500 font-bold text-sm tracking-wider uppercase">{t('sobre', 'leaderBadge')}</span>
            </div>

            <div className="text-gray-300 space-y-4 text-justify leading-relaxed">
              {leaderBio.map((paragraph, index) => (
                <p key={`leader-bio-${index}`}>{paragraph}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {t('sobre', 'leaderTags').map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-amber-100/80 uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
        <div className="text-center">
          <div className="text-5xl font-bold text-amber-400 mb-3">{t('sobre', 'statsYears')}</div>
          <p className="text-white text-lg">{t('sobre', 'statsYearsText')}</p>
        </div>
        <div className="text-center">
          <div className="text-5xl font-bold text-amber-400 mb-3">{t('sobre', 'statsPeople')}</div>
          <p className="text-white text-lg">{t('sobre', 'statsPeopleText')}</p>
        </div>
        <div className="text-center">
          <div className="text-amber-400 font-bold text-lg mb-3">{t('sobre', 'statsSectors')}</div>
          <p className="text-white text-base">{t('sobre', 'statsSectorsText')}</p>
        </div>
      </div>
    </div>
  </section>
    );
  };

const AtuacaoPage = ({ t }) => {
  const [activeArea, setActiveArea] = useState(null);
  // Force rebuild: 2026-03-15

  const handleAreaClick = (areaId) => {
    setActiveArea(areaId);
  };

  const areas = [
    { id: 'oil', title: 'Petróleo e Gás', icon: Droplet },
    { id: 'offshore', title: 'Offshore e Marítimo', icon: Anchor },
    { id: 'port', title: 'Portuário', icon: MapPin },
    { id: 'industrial', title: 'Industrial', icon: Target },
    { id: 'construction', title: 'Construção Civil', icon: HardHat },
    { id: 'energy', title: 'Energia', icon: Zap },
    { id: 'logistics', title: 'Logística', icon: Briefcase },
    { id: 'shipyards', title: 'Estaleiros e Obras', icon: ShieldCheck },
    { id: 'fpso', title: 'FPSO e Plataformas', icon: Anchor },
    { id: 'infra', title: 'Infraestrutura', icon: HardHat },
  ];

  const areaLabels = t('atuacao', 'areas');

  if (activeArea === 'construction') {
    return (
      <section className="relative min-h-screen pt-0 pb-20 animate-fadeIn bg-slate-900">
        <div className="relative h-[55vh] md:h-[65vh] bg-cover bg-center overflow-hidden" style={layerStyle('/construcao-civil-hero.png')}>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-900"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
            <div className="max-w-7xl mx-auto w-full">
              <button onClick={() => setActiveArea(null)} className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold mb-6 transition">← {t('atuacao', 'back')}</button>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">{t('atuacao', 'constructionTitle')}</h1>
              <div className="w-24 h-1 bg-amber-500 mb-4"></div>
              <p className="text-xl text-amber-200 max-w-2xl">{t('atuacao', 'constructionSubtitle')}</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full page-content-reveal pt-12 mb-32">
          <div className="space-y-6 mb-20">
            <div>
              <h2 className="text-4xl font-semibold text-white mb-4">{t('atuacao', 'constructionCapacityTitle')}</h2>
              <div className="w-12 h-1 bg-slate-300 rounded-full"></div>
            </div>
            <p className="text-base text-gray-300 leading-relaxed max-w-3xl text-justify">{t('atuacao', 'constructionCapacityText')}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-slate-700/50 text-slate-200 text-sm rounded-full font-medium">{t('atuacao', 'constructionTag1')}</span>
              <span className="px-3 py-1 bg-slate-700/50 text-slate-200 text-sm rounded-full font-medium">{t('atuacao', 'constructionTag2')}</span>
              <span className="px-3 py-1 bg-slate-700/50 text-slate-200 text-sm rounded-full font-medium">{t('atuacao', 'constructionTag3')}</span>
            </div>
          </div>

          <div className="space-y-20">
            <section>
              <div className="mb-8">
                <h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'constructionOperationalTitle')}</h3>
                <div className="w-12 h-1 bg-slate-300 rounded-full"></div>
              </div>
              <p className="text-gray-300 mb-12 max-w-3xl leading-relaxed text-justify">{t('atuacao', 'constructionOperationalText')}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Building2, text: t('atuacao', 'constructionCard1') },
                  { icon: Cog, text: t('atuacao', 'constructionCard2') },
                  { icon: Hammer, text: t('atuacao', 'constructionCard3') },
                  { icon: Wrench, text: t('atuacao', 'constructionCard4') },
                  { icon: Package, text: t('atuacao', 'constructionCard5') },
                  { icon: Users, text: t('atuacao', 'constructionCard6') },
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
                <h3 className="text-4xl font-semibold text-white mb-3">{t('atuacao', 'constructionContainerTitle')}</h3>
                <div className="w-12 h-1 bg-slate-300 rounded-full"></div>
              </div>
              <div className="relative rounded-xl overflow-hidden h-[600px]">
                <picture><source srcSet={resolveAsset('/equipamentos-oficina-tecnica.webp')} type="image/webp" /><img src={resolveAsset('/equipamentos-oficina-tecnica.png')} alt="Equipamentos Oficina Técnica" className="w-full h-full object-cover" loading="lazy" /></picture>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-800/50 to-transparent"></div>
                <div className="absolute inset-0 p-16 flex flex-col justify-between">
                  <div>
                    <h4 className="text-5xl font-bold text-white mb-4" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}>{t('atuacao', 'constructionWorkshopTitle')}</h4>
                    <p className="text-gray-100 text-base mb-8 leading-relaxed max-w-2xl font-bold text-justify" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>{t('atuacao', 'constructionWorkshopText')}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-base text-gray-100 max-w-2xl">
                    {t('atuacao', 'constructionTools').map((tool) => (
                      <div key={tool} className="flex items-center gap-3 font-bold" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}><span className="text-slate-400 text-lg">→</span> {tool}</div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-8">
              <div className="mb-12">
                <h3 className="text-4xl font-semibold text-white mb-3">{t('atuacao', 'constructionMobilizationTitle')}</h3>
                <div className="w-12 h-1 bg-slate-300 rounded-full"></div>
              </div>
              <div className="space-y-10">
                <div className="relative rounded-xl overflow-hidden h-[500px]">
                  <picture><source srcSet={resolveAsset('/mobilizacao-canteiro.webp')} type="image/webp" /><img src={resolveAsset('/mobilizacao-canteiro.png')} alt="Mobilização de Canteiro" className="w-full h-full object-cover" loading="lazy" /></picture>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-800/50 to-transparent"></div>
                  <div className="absolute inset-0 p-16 flex flex-col justify-center">
                    <h4 className="text-4xl font-bold text-white mb-6" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}>{t('atuacao', 'constructionMobilizationBlockTitle')}</h4>
                    <ul className="space-y-3 text-base text-gray-100 max-w-xl font-bold">
                      {t('atuacao', 'constructionMobilizationList').map((item) => (
                        <li key={item} className="flex items-center gap-3" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}><span className="text-slate-400 text-lg">→</span> {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative rounded-xl overflow-hidden h-[500px]">
                  <picture><source srcSet={resolveAsset('/equipe-construcao-civil.webp')} type="image/webp" /><img src={resolveAsset('/equipe-construcao-civil.png')} alt="Equipe Construção Civil" className="w-full h-full object-cover" loading="lazy" /></picture>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-800/50 to-transparent"></div>
                  <div className="absolute inset-0 p-16 flex flex-col justify-center">
                    <h4 className="text-4xl font-bold text-white mb-6" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}>{t('atuacao', 'constructionAreasTitle')}</h4>
                    <div className="grid grid-cols-2 gap-4 text-base text-gray-100 max-w-xl font-bold">
                      {t('atuacao', 'constructionAreasList').map(area => (
                        <div key={area} className="flex items-center gap-3" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}><span className="text-slate-400 text-lg">→</span> {area}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-8">
              <div className="mb-8">
                <h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'constructionSafetySolutionsTitle')}</h3>
                <div className="w-12 h-1 bg-slate-300 rounded-full"></div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: ShieldCheck, text: t('atuacao', 'constructionSafetyCard1Title'), desc: t('atuacao', 'constructionSafetyCard1Desc') },
                  { icon: Users, text: t('atuacao', 'constructionSafetyCard2Title'), desc: t('atuacao', 'constructionSafetyCard2Desc') },
                  { icon: FileText, text: t('atuacao', 'constructionSafetyCard3Title'), desc: t('atuacao', 'constructionSafetyCard3Desc') },
                ].map((item) => (
                  <div key={item.text} className="group flex flex-col items-start gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-amber-500 hover:bg-slate-700/50 transition">
                    <div className="p-2 rounded-lg"><item.icon className="h-6 w-6 text-amber-500" /></div>
                    <div>
                      <p className="font-bold text-white mb-2">{item.text}</p>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="pt-8">
              <div className="mb-8">
                <h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'constructionWhyTitle')}</h3>
                <div className="w-12 h-1 bg-slate-300 rounded-full"></div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {[
                  { icon: Clock, title: t('atuacao', 'constructionWhyCard1Title'), desc: t('atuacao', 'constructionWhyCard1Desc') },
                  { icon: Building2, title: t('atuacao', 'constructionWhyCard2Title'), desc: t('atuacao', 'constructionWhyCard2Desc') },
                  { icon: TrendingUp, title: t('atuacao', 'constructionWhyCard3Title'), desc: t('atuacao', 'constructionWhyCard3Desc') },
                  { icon: Users, title: t('atuacao', 'constructionWhyCard4Title'), desc: t('atuacao', 'constructionWhyCard4Desc') },
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
                <h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'constructionCommitmentTitle')}</h3>
                <div className="w-12 h-1 bg-slate-300 rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="pb-8 border-b border-slate-700 md:border-b-0 md:border-r md:pr-8">
                  <h5 className="text-lg font-semibold text-white mb-3">{t('atuacao', 'constructionPillar1Title')}</h5>
                  <p className="text-gray-300 text-sm leading-relaxed text-justify">{t('atuacao', 'constructionPillar1Desc')}</p>
                </div>
                <div className="pb-8 border-b border-slate-700 md:border-b-0 md:border-r md:px-8">
                  <h5 className="text-lg font-semibold text-white mb-3">{t('atuacao', 'constructionPillar2Title')}</h5>
                  <p className="text-gray-300 text-sm leading-relaxed text-justify">{t('atuacao', 'constructionPillar2Desc')}</p>
                </div>
                <div className="md:pl-8">
                  <h5 className="text-lg font-semibold text-white mb-3">{t('atuacao', 'constructionPillar3Title')}</h5>
                  <p className="text-gray-300 text-sm leading-relaxed text-justify">{t('atuacao', 'constructionPillar3Desc')}</p>
                </div>
              </div>
            </section>

            <section className="pt-8">
              <div className="mb-8">
                <h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'constructionProjectsTitle')}</h3>
                <div className="w-12 h-1 bg-slate-300 rounded-full"></div>
              </div>
              <p className="text-gray-300 text-sm mb-12">{t('atuacao', 'constructionProjectsText')}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {t('atuacao', 'constructionProjectsList').map(proj => (
                  <div key={proj} className="pb-4 border-b border-slate-700 text-gray-200 font-medium text-sm">{proj}</div>
                ))}
              </div>

              <div className="mt-10">
                <div className="bg-slate-900/50 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl">
                  <h4 className="text-xl md:text-2xl font-bold text-white">BR-101 – Posto PRF</h4>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                    {t('atuacao', 'constructionVideoText')}
                  </p>

                  <div className="mt-6">
                    <div className="relative w-full rounded-2xl overflow-hidden border border-white/10" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        src="https://www.youtube.com/embed/q4z3G8Pqv6k"
                        title="BR-101 – Posto PRF"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full bg-black"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-20 border-t border-slate-700">
              <div className="max-w-2xl mx-auto text-center">
                <h4 className="text-3xl font-semibold text-white mb-4">{t('atuacao', 'constructionCtaTitle')}</h4>
                <p className="text-gray-300 text-base mb-10 leading-relaxed text-justify">{t('atuacao', 'constructionCtaText')}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="flex items-center justify-center gap-2 bg-slate-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-600 transition">
                    <Mail className="h-5 w-5" />
                    {t('atuacao', 'contactButton')}
                  </button>
                  <button className="flex items-center justify-center gap-2 border border-slate-600 text-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition">
                    <FileText className="h-5 w-5" />
                    {t('atuacao', 'proposalButton')}
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    );
  }

  if (activeArea === 'oil') {
    return (
      <section className="relative min-h-screen pt-0 pb-20 animate-fadeIn bg-slate-900">
        <div className="relative h-[55vh] md:h-[65vh] bg-cover bg-center overflow-hidden" style={layerStyle('/petroleo-gas-hero.png')}>
          <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 via-slate-900/40 to-slate-900"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
            <div className="max-w-7xl mx-auto w-full">
              <button onClick={() => setActiveArea(null)} className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold mb-6 transition">← {t('atuacao', 'back')}</button>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">{t('atuacao', 'oilTitle')}</h1>
              <div className="w-24 h-1 bg-amber-500 mb-4"></div>
              <p className="text-xl text-amber-200 max-w-2xl">{t('atuacao', 'oilSubtitle')}</p>
            </div>
          </div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full page-content-reveal pt-12 mb-32">
          <div className="space-y-6 mb-20">
            <div><h2 className="text-4xl font-semibold text-white mb-4">{t('atuacao', 'oilInstitutionalTitle')}</h2><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
            <p className="text-base text-gray-300 leading-relaxed max-w-3xl text-justify">{t('atuacao', 'oilInstitutionalText')}</p>
          </div>
          <div className="space-y-20">
            <section>
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'oilServicesTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[{ icon: Droplet, text: t('atuacao', 'oilService1') }, { icon: Shield, text: t('atuacao', 'oilService2') }, { icon: AlertTriangle, text: t('atuacao', 'oilService3') }, { icon: Users, text: t('atuacao', 'oilService4') }, { icon: Clock, text: t('atuacao', 'oilService5') }, { icon: CheckCircle, text: t('atuacao', 'oilService6') }].map((item) => (<div key={item.text} className="group flex flex-col items-start gap-4 pb-6 border-b border-slate-700 hover:border-slate-500 transition"><div className="p-2 rounded-lg"><item.icon className="h-6 w-6 text-slate-400 group-hover:text-slate-200 transition" /></div><p className="font-medium text-gray-200 group-hover:text-white transition">{item.text}</p></div>))}</div>
            </section>
            <section className="pt-8">
              <div className="mb-12 relative rounded-xl overflow-hidden h-[500px]">
                <picture><source srcSet={resolveAsset('/petroleo-gas-operacao.webp')} type="image/webp" /><img src={resolveAsset('/petroleo-gas-operacao.png')} alt="Operações Petróleo e Gás" className="w-full h-full object-cover" loading="lazy" /></picture>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-800/50 to-transparent"></div>
                <div className="absolute inset-0 p-16 flex flex-col justify-center">
                  <h4 className="text-4xl font-bold text-white mb-6" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}>{t('atuacao', 'oilFieldOpsTitle')}</h4>
                  <ul className="space-y-3 text-base text-gray-100 max-w-xl font-bold">
                    {t('atuacao', 'oilFieldOpsList').map((item) => (<li key={item} className="flex items-center gap-3" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}><span className="text-slate-400 text-lg">→</span> {item}</li>))}
                  </ul>
                </div>
              </div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'oilApplicationsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <ul className="space-y-3 text-base text-gray-300">
                {t('atuacao', 'oilApplicationsList').map((item) => (<li key={item} className="flex items-center gap-3"><span className="text-amber-400 text-lg">→</span> {item}</li>))}
              </ul>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'oilSafetySolutionsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[{ icon: ShieldCheck, text: t('atuacao', 'oilSafetyCard1Title'), desc: t('atuacao', 'oilSafetyCard1Desc') }, { icon: Users, text: t('atuacao', 'oilSafetyCard2Title'), desc: t('atuacao', 'oilSafetyCard2Desc') }, { icon: FileText, text: t('atuacao', 'oilSafetyCard3Title'), desc: t('atuacao', 'oilSafetyCard3Desc') }].map((item) => (<div key={item.text} className="group flex flex-col items-start gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-amber-500 hover:bg-slate-700/50 transition"><div className="p-2 rounded-lg"><item.icon className="h-6 w-6 text-amber-500" /></div><div><p className="font-bold text-white mb-2">{item.text}</p><p className="text-gray-400 text-sm">{item.desc}</p></div></div>))}</div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'oilDifferentialsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">{[{ icon: Clock, title: t('atuacao', 'oilDiffCard1Title'), desc: t('atuacao', 'oilDiffCard1Desc') }, { icon: TrendingUp, title: t('atuacao', 'oilDiffCard2Title'), desc: t('atuacao', 'oilDiffCard2Desc') }, { icon: Users, title: t('atuacao', 'oilDiffCard3Title'), desc: t('atuacao', 'oilDiffCard3Desc') }, { icon: Shield, title: t('atuacao', 'oilDiffCard4Title'), desc: t('atuacao', 'oilDiffCard4Desc') }].map((item, idx) => (<div key={idx} className="flex flex-col gap-4"><item.icon className="h-6 w-6 text-slate-400" /><div><h5 className="font-semibold text-white mb-2">{item.title}</h5><p className="text-sm text-gray-400">{item.desc}</p></div></div>))}</div>
            </section>
            <section className="pt-20 border-t border-slate-700"><div className="max-w-2xl mx-auto text-center"><h4 className="text-3xl font-semibold text-white mb-4">{t('atuacao', 'oilCtaTitle')}</h4><p className="text-gray-300 text-base mb-10 leading-relaxed">{t('atuacao', 'oilCtaText')}</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><button className="flex items-center justify-center gap-2 bg-slate-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-600 transition"><Mail className="h-5 w-5" />{t('atuacao', 'contactButton')}</button><button className="flex items-center justify-center gap-2 border border-slate-600 text-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition"><FileText className="h-5 w-5" />{t('atuacao', 'proposalButton')}</button></div></div></section>
          </div>
        </div>
      </section>
    );
  }

  if (activeArea === 'offshore') {
    return (
      <section className="relative min-h-screen pt-0 pb-20 animate-fadeIn bg-slate-900">
        <div className="relative h-[55vh] md:h-[65vh] bg-cover bg-center overflow-hidden" style={layerStyle('/offshore-maritimo-hero.png')}>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-slate-900/40 to-slate-900"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
            <div className="max-w-7xl mx-auto w-full">
              <button onClick={() => setActiveArea(null)} className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold mb-6 transition">← {t('atuacao', 'back')}</button>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">{t('atuacao', 'offshoreTitle')}</h1>
              <div className="w-24 h-1 bg-amber-500 mb-4"></div>
              <p className="text-xl text-amber-200 max-w-2xl">{t('atuacao', 'offshoreSubtitle')}</p>
            </div>
          </div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full page-content-reveal pt-12 mb-32">
          <div className="space-y-6 mb-20">
            <div><h2 className="text-4xl font-semibold text-white mb-4">{t('atuacao', 'offshoreInstitutionalTitle')}</h2><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
            <p className="text-base text-gray-300 leading-relaxed max-w-3xl text-justify">{t('atuacao', 'offshoreInstitutionalText')}</p>
          </div>
          <div className="space-y-20">
            <section>
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'offshoreServicesTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[{ icon: Users, text: t('atuacao', 'offshoreService1') }, { icon: Target, text: t('atuacao', 'offshoreService2') }, { icon: AlertTriangle, text: t('atuacao', 'offshoreService3') }, { icon: Clock, text: t('atuacao', 'offshoreService4') }, { icon: Shield, text: t('atuacao', 'offshoreService5') }, { icon: CheckCircle, text: t('atuacao', 'offshoreService6') }].map((item) => (<div key={item.text} className="group flex flex-col items-start gap-4 pb-6 border-b border-slate-700 hover:border-slate-500 transition"><div className="p-2 rounded-lg"><item.icon className="h-6 w-6 text-slate-400 group-hover:text-slate-200 transition" /></div><p className="font-medium text-gray-200 group-hover:text-white transition">{item.text}</p></div>))}</div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'offshoreApplicationsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <ul className="space-y-3 text-base text-gray-300">
                {t('atuacao', 'offshoreApplicationsList').map((item) => (<li key={item} className="flex items-center gap-3"><span className="text-amber-400 text-lg">→</span> {item}</li>))}
              </ul>
            </section>
            <section className="pt-8">
              <div className="mb-12 relative rounded-xl overflow-hidden h-[500px]">
                <picture><source srcSet={resolveAsset('/offshore-maritimo-seguranca.webp')} type="image/webp" /><img src={resolveAsset('/offshore-maritimo-seguranca.png')} alt="Segurança Offshore" className="w-full h-full object-cover" loading="lazy" /></picture>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-800/50 to-transparent"></div>
                <div className="absolute inset-0 p-16 flex flex-col justify-center">
                  <h4 className="text-4xl font-bold text-white mb-6" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}>{t('atuacao', 'offshoreTrainingTitle')}</h4>
                  <ul className="space-y-3 text-base text-gray-100 max-w-xl font-bold">
                    {t('atuacao', 'offshoreTrainingList').map((item) => (<li key={item} className="flex items-center gap-3" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}><span className="text-slate-400 text-lg">→</span> {item}</li>))}
                  </ul>
                </div>
              </div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'offshoreSafetySolutionsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[{ icon: ShieldCheck, text: t('atuacao', 'offshoreSafetyCard1Title'), desc: t('atuacao', 'offshoreSafetyCard1Desc') }, { icon: Users, text: t('atuacao', 'offshoreSafetyCard2Title'), desc: t('atuacao', 'offshoreSafetyCard2Desc') }, { icon: FileText, text: t('atuacao', 'offshoreSafetyCard3Title'), desc: t('atuacao', 'offshoreSafetyCard3Desc') }].map((item) => (<div key={item.text} className="group flex flex-col items-start gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-amber-500 hover:bg-slate-700/50 transition"><div className="p-2 rounded-lg"><item.icon className="h-6 w-6 text-amber-500" /></div><div><p className="font-bold text-white mb-2">{item.text}</p><p className="text-gray-400 text-sm">{item.desc}</p></div></div>))}</div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'offshoreDifferentialsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">{[{ icon: Anchor, title: t('atuacao', 'offshoreDiffCard1Title'), desc: t('atuacao', 'offshoreDiffCard1Desc') }, { icon: TrendingUp, title: t('atuacao', 'offshoreDiffCard2Title'), desc: t('atuacao', 'offshoreDiffCard2Desc') }, { icon: Users, title: t('atuacao', 'offshoreDiffCard3Title'), desc: t('atuacao', 'offshoreDiffCard3Desc') }, { icon: Shield, title: t('atuacao', 'offshoreDiffCard4Title'), desc: t('atuacao', 'offshoreDiffCard4Desc') }].map((item, idx) => (<div key={idx} className="flex flex-col gap-4"><item.icon className="h-6 w-6 text-slate-400" /><div><h5 className="font-semibold text-white mb-2">{item.title}</h5><p className="text-sm text-gray-400">{item.desc}</p></div></div>))}</div>
            </section>
            <section className="pt-20 border-t border-slate-700"><div className="max-w-2xl mx-auto text-center"><h4 className="text-3xl font-semibold text-white mb-4">{t('atuacao', 'offshoreCtaTitle')}</h4><p className="text-gray-300 text-base mb-10 leading-relaxed">{t('atuacao', 'offshoreCtaText')}</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><button className="flex items-center justify-center gap-2 bg-slate-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-600 transition"><Mail className="h-5 w-5" />{t('atuacao', 'contactButton')}</button><button className="flex items-center justify-center gap-2 border border-slate-600 text-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition"><FileText className="h-5 w-5" />{t('atuacao', 'proposalButton')}</button></div></div></section>
          </div>
        </div>
      </section>
    );
  }

  if (activeArea === 'port') {
    return (
      <section className="relative min-h-screen pt-0 pb-20 animate-fadeIn bg-slate-900">
        <div className="relative h-[55vh] md:h-[65vh] bg-cover bg-center overflow-hidden" style={layerStyle('/portuario-hero.png')}>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-800/20 via-slate-900/40 to-slate-900"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
            <div className="max-w-7xl mx-auto w-full">
              <button onClick={() => setActiveArea(null)} className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold mb-6 transition">← {t('atuacao', 'back')}</button>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">{t('atuacao', 'portTitle')}</h1>
              <div className="w-24 h-1 bg-amber-500 mb-4"></div>
              <p className="text-xl text-amber-200 max-w-2xl">{t('atuacao', 'portSubtitle')}</p>
            </div>
          </div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full page-content-reveal pt-12 mb-32">
          <div className="space-y-6 mb-20">
            <div><h2 className="text-4xl font-semibold text-white mb-4">{t('atuacao', 'portInstitutionalTitle')}</h2><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
            <p className="text-base text-gray-300 leading-relaxed max-w-3xl text-justify">{t('atuacao', 'portInstitutionalText')}</p>
          </div>
          <div className="space-y-20">
            <section>
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'portServicesTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[{ icon: Building2, text: t('atuacao', 'portService1') }, { icon: Target, text: t('atuacao', 'portService2') }, { icon: CheckCircle, text: t('atuacao', 'portService3') }, { icon: Users, text: t('atuacao', 'portService4') }, { icon: Shield, text: t('atuacao', 'portService5') }, { icon: TrendingUp, text: t('atuacao', 'portService6') }].map((item) => (<div key={item.text} className="group flex flex-col items-start gap-4 pb-6 border-b border-slate-700 hover:border-slate-500 transition"><div className="p-2 rounded-lg"><item.icon className="h-6 w-6 text-slate-400 group-hover:text-slate-200 transition" /></div><p className="font-medium text-gray-200 group-hover:text-white transition">{item.text}</p></div>))}</div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'portApplicationsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <ul className="space-y-3 text-base text-gray-300">
                {t('atuacao', 'portApplicationsList').map((item) => (<li key={item} className="flex items-center gap-3"><span className="text-amber-400 text-lg">→</span> {item}</li>))}
              </ul>
            </section>
            <section className="pt-8">
              <div className="mb-12 relative rounded-xl overflow-hidden h-[500px]">
                <picture><source srcSet={resolveAsset('/portuario-operacao.webp')} type="image/webp" /><img src={resolveAsset('/portuario-operacao.png')} alt="Operações Portuárias" className="w-full h-full object-cover" loading="lazy" /></picture>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-800/50 to-transparent"></div>
                <div className="absolute inset-0 p-16 flex flex-col justify-center">
                  <h4 className="text-4xl font-bold text-white mb-6" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}>{t('atuacao', 'portOpsTitle')}</h4>
                  <ul className="space-y-3 text-base text-gray-100 max-w-xl font-bold">
                    {t('atuacao', 'portOpsList').map((item) => (<li key={item} className="flex items-center gap-3" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}><span className="text-slate-400 text-lg">→</span> {item}</li>))}
                  </ul>
                </div>
              </div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'portSafetySolutionsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[{ icon: ShieldCheck, text: t('atuacao', 'portSafetyCard1Title'), desc: t('atuacao', 'portSafetyCard1Desc') }, { icon: Users, text: t('atuacao', 'portSafetyCard2Title'), desc: t('atuacao', 'portSafetyCard2Desc') }, { icon: FileText, text: t('atuacao', 'portSafetyCard3Title'), desc: t('atuacao', 'portSafetyCard3Desc') }].map((item) => (<div key={item.text} className="group flex flex-col items-start gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-amber-500 hover:bg-slate-700/50 transition"><div className="p-2 rounded-lg"><item.icon className="h-6 w-6 text-amber-500" /></div><div><p className="font-bold text-white mb-2">{item.text}</p><p className="text-gray-400 text-sm">{item.desc}</p></div></div>))}</div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'portDifferentialsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">{[{ icon: MapPin, title: t('atuacao', 'portDiffCard1Title'), desc: t('atuacao', 'portDiffCard1Desc') }, { icon: TrendingUp, title: t('atuacao', 'portDiffCard2Title'), desc: t('atuacao', 'portDiffCard2Desc') }, { icon: Users, title: t('atuacao', 'portDiffCard3Title'), desc: t('atuacao', 'portDiffCard3Desc') }, { icon: Shield, title: t('atuacao', 'portDiffCard4Title'), desc: t('atuacao', 'portDiffCard4Desc') }].map((item, idx) => (<div key={idx} className="flex flex-col gap-4"><item.icon className="h-6 w-6 text-slate-400" /><div><h5 className="font-semibold text-white mb-2">{item.title}</h5><p className="text-sm text-gray-400">{item.desc}</p></div></div>))}</div>
            </section>

            <section className="pt-8">
              <div className="mb-8">
                <h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'portProjectsTrainingTitle')}</h3>
                <div className="w-12 h-1 bg-slate-300 rounded-full"></div>
              </div>
              <div className="mt-10">
                <div className="bg-slate-900/50 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl">
                  <h4 className="text-xl md:text-2xl font-bold text-white">{t('atuacao', 'portProjectTitle')}</h4>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                    {t('atuacao', 'portProjectText')}
                  </p>

                  <div className="mt-6">
                    <div className="relative w-full rounded-2xl overflow-hidden border border-white/10" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        src="https://www.youtube.com/embed/OtFlGt2S7S8"
                        title={t('atuacao', 'portProjectTitle')}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full bg-black"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="pt-20 border-t border-slate-700"><div className="max-w-2xl mx-auto text-center"><h4 className="text-3xl font-semibold text-white mb-4">{t('atuacao', 'portCtaTitle')}</h4><p className="text-gray-300 text-base mb-10 leading-relaxed">{t('atuacao', 'portCtaText')}</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><button className="flex items-center justify-center gap-2 bg-slate-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-600 transition"><Mail className="h-5 w-5" />{t('atuacao', 'contactButton')}</button><button className="flex items-center justify-center gap-2 border border-slate-600 text-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition"><FileText className="h-5 w-5" />{t('atuacao', 'proposalButton')}</button></div></div></section>
          </div>
        </div>
      </section>
    );
  }

  if (activeArea === 'industrial') {
    return (
      <section className="relative min-h-screen pt-0 pb-20 animate-fadeIn bg-slate-900">
        <div className="relative h-[55vh] md:h-[65vh] bg-cover bg-center overflow-hidden" style={layerStyle('/industrial-hero.png')}>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-slate-900/40 to-slate-900"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
            <div className="max-w-7xl mx-auto w-full">
              <button onClick={() => setActiveArea(null)} className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold mb-6 transition">← {t('atuacao', 'back')}</button>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">{t('atuacao', 'industrialTitle')}</h1>
              <div className="w-24 h-1 bg-amber-500 mb-4"></div>
              <p className="text-xl text-amber-200 max-w-2xl">{t('atuacao', 'industrialSubtitle')}</p>
            </div>
          </div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full page-content-reveal pt-12 mb-32">
          <div className="space-y-6 mb-20">
            <div><h2 className="text-4xl font-semibold text-white mb-4">{t('atuacao', 'industrialInstitutionalTitle')}</h2><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
            <p className="text-base text-gray-300 leading-relaxed max-w-3xl text-justify">{t('atuacao', 'industrialInstitutionalText')}</p>
          </div>
          <div className="space-y-20">
            <section>
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'industrialServicesTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[{ icon: Building2, text: t('atuacao', 'industrialService1') }, { icon: Cog, text: t('atuacao', 'industrialService2') }, { icon: TrendingUp, text: t('atuacao', 'industrialService3') }, { icon: Shield, text: t('atuacao', 'industrialService4') }, { icon: CheckCircle, text: t('atuacao', 'industrialService5') }, { icon: Users, text: t('atuacao', 'industrialService6') }].map((item) => (<div key={item.text} className="group flex flex-col items-start gap-4 pb-6 border-b border-slate-700 hover:border-slate-500 transition"><div className="p-2 rounded-lg"><item.icon className="h-6 w-6 text-slate-400 group-hover:text-slate-200 transition" /></div><p className="font-medium text-gray-200 group-hover:text-white transition">{item.text}</p></div>))}</div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'industrialApplicationsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <ul className="space-y-3 text-base text-gray-300">
                {t('atuacao', 'industrialApplicationsList').map((item) => (<li key={item} className="flex items-center gap-3"><span className="text-amber-400 text-lg">→</span> {item}</li>))}
              </ul>
            </section>
            <section className="pt-8">
              <div className="mb-12 relative rounded-xl overflow-hidden h-[500px]">
                <picture><source srcSet={resolveAsset('/industrial-inspecao.webp')} type="image/webp" /><img src={resolveAsset('/industrial-inspecao.png')} alt="Inspeção Industrial" className="w-full h-full object-cover" loading="lazy" /></picture>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-800/50 to-transparent"></div>
                <div className="absolute inset-0 p-16 flex flex-col justify-center">
                  <h4 className="text-4xl font-bold text-white mb-6" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}>{t('atuacao', 'industrialInspectionTitle')}</h4>
                  <ul className="space-y-3 text-base text-gray-100 max-w-xl font-bold">
                    {t('atuacao', 'industrialInspectionList').map((item) => (<li key={item} className="flex items-center gap-3" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}><span className="text-slate-400 text-lg">→</span> {item}</li>))}
                  </ul>
                </div>
              </div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'industrialSafetySolutionsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[{ icon: ShieldCheck, text: t('atuacao', 'industrialSafetyCard1Title'), desc: t('atuacao', 'industrialSafetyCard1Desc') }, { icon: Users, text: t('atuacao', 'industrialSafetyCard2Title'), desc: t('atuacao', 'industrialSafetyCard2Desc') }, { icon: FileText, text: t('atuacao', 'industrialSafetyCard3Title'), desc: t('atuacao', 'industrialSafetyCard3Desc') }].map((item) => (<div key={item.text} className="group flex flex-col items-start gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-amber-500 hover:bg-slate-700/50 transition"><div className="p-2 rounded-lg"><item.icon className="h-6 w-6 text-amber-500" /></div><div><p className="font-bold text-white mb-2">{item.text}</p><p className="text-gray-400 text-sm">{item.desc}</p></div></div>))}</div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'industrialDifferentialsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">{[{ icon: Target, title: t('atuacao', 'industrialDiffCard1Title'), desc: t('atuacao', 'industrialDiffCard1Desc') }, { icon: TrendingUp, title: t('atuacao', 'industrialDiffCard2Title'), desc: t('atuacao', 'industrialDiffCard2Desc') }, { icon: Users, title: t('atuacao', 'industrialDiffCard3Title'), desc: t('atuacao', 'industrialDiffCard3Desc') }, { icon: Shield, title: t('atuacao', 'industrialDiffCard4Title'), desc: t('atuacao', 'industrialDiffCard4Desc') }].map((item, idx) => (<div key={idx} className="flex flex-col gap-4"><item.icon className="h-6 w-6 text-slate-400" /><div><h5 className="font-semibold text-white mb-2">{item.title}</h5><p className="text-sm text-gray-400">{item.desc}</p></div></div>))}</div>
            </section>
            <section className="pt-20 border-t border-slate-700"><div className="max-w-2xl mx-auto text-center"><h4 className="text-3xl font-semibold text-white mb-4">{t('atuacao', 'industrialCtaTitle')}</h4><p className="text-gray-300 text-base mb-10 leading-relaxed">{t('atuacao', 'industrialCtaText')}</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><button className="flex items-center justify-center gap-2 bg-slate-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-600 transition"><Mail className="h-5 w-5" />{t('atuacao', 'contactButton')}</button><button className="flex items-center justify-center gap-2 border border-slate-600 text-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition"><FileText className="h-5 w-5" />{t('atuacao', 'proposalButton')}</button></div></div></section>
          </div>
        </div>
      </section>
    );
  }

  if (activeArea === 'energy') {
    return (
      <section className="relative min-h-screen pt-0 pb-20 animate-fadeIn bg-slate-900">
        <div className="relative h-[55vh] md:h-[65vh] bg-cover bg-center overflow-hidden" style={layerStyle('/energia-hero.png')}>
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/20 via-slate-900/40 to-slate-900"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
            <div className="max-w-7xl mx-auto w-full">
              <button onClick={() => setActiveArea(null)} className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold mb-6 transition">← {t('atuacao', 'back')}</button>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">{t('atuacao', 'energyTitle')}</h1>
              <div className="w-24 h-1 bg-amber-500 mb-4"></div>
              <p className="text-xl text-amber-200 max-w-2xl">{t('atuacao', 'energySubtitle')}</p>
            </div>
          </div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full page-content-reveal pt-12 mb-32">
          <div className="space-y-6 mb-20">
            <div><h2 className="text-4xl font-semibold text-white mb-4">{t('atuacao', 'energyInstitutionalTitle')}</h2><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
            <p className="text-base text-gray-300 leading-relaxed max-w-3xl text-justify">{t('atuacao', 'energyInstitutionalText')}</p>
          </div>
          <div className="space-y-20">
            <section>
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'energyServicesTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[{ icon: Zap, text: t('atuacao', 'energyService1') }, { icon: TrendingUp, text: t('atuacao', 'energyService2') }, { icon: Building2, text: t('atuacao', 'energyService3') }, { icon: Target, text: t('atuacao', 'energyService4') }, { icon: CheckCircle, text: t('atuacao', 'energyService5') }, { icon: Users, text: t('atuacao', 'energyService6') }].map((item) => (<div key={item.text} className="group flex flex-col items-start gap-4 pb-6 border-b border-slate-700 hover:border-slate-500 transition"><div className="p-2 rounded-lg"><item.icon className="h-6 w-6 text-slate-400 group-hover:text-slate-200 transition" /></div><p className="font-medium text-gray-200 group-hover:text-white transition">{item.text}</p></div>))}</div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'energyApplicationsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <ul className="space-y-3 text-base text-gray-300">
                {t('atuacao', 'energyApplicationsList').map((item) => (<li key={item} className="flex items-center gap-3"><span className="text-amber-400 text-lg">→</span> {item}</li>))}
              </ul>
            </section>
            <section className="pt-8">
              <div className="mb-12 relative rounded-xl overflow-hidden h-[500px]">
                <picture><source srcSet={resolveAsset('/energia-eletrica.webp')} type="image/webp" /><img src={resolveAsset('/energia-eletrica.png')} alt="Infraestrutura Energética" className="w-full h-full object-cover" loading="lazy" /></picture>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-800/50 to-transparent"></div>
                <div className="absolute inset-0 p-16 flex flex-col justify-center">
                  <h4 className="text-4xl font-bold text-white mb-6" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}>{t('atuacao', 'energyInfraTitle')}</h4>
                  <ul className="space-y-3 text-base text-gray-100 max-w-xl font-bold">
                    {t('atuacao', 'energyInfraList').map((item) => (<li key={item} className="flex items-center gap-3" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}><span className="text-slate-400 text-lg">→</span> {item}</li>))}
                  </ul>
                </div>
              </div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'energySafetySolutionsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[{ icon: ShieldCheck, text: t('atuacao', 'energySafetyCard1Title'), desc: t('atuacao', 'energySafetyCard1Desc') }, { icon: Users, text: t('atuacao', 'energySafetyCard2Title'), desc: t('atuacao', 'energySafetyCard2Desc') }, { icon: FileText, text: t('atuacao', 'energySafetyCard3Title'), desc: t('atuacao', 'energySafetyCard3Desc') }].map((item) => (<div key={item.text} className="group flex flex-col items-start gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-amber-500 hover:bg-slate-700/50 transition"><div className="p-2 rounded-lg"><item.icon className="h-6 w-6 text-amber-500" /></div><div><p className="font-bold text-white mb-2">{item.text}</p><p className="text-gray-400 text-sm">{item.desc}</p></div></div>))}</div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'energyDifferentialsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">{[{ icon: Zap, title: t('atuacao', 'energyDiffCard1Title'), desc: t('atuacao', 'energyDiffCard1Desc') }, { icon: TrendingUp, title: t('atuacao', 'energyDiffCard2Title'), desc: t('atuacao', 'energyDiffCard2Desc') }, { icon: Users, title: t('atuacao', 'energyDiffCard3Title'), desc: t('atuacao', 'energyDiffCard3Desc') }, { icon: Shield, title: t('atuacao', 'energyDiffCard4Title'), desc: t('atuacao', 'energyDiffCard4Desc') }].map((item, idx) => (<div key={idx} className="flex flex-col gap-4"><item.icon className="h-6 w-6 text-slate-400" /><div><h5 className="font-semibold text-white mb-2">{item.title}</h5><p className="text-sm text-gray-400">{item.desc}</p></div></div>))}</div>
            </section>
            <section className="pt-20 border-t border-slate-700"><div className="max-w-2xl mx-auto text-center"><h4 className="text-3xl font-semibold text-white mb-4">{t('atuacao', 'energyCtaTitle')}</h4><p className="text-gray-300 text-base mb-10 leading-relaxed">{t('atuacao', 'energyCtaText')}</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><button className="flex items-center justify-center gap-2 bg-slate-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-600 transition"><Mail className="h-5 w-5" />{t('atuacao', 'contactButton')}</button><button className="flex items-center justify-center gap-2 border border-slate-600 text-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition"><FileText className="h-5 w-5" />{t('atuacao', 'proposalButton')}</button></div></div></section>
          </div>
        </div>
      </section>
    );
  }

  if (activeArea === 'logistics') {
    return (
      <section className="relative min-h-screen pt-0 pb-20 animate-fadeIn bg-slate-900">
        <div className="relative h-[55vh] md:h-[65vh] bg-cover bg-center overflow-hidden" style={layerStyle('/logistica-hero.png')}>
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 via-slate-900/40 to-slate-900"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
            <div className="max-w-7xl mx-auto w-full">
              <button onClick={() => setActiveArea(null)} className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold mb-6 transition">← {t('atuacao', 'back')}</button>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">{t('atuacao', 'logisticsTitle')}</h1>
              <div className="w-24 h-1 bg-amber-500 mb-4"></div>
              <p className="text-xl text-amber-200 max-w-2xl">{t('atuacao', 'logisticsSubtitle')}</p>
            </div>
          </div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full page-content-reveal pt-12 mb-32">
          <div className="space-y-6 mb-20">
            <div><h2 className="text-4xl font-semibold text-white mb-4">{t('atuacao', 'logisticsInstitutionalTitle')}</h2><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
            <p className="text-base text-gray-300 leading-relaxed max-w-3xl text-justify">{t('atuacao', 'logisticsInstitutionalText')}</p>
          </div>
          <div className="space-y-20">
            <section>
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'logisticsServicesTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[{ icon: Building2, text: t('atuacao', 'logisticsService1') }, { icon: Target, text: t('atuacao', 'logisticsService2') }, { icon: TrendingUp, text: t('atuacao', 'logisticsService3') }, { icon: CheckCircle, text: t('atuacao', 'logisticsService4') }, { icon: Users, text: t('atuacao', 'logisticsService5') }, { icon: Package, text: t('atuacao', 'logisticsService6') }].map((item) => (<div key={item.text} className="group flex flex-col items-start gap-4 pb-6 border-b border-slate-700 hover:border-slate-500 transition"><div className="p-2 rounded-lg"><item.icon className="h-6 w-6 text-slate-400 group-hover:text-slate-200 transition" /></div><p className="font-medium text-gray-200 group-hover:text-white transition">{item.text}</p></div>))}</div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'logisticsApplicationsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <ul className="space-y-3 text-base text-gray-300">
                {t('atuacao', 'logisticsApplicationsList').map((item) => (<li key={item} className="flex items-center gap-3"><span className="text-amber-400 text-lg">→</span> {item}</li>))}
              </ul>
            </section>
            <section className="pt-8">
              <div className="mb-12 relative rounded-xl overflow-hidden h-[500px]">
                <picture><source srcSet={resolveAsset('/logistica-distribuicao.webp')} type="image/webp" /><img src={resolveAsset('/logistica-distribuicao.png')} alt="Centros de Distribuição" className="w-full h-full object-cover" loading="lazy" /></picture>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-800/50 to-transparent"></div>
                <div className="absolute inset-0 p-16 flex flex-col justify-center">
                  <h4 className="text-4xl font-bold text-white mb-6" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}>{t('atuacao', 'logisticsCentersTitle')}</h4>
                  <ul className="space-y-3 text-base text-gray-100 max-w-xl font-bold">
                    {t('atuacao', 'logisticsCentersList').map((item) => (<li key={item} className="flex items-center gap-3" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}><span className="text-slate-400 text-lg">→</span> {item}</li>))}
                  </ul>
                </div>
              </div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'logisticsSafetySolutionsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[{ icon: ShieldCheck, text: t('atuacao', 'logisticsSafetyCard1Title'), desc: t('atuacao', 'logisticsSafetyCard1Desc') }, { icon: Users, text: t('atuacao', 'logisticsSafetyCard2Title'), desc: t('atuacao', 'logisticsSafetyCard2Desc') }, { icon: FileText, text: t('atuacao', 'logisticsSafetyCard3Title'), desc: t('atuacao', 'logisticsSafetyCard3Desc') }].map((item) => (<div key={item.text} className="group flex flex-col items-start gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-amber-500 hover:bg-slate-700/50 transition"><div className="p-2 rounded-lg"><item.icon className="h-6 w-6 text-amber-500" /></div><div><p className="font-bold text-white mb-2">{item.text}</p><p className="text-gray-400 text-sm">{item.desc}</p></div></div>))}</div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'logisticsDifferentialsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">{[{ icon: Briefcase, title: t('atuacao', 'logisticsDiffCard1Title'), desc: t('atuacao', 'logisticsDiffCard1Desc') }, { icon: TrendingUp, title: t('atuacao', 'logisticsDiffCard2Title'), desc: t('atuacao', 'logisticsDiffCard2Desc') }, { icon: Users, title: t('atuacao', 'logisticsDiffCard3Title'), desc: t('atuacao', 'logisticsDiffCard3Desc') }, { icon: Target, title: t('atuacao', 'logisticsDiffCard4Title'), desc: t('atuacao', 'logisticsDiffCard4Desc') }].map((item, idx) => (<div key={idx} className="flex flex-col gap-4"><item.icon className="h-6 w-6 text-slate-400" /><div><h5 className="font-semibold text-white mb-2">{item.title}</h5><p className="text-sm text-gray-400">{item.desc}</p></div></div>))}</div>
            </section>
            <section className="pt-20 border-t border-slate-700"><div className="max-w-2xl mx-auto text-center"><h4 className="text-3xl font-semibold text-white mb-4">{t('atuacao', 'logisticsCtaTitle')}</h4><p className="text-gray-300 text-base mb-10 leading-relaxed">{t('atuacao', 'logisticsCtaText')}</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><button className="flex items-center justify-center gap-2 bg-slate-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-600 transition"><Mail className="h-5 w-5" />{t('atuacao', 'contactButton')}</button><button className="flex items-center justify-center gap-2 border border-slate-600 text-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition"><FileText className="h-5 w-5" />{t('atuacao', 'proposalButton')}</button></div></div></section>
          </div>
        </div>
      </section>
    );
  }

  if (activeArea === 'shipyards') {
    return (
      <section className="relative min-h-screen pt-0 pb-20 animate-fadeIn bg-slate-900">
        <div className="relative h-[55vh] md:h-[65vh] bg-cover bg-center overflow-hidden" style={layerStyle('/estaleiros-hero.png')}>
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 via-slate-900/40 to-slate-900"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
            <div className="max-w-7xl mx-auto w-full">
              <button onClick={() => setActiveArea(null)} className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold mb-6 transition">← {t('atuacao', 'back')}</button>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">{t('atuacao', 'shipyardsTitle')}</h1>
              <div className="w-24 h-1 bg-amber-500 mb-4"></div>
              <p className="text-xl text-amber-200 max-w-2xl">{t('atuacao', 'shipyardsSubtitle')}</p>
            </div>
          </div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full page-content-reveal pt-12 mb-32">
          <div className="space-y-6 mb-20">
            <div><h2 className="text-4xl font-semibold text-white mb-4">{t('atuacao', 'shipyardsInstitutionalTitle')}</h2><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
            <p className="text-base text-gray-300 leading-relaxed max-w-3xl text-justify">{t('atuacao', 'shipyardsInstitutionalText')}</p>
          </div>
          <div className="space-y-20">
            <section>
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'shipyardsServicesTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[{ icon: Shield, text: t('atuacao', 'shipyardsService1') }, { icon: Users, text: t('atuacao', 'shipyardsService2') }, { icon: Building2, text: t('atuacao', 'shipyardsService3') }, { icon: TrendingUp, text: t('atuacao', 'shipyardsService4') }, { icon: CheckCircle, text: t('atuacao', 'shipyardsService5') }, { icon: Clock, text: t('atuacao', 'shipyardsService6') }].map((item) => (<div key={item.text} className="group flex flex-col items-start gap-4 pb-6 border-b border-slate-700 hover:border-slate-500 transition"><div className="p-2 rounded-lg"><item.icon className="h-6 w-6 text-slate-400 group-hover:text-slate-200 transition" /></div><p className="font-medium text-gray-200 group-hover:text-white transition">{item.text}</p></div>))}</div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'shipyardsApplicationsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <ul className="space-y-3 text-base text-gray-300">
                {t('atuacao', 'shipyardsApplicationsList').map((item) => (<li key={item} className="flex items-center gap-3"><span className="text-amber-400 text-lg">→</span> {item}</li>))}
              </ul>
            </section>
            <section className="pt-8">
              <div className="mb-12 relative rounded-xl overflow-hidden h-[500px]">
                <picture><source srcSet={resolveAsset('/estaleiros-construcao.webp')} type="image/webp" /><img src={resolveAsset('/estaleiros-construcao.png')} alt="Construção Naval" className="w-full h-full object-cover" loading="lazy" /></picture>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-800/50 to-transparent"></div>
                <div className="absolute inset-0 p-16 flex flex-col justify-center">
                  <h4 className="text-4xl font-bold text-white mb-6" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}>{t('atuacao', 'shipyardsNavalTitle')}</h4>
                  <ul className="space-y-3 text-base text-gray-100 max-w-xl font-bold">
                    {t('atuacao', 'shipyardsNavalList').map((item) => (<li key={item} className="flex items-center gap-3" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}><span className="text-slate-400 text-lg">→</span> {item}</li>))}
                  </ul>
                </div>
              </div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'shipyardsSafetySolutionsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[{ icon: ShieldCheck, text: t('atuacao', 'shipyardsSafetyCard1Title'), desc: t('atuacao', 'shipyardsSafetyCard1Desc') }, { icon: Users, text: t('atuacao', 'shipyardsSafetyCard2Title'), desc: t('atuacao', 'shipyardsSafetyCard2Desc') }, { icon: FileText, text: t('atuacao', 'shipyardsSafetyCard3Title'), desc: t('atuacao', 'shipyardsSafetyCard3Desc') }].map((item) => (<div key={item.text} className="group flex flex-col items-start gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-amber-500 hover:bg-slate-700/50 transition"><div className="p-2 rounded-lg"><item.icon className="h-6 w-6 text-amber-500" /></div><div><p className="font-bold text-white mb-2">{item.text}</p><p className="text-gray-400 text-sm">{item.desc}</p></div></div>))}</div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'shipyardsDifferentialsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">{[{ icon: ShieldCheck, title: t('atuacao', 'shipyardsDiffCard1Title'), desc: t('atuacao', 'shipyardsDiffCard1Desc') }, { icon: TrendingUp, title: t('atuacao', 'shipyardsDiffCard2Title'), desc: t('atuacao', 'shipyardsDiffCard2Desc') }, { icon: Users, title: t('atuacao', 'shipyardsDiffCard3Title'), desc: t('atuacao', 'shipyardsDiffCard3Desc') }, { icon: Clock, title: t('atuacao', 'shipyardsDiffCard4Title'), desc: t('atuacao', 'shipyardsDiffCard4Desc') }].map((item, idx) => (<div key={idx} className="flex flex-col gap-4"><item.icon className="h-6 w-6 text-slate-400" /><div><h5 className="font-semibold text-white mb-2">{item.title}</h5><p className="text-sm text-gray-400">{item.desc}</p></div></div>))}</div>
            </section>
            <section className="pt-20 border-t border-slate-700"><div className="max-w-2xl mx-auto text-center"><h4 className="text-3xl font-semibold text-white mb-4">{t('atuacao', 'shipyardsCtaTitle')}</h4><p className="text-gray-300 text-base mb-10 leading-relaxed">{t('atuacao', 'shipyardsCtaText')}</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><button className="flex items-center justify-center gap-2 bg-slate-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-600 transition"><Mail className="h-5 w-5" />{t('atuacao', 'contactButton')}</button><button className="flex items-center justify-center gap-2 border border-slate-600 text-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition"><FileText className="h-5 w-5" />{t('atuacao', 'proposalButton')}</button></div></div></section>
          </div>
        </div>
      </section>
    );
  }

  if (activeArea === 'fpso') {
    return (
      <section className="relative min-h-screen pt-0 pb-20 animate-fadeIn bg-slate-900">
        <div className="relative h-[55vh] md:h-[65vh] bg-cover bg-center overflow-hidden" style={layerStyle('/fpso-plataformas-hero.png')}>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-900"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
            <div className="max-w-7xl mx-auto w-full">
              <button onClick={() => setActiveArea(null)} className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold mb-6 transition">← {t('atuacao', 'back')}</button>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">{t('atuacao', 'fpsoTitle')}</h1>
              <div className="w-24 h-1 bg-amber-500 mb-4"></div>
              <p className="text-xl text-amber-200 max-w-2xl">{t('atuacao', 'fpsoSubtitle')}</p>
            </div>
          </div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full page-content-reveal pt-12 mb-32">
          <div className="space-y-6 mb-20">
            <div><h2 className="text-4xl font-semibold text-white mb-4">{t('atuacao', 'fpsoInstitutionalTitle')}</h2><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
            <p className="text-base text-gray-300 leading-relaxed max-w-3xl">{t('atuacao', 'fpsoInstitutionalText')}</p>
          </div>
          <div className="space-y-20">
            <section>
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'fpsoServicesTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[{ icon: Users, text: t('atuacao', 'fpsoService1') }, { icon: TrendingUp, text: t('atuacao', 'fpsoService2') }, { icon: Clock, text: t('atuacao', 'fpsoService3') }, { icon: AlertTriangle, text: t('atuacao', 'fpsoService4') }, { icon: Shield, text: t('atuacao', 'fpsoService5') }, { icon: CheckCircle, text: t('atuacao', 'fpsoService6') }].map((item) => (<div key={item.text} className="group flex flex-col items-start gap-4 pb-6 border-b border-slate-700 hover:border-slate-500 transition"><div className="p-2 rounded-lg"><item.icon className="h-6 w-6 text-slate-400 group-hover:text-slate-200 transition" /></div><p className="font-medium text-gray-200 group-hover:text-white transition">{item.text}</p></div>))}</div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'fpsoApplicationsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <ul className="space-y-3 text-base text-gray-300">
                {t('atuacao', 'fpsoApplicationsList').map((item) => (<li key={item} className="flex items-center gap-3"><span className="text-amber-400 text-lg">→</span> {item}</li>))}
              </ul>
            </section>
            <section className="pt-8">
              <div className="mb-12 relative rounded-xl overflow-hidden h-[500px]">
                <picture><source srcSet={resolveAsset('/fpso-controle.webp')} type="image/webp" /><img src={resolveAsset('/fpso-controle.png')} alt="Operações FPSO" className="w-full h-full object-cover" loading="lazy" /></picture>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-800/50 to-transparent"></div>
                <div className="absolute inset-0 p-16 flex flex-col justify-center">
                  <h4 className="text-4xl font-bold text-white mb-6" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}>{t('atuacao', 'fpsoOpsTitle')}</h4>
                  <ul className="space-y-3 text-base text-gray-100 max-w-xl font-bold">
                    {t('atuacao', 'fpsoOpsList').map((item) => (<li key={item} className="flex items-center gap-3" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}><span className="text-slate-400 text-lg">→</span> {item}</li>))}
                  </ul>
                </div>
              </div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'fpsoSafetySolutionsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[{ icon: ShieldCheck, text: t('atuacao', 'fpsoSafetyCard1Title'), desc: t('atuacao', 'fpsoSafetyCard1Desc') }, { icon: Users, text: t('atuacao', 'fpsoSafetyCard2Title'), desc: t('atuacao', 'fpsoSafetyCard2Desc') }, { icon: FileText, text: t('atuacao', 'fpsoSafetyCard3Title'), desc: t('atuacao', 'fpsoSafetyCard3Desc') }].map((item) => (<div key={item.text} className="group flex flex-col items-start gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-amber-500 hover:bg-slate-700/50 transition"><div className="p-2 rounded-lg"><item.icon className="h-6 w-6 text-amber-500" /></div><div><p className="font-bold text-white mb-2">{item.text}</p><p className="text-gray-400 text-sm">{item.desc}</p></div></div>))}</div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'fpsoDifferentialsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">{[{ icon: Anchor, title: t('atuacao', 'fpsoDiffCard1Title'), desc: t('atuacao', 'fpsoDiffCard1Desc') }, { icon: TrendingUp, title: t('atuacao', 'fpsoDiffCard2Title'), desc: t('atuacao', 'fpsoDiffCard2Desc') }, { icon: Users, title: t('atuacao', 'fpsoDiffCard3Title'), desc: t('atuacao', 'fpsoDiffCard3Desc') }, { icon: Shield, title: t('atuacao', 'fpsoDiffCard4Title'), desc: t('atuacao', 'fpsoDiffCard4Desc') }].map((item, idx) => (<div key={idx} className="flex flex-col gap-4"><item.icon className="h-6 w-6 text-slate-400" /><div><h5 className="font-semibold text-white mb-2">{item.title}</h5><p className="text-sm text-gray-400">{item.desc}</p></div></div>))}</div>
            </section>
            <section className="pt-20 border-t border-slate-700"><div className="max-w-2xl mx-auto text-center"><h4 className="text-3xl font-semibold text-white mb-4">{t('atuacao', 'fpsoCtaTitle')}</h4><p className="text-gray-300 text-base mb-10 leading-relaxed">{t('atuacao', 'fpsoCtaText')}</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><button className="flex items-center justify-center gap-2 bg-slate-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-600 transition"><Mail className="h-5 w-5" />{t('atuacao', 'contactButton')}</button><button className="flex items-center justify-center gap-2 border border-slate-600 text-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition"><FileText className="h-5 w-5" />{t('atuacao', 'proposalButton')}</button></div></div></section>
          </div>
        </div>
      </section>
    );
  }

  if (activeArea === 'infra') {
    return (
      <section className="relative min-h-screen pt-0 pb-20 animate-fadeIn bg-slate-900">
        <div className="relative h-[55vh] md:h-[65vh] bg-cover bg-center overflow-hidden" style={layerStyle('/infraestrutura-hero.png')}>
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-slate-900/40 to-slate-900"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
            <div className="max-w-7xl mx-auto w-full">
              <button onClick={() => setActiveArea(null)} className="flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold mb-6 transition">← {t('atuacao', 'back')}</button>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">{t('atuacao', 'infraTitle')}</h1>
              <div className="w-24 h-1 bg-amber-500 mb-4"></div>
              <p className="text-xl text-amber-200 max-w-2xl">{t('atuacao', 'infraSubtitle')}</p>
            </div>
          </div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full page-content-reveal pt-12 mb-32">
          <div className="space-y-6 mb-20">
            <div><h2 className="text-4xl font-semibold text-white mb-4">{t('atuacao', 'infraInstitutionalTitle')}</h2><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
            <p className="text-base text-gray-300 leading-relaxed max-w-3xl">{t('atuacao', 'infraInstitutionalText')}</p>
          </div>
          <div className="space-y-20">
            <section>
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'infraServicesTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[{ icon: Building2, text: t('atuacao', 'infraService1') }, { icon: CheckCircle, text: t('atuacao', 'infraService2') }, { icon: Target, text: t('atuacao', 'infraService3') }, { icon: TrendingUp, text: t('atuacao', 'infraService4') }, { icon: Users, text: t('atuacao', 'infraService5') }, { icon: Globe, text: t('atuacao', 'infraService6') }].map((item) => (<div key={item.text} className="group flex flex-col items-start gap-4 pb-6 border-b border-slate-700 hover:border-slate-500 transition"><div className="p-2 rounded-lg"><item.icon className="h-6 w-6 text-slate-400 group-hover:text-slate-200 transition" /></div><p className="font-medium text-gray-200 group-hover:text-white transition">{item.text}</p></div>))}</div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'infraApplicationsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <ul className="space-y-3 text-base text-gray-300">
                {t('atuacao', 'infraApplicationsList').map((item) => (
                  <li key={item} className="flex items-center gap-3"><span className="text-amber-400 text-lg">→</span> {item}</li>
                ))}
              </ul>
            </section>
            <section className="pt-8">
              <div className="mb-12 relative rounded-xl overflow-hidden h-[500px]">
                <picture><source srcSet={resolveAsset('/infraestrutura-obras.webp')} type="image/webp" /><img src={resolveAsset('/infraestrutura-obras.png')} alt="Grandes Projetos de Infraestrutura" className="w-full h-full object-cover" loading="lazy" /></picture>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-800/50 to-transparent"></div>
                <div className="absolute inset-0 p-16 flex flex-col justify-center">
                  <h4 className="text-4xl font-bold text-white mb-6" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}>{t('atuacao', 'infraProjectsTitle')}</h4>
                  <ul className="space-y-3 text-base text-gray-100 max-w-xl font-bold">
                    {t('atuacao', 'infraProjectsList').map((item) => (
                      <li key={item} className="flex items-center gap-3" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}><span className="text-slate-400 text-lg">→</span> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'infraSafetySolutionsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{[{ icon: ShieldCheck, text: t('atuacao', 'infraSafetyCard1Title'), desc: t('atuacao', 'infraSafetyCard1Desc') }, { icon: Users, text: t('atuacao', 'infraSafetyCard2Title'), desc: t('atuacao', 'infraSafetyCard2Desc') }, { icon: FileText, text: t('atuacao', 'infraSafetyCard3Title'), desc: t('atuacao', 'infraSafetyCard3Desc') }].map((item) => (<div key={item.text} className="group flex flex-col items-start gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-amber-500 hover:bg-slate-700/50 transition"><div className="p-2 rounded-lg"><item.icon className="h-6 w-6 text-amber-500" /></div><div><p className="font-bold text-white mb-2">{item.text}</p><p className="text-gray-400 text-sm">{item.desc}</p></div></div>))}</div>
            </section>
            <section className="pt-8">
              <div className="mb-8"><h3 className="text-3xl font-semibold text-white mb-2">{t('atuacao', 'infraDifferentialsTitle')}</h3><div className="w-12 h-1 bg-slate-300 rounded-full"></div></div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">{[{ icon: HardHat, title: t('atuacao', 'infraDiffCard1Title'), desc: t('atuacao', 'infraDiffCard1Desc') }, { icon: TrendingUp, title: t('atuacao', 'infraDiffCard2Title'), desc: t('atuacao', 'infraDiffCard2Desc') }, { icon: Users, title: t('atuacao', 'infraDiffCard3Title'), desc: t('atuacao', 'infraDiffCard3Desc') }, { icon: Globe, title: t('atuacao', 'infraDiffCard4Title'), desc: t('atuacao', 'infraDiffCard4Desc') }].map((item, idx) => (<div key={idx} className="flex flex-col gap-4"><item.icon className="h-6 w-6 text-slate-400" /><div><h5 className="font-semibold text-white mb-2">{item.title}</h5><p className="text-sm text-gray-400">{item.desc}</p></div></div>))}</div>
            </section>
            <section className="pt-20 border-t border-slate-700"><div className="max-w-2xl mx-auto text-center"><h4 className="text-3xl font-semibold text-white mb-4">{t('atuacao', 'infraCtaTitle')}</h4><p className="text-gray-300 text-base mb-10 leading-relaxed">{t('atuacao', 'infraCtaText')}</p><div className="flex flex-col sm:flex-row gap-4 justify-center"><button className="flex items-center justify-center gap-2 bg-slate-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-600 transition"><Mail className="h-5 w-5" />{t('atuacao', 'contactButton')}</button><button className="flex items-center justify-center gap-2 border border-slate-600 text-gray-300 px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition"><FileText className="h-5 w-5" />{t('atuacao', 'proposalButton')}</button></div></div></section>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('atuacao', 'pageTitle')}</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto font-light text-center">{t('atuacao', 'pageSubtitle')}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <button key={index} type="button" onClick={() => handleAreaClick(area.id)} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center hover:bg-amber-500/90 group transition-all duration-300 cursor-pointer shadow-lg hover:shadow-amber-500/20 hover:-translate-y-2">
              <area.icon className="h-12 w-12 text-amber-400 group-hover:text-slate-900 mx-auto mb-4 transition duration-300" />
              <h3 className="text-lg font-bold text-white group-hover:text-slate-900 transition duration-300">{Array.isArray(areaLabels) ? (areaLabels[index] ?? area.title) : area.title}</h3>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicosPage = ({ navigate, t }) => {
  const [activeTab, setActiveTab] = useState('engenharia');
  const serviceLists = t('servicos', 'lists') || {};
  const fireContent = t('servicos', 'incendio');
  const fire = fireContent && typeof fireContent === 'object' ? fireContent : {};
  const fireServices = Array.isArray(fire.services) ? fire.services : [];
  const fireDifferentials = Array.isArray(fire.differentials) ? fire.differentials : [];
  const fireAlertList = Array.isArray(fire.alertList) ? fire.alertList : [];
  const fireCompleteSteps = Array.isArray(fire.completeSteps) ? fire.completeSteps : [];
  const fireAudienceList = Array.isArray(fire.audienceList) ? fire.audienceList : [];
  const fireFinalBullets = Array.isArray(fire.finalBullets) ? fire.finalBullets : [];
  const whatsappUrl = `https://wa.me/5522998386553?text=${encodeURIComponent(t('contato', 'whatsappMessage'))}`;

  const tabs = [
    { id: 'engenharia', label: t('servicos', 'tabEngenharia') },
    { id: 'esocial', label: t('servicos', 'tabEsocial') },
    { id: 'treinamentos', label: t('servicos', 'tabTreinamentos') },
    { id: 'ambiental', label: t('servicos', 'tabAmbiental') },
    { id: 'sinalizacao', label: t('servicos', 'tabSinalizacao') },
    { id: 'incendio', label: t('servicos', 'tabIncendio') },
  ];

  return (
    <section
      className="relative min-h-screen pt-32 pb-20"
      style={layerStyle('/servicos-industria-seguranca.png')}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full page-content-reveal">

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('servicos', 'title')}</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto my-4"></div>
          <p className="text-amber-200 text-lg max-w-3xl mx-auto mb-10">
            {t('servicos', 'subtitle')}
          </p>

          {/* MENUS/ABAS */}
          <div className="flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${activeTab === tab.id
                  ? 'bg-amber-500 text-slate-900 shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                  : 'bg-slate-900/60 text-white border border-white/20 hover:bg-slate-800'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* CONTEÚDO DINÂMICO */}
        <div className="min-h-[400px]">

          {/* TAB 1: ENGENHARIA E LAUDOS */}
          {activeTab === 'engenharia' && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-white">{t('servicos', 'engTitle')}</h3>
                <p className="text-slate-300 mt-2">{t('servicos', 'engSubtitle')}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl text-white border border-white/10 shadow-xl hover:border-amber-500/50 transition">
                  <div className="flex items-center gap-4 mb-6">
                    <FileText className="h-8 w-8 text-amber-500" />
                    <h3 className="text-xl font-bold">{t('servicos', 'engCard1Title')}</h3>
                  </div>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    {(serviceLists.engCard1 || []).map((item) => (<li key={item}>✔ {item}</li>))}
                  </ul>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl text-white border border-white/10 shadow-xl hover:border-amber-500/50 transition">
                  <div className="flex items-center gap-4 mb-6">
                    <Target className="h-8 w-8 text-amber-500" />
                    <h3 className="text-xl font-bold">{t('servicos', 'engCard2Title')}</h3>
                  </div>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    {(serviceLists.engCard2 || []).map((item) => (<li key={item}>✔ {item}</li>))}
                  </ul>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl text-white border border-white/10 shadow-xl hover:border-amber-500/50 transition">
                  <div className="flex items-center gap-4 mb-6">
                    <AlertTriangle className="h-8 w-8 text-amber-500" />
                    <h3 className="text-xl font-bold">{t('servicos', 'engCard3Title')}</h3>
                  </div>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    {(serviceLists.engCard3 || []).map((item) => (<li key={item}>✔ {item}</li>))}
                  </ul>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl text-white border border-white/10 shadow-xl hover:border-amber-500/50 transition">
                  <div className="flex items-center gap-4 mb-6">
                    <ShieldCheck className="h-8 w-8 text-amber-500" />
                    <h3 className="text-xl font-bold">{t('servicos', 'engCard4Title')}</h3>
                  </div>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    {(serviceLists.engCard4 || []).map((item) => (<li key={item}>✔ {item}</li>))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: GESTÃO DO ESOCIAL */}
          {activeTab === 'esocial' && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-white">{t('servicos', 'esocialTitle')}</h3>
                <p className="text-slate-300 mt-2">{t('servicos', 'esocialSubtitle')}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl text-white border border-white/10 shadow-xl hover:border-amber-500/50 transition">
                  <div className="text-3xl mb-4">📡</div>
                  <h3 className="text-lg font-bold mb-3">{t('servicos', 'esocialCard1Title')}</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {(serviceLists.esocialCard1 || []).map((item) => (<li key={item}>✔ {item}</li>))}
                  </ul>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl text-white border border-white/10 shadow-xl hover:border-amber-500/50 transition">
                  <div className="text-3xl mb-4">🩺</div>
                  <h3 className="text-lg font-bold mb-3">{t('servicos', 'esocialCard2Title')}</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {(serviceLists.esocialCard2 || []).map((item) => (<li key={item}>✔ {item}</li>))}
                  </ul>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl text-white border border-white/10 shadow-xl hover:border-amber-500/50 transition">
                  <div className="text-3xl mb-4">🔍</div>
                  <h3 className="text-lg font-bold mb-3">{t('servicos', 'esocialCard3Title')}</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {(serviceLists.esocialCard3 || []).map((item) => (<li key={item}>✔ {item}</li>))}
                  </ul>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl text-white border border-white/10 shadow-xl hover:border-amber-500/50 transition">
                  <div className="text-3xl mb-4">🚨</div>
                  <h3 className="text-lg font-bold mb-3">{t('servicos', 'esocialCard4Title')}</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {(serviceLists.esocialCard4 || []).map((item) => (<li key={item}>✔ {item}</li>))}
                  </ul>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl text-white border border-white/10 shadow-xl hover:border-amber-500/50 transition">
                  <div className="text-3xl mb-4">📈</div>
                  <h3 className="text-lg font-bold mb-3">{t('servicos', 'esocialCard5Title')}</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {(serviceLists.esocialCard5 || []).map((item) => (<li key={item}>✔ {item}</li>))}
                  </ul>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl text-white border border-white/10 shadow-xl hover:border-amber-500/50 transition">
                  <div className="text-3xl mb-4">🧠</div>
                  <h3 className="text-lg font-bold mb-3">{t('servicos', 'esocialCard6Title')}</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {(serviceLists.esocialCard6 || []).map((item) => (<li key={item}>✔ {item}</li>))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: TREINAMENTOS E EMERGÊNCIA */}
          {activeTab === 'treinamentos' && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-white">{t('servicos', 'trainTitle')}</h3>
                <p className="text-slate-300 mt-2">{t('servicos', 'trainSubtitle')}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl border-t-8 border-blue-800">
                  <Users className="h-12 w-12 text-amber-500 mb-6" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{t('servicos', 'trainCard1Title')}</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-blue-800 uppercase tracking-wider text-sm mb-3">{t('servicos', 'trainNormsTitle')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {['NR-10', 'NR-20', 'NR-33', 'NR-35', 'NR-37', 'NR-30', 'NR-34', 'NR-12'].map((nr) => (
                          <span key={nr} className="bg-slate-100 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-semibold">{nr}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-blue-800 uppercase tracking-wider text-sm mb-2">{t('servicos', 'trainOpsTitle')}</h4>
                      <p className="text-slate-600 leading-relaxed text-sm text-justify">
                        {t('servicos', 'trainOpsText')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-xl border-t-8 border-amber-500">
                  <AlertTriangle className="h-12 w-12 text-blue-800 mb-6" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{t('servicos', 'trainCard2Title')}</h3>
                  <ul className="space-y-4 text-slate-700 font-medium">
                    {(serviceLists.trainCard2 || []).map((item) => (
                      <li key={item} className="flex items-center gap-3"><CheckCircle className="h-5 w-5 text-amber-500" /> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ENGENHARIA AMBIENTAL */}
          {activeTab === 'ambiental' && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-white">{t('servicos', 'envTitle')}</h3>
                <p className="text-slate-300 mt-2">{t('servicos', 'envSubtitle')}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl text-white border border-white/10 shadow-xl hover:border-amber-500/50 transition">
                  <div className="text-3xl mb-4">🌿</div>
                  <h3 className="text-lg font-bold mb-3">{t('servicos', 'envCard1Title')}</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {(serviceLists.envCard1 || []).map((item) => (<li key={item}>✔ {item}</li>))}
                  </ul>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl text-white border border-white/10 shadow-xl hover:border-amber-500/50 transition">
                  <div className="text-3xl mb-4">🗺️</div>
                  <h3 className="text-lg font-bold mb-3">{t('servicos', 'envCard2Title')}</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {(serviceLists.envCard2 || []).map((item) => (<li key={item}>✔ {item}</li>))}
                  </ul>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl text-white border border-white/10 shadow-xl hover:border-amber-500/50 transition">
                  <div className="text-3xl mb-4">🏘️</div>
                  <h3 className="text-lg font-bold mb-3">{t('servicos', 'envCard3Title')}</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {(serviceLists.envCard3 || []).map((item) => (<li key={item}>✔ {item}</li>))}
                  </ul>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl text-white border border-white/10 shadow-xl hover:border-amber-500/50 transition">
                  <div className="text-3xl mb-4">💧</div>
                  <h3 className="text-lg font-bold mb-3">{t('servicos', 'envCard4Title')}</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {(serviceLists.envCard4 || []).map((item) => (<li key={item}>✔ {item}</li>))}
                  </ul>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl text-white border border-white/10 shadow-xl hover:border-amber-500/50 transition">
                  <div className="text-3xl mb-4">♻️</div>
                  <h3 className="text-lg font-bold mb-3">{t('servicos', 'envCard5Title')}</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {(serviceLists.envCard5 || []).map((item) => (<li key={item}>✔ {item}</li>))}
                  </ul>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl text-white border border-white/10 shadow-xl hover:border-amber-500/50 transition">
                  <div className="text-3xl mb-4">🏗️</div>
                  <h3 className="text-lg font-bold mb-3">{t('servicos', 'envCard6Title')}</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {(serviceLists.envCard6 || []).map((item) => (<li key={item}>✔ {item}</li>))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: SINALIZAÇÃO */}
          {activeTab === 'sinalizacao' && (
            <div className="animate-fade-in-up">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-white">{t('servicos', 'signTitle')}</h3>
                <p className="text-slate-300 mt-2">{t('servicos', 'signSubtitle')}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl text-white border border-white/10 shadow-xl hover:border-amber-500/50 transition">
                  <div className="text-3xl mb-4">📋</div>
                  <h3 className="text-lg font-bold mb-3">{t('servicos', 'signCard1Title')}</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {(serviceLists.signCard1 || []).map((item) => (<li key={item}>✔ {item}</li>))}
                  </ul>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl text-white border border-white/10 shadow-xl hover:border-amber-500/50 transition">
                  <div className="text-3xl mb-4">🛑</div>
                  <h3 className="text-lg font-bold mb-3">{t('servicos', 'signCard2Title')}</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {(serviceLists.signCard2 || []).map((item) => (<li key={item}>✔ {item}</li>))}
                  </ul>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl text-white border border-white/10 shadow-xl hover:border-amber-500/50 transition">
                  <div className="text-3xl mb-4">🏭</div>
                  <h3 className="text-lg font-bold mb-3">{t('servicos', 'signCard3Title')}</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {(serviceLists.signCard3 || []).map((item) => (<li key={item}>✔ {item}</li>))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: ENGENHARIA DE SEGURANÇA CONTRA INCÊNDIO */}
          {activeTab === 'incendio' && (
            <div className="animate-fade-in-up space-y-12">
              <div className="bg-gradient-to-br from-red-950/80 via-slate-900/85 to-slate-950/80 border border-red-500/30 rounded-3xl p-8 md:p-12 shadow-2xl">
                <p className="text-red-300 font-extrabold tracking-[0.16em] text-xs md:text-sm uppercase mb-2">
                  {fire.certifiedBadge}
                </p>
                <p className="text-red-200/90 text-sm md:text-base mb-6">{fire.certifiedSubtitle}</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">🔥 {fire.heroTitle}</h3>
                <p className="text-slate-200 leading-relaxed mb-4 text-justify">{fire.heroText1}</p>
                <p className="text-slate-200 leading-relaxed mb-8 text-justify">{fire.heroText2}</p>

                <div className="flex flex-wrap gap-3 md:gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-6 py-3 rounded-full font-bold hover:bg-amber-400 transition"
                  >
                    <MessageCircle className="h-5 w-5" />
                    {fire.primaryCta}
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-6">🧯 {fire.servicesTitle}</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {fireServices.map((service) => (
                    <div key={service.title} className="bg-slate-900/75 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-white shadow-xl">
                      <h5 className="text-xl font-bold mb-4 text-amber-400">{service.title}</h5>
                      <ul className="space-y-2 text-sm md:text-base text-gray-300">
                        {(Array.isArray(service.items) ? service.items : []).map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-red-400 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6 md:p-8">
                <h4 className="text-2xl font-bold text-white mb-5">🧠 {fire.differentialsTitle}</h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {fireDifferentials.map((item) => (
                    <div key={item} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-200">
                      🔥 {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-red-950/50 border border-red-500/40 rounded-2xl p-6 md:p-8">
                <h4 className="text-2xl font-bold text-red-200 mb-4">⚠️ {fire.alertTitle}</h4>
                <p className="text-red-100 mb-4">{fire.alertSubtitle}</p>
                <ul className="space-y-2 text-red-100/95 mb-5">
                  {fireAlertList.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-red-300 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-amber-300 font-bold">👉 {fire.alertCta}</p>
              </div>

              <div className="bg-amber-500/95 text-slate-900 rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl">
                <h4 className="text-2xl font-bold mb-3">🏆 {fire.completeTitle}</h4>
                <p className="mb-4 font-semibold">{fire.completeText}</p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-5">
                  {fireCompleteSteps.map((step) => (
                    <div key={step} className="bg-white/50 rounded-lg px-3 py-2 font-bold text-sm">
                      ✔ {step}
                    </div>
                  ))}
                </div>
                <p className="font-extrabold text-lg">👉 {fire.completeCta}</p>
              </div>

              <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-6 md:p-8">
                <h4 className="text-2xl font-bold text-white mb-2">📊 {fire.audienceTitle}</h4>
                <p className="text-slate-300 mb-4">{fire.audienceLead}</p>
                <div className="flex flex-wrap gap-2">
                  {fireAudienceList.map((item) => (
                    <span key={item} className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-gray-200 text-sm font-semibold">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-950 to-slate-900 border border-amber-500/30 rounded-3xl p-8 md:p-10">
                <h4 className="text-3xl font-bold text-white mb-3">🚀 {fire.finalTitle}</h4>
                <p className="text-gray-300 mb-6">{fire.finalText}</p>
                <p className="text-amber-300 font-bold text-lg mb-4">🎯 {fire.finalActionTitle}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {fireFinalBullets.map((item) => (
                    <span key={item} className="bg-white/5 border border-white/10 text-white px-3 py-2 rounded-lg text-sm font-semibold">
                      ✔ {item}
                    </span>
                  ))}
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 rounded-full font-extrabold text-sm md:text-base hover:bg-amber-400 transition"
                >
                  <MessageCircle className="h-5 w-5" />
                  {fire.finalButton}
                </a>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <h5 className="text-xl font-bold text-red-300 mb-3">💥 {fire.aggressiveTitle}</h5>
                  <p className="text-gray-200 mb-2">{fire.aggressiveText1}</p>
                  <p className="text-gray-200 mb-5">{fire.aggressiveText2}</p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-500 transition"
                  >
                    <MessageCircle className="h-5 w-5" />
                    {fire.aggressiveButton}
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => navigate('portfolio')}
            className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all border border-white/10"
          >
            {t('servicos', 'portfolioButton')}
            <ArrowRight className="h-5 w-5 text-amber-500" />
          </button>
        </div>

        {/* MÃO DE OBRA MANTIDA FIXA NO FINAL */}
        <div className="mt-16 bg-amber-500/95 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/20 shadow-2xl flex flex-col md:flex-row items-center gap-10">
          <Briefcase className="h-24 w-24 text-slate-900 flex-shrink-0" />
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">{t('servicos', 'workforceTitle')}</h3>
            <p className="text-slate-800 text-lg mb-6 font-medium text-justify">
              {t('servicos', 'workforceText')}
            </p>
            <div className="flex flex-wrap gap-3">
              {t('servicos', 'workforceRoles').map((prof) => (
                <span key={prof} className="bg-slate-900 text-white font-bold px-4 py-2 rounded-full text-sm">{prof}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const ExperienciaPage = ({ t }) => (
  <section
    className="relative min-h-screen flex items-center pt-32 pb-20"
    style={layerStyle('/experiencia-global-offshore.png')}
  >
    <div className="absolute inset-0 bg-blue-900/25 mix-blend-multiply"></div>
    <div className="absolute inset-0 bg-slate-900/40"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center page-content-reveal">
      <Globe className="h-24 w-24 text-amber-500 mx-auto mb-6" />
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('experiencia', 'title')}</h2>
      <div className="w-24 h-1 bg-amber-500 mx-auto mb-10"></div>

      <div className="max-w-4xl mx-auto bg-slate-900/60 backdrop-blur-xl p-10 md:p-16 rounded-3xl border border-white/10 shadow-2xl">
        <p className="text-xl md:text-2xl text-white leading-relaxed mb-12 font-light text-center">
          {t('experiencia', 'p1')}
          <br />
          <br />
          <span className="text-amber-400 font-medium">{t('experiencia', 'p2')}</span>
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center"><span className="font-bold text-white">{t('experiencia', 'region1')}</span></div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center"><span className="font-bold text-white">{t('experiencia', 'region2')}</span></div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center"><span className="font-bold text-white">{t('experiencia', 'region3')}</span></div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center"><span className="font-bold text-white">{t('experiencia', 'region4')}</span></div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center col-span-2 md:col-span-1"><span className="font-bold text-white">{t('experiencia', 'region5')}</span></div>
        </div>
      </div>
    </div>
  </section>
);

const DiferenciaisPage = ({ t }) => (
  <section
    className="relative min-h-screen pt-32 pb-20 flex items-center"
    style={layerStyle('/diferenciais-equipe-campo.png')}
  >
    <div className="absolute inset-0 bg-slate-900/45"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full page-content-reveal">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('diferenciais', 'title')}</h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { icon: Award, stat: t('diferenciais', 'stat1'), text: t('diferenciais', 'text1'), color: 'text-amber-400', border: 'border-amber-500/30' },
          { icon: Users, stat: t('diferenciais', 'stat2'), text: t('diferenciais', 'text2'), color: 'text-white', border: 'border-white/20' },
          { icon: Anchor, stat: t('diferenciais', 'stat3'), text: t('diferenciais', 'text3'), color: 'text-amber-400', border: 'border-amber-500/30' },
          { icon: HardHat, stat: t('diferenciais', 'stat4'), text: t('diferenciais', 'text4'), color: 'text-white', border: 'border-white/20' },
          { icon: AlertTriangle, stat: t('diferenciais', 'stat5'), text: t('diferenciais', 'text5'), color: 'text-amber-400', border: 'border-amber-500/30' },
          { icon: Target, stat: t('diferenciais', 'stat6'), text: t('diferenciais', 'text6'), color: 'text-white', border: 'border-white/20' },
          { icon: FileText, stat: t('diferenciais', 'stat7'), text: t('diferenciais', 'text7'), color: 'text-amber-400', border: 'border-amber-500/30' },
          { icon: ShieldCheck, stat: t('diferenciais', 'stat8'), text: t('diferenciais', 'text8'), color: 'text-white', border: 'border-white/20' },
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

const ContatoPage = ({ t }) => (
  <section
    className="relative min-h-screen pt-32 pb-20 flex items-center"
    style={layerStyle('/contato-helideck-comunicacao.png')}
  >
    <div className="absolute inset-0 bg-slate-950/80"></div>

    <div className="relative z-10 max-w-5xl mx-auto px-4 w-full page-content-reveal">
      <div className="bg-slate-900/70 backdrop-blur-xl p-6 sm:p-10 md:p-16 rounded-[2rem] md:rounded-[2.5rem] border border-amber-500/30 shadow-2xl">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
          <div className="w-full md:flex-[0.9] text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6 md:mb-8">
              <ShieldCheck className="h-12 w-12 md:h-14 md:w-14 text-amber-500 shrink-0" />
              <div className="flex flex-col text-left">
                <span className="font-bold text-3xl md:text-4xl text-white tracking-wider leading-none">PRUDÊNCIA</span>
                <span className="text-xs md:text-sm tracking-widest text-amber-400 uppercase leading-none mt-1.5">Engenharia & Consultoria</span>
              </div>
            </div>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-md mx-auto md:mx-0 font-light leading-relaxed text-justify">
              {t('contato', 'pitch')}
            </p>
            <div className="inline-flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/20 px-6 py-3 md:px-8 md:py-4 rounded-full">
              <Globe className="h-5 w-5 md:h-6 md:w-6 text-amber-500 mr-3 shrink-0" />
              <span className="text-white font-semibold text-base md:text-lg">{t('contato', 'globalService')}</span>
            </div>
          </div>

          <div className="w-full md:flex-[1.2] bg-black/50 p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 border-b border-white/10 pb-4">{t('contato', 'directContacts')}</h4>
            <ul className="space-y-4 md:space-y-6">
              <li className="flex items-center gap-4 sm:gap-5">
                <div className="bg-amber-500/20 p-3 sm:p-4 rounded-xl sm:rounded-2xl shrink-0">
                  <Users className="h-5 w-5 md:h-6 md:w-6 text-amber-500" />
                </div>
                <div>
                  <span className="block font-bold text-white text-base md:text-lg">Professor Eng. Elton Leite</span>
                  <span className="text-amber-400 text-xs md:text-sm font-medium">{t('contato', 'ceo')}</span>
                </div>
              </li>
              <li className="flex items-center gap-4 sm:gap-5">
                <div className="bg-amber-500/20 p-3 sm:p-4 rounded-xl sm:rounded-2xl shrink-0">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-amber-500" />
                </div>
                <span className="text-white font-medium text-sm md:text-base leading-snug">{t('contato', 'location')}</span>
              </li>
              <li className="flex items-center gap-4 sm:gap-5">
                <div className="bg-amber-500/20 p-3 sm:p-4 rounded-xl sm:rounded-2xl shrink-0">
                  <FileText className="h-5 w-5 md:h-6 md:w-6 text-amber-500" />
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <a href="mailto:prudencia@prudenciaconsultoria.com.br" className="inline-block text-white font-medium text-xs sm:text-sm md:text-sm lg:text-[15px] hover:text-amber-400 transition whitespace-nowrap leading-tight">prudencia@prudenciaconsultoria.com.br</a>
                  <a href="mailto:prudencia@prudenciaengenharia.com.br" className="inline-block text-white font-medium text-xs sm:text-sm md:text-sm lg:text-[15px] hover:text-amber-400 transition whitespace-nowrap leading-tight">prudencia@prudenciaengenharia.com.br</a>
                </div>
              </li>
              <li className="flex items-center gap-4 sm:gap-5">
                <div className="bg-amber-500/20 p-3 sm:p-4 rounded-xl sm:rounded-2xl shrink-0">
                  <Zap className="h-5 w-5 md:h-6 md:w-6 text-amber-500" />
                </div>
                <div className="text-white font-medium text-sm md:text-base"><div>+55 (22) 2733-0232</div><div>+55 (22) 99838-6553</div></div>
              </li>
              <li className="pt-4 border-t border-white/10 mt-2">
                <a
                  href={`https://wa.me/5522998386553?text=${encodeURIComponent(t('contato', 'whatsappMessage'))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 md:gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 md:px-6 py-3 md:py-4 rounded-2xl font-bold transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[#25D366]/40 w-full text-center text-sm md:text-base"
                >
                  <MessageCircle className="h-5 w-5 shrink-0" />
                  {t('contato', 'whatsapp')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 md:mt-16 pt-6 md:pt-8 text-center text-xs md:text-sm text-gray-400">
          <p className="text-center mb-2">&copy; {new Date().getFullYear()} Prudência Engenharia & Consultoria. {t('contato', 'rights')}</p>
          <button
            onClick={() => window.location.hash = '/lgpd'}
            className="hover:text-amber-400 underline transition-colors"
          >
            {t('contato', 'lgpdLink')}
          </button>
        </div>
      </div>
    </div>
  </section>
);

const LGPDPage = ({ t }) => (
  <section className="relative min-h-screen pt-32 pb-20 bg-slate-950">
    <div className="relative z-10 max-w-4xl mx-auto px-4 w-full page-content-reveal">
      <div className="bg-slate-900/80 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl text-gray-300">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('lgpd', 'title')}</h2>
        <div className="w-24 h-1 bg-amber-500 mb-8"></div>

        <div className="space-y-6 text-justify leading-relaxed">
          <p>
            {t('lgpd', 'intro')}
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t('lgpd', 'section1Title')}</h3>
          <p>
            {t('lgpd', 'section1Text1')}
          </p>
          <p>
            {t('lgpd', 'section1Text2')}
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t('lgpd', 'section2Title')}</h3>
          <p>
            {t('lgpd', 'section2Text')}
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t('lgpd', 'section3Title')}</h3>
          <p>
            {t('lgpd', 'section3Text')}
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">{t('lgpd', 'section4Title')}</h3>
          <p>
            {t('lgpd', 'section4Text')}
          </p>
        </div>
      </div>
    </div>
  </section>
);

const PortfolioPage = ({ t }) => (
  <section
    className="relative min-h-screen pt-32 pb-20"
    style={layerStyle('/servicos-industria-seguranca.png')}
  >
    <div className="absolute inset-0 bg-slate-950/85"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full page-content-reveal">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('portfolio', 'title')}</h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        <p className="mt-6 text-lg text-gray-300 max-w-4xl mx-auto text-center">
          {t('portfolio', 'subtitle')}
        </p>
      </div>

      <div className="space-y-10">
        {portfolioSections.map((section) => (
          (() => {
            const sectionOverrides = t('portfolio', 'sectionsById');
            const localizedSection = sectionOverrides?.[section.id];
            return (
          <article key={section.id} className="bg-white/95 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl overflow-hidden">
            <header className="bg-slate-900 px-8 py-6 flex items-center gap-4">
              <section.icon className="h-9 w-9 text-amber-400" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">{localizedSection?.title ?? section.title}</h3>
            </header>

            <div className="p-8 md:p-10 space-y-8">
              {section.groups.map((group, idx) => (
                <div key={`${section.id}-${idx}`}>
                  <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-4 border-l-4 border-amber-500 pl-4">
                    {localizedSection?.groups?.[idx]?.subtitle ?? group.subtitle}
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {group.items.map((item, itemIdx) => (
                      <div key={`${section.id}-${idx}-${itemIdx}`} className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                        <h5 className="text-base font-bold text-slate-900 mb-2">{localizedSection?.groups?.[idx]?.items?.[itemIdx]?.name ?? item.name}</h5>
                        <p className="text-slate-700 text-sm leading-relaxed text-justify">{localizedSection?.groups?.[idx]?.items?.[itemIdx]?.desc ?? item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
            );
          })()
        ))}
      </div>
    </div>
  </section>
);

const NewApp = () => {
  const supportedLangs = ['pt', 'es', 'en', 'zh'];
  const langStorageKey = 'prudencia_lang';
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace('#/', '');
    return hash || 'home';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState(() => {
    try {
      const storedLang = window.localStorage.getItem(langStorageKey);
      return supportedLangs.includes(storedLang) ? storedLang : 'pt';
    } catch {
      return 'pt';
    }
  });

  const t = (section, key) =>
    translations?.[lang]?.[section]?.[key] ??
    (lang === 'en' || lang === 'zh'
      ? translations?.en?.[section]?.[key] ?? translations?.es?.[section]?.[key] ?? translations?.pt?.[section]?.[key]
      : translations?.pt?.[section]?.[key]) ??
    key;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      setCurrentPage(hash || 'home');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  useEffect(() => {
    try {
      const safeLang = supportedLangs.includes(lang) ? lang : 'pt';
      window.localStorage.setItem(langStorageKey, safeLang);
      if (safeLang !== lang) setLang('pt');
    } catch {
      // No-op: persistência pode estar indisponível em alguns contextos.
    }
  }, [lang]);

  const navigate = (page) => {
    window.location.hash = `/${page}`;
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigate={navigate} t={t} />;
      case 'sobre':
        return <SobrePage t={t} />;
      case 'atuacao':
        return <AtuacaoPage t={t} />;
      case 'servicos':
        return <ServicosPage navigate={navigate} t={t} />;
      case 'portfolio':
        return <PortfolioPage t={t} />;
      case 'experiencia':
        return <ExperienciaPage t={t} />;
      case 'diferenciais':
        return <DiferenciaisPage t={t} />;
      case 'contato':
        return <ContatoPage t={t} />;
      case 'lgpd':
        return <LGPDPage t={t} />;
      default:
        return <HomePage navigate={navigate} t={t} />;
    }
  };

  const navLinkClass = (page) => `
    cursor-pointer shrink-0 px-1 font-medium whitespace-nowrap transition-all duration-300 drop-shadow-md hover:drop-shadow-lg
    ${currentPage === page ? 'text-amber-400 border-b-2 border-amber-400 pb-1' : 'text-gray-100 hover:text-amber-400'}
  `;

  const getNavClasses = () => {
    const base = "fixed w-full top-0 z-50 transition-all duration-500 ";
    if (currentPage === 'home') {
      return scrolled
        ? base + "backdrop-blur-xl bg-slate-950/90 border-b border-white/10 shadow-2xl py-3"
        : base + "bg-gradient-to-b from-black/90 via-black/35 to-transparent border-transparent py-5";
    }
    return base + "backdrop-blur-xl bg-slate-950/90 border-b border-white/10 shadow-2xl py-3";
  };

  return (
    <div className="bg-black font-sans text-slate-800 min-h-screen flex flex-col">
      <nav className={getNavClasses()}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-6">
            <div className="flex shrink-0 lg:min-w-[154px] items-center cursor-pointer group" onClick={() => navigate('home')}>
              <div className={`p-2 rounded-xl shadow-lg border transition duration-300 group-hover:scale-[1.02] ${currentPage === 'home' ? 'bg-white/20 backdrop-blur-md border-white/40' : 'bg-white/70 backdrop-blur-md border-white/50'}`}>
                <img
                  src={resolveAsset('/logo-prudencia-sem-fundo.webp')}
                  alt="Logo Prudência Engenharia e Consultoria"
                  className="h-12 md:h-16 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `${import.meta.env.BASE_URL}logo-prudencia.jpeg`;
                  }}
                />
              </div>
            </div>

            <div className="hidden lg:flex lg:flex-1 items-center justify-end gap-4 xl:gap-6">
              <div className="flex flex-1 items-center justify-center gap-4 xl:gap-6 pr-1">
                <span onClick={() => navigate('sobre')} className={navLinkClass('sobre')}>{t('nav', 'about')}</span>
                <span onClick={() => navigate('atuacao')} className={navLinkClass('atuacao')}>{t('nav', 'areas')}</span>
                <span onClick={() => navigate('servicos')} className={navLinkClass('servicos')}>{t('nav', 'solutions')}</span>
                <span onClick={() => navigate('portfolio')} className={navLinkClass('portfolio')}>{t('nav', 'portfolio')}</span>
                <span onClick={() => navigate('experiencia')} className={navLinkClass('experiencia')}>{t('nav', 'global')}</span>
                <span onClick={() => navigate('diferenciais')} className={navLinkClass('diferenciais')}>{t('nav', 'differentials')}</span>
              </div>
              <span
                onClick={() => navigate('contato')}
                className={`cursor-pointer shrink-0 w-[138px] text-center whitespace-nowrap px-5 py-2.5 rounded-full font-bold transition-all duration-300 ${currentPage === 'contato' ? 'bg-amber-400 text-slate-900 shadow-lg shadow-amber-500/30' : 'bg-amber-500/90 text-slate-900 hover:bg-amber-400 hover:scale-105'}`}
              >
                {t('nav', 'contact')}
              </span>

              <div className="flex shrink-0 items-center gap-2 pl-2">
                <button
                  type="button"
                  onClick={() => setLang('pt')}
                  className={`h-[44px] min-w-[56px] px-4 py-2.5 rounded-full font-bold transition border flex items-center justify-center ${lang === 'pt' ? 'bg-white text-slate-900 border-white' : 'bg-transparent text-white border-white/40 hover:border-white/80'}`}
                  aria-label="Português do Brasil"
                >
                  <BrazilFlagIcon />
                </button>
                <button
                  type="button"
                  onClick={() => setLang('es')}
                  className={`h-[44px] min-w-[56px] px-4 py-2.5 rounded-full font-bold transition border flex items-center justify-center ${lang === 'es' ? 'bg-white text-slate-900 border-white' : 'bg-transparent text-white border-white/40 hover:border-white/80'}`}
                  aria-label="Español"
                >
                  <SpainFlagIcon />
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`h-[44px] min-w-[56px] px-4 py-2.5 rounded-full font-bold transition border flex items-center justify-center ${lang === 'en' ? 'bg-white text-slate-900 border-white' : 'bg-transparent text-white border-white/40 hover:border-white/80'}`}
                  aria-label="English"
                >
                  <UsaFlagIcon />
                </button>
                <button
                  type="button"
                  onClick={() => setLang('zh')}
                  className={`h-[44px] min-w-[56px] px-4 py-2.5 rounded-full font-bold transition border flex items-center justify-center ${lang === 'zh' ? 'bg-white text-slate-900 border-white' : 'bg-transparent text-white border-white/40 hover:border-white/80'}`}
                  aria-label="中文（简体）"
                >
                  <ChinaFlagIcon />
                </button>
              </div>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <button
                type="button"
                onClick={() => setLang('pt')}
                className={`h-[40px] min-w-[52px] px-3 py-2 rounded-full font-bold transition border flex items-center justify-center ${lang === 'pt' ? 'bg-white text-slate-900 border-white' : 'bg-transparent text-white border-white/40'}`}
                aria-label="Português do Brasil"
              >
                <BrazilFlagIcon />
              </button>
              <button
                type="button"
                onClick={() => setLang('es')}
                className={`h-[40px] min-w-[52px] px-3 py-2 rounded-full font-bold transition border flex items-center justify-center ${lang === 'es' ? 'bg-white text-slate-900 border-white' : 'bg-transparent text-white border-white/40'}`}
                aria-label="Español"
              >
                <SpainFlagIcon />
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`h-[40px] min-w-[52px] px-3 py-2 rounded-full font-bold transition border flex items-center justify-center ${lang === 'en' ? 'bg-white text-slate-900 border-white' : 'bg-transparent text-white border-white/40'}`}
                aria-label="English"
              >
                <UsaFlagIcon />
              </button>
              <button
                type="button"
                onClick={() => setLang('zh')}
                className={`h-[40px] min-w-[52px] px-3 py-2 rounded-full font-bold transition border flex items-center justify-center ${lang === 'zh' ? 'bg-white text-slate-900 border-white' : 'bg-transparent text-white border-white/40'}`}
                aria-label="中文（简体）"
              >
                <ChinaFlagIcon />
              </button>
              <button onClick={toggleMenu} className="text-white hover:text-amber-500 p-2 bg-white/5 rounded-lg">
                {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl absolute w-full top-full left-0 border-b border-white/10 text-white shadow-2xl py-4 px-6 flex flex-col gap-4">
            <span onClick={() => navigate('home')} className={`py-2 border-b border-white/5 ${currentPage === 'home' ? 'text-amber-400 font-bold' : ''}`}>{t('nav', 'home')}</span>
            <span onClick={() => navigate('sobre')} className={`py-2 border-b border-white/5 ${currentPage === 'sobre' ? 'text-amber-400 font-bold' : ''}`}>{t('nav', 'about')}</span>
            <span onClick={() => navigate('atuacao')} className={`py-2 border-b border-white/5 ${currentPage === 'atuacao' ? 'text-amber-400 font-bold' : ''}`}>{t('nav', 'whereWeOperate')}</span>
            <span onClick={() => navigate('servicos')} className={`py-2 border-b border-white/5 ${currentPage === 'servicos' ? 'text-amber-400 font-bold' : ''}`}>{t('nav', 'solutions')}</span>
            <span onClick={() => navigate('portfolio')} className={`py-2 border-b border-white/5 ${currentPage === 'portfolio' ? 'text-amber-400 font-bold' : ''}`}>{t('nav', 'fullPortfolio')}</span>
            <span onClick={() => navigate('experiencia')} className={`py-2 border-b border-white/5 ${currentPage === 'experiencia' ? 'text-amber-400 font-bold' : ''}`}>{t('nav', 'internationalExperience')}</span>
            <span onClick={() => navigate('diferenciais')} className={`py-2 border-b border-white/5 ${currentPage === 'diferenciais' ? 'text-amber-400 font-bold' : ''}`}>{t('nav', 'differentials')}</span>
            <span onClick={() => navigate('contato')} className="py-3 text-slate-900 bg-amber-500 font-bold text-center rounded-xl mt-2">{t('nav', 'contact')}</span>
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
