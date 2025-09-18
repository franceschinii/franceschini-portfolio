export type Link = { type: 'linkedin' | 'github' | 'email' | 'phone' | 'website'; label: string; url: string }
export type Education = { institution: string; degree: string; period: string }
export type Experience = { company: string; role: string; period: string; bullets: string[] }
export type Certification = { name: string; issuer: string; date: string }
export type SkillGroup = { title: string; skills: string[] }
export type Language = { name: string; level: string }

export type Profile = {
  name: string
  title: string
  summary: string
  email?: string
  phone?: string
  links: Link[]
  education: Education[]
  experience: Experience[]
  skills: SkillGroup[]
  languages: Language[]
  certifications: Certification[]
}

export const profile: Profile = {
  name: 'André Franceschini',
  title: 'Analista de Sistemas • Desenvolvedor Front‑End',
  summary:
    'Desenvolvedor Front‑End e Analista de Sistemas. Crio plataformas web (SaaS) para automatizar processos e integrar operações, com experiência em modernização e automação industrial (IoT/máquinas).',
  email: 'profissional.andrefranceschini@proton.me',
  phone: '+55 (15) 99854‑7474',
  links: [
    { type: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/andrefranceschini' },
    { type: 'github', label: 'GitHub', url: 'https://github.com/franceschinii' },
    { type: 'github', label: 'GitHub (Matsuko)', url: 'https://github.com/franceschinimatsuko' },
    { type: 'website', label: 'Instagram', url: 'https://instagram.com/_franceschini' },
    { type: 'email', label: 'E‑mail', url: 'mailto:profissional.andrefranceschini@proton.me' },
  ],
  education: [
    {
      institution: 'FACENS',
      degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
      period: 'ago/2022 – dez/2024',
    },
  ],
  experience: [
    {
      company: 'Matsuko',
      role: 'Assistente de Automação I',
      period: 'jan/2025 – presente',
      bullets: [
        'Desenvolvimento de SPA com Vue.js e TypeScript',
        'Padronização e otimização de processos do setor de automação',
        'Criação de layouts responsivos e identidade visual dos sistemas',
        'Dispositivos eletrônicos com ESP‑32 e C++',
        'Checklist inteligente de fábrica',
        'Portal integrado a sistemas via API',
      ],
    },
    {
      company: 'Matsuko',
      role: 'Estagiário de Infraestrutura e Automação',
      period: 'jun/2024 – jan/2025',
      bullets: [
        'Front‑end de aplicações industriais',
        'Interfaces intuitivas para soluções de automação',
        'Funcionalidades para gestão de equipamentos',
        'Colaboração no planejamento e entrega de sistemas',
      ],
    },
    {
      company: 'iPrime Sorocaba',
      role: 'Estagiário',
      period: 'mar/2024 – mai/2024',
      bullets: [
        'Atendimento ao cliente e manutenção de dispositivos',
        'Organização de processos e trabalho em equipe',
      ],
    },
  ],
  skills: [
    {
      title: 'Frontend & Frameworks',
      skills: ['Vue 3', 'React', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'HTML5/CSS3', 'Composition API'],
    },
    {
      title: 'Styling & Design Systems',
      skills: ['Tailwind CSS', 'Bootstrap 5', 'Shadcn/UI', 'CSS Modules', 'SCSS/Sass', 'Design System'],
    },
    {
      title: 'Backend & Banco de Dados',
      skills: ['Node.js', 'API REST', 'SQL Server', 'MySQL', 'Cache TTL', 'WebSocket', 'JWT'],
    },
    {
      title: 'Build Tools & DevOps',
      skills: ['Vite', 'Webpack', 'Docker', 'Git/GitHub', 'CI/CD', 'SSL/HTTPS', 'Code Splitting'],
    },
    {
      title: 'UI/UX & Design',
      skills: ['Figma', 'Responsive Design', 'Mobile First', 'Acessibilidade', 'Prototipagem'],
    },
    {
      title: 'Automação & IoT Industrial',
      skills: ['ESP32', 'C++', 'RFID/Biometria', 'WebSocket Real-time', 'Integração GLPI', 'Arduino'],
    },
    {
      title: 'Ferramentas & Metodologias',
      skills: ['Scrum/Agile', 'ApexCharts', 'ECharts', 'Tree Shaking', 'Lazy Loading', 'Performance'],
    },
  ],
  languages: [
    { name: 'Português', level: 'Nativo' },
    { name: 'Inglês', level: 'Avançado' },
  ],
  certifications: [
    { name: 'Discover', issuer: 'Rocketseat', date: 'ago/2023' },
    { name: 'Bootcamp GFT Start #4 Java', issuer: 'Digital Innovation One', date: 'mar/2022' },
    { name: 'Fase 7 – Web Dev', issuer: 'SuperGeeks Sorocaba', date: 'fev/2020' },
    { name: 'Fase 6 – Regular', issuer: 'SuperGeeks Sorocaba', date: 'jun/2019' },
    { name: 'Hardware e Robótica', issuer: 'Microcamp', date: 'dez/2018' },
    { name: 'Fase 5 – Regular', issuer: 'SuperGeeks Sorocaba', date: 'nov/2018' },
    { name: 'Projeto Jovem Engenheiro', issuer: 'Qualifica', date: 'nov/2018' },
    { name: 'Fase 4 – Regular', issuer: 'SuperGeeks Sorocaba', date: 'jun/2018' },
    { name: 'Fase 3 – Regular', issuer: 'SuperGeeks Sorocaba', date: 'dez/2017' },
    { name: 'Fase 2 – Regular', issuer: 'SuperGeeks Sorocaba', date: 'jun/2017' },
    { name: 'Fase 1 – Regular', issuer: 'SuperGeeks Sorocaba', date: 'dez/2016' },
    { name: 'GENIUS Robotics', issuer: 'ZOOM', date: 'nov/2012' },
    { name: 'Agile Scrum Fundamentals', issuer: 'Udemy', date: 'jan/2025' },
  ],
}
