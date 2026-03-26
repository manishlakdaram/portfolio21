import { motion } from "framer-motion";
import { MapPin, GraduationCap, Cloud, Phone } from "lucide-react";

const facts = [
  { icon: MapPin, label: "Location", value: "Punjab, India" },
  { icon: GraduationCap, label: "Education", value: "B.Tech CSE at LPU" },
  { icon: Cloud, label: "Focus Area", value: "Cloud & DevOps" },
  { icon: Phone, label: "Phone", value: "+91-9390826083" },
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-gradient">Quick Facts</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {facts.map(({ icon: Icon, label, value }) => (
            <div key={label} className="glass rounded-xl p-5 hover:glow-border transition-all group">
              <Icon size={20} className="text-primary mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
              <p className="text-foreground font-medium">{value}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">My Journey</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Hello! I'm Manish Lakdaram, a Computer Science and Engineering student at Lovely Professional University
            with a focus on cloud computing, DevOps, and full-stack development.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I've built scalable serverless platforms on AWS, deployed auto-scaling web applications with load balancing,
            and enjoy combining infrastructure automation with modern frontend frameworks. I'm driven by solving
            real-world problems with technology and building systems that scale.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
