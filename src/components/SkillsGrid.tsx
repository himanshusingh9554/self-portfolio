import { motion } from 'framer-motion';
import {
  Monitor, Server, Database, Brain, Cloud, Code2, Layers
} from 'lucide-react';
import type { SkillCategory } from '@/types';

const categoryIcons: Record<string, typeof Monitor> = {
  Frontend: Monitor,
  Backend: Server,
  Databases: Database,
  'AI & LLM': Brain,
  'Cloud & DevOps': Cloud,
  'Computer Science': Layers,
  Languages: Code2,
};

interface SkillsGridProps {
  categories: SkillCategory[];
}

export function SkillsGrid({ categories }: SkillsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {categories.map((cat, i) => {
        const Icon = categoryIcons[cat.name] || Code2;
        return (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="glass-card p-5 group hover:border-navy-500/40 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-navy-500/10 text-navy-400 group-hover:bg-navy-500/20 transition-colors">
                <Icon className="w-4 h-4" />
              </div>
              <h3 className="font-semibold text-surface-200 text-sm">{cat.name}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-surface-800/80 text-surface-300 border border-surface-700/40 hover:border-navy-500/40 hover:text-navy-300 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
