import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center tracking-tighter">Technical Arsenal</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-500/50 transition-colors"
          >
            <span className="text-slate-300 font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}