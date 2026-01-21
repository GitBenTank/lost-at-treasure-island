import { Filter } from '../types';

interface FilterBarProps {
  currentFilter: Filter;
  onFilterChange: (filter: Filter) => void;
}

const filters: Filter[] = ['All', 'Sound', 'Visual', 'Lyric', 'Vibe', 'Light', 'Dark', 'Battle', 'Sacred'];

export default function FilterBar({ currentFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`
            px-4 py-2 text-xs font-mono uppercase tracking-wider
            border transition-all duration-200
            ${
              currentFilter === filter
                ? 'border-neon-cyan bg-neon-cyan/10 text-neon-cyan shadow-[0_0_10px_rgba(90,244,255,0.3)]'
                : 'border-gray-600 text-gray-400 hover:border-gray-500 hover:text-gray-300'
            }
          `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

