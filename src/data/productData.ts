import { Testimonial, BonusItem, FaqItem, ProducerSettings } from '../types';

export const DEFAULT_PRODUCER_SETTINGS: ProducerSettings = {
  kiwifyCheckoutUrl: 'https://pay.kiwify.com.br/demo-mega-analise',
  supportWhatsapp: '5511999999999',
  productName: 'Planilha Inteligente & App Mega Análise',
  pricePix: 89.90,
  priceCard: 98.90,
  installments: 10,
};

export const PRODUCT_HIGHLIGHTS = [
  {
    icon: 'Sparkles',
    title: 'Automação Total de Métricas',
    description: 'Basta preencher ou importar seus dados básicos: todo o resto é calculado automaticamente sem fórmulas complicadas.',
  },
  {
    icon: 'Smartphone',
    title: 'App PWA Direto no Celular',
    description: 'Instale na tela inicial do seu iPhone ou Android em 5 segundos, sem precisar baixar de lojas ou ocupar memória.',
  },
  {
    icon: 'Zap',
    title: 'Acesso Imediato no Pix',
    description: 'Pagou pelo Pix na Kiwify, o acesso à planilha e ao instalador do App chega em menos de 60 segundos no seu e-mail.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Garantia Incondicional de 7 Dias',
    description: 'Teste tudo sem risco. Se achar que não valeu 10x o valor de R$ 89,90, devolvemos 100% do seu dinheiro.',
  },
];

export const BONUSES: BonusItem[] = [
  {
    id: 'bonus-1',
    tag: 'BÔNUS EXCLUSIVO #01',
    title: 'Guia Prático: Como Vender Esse Combo no TikTok pelo Link da Bio',
    originalPrice: 97.00,
    description: 'Roteiros validados de 15 a 30 segundos prontos para gravar a tela do celular, viralizar no feed e gerar vendas diárias no automático.',
    iconName: 'Video',
  },
  {
    id: 'bonus-2',
    tag: 'BÔNUS EXCLUSIVO #02',
    title: 'Pack de 10 Dashboards Executivos de Exportação em PDF',
    originalPrice: 67.00,
    description: 'Templates prontos com visual corporativo de alto padrão para você enviar relatórios impressionantes para clientes ou equipe.',
    iconName: 'FileText',
  },
  {
    id: 'bonus-3',
    tag: 'BÔNUS EXCLUSIVO #03',
    title: 'Acesso ao Suporte VIP no WhatsApp & Atualizações Vitalícias',
    originalPrice: 47.00,
    description: 'Tire qualquer dúvida com nossa equipe especializada e receba todas as melhorias e novos módulos do App Mega Análise gratuitamente.',
    iconName: 'MessageCircle',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Renata Albuquerque',
    role: 'Gestora & Empreendedora',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    text: 'Eu vi o vídeo no TikTok mostrando o app no celular e fiquei curiosa. Comprei na Kiwify por R$ 89,90 e fiquei de queixo caído: o PWA instala na hora sem complicação e a planilha faz tudo o que softwares caros de R$ 300 por mês faziam. Melhor compra do ano!',
    rating: 5,
    highlight: 'Instalou em 30 segundos no iPhone!',
    date: 'Ontem',
    verifiedKiwify: true,
    city: 'São Paulo - SP',
  },
  {
    id: 't-2',
    name: 'Lucas Guimarães',
    role: 'E-commerce & Vendas Online',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    text: 'O que mais me surpreendeu foi a velocidade. Eu perdia quase 3 horas todo domingo organizando números de vendas e despesas. Agora coloco os dados e no celular abro o Mega Análise com todos os gráficos de margem de lucro e ticket médio prontos.',
    rating: 5,
    highlight: 'Economizo 12 horas semanais',
    date: 'Há 3 dias',
    verifiedKiwify: true,
    city: 'Belo Horizonte - MG',
  },
  {
    id: 't-3',
    name: 'Carolina Mendonça',
    role: 'Consultora de Negócios',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    text: 'A facilidade de poder abrir no celular em qualquer reunião com cliente é espetacular. Os clientes acham que eu paguei uma fortuna para desenvolver um aplicativo próprio. Vale muito mais que R$ 89,90.',
    rating: 5,
    highlight: 'Visual extremamente profissional',
    date: 'Há 5 dias',
    verifiedKiwify: true,
    city: 'Curitiba - PR',
  },
  {
    id: 't-4',
    name: 'Diego Silveira',
    role: 'Afiliado & Criador de Conteúdo',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    text: 'Gravei um vídeo no TikTok mostrando a tela do app abrindo no celular igual o roteiro do bônus ensina. Em menos de 48 horas bati mais de 28 vendas no link da bio! O produto se vende sozinho por causa do apelo do PWA.',
    rating: 5,
    highlight: '28 vendas em 48h pelo TikTok',
    date: 'Há 1 semana',
    verifiedKiwify: true,
    city: 'Florianópolis - SC',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'produto',
    question: 'O que exatamente é a Planilha Inteligente & App Mega Análise?',
    answer: 'É uma solução híbrida e inovadora que resolve de uma vez por todas o controle de dados e decisões. Você recebe uma Planilha Inteligente automatizada (compatível com Google Sheets e Microsoft Excel) conectada a um Web App PWA exclusivo chamado Mega Análise, que transforma seus dados em dashboards visuais interativos que você consulta no celular como um aplicativo de verdade.',
  },
  {
    id: 'faq-2',
    category: 'pwa',
    question: 'Como funciona a instalação do App no celular (PWA)? Preciso baixar na App Store ou Google Play?',
    answer: 'Não precisa baixar de lojas de aplicativos pesadas nem gastar memória do seu aparelho! O App Mega Análise utiliza tecnologia PWA (Progressive Web App). Ao abrir o link exclusivo que você recebe, basta clicar em "Adicionar à Tela de Início" (no Safari do iPhone ou Chrome do Android). Em 5 segundos, o ícone do Mega Análise fica na tela inicial do seu celular, abrindo em tela cheia com alta velocidade e funcionamento offline.',
  },
  {
    id: 'faq-3',
    category: 'pagamento',
    question: 'O pagamento de R$ 89,90 é mensalidade ou taxa única?',
    answer: 'É PAGAMENTO ÚNICO! Não há mensalidades, taxas ocultas ou cobranças recorrentes. Você paga apenas R$ 89,90 uma única vez no Pix ou cartão e tem acesso vitalício à planilha, ao app PWA e a todas as futuras atualizações.',
  },
  {
    id: 'faq-4',
    category: 'pagamento',
    question: 'Como recebo o acesso após fazer o Pix na Kiwify?',
    answer: 'Assim que o pagamento no Pix é confirmado pela Kiwify (geralmente em menos de 15 segundos), você recebe imediatamente no seu e-mail os dados de acesso à área de membros exclusiva contendo o link do App PWA, o download das planilhas e os tutoriais em vídeo.',
  },
  {
    id: 'faq-5',
    category: 'produto',
    question: 'Preciso ser um especialista em Excel ou fórmulas?',
    answer: 'De jeito nenhum! Toda a engenharia de fórmulas complexas, macros e gráficos já vem 100% pronta e bloqueada contra erros acidentais. Você só precisa alimentar seus números básicos de entrada e o sistema faz todo o processamento sozinho.',
  },
  {
    id: 'faq-6',
    category: 'suporte',
    question: 'E se eu não gostar ou achar difícil de usar?',
    answer: 'Você está protegido pela Garantia Incondicional de 7 Dias da Kiwify. Se por qualquer motivo dentro desse período você achar que o produto não atendeu suas expectativas, basta enviar um e-mail ou mensagem e devolvemos 100% do seu dinheiro sem perguntas.',
  },
];

export const TIKTOK_VIRAL_SCRIPT = {
  hook: '“Você ainda abre o computador e perde 2 horas tentando entender planilha de números?” 🤯',
  problem: 'A maioria das pessoas odeia gráficos feios e fórmulas do Excel que vivem dando erro.',
  solution: 'Olha o que eu acabei de instalar direto na tela do meu celular com 1 clique (mostre o ícone do Mega Análise abrindo em tela cheia).',
  demoAction: 'Alimento meus dados na planilha e o Mega Análise gera automaticamente meu faturamento, lucro líquido, ROI e metas diárias em tempo real.',
  callToAction: 'Custa menos que um jantar: apenas R$ 89,90 no Pix com pagamento único. O link oficial tá fixado na minha bio!',
};
