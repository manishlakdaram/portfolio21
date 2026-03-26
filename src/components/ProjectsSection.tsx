import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Cloud-Native Expense Tracking System",
    period: "Aug 2025 – Nov 2025",
    description:
      "Built a scalable serverless platform for tracking and managing expenses on AWS. Developed using Lambda, API Gateway, DynamoDB, and a React.js frontend with secure IAM-based APIs and CI/CD automation.",
    tech: ["AWS Lambda", "API Gateway", "DynamoDB", "React.js", "Docker", "GitHub Actions", "CloudWatch"],
    github: "https://github.com/ManishLakdaram",
  },
  {
    title: "Auto-Scaling Web App with Load Balancing",
    period: "Feb 2024 – Jun 2024",
    description:
      "Deployed a highly available and scalable web application using AWS infrastructure automation. Built on EC2 with Auto Scaling Groups, ALB, CloudWatch monitoring, SNS alerts, and Multi-AZ RDS.",
    tech: ["AWS EC2", "Auto Scaling", "ALB", "CloudWatch", "RDS", "SNS", "VPC"],
    github: "https://github.com/ManishLakdaram",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-gradient">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-10" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-xl p-6 hover:glow-border transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0 ml-3"
                >
                  <Github size={18} />
                </a>
              </div>
              <p className="text-xs text-primary font-mono mb-3">{project.period}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
