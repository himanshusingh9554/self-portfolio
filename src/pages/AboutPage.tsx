import { motion } from 'framer-motion';
import { MapPin, GraduationCap } from 'lucide-react';
import { profile, experiences, education } from '@/data/portfolio';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { SectionHeading } from '@/components/SectionHeading';
import { ResumeDownloadButton } from '@/components/ResumeDownloadButton';
import { ProfileAvatar } from '@/components/ProfileAvatar';

export function AboutPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="pt-12 pb-16 sm:pt-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-8"
            >
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-navy-400 mb-3">
                About Me
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-surface-100 mb-4">
                {profile.fullName}
              </h1>
              <p className="text-lg text-navy-400 font-medium mb-2">{profile.title}</p>
              <div className="flex items-center gap-2 text-sm text-surface-500 mb-6">
                <MapPin className="w-4 h-4" />
                {profile.location}
              </div>
              <p className="text-surface-400 leading-relaxed mb-6">
                {profile.summary}
              </p>
              <ResumeDownloadButton variant="secondary" size="sm" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="md:col-span-4 flex justify-center md:justify-end"
            >
              <ProfileAvatar size="lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section className="py-16 sm:py-20 border-t border-surface-800/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Experience"
            title="Work History"
            align="left"
          />
          <div className="max-w-3xl">
            <ExperienceTimeline experiences={experiences} />
          </div>
        </div>
      </section>

      {/* ── Education ── */}
      <section className="py-16 sm:py-20 border-t border-surface-800/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Education"
            title="Academic Background"
            align="left"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6 max-w-3xl"
          >
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-navy-500/10 text-navy-400 shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-surface-100">{education.degree}</h3>
                <p className="text-sm text-navy-400 font-medium mt-0.5">{education.field}</p>
                <p className="text-sm text-surface-400 mt-1">{education.institution}</p>
                <p className="text-xs text-surface-500 mt-0.5 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {education.location}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
