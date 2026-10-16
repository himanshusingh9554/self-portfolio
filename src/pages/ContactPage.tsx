import { motion } from 'framer-motion';
import { MapPin, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { profile } from '@/data/portfolio';
import { ContactDetails } from '@/components/ContactDetails';
import { ContactForm } from '@/components/ContactForm';
import { SectionHeading } from '@/components/SectionHeading';

export function ContactPage() {
  return (
    <section className="pt-12 pb-20 sm:pt-16 sm:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Get in Touch"
          description="I'm open to opportunities and collaborations. Reach out and let's talk."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left column — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-surface-100 mb-4">Contact Information</h3>
            <ContactDetails />

            {/* Location, Resume & Social */}
            <div className="mt-4 space-y-3">
              <div className="glass-card p-4 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-navy-500/10 text-navy-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-surface-500 mb-0.5">Location</div>
                  <div className="text-sm font-medium text-surface-300">{profile.location}</div>
                </div>
              </div>

              {/* Resume download card */}
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 flex items-center justify-between gap-3 hover:border-navy-500/40 transition-all duration-300 group block cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-navy-500/10 text-navy-400 shrink-0 group-hover:bg-navy-500/20 transition-colors">
                    <FileDown className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-surface-500 mb-0.5">Resume</div>
                    <div className="text-sm font-medium text-surface-300 group-hover:text-white transition-colors">
                      View / Download PDF Resume
                    </div>
                  </div>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded bg-navy-600/20 text-navy-400 group-hover:bg-navy-600 group-hover:text-white transition-all">
                  Open PDF
                </span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 flex items-center gap-3 hover:border-navy-500/40 transition-all duration-300 block"
              >
                <div className="p-2 rounded-lg bg-navy-500/10 text-navy-400 shrink-0">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-surface-500 mb-0.5">GitHub</div>
                  <div className="text-sm font-medium text-surface-300">himanshusingh9554</div>
                </div>
              </a>

              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 flex items-center gap-3 hover:border-navy-500/40 transition-all duration-300 block"
                >
                  <div className="p-2 rounded-lg bg-navy-500/10 text-navy-400 shrink-0">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-surface-500 mb-0.5">LinkedIn</div>
                    <div className="text-sm font-medium text-surface-300">LinkedIn Profile</div>
                  </div>
                </a>
              )}
            </div>
          </motion.div>

          {/* Right column — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-surface-100 mb-4">Send a Message</h3>
            <div className="glass-card p-6">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
