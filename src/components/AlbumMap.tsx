import { useNavigate } from 'react-router-dom';
import { albumConfig } from '../data/albumConfig';

export default function AlbumMap() {
  const navigate = useNavigate();


  const getSeasonColor = (season: string) => {
    switch (season) {
      case 'spring':
        return 'bg-green-900/20 border-green-700/40 text-green-300';
      case 'summer':
        return 'bg-red-900/20 border-red-700/40 text-red-300';
      case 'fall':
        return 'bg-amber-900/20 border-amber-700/40 text-amber-300';
      case 'winter':
        return 'bg-blue-900/20 border-blue-700/40 text-blue-300';
      default:
        return 'bg-gray-900/20 border-gray-700/40 text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-terminal-bg text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Album Header */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-mono uppercase tracking-wider text-gray-200 mb-4">
            {albumConfig.title}
          </h1>
          <p className="text-lg font-mono text-gray-400 mb-6 leading-relaxed max-w-3xl">
            Four seasonal EPs across 2026, then a full album with bonus tracks in Jan 2027. Each EP maps to a zone on Treasure Island.
          </p>
        </header>

        {/* Zones/EPs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {albumConfig.eps.map((ep) => {
            const zone = albumConfig.world.zones.find(z => z.id === ep.zoneId);
            if (!zone) return null;
            const seasonColor = getSeasonColor(ep.season);
            
            return (
              <button
                key={ep.id}
                onClick={() => navigate(`/ep/${ep.id}`)}
                className={`p-6 border rounded-lg transition-all duration-300 text-left w-full
                         ${seasonColor} hover:opacity-80 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-600/50`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-gray-500">
                    {ep.season.toUpperCase()} EP
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wide text-amber-400">
                    →
                  </span>
                </div>
                
                <h3 className="text-2xl font-mono uppercase tracking-wide text-gray-200 mb-2">
                  {ep.title}
                </h3>
                
                <div className="mb-3">
                  <p className="text-sm text-gray-400 font-mono mb-1">
                    <strong className="text-gray-300">Zone:</strong> {zone.name}
                  </p>
                  <p className="text-xs text-gray-500 font-mono italic">
                    {zone.description}
                  </p>
                </div>
                
                <p className="text-sm text-gray-300 font-mono leading-relaxed mb-3">
                  {ep.theme}
                </p>
                
                <div className="mt-4 pt-3 border-t border-gray-700/30">
                  <span className="text-xs font-mono uppercase tracking-wide text-gray-400">
                    {ep.releaseWindow}
                  </span>
                  {ep.songs.length > 0 && (
                    <span className="text-xs font-mono uppercase tracking-wide text-amber-400 ml-3">
                      • {ep.songs.length} {ep.songs.length === 1 ? 'song' : 'songs'}
                    </span>
                  )}
                </div>
              </button>
            );
          }).filter(Boolean)}
        </div>
      </div>
    </div>
  );
}
