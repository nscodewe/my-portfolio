"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedBackground from "@/components/AnimatedBackground";
import Splash from "@/components/Splash";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import { basics } from "@/lib/data";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen text-slate-100 selection:bg-cyan-500/30">
      <AnimatePresence>
        {loading ? (
          <Splash key="splash" />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <AnimatedBackground />
            <Navbar />
            <div className="max-w-6xl mx-auto px-6 space-y-32 pb-20">
              <Hero data={basics} />
              <Skills />
              <Education />
              {/* Additional content from resume lines */}
              <section id="additional" className="py-10 border-t border-white/10">
                <h3 className="text-xl font-bold mb-4 opacity-50">Career Objectives</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <p className="text-slate-400">Eager to learn from industry mentors and work on real-world challenges.</p>
                  <p className="text-slate-400">Taking initiative to improve technical and professional skills.</p>
                </div>
              </section>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between p-6 bg-slate-950/20 backdrop-blur-md border-b border-white/5">
      <span className="font-bold tracking-tighter text-xl">NS.</span>
      <div className="flex gap-6 text-sm font-medium opacity-70">
        <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
        <a href="#education" className="hover:text-cyan-400 transition-colors">Path</a>
      </div>
    </nav>
  );
}