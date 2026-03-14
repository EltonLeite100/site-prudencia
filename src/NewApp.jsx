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
} from 'lucide-react';

const layerStyle = (imgUrl) => ({
  backgroundImage: `url('${imgUrl}')`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
});

const HomePage = ({ navigate }) => (
  <section
    className="relative min-h-screen flex items-center justify-center animate-in fade-in duration-700"
    style={layerStyle('https://upload.wikimedia.org/wikipedia/commons/c/cf/Oil_platform_in_the_North_Sea.jpg')}
  >
    <div className="absolute inset-0 bg-slate-900/40"></div>

    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-16">
      <div className="bg-slate-900/60 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-white/10 shadow-2xl">
        <ShieldCheck className="h-24 w-24 text-amber-500 mx-auto mb-6" />
        <h1 className="text-5xl md:text-8xl font-bold text-white mb-4 tracking-tight drop-shadow-xl">
          PRUDÊNCIA
        </h1>
        <div className="w-32 h-1.5 bg-amber-500 mx-auto mb-8 rounded-full"></div>
        <h2 className="text-2xl md:text-4xl text-gray-200 uppercase tracking-widest mb-6 font-light">
          Engenharia & Consultoria
        </h2>
        <p className="text-xl md:text-3xl text-amber-400 italic font-light mb-10 text-center">
          Global HSEQ Advisory for Complex Projects
        </p>
        <button
          onClick={() => navigate('sobre')}
          className="inline-flex items-center gap-3 bg-amber-500 text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-400 transition-all hover:scale-105 shadow-lg"
        >
          Conhecer a Empresa <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  </section>
);

const SobrePage = () => (
  <section
    className="relative min-h-screen pt-32 pb-20 animate-in fade-in duration-700"
    style={layerStyle('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')}
  >
    <div className="absolute inset-0 bg-black/60"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
            Com mais de <strong>30 anos de experiência</strong>, já capacitamos mais de <strong>50.000 profissionais</strong>
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

const AtuacaoPage = () => (
  <section
    className="relative min-h-screen pt-32 pb-20 animate-in fade-in duration-700"
    style={layerStyle('https://upload.wikimedia.org/wikipedia/commons/3/36/Port_of_Rotterdam.jpg')}
  >
    <div className="absolute inset-0 bg-slate-900/70"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center min-h-[calc(100vh-10rem)]">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Onde Atuamos</h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto font-light text-center">
          Especialistas em segurança para operações complexas e de alto risco.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { title: 'Petróleo e Gás', icon: Droplet },
          { title: 'Offshore e Marítimo', icon: Anchor },
          { title: 'Portuário', icon: MapPin },
          { title: 'Industrial', icon: Target },
          { title: 'Construção Civil', icon: HardHat },
          { title: 'Energia', icon: Zap },
          { title: 'Logística', icon: Briefcase },
          { title: 'Estaleiros e Obras', icon: ShieldCheck },
        ].map((area, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-center hover:bg-amber-500/90 group transition-all duration-300 cursor-pointer shadow-lg hover:shadow-amber-500/20 hover:-translate-y-2">
            <area.icon className="h-12 w-12 text-amber-400 group-hover:text-slate-900 mx-auto mb-4 transition duration-300" />
            <h3 className="text-lg font-bold text-white group-hover:text-slate-900 transition duration-300">{area.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ServicosPage = () => (
  <section
    className="relative min-h-screen pt-32 pb-20 animate-in fade-in duration-700"
    style={layerStyle('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')}
  >
    <div className="absolute inset-0 bg-black/70"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
    </div>
  </section>
);

const ExperienciaPage = () => (
  <section
    className="relative min-h-screen flex items-center pt-32 pb-20 animate-in fade-in duration-700"
    style={layerStyle('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')}
  >
    <div className="absolute inset-0 bg-blue-900/50 mix-blend-multiply"></div>
    <div className="absolute inset-0 bg-slate-900/70"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
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
    className="relative min-h-screen pt-32 pb-20 animate-in fade-in duration-700 flex items-center"
    style={layerStyle('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')}
  >
    <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
    className="relative min-h-screen pt-32 pb-20 animate-in fade-in duration-700 flex items-center"
    style={layerStyle('https://images.unsplash.com/photo-1504307651254-35680f356f12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')}
  >
    <div className="absolute inset-0 bg-slate-950/80"></div>

    <div className="relative z-10 max-w-5xl mx-auto px-4 w-full">
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
        return <ServicosPage />;
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
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled || currentPage !== 'home' ? 'bg-slate-950/95 backdrop-blur-xl shadow-2xl py-3 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('home')}>
              <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm group-hover:bg-amber-500/20 transition duration-300">
                <ShieldCheck className="h-8 w-8 text-amber-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl md:text-2xl tracking-wider leading-none text-white drop-shadow-lg group-hover:text-amber-400 transition duration-300">PRUDÊNCIA</span>
                <span className="text-[9px] md:text-[10px] tracking-widest text-amber-400 uppercase leading-none mt-1.5">Engenharia & Consultoria</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              <span onClick={() => navigate('sobre')} className={navLinkClass('sobre')}>Quem Somos</span>
              <span onClick={() => navigate('atuacao')} className={navLinkClass('atuacao')}>Atuação</span>
              <span onClick={() => navigate('servicos')} className={navLinkClass('servicos')}>Serviços</span>
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
