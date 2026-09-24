import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export function ContactSection() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "gadielfonsecamx@gmail.com",
      href: "mailto:gadielfonsecamx@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "gfons99",
      href: "https://github.com/gfons99",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "gadiel-fonseca",
      href: "https://www.linkedin.com/in/gadiel-fonseca/",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-500 rounded glow-blue mx-auto" />
          <p className="text-slate-600 dark:text-slate-400 mt-6 text-lg leading-relaxed max-w-xl mx-auto">
            Open to new opportunities and collaborations. Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-slate-400 mb-8">
          <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>Coyoacán, Mexico City</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noreferrer" : undefined}
              className="glass-card p-6 flex flex-col items-center gap-3 group cursor-pointer hover:scale-105 hover:-translate-y-0.5 transition-transform duration-200"
            >
              <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 group-hover:bg-blue-200 dark:group-hover:bg-blue-500/20 group-hover:border-blue-300 dark:group-hover:border-blue-500/40 transition-all duration-300">
                <link.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" />
              </div>
              <span className="text-slate-900 dark:text-white font-medium">{link.label}</span>
              <span className="text-slate-600 dark:text-slate-400 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                {link.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
