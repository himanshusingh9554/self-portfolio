import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, ChevronRight } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { profile, projects, experiences, skillCategories } from '@/data/portfolio';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionHeading } from '@/components/SectionHeading';
import { ResumeDownloadButton } from '@/components/ResumeDownloadButton';
import { ProfileAvatar } from '@/components/ProfileAvatar';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const latestExperience = experiences[0];
  const topSkillCategories = skillCategories.slice(0, 4);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-navy-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-navy-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column (Content) */}
            <div className="lg:col-span-8">
              {/* Status badge */}
              <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0 }}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-navy-500/10 text-navy-400 border border-navy-500/20 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Available for opportunities
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-surface-100 leading-tight mb-6"
              >
                {profile.headline.split('&').map((part, i) =>
                  i === 0 ? (
                    <span key={i}>
                      {part}
                      <span className="text-gradient">&</span>
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </motion.h1>

              {/* Summary */}
              <motion.p
                {...fadeUp}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-surface-400 leading-relaxed mb-4 max-w-2xl"
              >
                {profile.summary}
              </motion.p>

              {/* Location */}
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex items-center gap-2 text-sm text-surface-500 mb-8"
              >
                <MapPin className="w-4 h-4" />
                {profile.location}
              </motion.div>

              {/* CTAs */}
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-3 mb-10"
              >
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-navy-600 hover:bg-navy-500 rounded-lg transition-colors shadow-lg shadow-navy-600/20"
                >
                  View My Projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <ResumeDownloadButton variant="secondary" />
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-surface-300 hover:text-surface-100 transition-colors"
                >
                  Get in Touch
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>

              {/* Technology strip */}
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap items-center gap-3"
              >
                <span className="text-xs text-surface-600 uppercase tracking-wider font-medium">Tech:</span>
                {profile.headlineTechnologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-md bg-surface-800/60 text-surface-300 border border-surface-700/40"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right Column (Avatar) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-4 flex justify-center lg:justify-end"
            >
              <ProfileAvatar size="lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Selected Work"
            title="Featured Projects"
            description="A selection of projects showcasing full-stack development, system design, and AI integration."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-navy-400 hover:text-navy-300 transition-colors"
            >
              View all projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Experience preview ── */}
      <section className="py-20 sm:py-24 border-t border-surface-800/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Experience"
            title="Professional Background"
            description="Most recent role and professional experience."
          />
          {latestExperience && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card p-6 sm:p-8 max-w-3xl mx-auto"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                <div>
                  <h3 className="text-xl font-semibold text-surface-100">{latestExperience.role}</h3>
                  <p className="text-sm text-navy-400 font-medium mt-1">{latestExperience.company}</p>
                </div>
                <span className="text-sm text-surface-500 shrink-0">
                  {latestExperience.startDate} – {latestExperience.endDate}
                </span>
              </div>
              <ul className="space-y-2 mb-5">
                {latestExperience.responsibilities.slice(0, 3).map((r, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-surface-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-500/60 mt-2 shrink-0" />
                    {r}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-1 text-sm font-medium text-navy-400 hover:text-navy-300 transition-colors"
              >
                View full experience
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* ── Skills overview ── */}
      <section className="py-20 sm:py-24 border-t border-surface-800/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Skills"
            title="Technical Toolkit"
            description="Core technologies and tools I work with."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {topSkillCategories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card p-4 text-center"
              >
                <h3 className="text-sm font-semibold text-surface-200 mb-2">{cat.name}</h3>
                <p className="text-xs text-surface-500">
                  {cat.skills.slice(0, 4).join(' · ')}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/skills"
              className="inline-flex items-center gap-1 text-sm font-medium text-navy-400 hover:text-navy-300 transition-colors"
            >
              View all skills
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="py-20 sm:py-24 border-t border-surface-800/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-surface-100 mb-4">
              Let's Work Together
            </h2>
            <p className="text-surface-400 max-w-md mx-auto mb-8">
              I'm open to full-time positions and freelance opportunities. Feel free to reach out.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-navy-600 hover:bg-navy-500 rounded-lg transition-colors shadow-lg shadow-navy-600/20"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-surface-300 bg-surface-800 hover:bg-surface-700 border border-surface-700 rounded-lg transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
