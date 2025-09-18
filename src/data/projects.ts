export type ProjectCard = {
  title: string
  description: string
  features: string[]
  techDetails?: string[]
}

export type Project = {
  slug: string
  title: string
  description: string
  tags: string[]
  link?: string
  embedUrl?: string
  instagram?: string
  cards?: ProjectCard[]
}

export const projects: Project[] = [
  {
    slug: 'smartsuko-platform',
    title: 'SMARTSUKO — Matsuko',
    description: 'Plataforma SaaS industrial robusta para automação completa de processos empresariais. Inclui chatbot IA conversacional integrado ao GLPI, sistema KPI empresarial com 400+ indicadores e projeções estatísticas, gestão inteligente de arquivos multi-formato, dashboards interativos avançados e sistema de tickets com fluxo automatizado. Arquitetura moderna Vue 3 + TypeScript com WebSocket real-time e otimizações de performance.',
    tags: ['Vue 3', 'TypeScript', 'Bootstrap 5', 'IA Conversacional', 'Sistema KPI', 'GLPI', 'WebSocket', 'SaaS Industrial', 'Dashboards', 'Cache TTL'],
    cards: [
      {
        title: 'Chatbot IA Conversacional',
        description: 'Sistema de IA integrado com contexto personalizado e criação automática de tickets no GLPI.',
        features: [
          'Processamento de linguagem natural',
          'Sistema de fallback inteligente com respostas personalizadas',
          'Integração direta com GLPI para criação de tickets',
          'Contexto do usuário (nome, departamento, setor)',
          'Respostas baseadas em palavras-chave'
        ],
        techDetails: [
          'Arquitetura reativa com Composition API Vue 3',
          'Engine IA personalizado com processamento de contexto',
          'API REST dedicada com autenticação JWT Bearer',
          'Sistema de fallback inteligente e cache de respostas',
          'Integração nativa com API GLPI para tickets'
        ]
      },
      {
        title: 'Sistema KPI Empresarial',
        description: 'Plataforma completa de indicadores com 400+ métricas configuráveis e cálculos server-side.',
        features: [
          '400+ indicadores distribuídos em 9 setores',
          'Projeções estatísticas e tendências automáticas',
          'Sistema de metas dinâmicas (anual/mensal)',
          'Cálculos server-side com cache TTL de 5 minutos',
          'Validação de dados e qualidade das métricas'
        ],
        techDetails: [
          'Engine de cálculo avançado com 1800+ linhas de lógica',
          'Arquitetura modular com 15+ endpoints especializados',
          'Sistema de cache TTL inteligente (5min) com invalidation',
          'Cálculos server-side otimizados para alta performance',
          'Algoritmos estatísticos para projeções e tendências',
          'Fallbacks robustos com operação offline'
        ]
      },
      {
        title: 'Sistema de Tickets GLPI',
        description: 'Fluxo automatizado completo para criação e gestão de tickets com validação em tempo real.',
        features: [
          'Fluxo multi-etapas com validação',
          'Categorias e localizações dinâmicas do GLPI',
          'Sistema de observadores múltiplos',
          'Níveis de urgência configuráveis',
          'Correção de etapas anteriores'
        ],
        techDetails: [
          'Máquina de estados avançada com 849 linhas de controle',
          'Integração completa com Session Manager GLPI',
          'Sistema de validação progressiva multi-etapas',
          'Matriz de urgência hierárquica com 4 níveis',
          'API síncrona para busca de categorias e localizações',
          'Gerenciamento de observadores múltiplos'
        ]
      },
      {
        title: 'Gestão de Arquivos Dinâmica',
        description: 'Sistema avançado de upload multi-formato com organização por módulos e prévia integrada.',
        features: [
          'Upload de imagens, documentos e vídeos',
          'Sistema de pastas por categoria (portal, RH, restaurante)',
          'Prévia de arquivos antes do upload',
          'Validação automática de tipos e tamanhos',
          'Drag & drop interface'
        ],
        techDetails: [
          'Engine de upload avançado com 634 linhas de controle',
          'Suporte multi-formato: imagens, documentos, vídeos',
          'Sistema de limites inteligentes (10MB/50MB adaptativos)',
          'Validação MIME type rigorosa e detecção de malware',
          'Organização automática por módulos e categorias',
          'Interface drag & drop com preview em tempo real'
        ]
      },
      {
        title: 'Dashboards Interativos',
        description: 'Sistema de gráficos avançado com múltiplos tipos e configurações inteligentes.',
        features: [
          '8+ tipos de gráficos (pizza, barras, linha, gauge, radial)',
          'Sistema de cores baseado em metas',
          'Annotations automáticas de performance',
          'Responsividade completa',
          'Toolbar com zoom, pan e download'
        ],
        techDetails: [
          'Engine de renderização avançado com 729 linhas de código',
          'Arquitetura híbrida: ApexCharts + ECharts para máxima flexibilidade',
          'Sistema de configuração dinâmica por tipo de gráfico',
          'Gerenciamento inteligente de memória e lifecycle',
          'Annotations automáticas baseadas em performance de metas',
          'Toolbar avançada com zoom, pan, export e fullscreen'
        ]
      },
      {
        title: 'Arquitetura Técnica',
        description: 'Plataforma construída com tecnologias modernas e otimizações avançadas de performance.',
        features: [
          'Vue 3 + TypeScript + Composition API',
          'Bootstrap 5 para design system responsivo',
          'WebSocket real-time com heartbeat automático',
          'Build dual-mode (rápido/otimizado)',
          'Chunking inteligente por funcionalidade',
          'SSL/HTTPS configurado'
        ],
        techDetails: [
          'Build system Vite com configurações avançadas dual-mode',
          'Code splitting granular e lazy loading por funcionalidade',
          'Tree shaking agressivo e minificação otimizada',
          'Arquitetura modular com 20+ composables reutilizáveis',
          'WebSocket com heartbeat automático e reconnection',
          'SSL/HTTPS configurado com certificados Let\'s Encrypt'
        ]
      }
    ]
  },
  {
    slug: 'equipment-management',
    title: 'Gestão de Equipamentos — Matsuko',
    description: 'Sistema IoT avançado para gestão inteligente de empilhadeiras industriais. Integra autenticação biométrica/RFID de operadores, comunicação WebSocket real-time com ESP32, monitoramento de bateria e performance, checklists digitais pré-operacionais e relatórios automatizados pós-uso. Inclui painel administrativo completo para controle e análise.',
    tags: ['Vue 3', 'TypeScript', 'ESP32', 'RFID/Biometria', 'WebSocket', 'IoT Industrial', 'Monitoramento Real-time', 'Automação'],
  },
  {
    slug: 'colegio-maranata-site',
    title: 'Site institucional — Colégio Maranata',
    description: 'Desenvolvimento completo do site institucional com design responsivo moderno. Criação de layout personalizado, otimização SEO, integração de conteúdo educacional e sistema de manutenção contínua. Projeto realizado entre março e maio de 2024.',
    tags: ['Design Responsivo', 'HTML5/CSS3', 'JavaScript', 'SEO', 'Site Institucional', 'Layout Personalizado'],
    embedUrl: 'https://colegiomaranata.com.br',
  },
  {
    slug: 'grupo-piovezani-ecommerce',
    title: 'E‑commerce — Grupo Piovezani',
    description: 'Desenvolvimento de plataforma e-commerce completa com design moderno e funcionalidades avançadas. Criação de layout responsivo, sistema de produtos, carrinho de compras, integração de pagamentos e painel administrativo. Projeto realizado entre agosto e outubro de 2023.',
    tags: ['E-commerce', 'Design Responsivo', 'Sistema de Pagamentos', 'Carrinho de Compras', 'Painel Admin', 'UX/UI'],
    instagram: 'https://www.instagram.com/grupopiovezani/?hl=en',
  },
]
