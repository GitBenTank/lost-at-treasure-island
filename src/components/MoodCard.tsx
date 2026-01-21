import { MoodCard } from '../types';

interface MoodCardProps {
  card: MoodCard;
}

export default function MoodCardComponent({ card }: MoodCardProps) {
  return (
    <div className="group relative p-6 border border-gray-700 bg-terminal-bg/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-cyan/20 hover:border-neon-cyan hover:shadow-[0_0_20px_rgba(90,244,255,0.2)]">
      <div className="mb-2">
        <span className="text-xs font-mono uppercase tracking-widest text-neon-cyan">
          {card.category}
        </span>
      </div>
      
      <h3 className="text-lg font-mono uppercase tracking-wide mb-3 text-gray-200 group-hover:text-neon-cyan transition-colors">
        {card.title}
      </h3>
      
      <p className="text-sm text-gray-400 mb-4 leading-relaxed">
        {card.description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {card.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs font-mono uppercase tracking-wide bg-gray-800/50 border border-gray-700 text-gray-400 group-hover:border-neon-magenta group-hover:text-neon-magenta transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

