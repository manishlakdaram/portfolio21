import { motion } from "framer-motion";
import { useState } from "react";

type Category = "all" | "languages" | "frameworks" | "cloud" | "tools";

const skills: { name: string; level: number; category: Category[] }[] = [
  { name: "Java", level: 85, category: ["languages"] },
  { name: "Python", level: 80, category: ["languages"] },
  { name: "ReactJS", level: 80, category: ["frameworks"] },
  { name: "NodeJS", level: 75, category: ["frameworks"] },
  { name: "HTML & CSS", level: 90, category: ["frameworks"] },
  { name: "Bootstrap", level: 75, category: ["frameworks"] },
  { name: "AWS", level: 85, category: ["cloud"] },
  { name: "Microsoft Azure", level: 70, category: ["cloud"] },
  { name: "Docker", level: 70, category: ["cloud", "tools"] },
  { name: "MySQL", level: 80, category: ["tools"] },
  { name: "Git & GitHub", level: 85, category: ["tools"] },
  { name: "CI/CD", level: 75, category: ["cloud", "tools"] },
  { name: "Linux", level: 70, category: ["tools"] },
];

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All Skills" },
  { key: "languages", label: "Languages" },
  { key: "frameworks", label: "Web Tech" },
  { key: "cloud", label: "Cloud & DevOps" },
  { key: "tools", label: "Tools" },
];

const SkillsSection = () => {
  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? skills : skills.filter((s) => s.category.includes(active));

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-gradient">My Skills & Expertise</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground mb-8 max-w-xl">
            Technologies I've worked with across cloud, development, and DevOps domains.
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  active === cat.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl p-5"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-primary text-sm font-mono">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.05 }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, hsl(187 100% 50%), hsl(265 80% 55%))`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
