import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import type { Experience } from '@/types';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-navy-500/60 via-surface-700/40 to-transparent hidden sm:block" />

      <div className="space-y-8">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative sm:pl-12"
          >
            {/* Timeline dot */}
            <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-navy-500 ring-4 ring-surface-950 hidden sm:block" />

            <div className="glass-card p-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-surface-100">{exp.role}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Briefcase className="w-3.5 h-3.5 text-navy-400" />
                    <span className="text-sm font-medium text-navy-400">{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1 text-xs text-surface-500 shrink-0">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {exp.startDate} – {exp.endDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                    {exp.type === 'remote' && (
                      <span className="px-1.5 py-0.5 bg-green-500/10 text-green-400 rounded text-xs ml-1">
                        Remote
                      </span>
                    )}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-2">
                {exp.responsibilities.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-surface-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-500/60 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
