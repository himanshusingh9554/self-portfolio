import { cn } from '@/lib/utils';

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProjectFilter({ categories, activeCategory, onCategoryChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-10" role="tablist" aria-label="Filter projects by category">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          role="tab"
          aria-selected={activeCategory === cat}
          className={cn(
            'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
            activeCategory === cat
              ? 'bg-navy-600 text-white shadow-md shadow-navy-600/20'
              : 'text-surface-400 bg-surface-800/50 hover:text-surface-200 hover:bg-surface-800'
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
