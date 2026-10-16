import { skillCategories } from '@/data/portfolio';
import { SkillsGrid } from '@/components/SkillsGrid';
import { SectionHeading } from '@/components/SectionHeading';

export function SkillsPage() {
  return (
    <section className="pt-12 pb-20 sm:pt-16 sm:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Technical Skills"
          title="My Toolkit"
          description="Technologies and tools I use to build reliable, scalable applications."
        />
        <SkillsGrid categories={skillCategories} />
      </div>
    </section>
  );
}
