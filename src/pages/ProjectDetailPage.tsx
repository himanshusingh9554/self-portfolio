import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Briefcase, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { projects } from '@/data/portfolio';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-2xl font-bold text-surface-100 mb-4">Project not found</h1>
        <p className="text-surface-400 mb-6">The project you're looking for doesn't exist.</p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-navy-400 hover:text-navy-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>
      </div>
    );
  }

  return (
    <section className="pt-12 pb-20 sm:pt-16 sm:pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-surface-500 hover:text-surface-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          All Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-8">
            {project.isProfessional && (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-amber-400/80 bg-amber-400/10 px-2 py-0.5 rounded-full mb-3">
                <Briefcase className="w-3 h-3" />
                Professional Work
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl font-bold text-surface-100 mb-3">
              {project.title}
            </h1>
            <p className="text-lg text-surface-400">{project.tagline}</p>
          </div>

          {/* Action links */}
          <div className="flex flex-wrap gap-3 mb-10">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-surface-200 bg-surface-800 hover:bg-surface-700 border border-surface-700 rounded-lg transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                Source Code
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-navy-600 hover:bg-navy-500 rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {!project.github && !project.liveDemo && (
              <span className="inline-flex items-center gap-2 px-4 py-2.5 text-sm text-surface-500 bg-surface-800/50 border border-surface-700/50 rounded-lg">
                <Briefcase className="w-4 h-4" />
                Source code is private (professional project)
              </span>
            )}
          </div>

          {/* Description */}
          <div className="glass-card p-6 sm:p-8 mb-8">
            <h2 className="text-lg font-semibold text-surface-100 mb-4">Overview</h2>
            <p className="text-surface-400 leading-relaxed">{project.description}</p>
          </div>

          {/* Highlights */}
          <div className="glass-card p-6 sm:p-8 mb-8">
            <h2 className="text-lg font-semibold text-surface-100 mb-4">Key Highlights</h2>
            <ul className="space-y-3">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3 text-sm text-surface-400">
                  <CheckCircle2 className="w-4 h-4 text-navy-400 mt-0.5 shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="glass-card p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-surface-100 mb-4">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm font-medium rounded-lg bg-surface-800/80 text-surface-300 border border-surface-700/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
