import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  children?: ReactNode;
  align?: 'left' | 'center';
}

export function SectionHeading({ label, title, description, children, align = 'center' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={align === 'center' ? 'text-center mb-12' : 'mb-12'}
    >
      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-navy-400 mb-3">
        {label}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-surface-100 mb-4">
        {title}
      </h2>
      {description && (
        <p className={`text-surface-400 max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
}
