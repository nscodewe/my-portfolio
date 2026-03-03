import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ChevronDown } from "lucide-react";

export default function Hero({ data }: { data: any }) {
  return (
    <section className="pt-40 flex flex-col items-center text-center">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
          {data.name}
        </h1>
        <p className="text-cyan-400 font-mono mb-8 max-w-2xl mx-auto leading-relaxed uppercase tracking-widest text-sm">
          {data.label}
        </p>
        <p className="max-w-2xl mx-auto text-slate-400 leading-relaxed text-lg mb-10">
          {data.summary}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth'})}
            className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform"
          >
            View Experience
          </button>
          <div className="flex gap-2">
            <a href={`mailto:${data.email}`} className="p-4 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://github.com/nscodewe" target="_blank" className="p-4 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/neha-sharma-880bb3336" target="_blank" className="p-4 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}