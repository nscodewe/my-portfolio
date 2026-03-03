import { motion } from "framer-motion";

export default function Education() {
  const edu = [
    { school: "BML Munjal University", degree: "B.Tech Computer Science", date: "2024 - 2028" },
    { school: "Vidya Devi Jindal School", degree: "Senior Secondary", date: "2022 - 2023" }
  ];

  return (
    <section id="education" className="py-20">
      <h2 className="text-3xl font-bold mb-12 tracking-tighter">Academic Path</h2>
      <div className="space-y-8">
        {edu.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative pl-8 border-l border-white/10"
          >
            <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]" />
            <h3 className="text-xl font-bold">{item.school}</h3>
            <p className="text-cyan-400 text-sm mb-1">{item.degree}</p>
            <p className="text-slate-500 text-xs font-mono">{item.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}