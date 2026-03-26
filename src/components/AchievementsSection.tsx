import { motion } from "framer-motion";
import { Trophy, Award, Star, BadgeCheck } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Top Performer — Cloud & DevOps Bootcamp",
    detail: "Completed 25+ AWS hands-on labs",
    date: "May 2025",
  },
  {
    icon: Award,
    title: "Top 43% Globally — HackerRank",
    detail: "Problem-Solving Certification",
    date: "Sep 2024",
  },
  {
    icon: Star,
    title: "5-Star C++ Rating — HackerRank",
    detail: "Earned top badges on LeetCode and HackerRank",
    date: "Jan 2024",
  },
];

const certificates = [
  { title: "Data Structures & Algorithms", org: "Cipher Schools", date: "Jul 2025" },
  { title: "Build Generative AI Apps with No-Code Tools", org: "Online", date: "Oct 2024" },
  { title: "BinaryBlitz Web Hackathon", org: "Coding Competition", date: "Mar 2024" },
];

const AchievementsSection = () => (
  <section id="achievements" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          <span className="text-gradient">Achievements & Certificates</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-10" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Achievements */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Trophy size={20} className="text-primary" /> Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-5 flex gap-4 items-start hover:glow-border transition-all"
                >
                  <a.icon size={22} className="text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-foreground font-medium text-sm">{a.title}</p>
                    <p className="text-muted-foreground text-xs mt-1">{a.detail}</p>
                    <p className="text-primary font-mono text-xs mt-2">{a.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <BadgeCheck size={20} className="text-primary" /> Certificates
            </h3>
            <div className="space-y-4">
              {certificates.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-xl p-5 hover:glow-border transition-all"
                >
                  <p className="text-foreground font-medium text-sm">{c.title}</p>
                  <p className="text-muted-foreground text-xs mt-1">{c.org}</p>
                  <p className="text-primary font-mono text-xs mt-2">{c.date}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AchievementsSection;
