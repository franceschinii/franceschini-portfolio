export type NavItem = { to: string; label: string; name: string }

export const site = {
  name: 'André Franceschini',
  tagline: 'Front‑end • Automação • IoT',
  nav: <NavItem[]>[
    { to: '/', label: 'Início', name: 'home' },
    { to: '/about', label: 'Sobre', name: 'about' },
    { to: '/projects', label: 'Projetos', name: 'projects' },
    { to: '/contact', label: 'Contato', name: 'contact' },
  ],
}

