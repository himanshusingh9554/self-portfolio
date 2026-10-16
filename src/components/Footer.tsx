import { Link } from 'react-router-dom';
import { Mail, MapPin, Heart, FileDown } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { profile } from '@/data/portfolio';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-800/60 bg-surface-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-navy-600 flex items-center justify-center text-white font-bold text-xs">
                H
              </div>
              <span className="font-semibold text-surface-100">{profile.fullName}</span>
            </Link>
            <p className="text-sm text-surface-500 max-w-xs">
              {profile.title} building thoughtful web experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-surface-200 uppercase tracking-wider mb-3">
              Navigation
            </h3>
            <ul className="space-y-2">
              {[
                { label: 'About', path: '/about' },
                { label: 'Projects', path: '/projects' },
                { label: 'Skills', path: '/skills' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-surface-400 hover:text-navy-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={profile.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-surface-400 hover:text-navy-400 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  Resume (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-surface-200 uppercase tracking-wider mb-3">
              Get in Touch
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-sm text-surface-400 hover:text-navy-400 transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-surface-400">
                <MapPin className="w-4 h-4 shrink-0" />
                {profile.location}
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-surface-400 hover:text-navy-400 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 shrink-0" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-surface-800/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-surface-500">
            © {currentYear} {profile.fullName}. All rights reserved.
          </p>
          <p className="text-xs text-surface-600 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-400" /> using React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
