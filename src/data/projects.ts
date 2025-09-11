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
    description: 'Ecossistema industrial completo com múltiplos sistemas integrados; chatbot IA conversacional com criação de tickets GLPI; sistema KPI avançado com 400+ indicadores e projeções estatísticas; gestão dinâmica de arquivos multi‑formato; dashboards interativos com 8+ tipos de gráficos; sistema de tickets com fluxo automatizado; controle de acesso granular; gestão de grupos e notificações; arquitetura Vue 3 + TypeScript modular; WebSocket real‑time; build dual‑mode otimizado; cache TTL inteligente; SSL/HTTPS configurado.',
    tags: ['vue', 'typescript', 'bootstrap', 'ai-chatbot', 'kpi-system', 'ticket-system', 'file-management', 'industrial'],
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
          'Sistema reativo baseado em composables Vue',
          'API REST com endpoint dedicado',
          'Autenticação segura via JWT Bearer token'
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
          'Arquitetura complexa com 1800+ linhas de lógica',
          '15+ endpoints especializados para diferentes métricas',
          'Sistema de cache inteligente com TTL de 5 minutos',
          'Fallbacks robustos para operação offline'
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
          'Sistema robusto com 849 linhas de controle de fluxo',
          'Integração completa com gerenciador de autenticação GLPI',
          'Validação rigorosa e progressiva de cada etapa',
          'Matriz de urgência com 4 níveis hierárquicos'
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
          'Implementação complexa com 634 linhas de controle',
          'Suporte nativo para imagens, documentos e vídeos',
          'Limites inteligentes: 10MB padrão, 50MB para vídeos',
          'API dedicada para processamento de uploads'
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
          'Engine robusto com 729 linhas de renderização',
          'Dupla integração: ApexCharts + ECharts',
          'Configurações dinâmicas específicas por tipo',
          'Gerenciamento inteligente de memória e instâncias'
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
          'Build system moderno com configurações avançadas',
          'Code splitting granular por funcionalidade',
          'Otimização agressiva para produção',
          'Arquitetura modular com 20+ composables reutilizáveis'
        ]
      }
    ]
  },
  {
    slug: 'equipment-management',
    title: 'Gestão de Equipamentos — Matsuko',
    description: 'Sistema de reconhecimento e gestão para empilhadeiras industriais; autenticação biométrica/RFID de operadores; comunicação WebSocket com ESP32 via WiFi da rede; monitoramento real‑time de bateria; checklists digitais pré‑operacionais; relatórios pós‑uso automatizados; painel administrativo completo.',
    tags: ['vue', 'typescript', 'rfid', 'esp32', 'websocket', 'industrial'],
  },
  {
    slug: 'colegio-maranata-site',
    title: 'Site institucional — Colégio Maranata',
    description: 'Desenvolvimento do site, criação de layout e manutenção (mar/2024 – mai/2024).',
    tags: ['web', 'layout', 'manutenção'],
    embedUrl: 'https://colegiomaranata.com.br',
  },
  {
    slug: 'grupo-piovezani-ecommerce',
    title: 'E‑commerce — Grupo Piovezani',
    description: 'Concepção de layout e desenvolvimento de e‑commerce (ago/2023 – out/2023).',
    tags: ['ecommerce', 'web', 'design'],
    instagram: 'https://www.instagram.com/grupopiovezani/?hl=en',
  },
]
