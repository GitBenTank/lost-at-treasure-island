import type { Scene } from '../data/types';

interface SceneCardProps {
  readonly scene: Scene;
}

export default function SceneCard({ scene }: SceneCardProps) {
  return (
    <div className="relative dusty-overlay rounded-lg p-6 bg-[#0a0c0f]/50 border border-amber-800/30 hover:border-amber-700/50 transition-all">
      <h3 className="font-mono text-lg uppercase tracking-widest text-amber-400 mb-3 text-western-shadow">
        {scene.title}
      </h3>
      
      {scene.image && (
        <div className="mb-4 aspect-video bg-black/50 border border-amber-800/30 rounded-lg overflow-hidden">
          <img
            src={scene.image}
            alt={scene.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
      )}
      
      <p className="text-sm text-gray-300 font-mono leading-relaxed mb-3">
        {scene.description}
      </p>
      
      {scene.notes && (
        <div className="mt-3 pt-3 border-t border-amber-800/30">
          <p className="text-xs text-amber-200/80 font-mono italic">
            {scene.notes}
          </p>
        </div>
      )}
    </div>
  );
}
