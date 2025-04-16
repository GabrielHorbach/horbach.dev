type TranslationKey = keyof typeof translations;
type Language = "pt" | "en";

const translations = {
  // Navbar
  "nav.home": {
    pt: "Início",
    en: "Home",
  },
  "nav.about": {
    pt: "Sobre",
    en: "About",
  },
  "nav.services": {
    pt: "Serviços",
    en: "Services",
  },
  "nav.projects": {
    pt: "Projetos",
    en: "Projects",
  },
  "nav.contact": {
    pt: "Contato",
    en: "Contact",
  },

  // Hero
  "hero.title": {
    pt: "Transformando ideias em experiências digitais",
    en: "Transforming ideas into digital experiences",
  },
  "hero.subtitle": {
    pt: "Desenvolvimento web personalizado para o seu negócio",
    en: "Custom web development for your business",
  },
  "hero.cta": {
    pt: "Fale conosco",
    en: "Contact us",
  },

  // About
  "about.title": {
    pt: "Sobre a Horbach Dev",
    en: "About Horbach Dev",
  },
  "about.description": {
    pt: "Somos uma empresa especializada em desenvolvimento web que oferece soluções digitais personalizadas para clientes no Brasil e nos Estados Unidos. Nossa missão é criar experiências digitais excepcionais que atendam às necessidades específicas do seu negócio.",
    en: "We are a web development company that offers customized digital solutions for clients in Brazil and the United States. Our mission is to create exceptional digital experiences that meet your business's specific needs.",
  },
  "about.international": {
    pt: "Experiência internacional com clientes brasileiros e americanos.",
    en: "International experience with Brazilian and American clients.",
  },

  // Services
  "services.title": {
    pt: "Nossos Serviços",
    en: "Our Services",
  },
  "service.web.title": {
    pt: "Desenvolvimento Web",
    en: "Web Development",
  },
  "service.web.description": {
    pt: "Websites responsivos e aplicações web modernas utilizando as tecnologias mais recentes.",
    en: "Responsive websites and modern web applications using the latest technologies.",
  },
  "service.app.title": {
    pt: "Aplicações Web",
    en: "Web Applications",
  },
  "service.app.description": {
    pt: "Aplicações web escaláveis e robustas para seu negócio e processos internos.",
    en: "Scalable and robust web applications for your business and internal processes.",
  },
  "service.ecommerce.title": {
    pt: "E-commerce",
    en: "E-commerce",
  },
  "service.ecommerce.description": {
    pt: "Lojas online personalizadas com integração de pagamentos e gestão de produtos.",
    en: "Custom online stores with payment integration and product management.",
  },
  "service.maintenance.title": {
    pt: "Manutenção",
    en: "Maintenance",
  },
  "service.maintenance.description": {
    pt: "Suporte contínuo e manutenção para manter seu site funcionando perfeitamente.",
    en: "Ongoing support and maintenance to keep your website running flawlessly.",
  },

  // Projects
  "projects.title": {
    pt: "Projetos Recentes",
    en: "Recent Projects",
  },
  "projects.subtitle": {
    pt: "Conheça alguns dos nossos trabalhos",
    en: "Check out some of our work",
  },
  "project.view": {
    pt: "Ver projeto",
    en: "View project",
  },
  "project1.title": {
    pt: "Portal de Notícias",
    en: "News Portal",
  },
  "project1.description": {
    pt: "Plataforma de notícias com sistema de gerenciamento de conteúdo personalizado.",
    en: "News platform with custom content management system.",
  },
  "project2.title": {
    pt: "E-commerce de Moda",
    en: "Fashion E-commerce",
  },
  "project2.description": {
    pt: "Loja online completa com integração de pagamentos e gestão de inventário.",
    en: "Complete online store with payment integration and inventory management.",
  },
  "project3.title": {
    pt: "Dashboard Analítico",
    en: "Analytics Dashboard",
  },
  "project3.description": {
    pt: "Interface de visualização de dados para uma empresa de tecnologia.",
    en: "Data visualization interface for a technology company.",
  },

  // Contact
  "contact.title": {
    pt: "Entre em contato",
    en: "Get in touch",
  },
  "contact.description": {
    pt: "Estamos prontos para transformar sua ideia em realidade",
    en: "We are ready to transform your idea into reality",
  },
  "contact.whatsapp": {
    pt: "Fale conosco pelo WhatsApp",
    en: "Contact us on WhatsApp",
  },
  "contact.email": {
    pt: "Envie um e-mail",
    en: "Send an email",
  },
  "contact.form.name": {
    pt: "Nome",
    en: "Name",
  },
  "contact.form.email": {
    pt: "E-mail",
    en: "Email",
  },
  "contact.form.message": {
    pt: "Mensagem",
    en: "Message",
  },
  "contact.form.submit": {
    pt: "Enviar",
    en: "Submit",
  },

  // Footer
  "footer.rights": {
    pt: "Todos os direitos reservados",
    en: "All rights reserved",
  },
} as const;

const t = (key: string, lang: Language = "pt"): string => {
  if (!translations[key as TranslationKey]) {
    console.warn(`Translation '${key}' not found.`);
    return key;
  }
  return translations[key as TranslationKey][lang];
};

const language = "pt";

export { t, language };
