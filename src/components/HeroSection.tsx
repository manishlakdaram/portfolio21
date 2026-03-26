import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import avatar from "@/assets/avatar.jpg";

const roles = ["Cloud Enthusiast", "Software Developer", "Problem Solver", "AWS Builder"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid md:grid-cols-2 gap-12 items-center pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-muted-foreground text-lg mb-2">Hi, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            <span className="text-gradient">Manish</span>
            <br />
            <span className="text-foreground">Lakdaram</span>
          </h1>

          <div className="h-8 mb-6">
            <span className="text-primary font-mono text-lg">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
            Computer Science student passionate about cloud computing, software development,
            and building scalable serverless systems on AWS.
          </p>

          <div className="flex gap-4 mb-8">
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/ManishLakdaram" },
              { icon: Github, href: "https://github.com/ManishLakdaram" },
              { icon: Mail, href: "mailto:manishlakdaram1002@gmail.com" },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition text-sm"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary hover:text-primary transition text-sm"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/50 glow-border">
              <img src={avatar} alt="Manish Lakdaram" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-float" style={{ margin: "-8px" }} />
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll Down</span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
