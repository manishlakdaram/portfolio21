import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding">
    <div className="max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-gradient">Get In Touch</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-6 mx-auto" />
        <p className="text-muted-foreground mb-10">
          I'm always open to discussing new projects, opportunities, or just saying hello!
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {[
            { icon: Mail, label: "Email", value: "manishlakdaram1002@gmail.com", href: "mailto:manishlakdaram1002@gmail.com" },
            { icon: Phone, label: "Phone", value: "+91-9390826083", href: "tel:+919390826083" },
            { icon: Linkedin, label: "LinkedIn", value: "ManishLakdaram", href: "https://linkedin.com/in/ManishLakdaram" },
            { icon: Github, label: "GitHub", value: "ManishLakdaram", href: "https://github.com/ManishLakdaram" },
          ].map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-xl p-5 flex items-center gap-4 hover:glow-border transition-all group text-left"
            >
              <Icon size={20} className="text-primary group-hover:scale-110 transition-transform flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                <p className="text-foreground text-sm font-medium truncate">{value}</p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </div>

    {/* Footer */}
    <div className="border-t border-border mt-16 pt-8 text-center">
      <p className="text-muted-foreground text-sm">
        © 2025 Manish Lakdaram. Built with <span className="text-primary">♥</span>
      </p>
    </div>
  </section>
);

export default ContactSection;
