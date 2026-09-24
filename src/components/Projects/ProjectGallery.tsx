import { ProjectCard } from './ProjectCard';
import { useLanguage } from '../../context/useLanguage';

export function ProjectGallery() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('projects.gem.title'),
      role: t('projects.gem.role'),
      description: t('projects.gem.desc'),
      techTags: ["Java 21", "Spring Boot 3", "React 19", "Vite 6", "PostgreSQL 16", "Flyway", "Firebase Auth", "FFmpeg", "Docker Compose"],
      codeSnippet: `// Two-pass compounding pricing engine hook
@Entity
@Table(name = "product_pricing")
public class ProductPricing {

    @Column(columnDefinition = "jsonb")
    private PricingFeeModel feeModel;
    private BigDecimal basePrice;
    private BigDecimal finalCustomerPrice;

    @PrePersist
    @PreUpdate
    public void computeCompoundedPricing() {
        // Pass 1: Apply merchant-scoped tier percentage
        BigDecimal intermediate = feeModel.calculateTierMarkup(this.basePrice);
        // Pass 2: Apply fixed category transaction & settlement fees
        this.finalCustomerPrice = feeModel.applyFixedFees(intermediate);
    }
}`,
      outcome: t('projects.gem.outcome'),
      liveUrl: 'https://planetagema.com'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/50 dark:bg-slate-900/20 relative transition-colors duration-700">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('projects.title')}
          </h2>
          <div className="w-20 h-1 bg-blue-500 rounded glow-blue" />
        </div>

        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
