import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Briefcase } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import type { Project } from '@/types';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass-card p-6 hover:border-navy-500/40 transition-all duration-300 hover:glow-sm flex flex-col"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex-1">
          {project.isProfessional && (
            <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-400/80 bg-amber-400/10 px-2 py-0.5 rounded-full mb-2">
              <Briefcase className="w-3 h-3" />
              Professional Work
            </span>
          )}
          <h3 className="text-lg font-semibold text-surface-100 group-hover:text-navy-400 transition-colors">
            <Link to={`/projects/${project.slug}`}>
              {project.title}
            </Link>
          </h3>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-surface-500 hover:text-surface-200 hover:bg-surface-800 rounded-lg transition-colors"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-surface-500 hover:text-surface-200 hover:bg-surface-800 rounded-lg transition-colors"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Tagline */}
      <p className="text-sm text-surface-400 mb-4 flex-1">
        {project.tagline}
      </p>

      {/* Key highlights */}
      <ul className="space-y-1.5 mb-5">
        {project.highlights.slice(0, 3).map((highlight) => (
          <li key={highlight} className="flex items-start gap-2 text-xs text-surface-500">
            <span className="w-1 h-1 rounded-full bg-navy-400 mt-1.5 shrink-0" />
            {highlight}
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.technologies.slice(0, 6).map((tech) => (
          <span
            key={tech}
            className={cn(
              'px-2 py-0.5 text-xs rounded-md font-medium',
              'bg-surface-800/80 text-surface-300 border border-surface-700/50'
            )}
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 6 && (
          <span className="px-2 py-0.5 text-xs rounded-md text-surface-500">
            +{project.technologies.length - 6}
          </span>
        )}
      </div>

      {/* View details link */}
      <Link
        to={`/projects/${project.slug}`}
        className="inline-flex items-center gap-1 text-sm font-medium text-navy-400 hover:text-navy-300 transition-colors group/link"
      >
        View Details
        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
      </Link>
    </motion.article>
  );
}
