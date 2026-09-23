import { createContext } from 'react';

export type Language = 'en' | 'es';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.brand': "Gadiel's Resume",
    'nav.home': 'Home',
    'nav.education': 'Education',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',

    // Hero
    'hero.location': 'Coyoacán, Mexico City',
    'hero.role': 'Computer Engineer — Full-Stack & Scientific Application Analyst',
    'hero.bio':
      'Scientific Application Analyst & Software Engineer at Zifo RnD Solutions (Client: Regeneron Pharmaceuticals) and Computer Engineer from UNAM. Experienced in enterprise LIMS automation, Spring Boot REST architectures, distributed data platforms, and modern full-stack development.',
    'hero.downloadResume': 'Download Resume',
    'hero.contact.emailLabel': 'Email',
    'hero.contact.githubLabel': 'GitHub',
    'hero.contact.linkedinLabel': 'LinkedIn',
    'hero.aiBadge': 'AI-Enhanced Portrait',
    'hero.aiNote': '* Formal attire & studio backdrop digitally rendered with AI assistance',

    // Education
    'edu.title': 'Education',
    'edu.unam.school': 'National Autonomous University of Mexico (UNAM)',
    'edu.unam.degree': 'Bachelor of Computer Engineering',
    'edu.unam.location': 'Mexico City',
    'edu.unam.period': 'Mexico City',
    'edu.coursework.title': 'Relevant Coursework',
    'edu.coursework.c1': 'Data Structures & Algorithms',
    'edu.coursework.c2': 'Statistical Analysis & Data Mining',
    'edu.coursework.c3': 'Combinational & Sequential Logic Circuits Design',
    'edu.coursework.c4': 'Microcontroller & Embedded Systems Programming with Multi-Addressing Modes',
    'edu.coursework.c5': 'Computer Graphics & 3D Modeling',
    'edu.coursework.c6': 'Computer Networks & Cybersecurity',
    'edu.coursework.c7': 'Operating Systems',
    'edu.coursework.c8': 'Database Systems',
    'edu.certs.title': 'Certifications',
    'edu.certs.c1': 'EF SET Standard English Certificate: 70/100 (C1 Advanced) — Verified Professional Fluency (2024)',
    'edu.certs.c2': 'Alura Latam Professional Certificates: Git & GitHub (2024) · HTML5 & CSS3 (2024) · Programming Logic with JavaScript (2024)',
    'edu.certs.c3': 'Google Cloud Computing Foundations: Cloud architecture, infrastructure services, and storage solutions (2023)',
    'edu.certs.c4': 'Six Sigma Green Belt: Quality management, statistical process optimization, and defect reduction (2021)',
    'edu.certs.c5': 'Macquarie University / Coursera: Excel Skills for Business: Essentials (2021)',

    // Skills
    'skills.title': 'Skills',
    'skills.cat.programming': 'Programming Languages',
    'skills.cat.lims': 'Enterprise & LIMS Software',
    'skills.cat.frameworks': 'Frameworks & Libraries',
    'skills.cat.hardware': 'Hardware & Embedded Systems',
    'skills.cat.databases': 'Databases & Storage',
    'skills.cat.devops': 'DevOps, Cloud & Servers',
    'skills.cat.tools': 'Observability & Developer Tools',
    'skills.cat.methodologies': 'Methodologies & Practices',
    'skills.cat.languages': 'Spoken Languages',
    'skills.lang.spanish': 'Spanish (Native)',
    'skills.lang.english': 'English (C1 Advanced — EF SET Score 70/100)',
    'skills.lang.french': 'French (A2 Elementary)',

    // Projects
    'projects.title': 'Projects',
    'projects.tab.overview': 'Overview',
    'projects.tab.code': 'The Code',
    'projects.tab.result': 'Result & Live Link',
    'projects.visitLive': 'Visit Live Application',

    'projects.gem.title': 'Planeta Gema',
    'projects.gem.role': 'Full-Stack Gemstone & Jewelry E-Commerce Platform — Personal Project',
    'projects.gem.desc':
      'Architected and developed a production-ready full-stack multi-vendor e-commerce platform using Java 21 / Spring Boot 3, React 19 / Vite 6, PostgreSQL 16 with Flyway schema migrations (24 versions), and Firebase Authentication (JWT + Google OAuth). Features a configurable multi-tier pricing engine with JSON-backed fee models, recursive hierarchical filter tree reducing catalog code by 60%, FFmpeg media processing pipeline reducing payloads by 85%, and multi-vendor RBAC with financial settlement reports.',
    'projects.gem.outcome':
      'Production platform serving gemstone and jewelry commerce with complete lifecycle management, automated media optimization, and full-stack Docker Compose deployment.',

    'projects.api.title': 'Enterprise REST API',
    'projects.api.role': 'Software Engineer Intern — Siemens DI SW',
    'projects.api.desc':
      'Developed a modular REST API using Java 17 and Spring Boot, implementing Spring Data JPA with DTO models for secure multi-database connectivity and Maven multi-profile builds for staging/production deployment.',
    'projects.api.outcome':
      'Deployed across multiple environments with Maven profiles, enabling consistent API behavior and streamlined database connectivity via JPA.',

    'projects.viz.title': 'Data Visualization Platform',
    'projects.viz.role': 'Software Engineer Intern — Siemens DI SW',
    'projects.viz.desc':
      'Engineered an interactive front-end data visualization platform in Mendix, consolidating disparate Oracle DB and Salesforce datasets with dynamic filtering, sorting, custom query views, and exportable reports.',
    'projects.viz.outcome':
      'Consolidated multi-source data into a single interactive dashboard, enabling automated report generation and reducing manual data retrieval time.',

    'projects.water.title': 'Multi-Sensor Water Quality Monitor',
    'projects.water.role': 'UNAM Engineering Institute Project',
    'projects.water.desc':
      'Designed and implemented a multi-sensor system for water quality monitoring. Developed FPGA firmware for communication protocols (UART, I2C, SPI), managing ADC conversions and calibrating sensors to standard measurement requirements.',
    'projects.water.outcome':
      'Successfully captured multiple water quality parameters with calibrated sensors, demonstrating real-time monitoring via FPGA-driven communication protocols.',

    // Experience
    'exp.title': 'Professional Experience',
    'exp.current': 'Current Position',
    'exp.zifo.company': 'Zifo RnD Solutions',
    'exp.zifo.role': 'Scientific Application Analyst & Software Engineer',
    'exp.zifo.period': 'May 2025 — September 2026',
    'exp.zifo.location': 'Mexico City (Client: Regeneron Pharmaceuticals)',
    'exp.zifo.b1': 'Developed and deployed custom Java plugins (fat JARs via Gradle/Maven) and Groovy rules for Agilent SLIMS and Sapio LIMS, automating storage and fulfillment workflows for over 6,000,000 biological sample tubes in automated freezers.',
    'exp.zifo.b2': 'Architected enterprise migration safeguards during weekend cutover to Sapio: engineered custom Groovy system-level rules, API 403 Forbidden interceptors, and JSON payload validation to enforce strict read-only states across 6M+ records with zero data corruption.',
    'exp.zifo.b3': 'Standardized inter-departmental REST API JSON schemas for sample intake and retrieval; designed and automated comprehensive Postman integration test suites, eliminating cross-departmental data transfer discrepancies.',
    'exp.zifo.b4': 'Managed multi-tier Linux application instances over SSH, orchestrating Apache HTTPD, Tomcat, and SLIMS gateway services via systemctl; utilized Splunk distributed log queries to diagnose unfulfilled transactions and recover dropped request payloads.',
    'exp.zifo.b5': 'Refactored heavy scientific query plugins into asynchronous background worker threads, resolving 1-minute browser timeout warnings and completely preventing duplicate order submissions from laboratory technicians.',
    'exp.zifo.b6': 'Founded Zifo’s centralized global LIMS engineering repository and starter codebase, standardizing modular Java plugin templates, resolving private vendor Maven dependency routing, and reducing new engineer onboarding time from days to hours—recognized by senior executive leadership as a major organizational milestone.',
    'exp.zifo.b7': 'Led daily 9:00 AM EST Scrum standups with Regeneron Biobank supervisors and technicians across three global time zones (India, US, Mexico), translating complex laboratory requirements into technical backlog tickets; completed a 6-week on-site technical immersion in Chennai, India.',

    'exp.siemens.company': 'Siemens DI SW',
    'exp.siemens.role': 'Software Engineer Intern',
    'exp.siemens.period': 'May 2024 — April 2025',
    'exp.siemens.location': 'Mexico City',
    'exp.siemens.b1': 'Developed a modular REST API using Java 17 and Spring Boot, implementing Spring Data JPA with DTO models for secure multi-database connectivity and Maven multi-profile builds for staging/production deployment.',
    'exp.siemens.b2': 'Engineered an interactive front-end data visualization platform in Mendix, consolidating disparate Oracle DB and Salesforce datasets with dynamic filtering, sorting, custom query views, and exportable reports.',
    'exp.siemens.b3': 'Automated incoming data request processing by configuring SMTP email services and scheduled background tasks to monitor inbound email streams, trigger transactional database updates, and dispatch automated alerts.',
    'exp.siemens.b4': 'Maintained disciplined version control and repository hygiene using Git and Bitbucket, facilitating seamless pull request reviews, automated build validations, and zero-regression production deployments.',

    'exp.qualfon.company': 'Qualfon',
    'exp.qualfon.role': 'Bilingual Customer Service Representative & Team Leader',
    'exp.qualfon.period': 'January 2020 — July 2022',
    'exp.qualfon.location': 'Mexico City',
    'exp.qualfon.b1': 'Proactively supported, guided, and coached team members on call handling strategies, communication protocols, and system workflows while successfully resolving escalated, critical customer inquiries.',
    'exp.qualfon.b2': 'Audited daily operational results following standardized performance measurement frameworks to track individual KPIs, identify coaching opportunities, and uphold service level agreements (SLAs).',

    // Footer
    'footer.backToTop': 'Back to top',
    'footer.builtWith': 'Built with React, TypeScript & Tailwind CSS.',
  },
  es: {
    // Nav
    'nav.brand': 'Mi CV',
    'nav.home': 'Inicio',
    'nav.education': 'Educación',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Experiencia',

    // Hero
    'hero.location': 'Coyoacán, Ciudad de México',
    'hero.role': 'Ingeniero en Computación — Desarrollador Full-Stack y Analista de Aplicaciones Científicas',
    'hero.bio':
      'Analista de Aplicaciones Científicas e Ingeniero de Software en Zifo RnD Solutions (Cliente: Regeneron Pharmaceuticals) e Ingeniero en Computación por la UNAM. Especializado en automatización de sistemas LIMS empresariales, arquitecturas REST con Spring Boot, plataformas distribuidas de datos y desarrollo full-stack moderno.',
    'hero.downloadResume': 'Descargar CV',
    'hero.contact.emailLabel': 'Correo',
    'hero.contact.githubLabel': 'GitHub',
    'hero.contact.linkedinLabel': 'LinkedIn',
    'hero.aiBadge': 'Retrato Mejorado con IA',
    'hero.aiNote': '* Atuendo formal y fondo de estudio generados digitalmente con IA',

    // Education
    'edu.title': 'Educación',
    'edu.unam.school': 'Universidad Nacional Autónoma de México (UNAM)',
    'edu.unam.degree': 'Licenciatura en Ingeniería en Computación',
    'edu.unam.location': 'Ciudad de México',
    'edu.unam.period': 'Ciudad de México',
    'edu.coursework.title': 'Materias Relevantes',
    'edu.coursework.c1': 'Estructuras de Datos y Algoritmos',
    'edu.coursework.c2': 'Análisis Estadístico y Minería de Datos',
    'edu.coursework.c3': 'Diseño de Circuitos Lógicos Combinacionales y Secuenciales',
    'edu.coursework.c4': 'Programación de Microcontroladores y Sistemas Embebidos con Modos de Multidireccionamiento',
    'edu.coursework.c5': 'Gráficos por Computadora y Modelado 3D',
    'edu.coursework.c6': 'Redes de Computadoras y Ciberseguridad',
    'edu.coursework.c7': 'Sistemas Operativos',
    'edu.coursework.c8': 'Sistemas de Bases de Datos',
    'edu.certs.title': 'Certificaciones',
    'edu.certs.c1': 'Certificado EF SET Standard English: 70/100 (C1 Avanzado) — Fluidez Profesional Verificada (2024)',
    'edu.certs.c2': 'Certificados Profesionales Alura Latam: Git y GitHub (2024) · HTML5 y CSS3 (2024) · Lógica de Programación con JavaScript (2024)',
    'edu.certs.c3': 'Google Cloud Computing Foundations: Arquitectura en la nube, servicios de infraestructura y almacenamiento (2023)',
    'edu.certs.c4': 'Six Sigma Green Belt: Gestión de calidad, optimización estadística de procesos y reducción de defectos (2021)',
    'edu.certs.c5': 'Universidad de Macquarie / Coursera: Habilidades de Excel para Negocios: Esenciales (2021)',

    // Skills
    'skills.title': 'Habilidades',
    'skills.cat.programming': 'Lenguajes de Programación',
    'skills.cat.lims': 'Software Empresarial y LIMS',
    'skills.cat.frameworks': 'Frameworks y Librerías',
    'skills.cat.hardware': 'Hardware y Sistemas Embebidos',
    'skills.cat.databases': 'Bases de Datos y Almacenamiento',
    'skills.cat.devops': 'DevOps, Nube y Servidores',
    'skills.cat.tools': 'Observabilidad y Herramientas',
    'skills.cat.methodologies': 'Metodologías y Prácticas',
    'skills.cat.languages': 'Idiomas',
    'skills.lang.spanish': 'Español (Nativo)',
    'skills.lang.english': 'Inglés (C1 Avanzado — Puntaje EF SET 70/100)',
    'skills.lang.french': 'Francés (A2 Elemental)',

    // Projects
    'projects.title': 'Proyectos',
    'projects.tab.overview': 'Resumen',
    'projects.tab.code': 'El Código',
    'projects.tab.result': 'Resultado y Enlace',
    'projects.visitLive': 'Visitar Aplicación en Vivo',

    'projects.gem.title': 'Planeta Gema',
    'projects.gem.role': 'Plataforma Full-Stack de Comercio Electrónico para Gemas y Joyería — Proyecto Personal',
    'projects.gem.desc':
      'Diseñé y desarrollé una plataforma de comercio electrónico multi-vendedor lista para producción utilizando Java 21 / Spring Boot 3, React 19 / Vite 6, PostgreSQL 16 con migraciones Flyway (24 versiones) y Firebase Authentication (JWT + Google OAuth). Cuenta con un motor de precios multinivel configurable con modelos de tarifas basados en JSON, árbol de filtros jerárquico que reduce el código del catálogo en un 60%, procesamiento de medios con FFmpeg que reduce el peso de imágenes en un 85%, y control de acceso RBAC multi-vendedor con reportes financieros de liquidación.',
    'projects.gem.outcome':
      'Plataforma en producción para comercialización de gemas y joyería con ciclo de vida completo de producto, optimización automatizada de medios y despliegue con Docker Compose.',

    'projects.api.title': 'API REST Empresarial',
    'projects.api.role': 'Pasante de Ingeniería de Software — Siemens DI SW',
    'projects.api.desc':
      'Desarrollé una API REST modular con Java 17 y Spring Boot, implementando Spring Data JPA con modelos DTO para conectividad segura a múltiples bases de datos y compilaciones multi-perfil con Maven para despliegues en pruebas y producción.',
    'projects.api.outcome':
      'Desplegado en múltiples entornos con perfiles Maven, logrando un comportamiento de API consistente y conectividad optimizada mediante JPA.',

    'projects.viz.title': 'Plataforma de Visualización de Datos',
    'projects.viz.role': 'Pasante de Ingeniería de Software — Siemens DI SW',
    'projects.viz.desc':
      'Construí una plataforma interactiva de visualización de datos en Mendix, consolidando conjuntos de datos de Oracle DB y Salesforce con filtrado dinámico, ordenamiento, vistas de consulta personalizadas y reportes exportables.',
    'projects.viz.outcome':
      'Consolidó datos de múltiples fuentes en un solo panel interactivo, automatizando reportes y reduciendo el tiempo de consulta manual.',

    'projects.water.title': 'Monitor Multi-Sensor de Calidad del Agua',
    'projects.water.role': 'Proyecto Instituto de Ingeniería UNAM',
    'projects.water.desc':
      'Diseñé e implementé un sistema multi-sensor para el monitoreo de la calidad del agua. Desarrollé firmware en FPGA para protocolos de comunicación (UART, I2C, SPI), controlando conversiones ADC y calibrando sensores según estándares requeridos.',
    'projects.water.outcome':
      'Captura exitosa de múltiples parámetros de calidad del agua con sensores calibrados, demostrando monitoreo en tiempo real impulsado por FPGA.',

    // Experience
    'exp.title': 'Experiencia Profesional',
    'exp.current': 'Puesto Actual',
    'exp.zifo.company': 'Zifo RnD Solutions',
    'exp.zifo.role': 'Scientific Application Analyst & Software Engineer',
    'exp.zifo.period': 'Mayo 2025 — Septiembre 2026',
    'exp.zifo.location': 'Ciudad de México (Cliente: Regeneron Pharmaceuticals)',
    'exp.zifo.b1': 'Desarrollé e implementé plugins personalizados en Java (fat JARs vía Gradle/Maven) y reglas en Groovy para Agilent SLIMS y Sapio LIMS, automatizando flujos de trabajo de almacenamiento y surtido para más de 6,000,000 de tubos de muestras biológicas en congeladores automatizados.',
    'exp.zifo.b2': 'Diseñé salvaguardas de migración empresarial durante la transición de fin de semana a Sapio: programé reglas de sistema personalizadas en Groovy, interceptores API 403 Forbidden y validación de payloads JSON para forzar estados de solo lectura en más de 6M de registros sin corrupción de datos.',
    'exp.zifo.b3': 'Estandarizé esquemas JSON para APIs REST interdepartamentales de ingreso y extracción de muestras; diseñé y automaticé suites completas de pruebas de integración en Postman, eliminando discrepancias de transferencia de datos.',
    'exp.zifo.b4': 'Administré instancias de aplicaciones Linux multi-nivel vía SSH, orquestando servicios de Apache HTTPD, Tomcat y gateway de SLIMS con systemctl; utilicé consultas distribuidas en Splunk para diagnosticar transacciones no completadas y recuperar solicitudes descartadas.',
    'exp.zifo.b5': 'Refactoricé plugins de consultas científicas pesadas en hilos de trabajo asíncronos en segundo plano, resolviendo advertencias de tiempo de espera de 1 minuto en navegadores y previniendo envíos duplicados de órdenes por parte de técnicos de laboratorio.',
    'exp.zifo.b6': 'Fundé el repositorio centralizado y base de código de ingeniería LIMS global de Zifo, estandarizando plantillas modulares de plugins en Java, resolviendo el enrutamiento de dependencias privadas de Maven y reduciendo el tiempo de incorporación de nuevos ingenieros de días a horas—reconocido por la directiva ejecutiva senior como un hito organizacional.',
    'exp.zifo.b7': 'Lideré reuniones Scrum diarias a las 9:00 AM EST con supervisores y técnicos del Biobanco de Regeneron a lo largo de tres zonas horarias globales (India, EE. UU., México), traduciendo requisitos complejos de laboratorio en tickets técnicos del backlog; completé una inmersión técnica de 6 semanas en Chennai, India.',

    'exp.siemens.company': 'Siemens DI SW',
    'exp.siemens.role': 'Pasante de Ingeniería de Software',
    'exp.siemens.period': 'Mayo 2024 — Abril 2025',
    'exp.siemens.location': 'Ciudad de México',
    'exp.siemens.b1': 'Desarrollé una API REST modular con Java 17 y Spring Boot, implementando Spring Data JPA con modelos DTO para conectividad segura a múltiples bases de datos y compilaciones multi-perfil con Maven para despliegues en pruebas y producción.',
    'exp.siemens.b2': 'Construí una plataforma interactiva de visualización de datos en Mendix, consolidando conjuntos de datos de Oracle DB y Salesforce con filtrado dinámico, ordenamiento, vistas de consulta personalizadas y reportes exportables.',
    'exp.siemens.b3': 'Automaticé el procesamiento de solicitudes de datos mediante la configuración de servicios de correo SMTP y tareas programadas en segundo plano para monitorear flujos de correo, disparar actualizaciones transaccionales a bases de datos y despachar alertas automáticas.',
    'exp.siemens.b4': 'Mantuve un control de versiones disciplinado e higiene de repositorios con Git y Bitbucket, facilitando revisiones fluidas de pull requests, validaciones automatizadas de compilación y despliegues a producción con cero regresiones.',

    'exp.qualfon.company': 'Qualfon',
    'exp.qualfon.role': 'Representante Bilingüe de Servicio al Cliente y Líder de Equipo',
    'exp.qualfon.period': 'Enero 2020 — Julio 2022',
    'exp.qualfon.location': 'Ciudad de México',
    'exp.qualfon.b1': 'Apoyé, orienté y capacité proactivamente a los miembros del equipo en estrategias de atención telefónica, protocolos de comunicación y flujos de trabajo en sistemas, resolviendo con éxito consultas críticas escaladas de clientes.',
    'exp.qualfon.b2': 'Audité los resultados operativos diarios siguiendo marcos estandarizados de medición del desempeño para dar seguimiento a KPIs individuales, identificar oportunidades de capacitación y mantener los acuerdos de nivel de servicio (SLAs).',

    // Footer
    'footer.backToTop': 'Volver arriba',
    'footer.builtWith': 'Creado con React, TypeScript y Tailwind CSS.',
  },
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
