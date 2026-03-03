// components/Splash.tsx
import { motion } from "framer-motion";
export default function Splash() {
  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-4xl font-bold tracking-tighter text-white"
      >
        NS<span className="text-cyan-500">.</span>
      </motion.div>
    </div>
  );
}