import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectFilter } from '@/components/ProjectFilter';
import { SectionHeading } from '@/components/SectionHeading';

const CATEGORIES = ['All', 'Full Stack', 'Professional'];

function getCategoryLabel(cat: string): string | null {
  if (cat === 'All') return null;
  if (cat === 'Full Stack') return 'fullstack';
  if (cat === 'Professional') return 'professional';
  return null;
}

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    const catKey = getCategoryLabel(activeCategory);
    if (!catKey) return projects;
    return projects.filter((p) => p.category === catKey);
  }, [activeCategory]);

  return (
    <section className="pt-12 pb-20 sm:pt-16 sm:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Portfolio"
          title="Projects"
          description="Applications I've built, from personal projects to professional work."
        />

        <ProjectFilter
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-surface-500"
          >
            No projects in this category.
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
