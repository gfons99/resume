import { SkillCard } from './SkillCard';
import { useLanguage } from '../../context/useLanguage';

export function SkillsSection() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.cat.programming'),
      skills: ["Java (21/17/8)", "Groovy", "C", "C++", "Python", "SQL", "SOQL", "JavaScript", "TypeScript", "Bash", "HTML (Markup)", "CSS (Styling)", "XML"],
      delay: 0.05
    },
    {
      title: t('skills.cat.lims'),
      skills: ["Agilent SLIMS", "Sapio LIMS", "Biobanking", "Freezer Sample Management", "Plugin Architecture", "System Rules"],
      delay: 0.1
    },
    {
      title: t('skills.cat.frameworks'),
      skills: ["Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "React", "React Router", "Vite", "Bootstrap", "Tailwind CSS", "Lombok", "Mendix (Low-Code Platform)"],
      delay: 0.15
    },
    {
      title: t('skills.cat.hardware'),
      skills: ["Verilog", "VHDL", "FPGA Design", "Microcontrollers", "Analog-to-Digital Converters (ADC)", "UART", "I2C", "SPI"],
      delay: 0.2
    },
    {
      title: t('skills.cat.databases'),
      skills: ["PostgreSQL", "Oracle DB", "HeidiSQL", "SQL Developer", "Flyway (Schema Migrations)", "Relational Schema Design", "JSON", "Amazon S3"],
      delay: 0.25
    },
    {
      title: t('skills.cat.devops'),
      skills: ["Linux (Debian-based, Arch-based)", "Docker", "Docker Compose", "Cloudflare Tunnels", "Apache HTTPD", "Apache Tomcat", "systemctl", "SSH", "SMTP (Email Services)", "AWS (S3, SNS, SQS)", "Firebase Authentication (JWT, Google OAuth)", "Apache Maven", "Gradle", "Git", "Bitbucket", "GitHub", "CI/CD Pipelines", "pnpm Workspaces"],
      delay: 0.3
    },
    {
      title: t('skills.cat.tools'),
      skills: ["Splunk", "Postman", "FFmpeg", "OpenAPI/Swagger", "IntelliJ IDEA", "Visual Studio Code", "Eclipse"],
      delay: 0.35
    },
    {
      title: t('skills.cat.methodologies'),
      skills: ["Agile/Scrum", "Sprint Planning", "Jira", "Jira Tempo", "Code Reviews", "Six Sigma"],
      delay: 0.4
    },
    {
      title: t('skills.cat.languages'),
      skills: [t('skills.lang.spanish'), t('skills.lang.english'), t('skills.lang.french')],
      delay: 0.45
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('skills.title')}
          </h2>
          <div className="w-20 h-1 bg-blue-500 rounded glow-blue" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              skills={category.skills}
              delay={category.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
