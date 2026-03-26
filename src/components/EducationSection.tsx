import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Technology — Computer Science and Engineering",
    score: "CGPA: 5.89",
    period: "Aug 2023 – Present",
  },
  {
    school: "Siddhartha College",
    location: "Vikarabad, Telangana",
    degree: "Intermediate",
    score: "Percentage: 94%",
    period: "Apr 2020 – May 2022",
  },
  {
    school: "Siddhartha School",
    location: "Vikarabad, Telangana",
    degree: "Matriculation",
    score: "Percentage: 98%",
    period: "Apr 2019 – Mar 2020",
  },
];

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-gradient">Education</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-10" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-4 top-1 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <GraduationCap size={10} className="text-primary" />
                </div>

                <div className="glass rounded-xl p-5 hover:glow-border transition-all">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-foreground font-semibold">{edu.school}</h3>
                    <span className="text-primary font-mono text-xs">{edu.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{edu.degree}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">{edu.score}</span>
                    <span className="text-xs text-muted-foreground">{edu.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
