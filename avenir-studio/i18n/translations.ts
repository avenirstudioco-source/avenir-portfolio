export const languages = ['es', 'en', 'pt'] as const
export type Language = (typeof languages)[number]

export const translations = {
  es: {
    seo: {
      title: 'Avenir Studio — Diseño web e identidad digital',
      description: 'Diseñamos y desarrollamos experiencias digitales estratégicas para marcas que buscan crecer y destacarse.',
    },
    nav: {
      studio: 'Estudio', portfolio: 'Portfolio', services: 'Servicios', contact: 'Contacto', work: 'Trabajemos',
      open: 'Abrir menú de navegación', menu: 'Menú', close: 'Cerrar', primary: 'Principal', navigation: 'Menú de navegación', login: 'Log in', language: 'Idioma', selectLanguage: 'Seleccionar idioma',
    },
    hero: {
      location: 'Buenos Aires — Argentina', titleBefore: 'Diseñamos ', titleAccent: 'el futuro', titleAfter: 'de tu marca.',
      description: 'Estudio de diseño de identidad de marca y experiencias web. Creamos interfaces que se sienten inevitables — claras hoy, vigentes mañana.',
      portfolioCta: 'Ver portfolio', startCta: 'Empecemos', tags: ['Diseño web', 'Desarrollo', 'Soluciones con IA'],
    },
    marquee: ['Diseñamos el futuro', 'Menos, pero mejor', 'Buen diseño, mejores resultados', 'Tu marca merece destacarse', 'Estrategia · Diseño · Experiencia'],
    studio: {
      eyebrow: 'Sobre el estudio', titleBefore: 'Diseñamos marcas y experiencias digitales que se sienten ', titleAccent: 'inevitables.',
      paragraph1: 'Avenir Studio es un estudio creativo especializado en identidad de marca y diseño web. Transformamos ideas en sistemas visuales claros, coherentes y preparados para crecer.',
      paragraph2: 'Trabajamos cada proyecto de forma personalizada, combinando estrategia, diseño y funcionalidad para construir marcas que no solo se vean bien, sino que también comuniquen, conecten y generen confianza.',
      highlight: 'Menos ruido. Más intención.',
      pillars: [
        { title: 'Estrategia', description: 'Definimos una dirección clara antes de diseñar, para que cada decisión tenga un propósito.' },
        { title: 'Identidad', description: 'Creamos sistemas visuales coherentes, reconocibles y preparados para crecer junto con la marca.' },
        { title: 'Experiencia web', description: 'Diseñamos sitios funcionales, atractivos y fáciles de usar, cuidando cada detalle de la experiencia.' },
      ],
    },
    portfolio: {
      eyebrow: 'Portfolio · 2026', titleBefore: 'Trabajos ', titleAccent: 'seleccionados', intro: 'Seis proyectos donde marca, tecnología y futuro conviven bajo una misma identidad.', viewProject: 'Ver proyecto', imageAlt: 'Vista del proyecto',
      projects: {
        m1: { category: 'Real Estate · Sitio web', description: 'Landing dual para una práctica de real estate de lujo en California y su brazo de financiamiento. Fotografía en duotono cálido y titulares serif itálicos para transmitir sobriedad y trayectoria.', tags: ['Branding', 'UI Web', 'Identidad digital'] },
        gold: { category: 'Real Estate · Sitio web', description: 'Sitio institucional para una inmobiliaria con oficinas en Jerusalén y Afula. Hero nocturno con render arquitectónico y acento dorado para reforzar confianza frente a clientes internacionales.', tags: ['UI Web', 'Sistema de color'] },
        electro: { category: 'Retail premium · Sitio web', description: 'E-commerce de electrodomésticos y climatización de alta gama. Paleta oscura y cálida que pone el foco en la fotografía de producto, con atención personalizada vía WhatsApp integrada al flujo de compra.', tags: ['UI Web', 'E-commerce'] },
        ub: { category: 'Educación · Portal digital', description: 'Portal académico de acceso para alumnos, pensado para resolver un único gesto — iniciar sesión — de forma clara y directa, sin perder la identidad institucional de fondo.', tags: ['UI Web', 'Producto digital'] },
        embroider: { category: 'Indumentaria · E-commerce', description: 'Tienda online de indumentaria personalizada — estampado, bordado y DTF. Layout claro orientado a conversión, con métricas de confianza sobre la mesa desde el primer scroll.', tags: ['UI Web', 'E-commerce'] },
        rl: { category: 'Lifestyle · Hub de marketing', description: 'Hub editorial para una agencia de marketing con foco en moda y belleza. Un hero dividido que hace convivir dos mundos visuales — editorial de moda y beauty tech — bajo una misma identidad.', tags: ['UI Web', 'Identidad digital'], imageAlt: 'Sitio web de R&L Marketing presentado en una computadora' },
      },
    },
    services: {
      eyebrow: 'Servicios', titleBefore: 'Todo lo que tu marca necesita, en un ', titleAccent: 'solo lugar.',
      cards: [
        { title: 'Identidad de marca', description: 'Creamos una identidad visual clara y coherente para que tu marca se vea profesional y sea fácil de reconocer en todos sus canales.', items: ['Diseño de logotipo', 'Paleta de colores', 'Selección tipográfica', 'Manual de marca'] },
        { title: 'Diseño web', description: 'Diseñamos sitios web a medida, pensados para comunicar, generar confianza y convertir visitas en clientes.', items: ['Diseño UI/UX', 'Landing pages', 'Tiendas online', 'Desarrollo web'] },
        { title: 'Contenido visual', description: 'Diseñamos piezas visuales que mantienen la identidad de tu marca y hacen que su comunicación se vea ordenada y profesional.', items: ['Diseño para redes sociales', 'Plantillas editables', 'Piezas promocionales', 'Dirección visual'] },
      ],
    },
    contact: {
      eyebrow: '¿Empezamos?', titleBefore: 'Tu marca, lista', titleAccent: 'para brillar.', description: 'Diseñemos lo que sigue para tu marca. Contanos tu proyecto y te respondemos con una cotización.',
      labels: { name: 'Nombre *', email: 'Email *', phone: 'Teléfono', company: 'Empresa', service: 'Servicio de interés', budget: 'Presupuesto estimado', currency: 'Moneda', message: 'Mensaje *' },
      choose: 'Elegí una opción', services: ['Identidad de marca', 'Diseño web', 'Identidad digital', 'Otro'],
      budget: { under: 'Menos de', over: 'Más de' }, loadingRates: 'Actualizando cotizaciones…', fallbackRates: 'Cotización de respaldo · ', ratesCredit: 'Cotizaciones por Exchange Rate API',
      submit: 'Solicitar cotización', submitting: 'Enviando…', success: '¡Listo! Recibimos tu solicitud, te contactamos pronto.', genericError: 'No pudimos enviar tu solicitud.', direct: 'O escribinos directamente', emailCta: 'Enviar un mail',
      requiredError: 'Nombre, email y mensaje son obligatorios.', emailError: 'Ingresá un email válido.', base: 'Base', converted: 'Convertido', rate: 'Tasa',
    },
    footer: { meta: ['Diseño', 'Tecnología', 'Futuro'], copyright: 'Buenos Aires, Argentina', homeLabel: 'Avenir Studio, ir al inicio' },
    whatsapp: { aria: 'Contactar a Avenir Studio por WhatsApp', title: 'Escribinos por WhatsApp' },
    auth: { adminPanel: 'Panel de administración', signInTitle: 'Iniciá sesión', password: 'Contraseña', signingIn: 'Ingresando…', signIn: 'Ingresar', signInError: 'No pudimos iniciar sesión.', required: 'Email y contraseña son obligatorios.', invalid: 'Credenciales inválidas.' },
    admin: { quotes: 'Cotizaciones', connectedAs: 'Conectado como', logout: 'Cerrar sesión', empty: 'Todavía no hay solicitudes de cotización.', columns: ['Fecha', 'Nombre', 'Contacto', 'Empresa', 'Servicio', 'Presupuesto', 'Mensaje', 'Estado'], statuses: { NUEVA: 'Nueva', CONTACTADA: 'Contactada', EN_PROCESO: 'En proceso', CERRADA: 'Cerrada' }, updateError: 'No se pudo actualizar el estado.', unauthorized: 'No autorizado.', invalidId: 'ID inválido.', invalidStatus: 'Estado inválido.' },
  },
  en: {
    seo: { title: 'Avenir Studio — Web design and digital identity', description: 'We design and build strategic digital experiences for brands that want to grow and stand out.' },
    nav: { studio: 'Studio', portfolio: 'Portfolio', services: 'Services', contact: 'Contact', work: 'Let’s work', open: 'Open navigation menu', menu: 'Menu', close: 'Close', primary: 'Primary', navigation: 'Navigation menu', login: 'Log in', language: 'Language', selectLanguage: 'Select language' },
    hero: { location: 'Buenos Aires — Argentina', titleBefore: 'We design ', titleAccent: 'the future', titleAfter: 'of your brand.', description: 'A brand identity and web experience design studio. We create interfaces that feel inevitable — clear today, relevant tomorrow.', portfolioCta: 'View portfolio', startCta: 'Let’s begin', tags: ['Web design', 'Development', 'AI solutions'] },
    marquee: ['We design the future', 'Less, but better', 'Great design, better results', 'Your brand deserves to stand out', 'Strategy · Design · Experience'],
    studio: { eyebrow: 'About the studio', titleBefore: 'We design brands and digital experiences that feel ', titleAccent: 'inevitable.', paragraph1: 'Avenir Studio is a creative studio specializing in brand identity and web design. We turn ideas into clear, cohesive visual systems built to grow.', paragraph2: 'We tailor every project, combining strategy, design and functionality to build brands that not only look good, but also communicate, connect and inspire trust.', highlight: 'Less noise. More intention.', pillars: [{ title: 'Strategy', description: 'We define a clear direction before designing, so every decision has a purpose.' }, { title: 'Identity', description: 'We create cohesive, recognizable visual systems built to grow with the brand.' }, { title: 'Web experience', description: 'We design functional, engaging and easy-to-use websites, caring for every detail of the experience.' }] },
    portfolio: { eyebrow: 'Portfolio · 2026', titleBefore: 'Selected ', titleAccent: 'work', intro: 'Six projects where brand, technology and the future come together under one identity.', viewProject: 'View project', imageAlt: 'Project preview', projects: {
      m1: { category: 'Real Estate · Website', description: 'A dual landing experience for a luxury California real estate practice and its financing division. Warm duotone photography and italic serif headlines convey refinement and experience.', tags: ['Branding', 'Web UI', 'Digital identity'] },
      gold: { category: 'Real Estate · Website', description: 'An institutional website for a real estate firm with offices in Jerusalem and Afula. A nighttime architectural hero and gold accents reinforce trust with international clients.', tags: ['Web UI', 'Color system'] },
      electro: { category: 'Premium retail · Website', description: 'A high-end appliances and climate-control e-commerce experience. A warm, dark palette keeps product photography in focus, with WhatsApp assistance integrated into the purchase journey.', tags: ['Web UI', 'E-commerce'] },
      ub: { category: 'Education · Digital portal', description: 'An academic access portal designed around one clear action — signing in — while preserving the institution’s identity in the background.', tags: ['Web UI', 'Digital product'] },
      embroider: { category: 'Apparel · E-commerce', description: 'An online store for custom apparel — printing, embroidery and DTF. A clear, conversion-focused layout with trust metrics visible from the first scroll.', tags: ['Web UI', 'E-commerce'] },
      rl: { category: 'Lifestyle · Marketing hub', description: 'An editorial hub for a fashion and beauty marketing agency. A split hero brings two visual worlds together — fashion editorial and beauty tech — under one identity.', tags: ['Web UI', 'Digital identity'], imageAlt: 'R&L Marketing website displayed on a computer' },
    } },
    services: { eyebrow: 'Services', titleBefore: 'Everything your brand needs, ', titleAccent: 'all in one place.', cards: [{ title: 'Brand identity', description: 'We create a clear, cohesive visual identity so your brand looks professional and is easy to recognize across every channel.', items: ['Logo design', 'Color palette', 'Typography selection', 'Brand guidelines'] }, { title: 'Web design', description: 'We design custom websites built to communicate, inspire trust and turn visits into customers.', items: ['UI/UX design', 'Landing pages', 'Online stores', 'Web development'] }, { title: 'Visual content', description: 'We design visual assets that preserve your brand identity and make every communication feel polished and professional.', items: ['Social media design', 'Editable templates', 'Promotional assets', 'Visual direction'] }] },
    contact: { eyebrow: 'Shall we begin?', titleBefore: 'Your brand, ready', titleAccent: 'to shine.', description: 'Let’s design what comes next for your brand. Tell us about your project and we’ll send you a quote.', labels: { name: 'Name *', email: 'Email *', phone: 'Phone', company: 'Company', service: 'Service of interest', budget: 'Estimated budget', currency: 'Currency', message: 'Message *' }, choose: 'Choose an option', services: ['Brand identity', 'Web design', 'Digital identity', 'Other'], budget: { under: 'Under', over: 'Over' }, loadingRates: 'Updating exchange rates…', fallbackRates: 'Fallback rate · ', ratesCredit: 'Rates by Exchange Rate API', submit: 'Request a quote', submitting: 'Sending…', success: 'All set! We received your request and will be in touch soon.', genericError: 'We could not send your request.', direct: 'Or contact us directly', emailCta: 'Send an email', requiredError: 'Name, email and message are required.', emailError: 'Enter a valid email address.', base: 'Base', converted: 'Converted', rate: 'Rate' },
    footer: { meta: ['Design', 'Technology', 'Future'], copyright: 'Buenos Aires, Argentina', homeLabel: 'Avenir Studio, go to homepage' }, whatsapp: { aria: 'Contact Avenir Studio on WhatsApp', title: 'Message us on WhatsApp' },
    auth: { adminPanel: 'Admin panel', signInTitle: 'Sign in', password: 'Password', signingIn: 'Signing in…', signIn: 'Sign in', signInError: 'We could not sign you in.', required: 'Email and password are required.', invalid: 'Invalid credentials.' },
    admin: { quotes: 'Quotes', connectedAs: 'Signed in as', logout: 'Sign out', empty: 'There are no quote requests yet.', columns: ['Date', 'Name', 'Contact', 'Company', 'Service', 'Budget', 'Message', 'Status'], statuses: { NUEVA: 'New', CONTACTADA: 'Contacted', EN_PROCESO: 'In progress', CERRADA: 'Closed' }, updateError: 'The status could not be updated.', unauthorized: 'Unauthorized.', invalidId: 'Invalid ID.', invalidStatus: 'Invalid status.' },
  },
  pt: {
    seo: { title: 'Avenir Studio — Design web e identidade digital', description: 'Criamos e desenvolvemos experiências digitais estratégicas para marcas que querem crescer e se destacar.' },
    nav: { studio: 'Estúdio', portfolio: 'Portfólio', services: 'Serviços', contact: 'Contato', work: 'Vamos conversar', open: 'Abrir menu de navegação', menu: 'Menu', close: 'Fechar', primary: 'Principal', navigation: 'Menu de navegação', login: 'Entrar', language: 'Idioma', selectLanguage: 'Selecionar idioma' },
    hero: { location: 'Buenos Aires — Argentina', titleBefore: 'Criamos ', titleAccent: 'o futuro', titleAfter: 'da sua marca.', description: 'Estúdio de identidade de marca e experiências web. Criamos interfaces que parecem inevitáveis — claras hoje, relevantes amanhã.', portfolioCta: 'Ver portfólio', startCta: 'Vamos começar', tags: ['Design web', 'Desenvolvimento', 'Soluções com IA'] },
    marquee: ['Criamos o futuro', 'Menos, porém melhor', 'Bom design, melhores resultados', 'Sua marca merece se destacar', 'Estratégia · Design · Experiência'],
    studio: { eyebrow: 'Sobre o estúdio', titleBefore: 'Criamos marcas e experiências digitais que parecem ', titleAccent: 'inevitáveis.', paragraph1: 'Avenir Studio é um estúdio criativo especializado em identidade de marca e design web. Transformamos ideias em sistemas visuais claros, coerentes e preparados para crescer.', paragraph2: 'Desenvolvemos cada projeto de forma personalizada, combinando estratégia, design e funcionalidade para construir marcas que não apenas sejam bonitas, mas também comuniquem, conectem e gerem confiança.', highlight: 'Menos ruído. Mais intenção.', pillars: [{ title: 'Estratégia', description: 'Definimos uma direção clara antes de criar, para que cada decisão tenha um propósito.' }, { title: 'Identidade', description: 'Criamos sistemas visuais coerentes, reconhecíveis e preparados para crescer com a marca.' }, { title: 'Experiência web', description: 'Criamos sites funcionais, atraentes e fáceis de usar, cuidando de cada detalhe da experiência.' }] },
    portfolio: { eyebrow: 'Portfólio · 2026', titleBefore: 'Trabalhos ', titleAccent: 'selecionados', intro: 'Seis projetos em que marca, tecnologia e futuro convivem sob uma mesma identidade.', viewProject: 'Ver projeto', imageAlt: 'Vista do projeto', projects: {
      m1: { category: 'Real Estate · Site', description: 'Landing page dupla para uma operação imobiliária de luxo na Califórnia e sua divisão de financiamento. Fotografia em duotone quente e títulos serifados em itálico transmitem sofisticação e experiência.', tags: ['Branding', 'UI Web', 'Identidade digital'] },
      gold: { category: 'Real Estate · Site', description: 'Site institucional para uma imobiliária com escritórios em Jerusalém e Afula. Um hero arquitetônico noturno e detalhes dourados reforçam a confiança de clientes internacionais.', tags: ['UI Web', 'Sistema de cores'] },
      electro: { category: 'Varejo premium · Site', description: 'E-commerce de eletrodomésticos e climatização de alto padrão. Uma paleta escura e quente mantém o foco nas fotos dos produtos, com atendimento via WhatsApp integrado à jornada de compra.', tags: ['UI Web', 'E-commerce'] },
      ub: { category: 'Educação · Portal digital', description: 'Portal acadêmico de acesso pensado para resolver uma única ação — entrar — de forma clara e direta, sem perder a identidade institucional ao fundo.', tags: ['UI Web', 'Produto digital'] },
      embroider: { category: 'Vestuário · E-commerce', description: 'Loja online de roupas personalizadas — estamparia, bordado e DTF. Layout claro e focado em conversão, com métricas de confiança desde a primeira rolagem.', tags: ['UI Web', 'E-commerce'] },
      rl: { category: 'Lifestyle · Hub de marketing', description: 'Hub editorial para uma agência de marketing focada em moda e beleza. Um hero dividido reúne dois universos visuais — editorial de moda e beauty tech — sob uma mesma identidade.', tags: ['UI Web', 'Identidade digital'], imageAlt: 'Site da R&L Marketing apresentado em um computador' },
    } },
    services: { eyebrow: 'Serviços', titleBefore: 'Tudo o que sua marca precisa, ', titleAccent: 'em um só lugar.', cards: [{ title: 'Identidade de marca', description: 'Criamos uma identidade visual clara e coerente para que sua marca pareça profissional e seja fácil de reconhecer em todos os canais.', items: ['Design de logotipo', 'Paleta de cores', 'Seleção tipográfica', 'Manual de marca'] }, { title: 'Design web', description: 'Criamos sites sob medida, pensados para comunicar, gerar confiança e transformar visitas em clientes.', items: ['Design UI/UX', 'Landing pages', 'Lojas online', 'Desenvolvimento web'] }, { title: 'Conteúdo visual', description: 'Criamos peças visuais que preservam a identidade da sua marca e tornam a comunicação organizada e profissional.', items: ['Design para redes sociais', 'Templates editáveis', 'Peças promocionais', 'Direção visual'] }] },
    contact: { eyebrow: 'Vamos começar?', titleBefore: 'Sua marca, pronta', titleAccent: 'para brilhar.', description: 'Vamos criar o próximo passo da sua marca. Conte sobre seu projeto e enviaremos um orçamento.', labels: { name: 'Nome *', email: 'Email *', phone: 'Telefone', company: 'Empresa', service: 'Serviço de interesse', budget: 'Orçamento estimado', currency: 'Moeda', message: 'Mensagem *' }, choose: 'Escolha uma opção', services: ['Identidade de marca', 'Design web', 'Identidade digital', 'Outro'], budget: { under: 'Menos de', over: 'Mais de' }, loadingRates: 'Atualizando cotações…', fallbackRates: 'Cotação de reserva · ', ratesCredit: 'Cotações por Exchange Rate API', submit: 'Solicitar orçamento', submitting: 'Enviando…', success: 'Tudo certo! Recebemos sua solicitação e entraremos em contato em breve.', genericError: 'Não foi possível enviar sua solicitação.', direct: 'Ou fale diretamente com a gente', emailCta: 'Enviar um email', requiredError: 'Nome, email e mensagem são obrigatórios.', emailError: 'Digite um email válido.', base: 'Base', converted: 'Convertido', rate: 'Taxa' },
    footer: { meta: ['Design', 'Tecnologia', 'Futuro'], copyright: 'Buenos Aires, Argentina', homeLabel: 'Avenir Studio, ir para o início' }, whatsapp: { aria: 'Falar com a Avenir Studio pelo WhatsApp', title: 'Fale com a gente pelo WhatsApp' },
    auth: { adminPanel: 'Painel administrativo', signInTitle: 'Entrar', password: 'Senha', signingIn: 'Entrando…', signIn: 'Entrar', signInError: 'Não foi possível entrar.', required: 'Email e senha são obrigatórios.', invalid: 'Credenciais inválidas.' },
    admin: { quotes: 'Orçamentos', connectedAs: 'Conectado como', logout: 'Sair', empty: 'Ainda não há solicitações de orçamento.', columns: ['Data', 'Nome', 'Contato', 'Empresa', 'Serviço', 'Orçamento', 'Mensagem', 'Status'], statuses: { NUEVA: 'Nova', CONTACTADA: 'Contatada', EN_PROCESO: 'Em andamento', CERRADA: 'Encerrada' }, updateError: 'Não foi possível atualizar o status.', unauthorized: 'Não autorizado.', invalidId: 'ID inválido.', invalidStatus: 'Status inválido.' },
  },
} as const

export type Translations = (typeof translations)['es']

export function isLanguage(value: string | null): value is Language {
  return value !== null && languages.includes(value as Language)
}
