import { useParams, useNavigate } from 'react-router-dom';
import { albumConfig } from '../data/albumConfig';

export default function EPPage() {
  const { epId } = useParams<{ epId: string }>();
  const navigate = useNavigate();

  const ep = albumConfig.eps.find(e => e.id === epId);
  const zone = ep ? albumConfig.world.zones.find(z => z.id === ep.zoneId) : null;

  if (!ep) {
    return (
      <div className="min-h-screen bg-terminal-bg text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-400 font-mono">EP not found</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 px-4 py-2 font-mono text-xs uppercase tracking-wider
                     border border-cyan-400/30 bg-[#0a0c0f]/90 backdrop-blur-sm
                     text-cyan-400 hover:bg-[#0a0c0f] hover:border-cyan-400/50
                     transition-all duration-200"
          >
            ← BACK TO MAP
          </button>
        </div>
      </div>
    );
  }

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

  const seasonColor = getSeasonColor(ep.season);

  return (
    <div className="min-h-screen bg-terminal-bg text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* EP Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-mono uppercase tracking-wider text-gray-200 mb-2">
                {ep.title}
              </h1>
              <p className="text-sm font-mono uppercase tracking-widest text-gray-500">
                {ep.season.toUpperCase()} EP • {ep.releaseWindow}
              </p>
            </div>
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 font-mono text-xs uppercase tracking-wider
                       border border-cyan-400/30 bg-[#0a0c0f]/90 backdrop-blur-sm
                       text-cyan-400 hover:bg-[#0a0c0f] hover:border-cyan-400/50
                       transition-all duration-200"
            >
              ← MAP
            </button>
          </div>
          
          {zone && (
            <div className={`p-4 rounded-lg border ${seasonColor} mb-4`}>
              <p className="text-xs font-mono uppercase tracking-wide text-gray-400 mb-1">
                ZONE
              </p>
              <p className="text-lg font-mono text-gray-200 mb-1">
                {zone.name}
              </p>
              <p className="text-sm text-gray-300 font-mono italic">
                {zone.description}
              </p>
            </div>
          )}
          
          <p className="text-base font-mono text-gray-300 leading-relaxed max-w-3xl">
            {ep.theme}
          </p>
        </header>

        {/* Songs List */}
        <section>
          <h2 className="font-mono text-xl uppercase tracking-widest text-amber-400 mb-6 text-western-shadow">
            SONGS
          </h2>
          
          {ep.songs.length === 0 ? (
            <div className="text-center py-12 text-gray-500 font-mono uppercase tracking-wider">
              No songs yet
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ep.songs.map((song) => {
                const energyColors = {
                  low: 'bg-blue-900/20 border-blue-700/40',
                  medium: 'bg-amber-900/20 border-amber-700/40',
                  high: 'bg-red-900/20 border-red-700/40'
                };
                
                return (
                  <button
                    key={song.id}
                    onClick={() => navigate(`/song/${song.id}`)}
                    className={`p-6 border rounded-lg transition-all duration-300 text-left w-full
                             ${energyColors[song.energyLevel]} hover:opacity-80 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-600/50`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className={`text-xs font-mono uppercase tracking-widest px-2 py-1 rounded
                                     ${song.energyLevel === 'high' ? 'bg-red-900/40 text-red-300' :
                                       song.energyLevel === 'medium' ? 'bg-amber-900/40 text-amber-300' :
                                       'bg-blue-900/40 text-blue-300'}`}>
                        {song.energyLevel.toUpperCase()}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-wide text-amber-400">
                        →
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-mono uppercase tracking-wide text-gray-200 mb-2">
                      {song.title}
                    </h3>
                    
                    {song.scenes && song.scenes.length > 0 && (
                      <div className="mt-4 pt-3 border-t border-gray-700/30">
                        <span className="text-xs font-mono uppercase tracking-wide text-gray-400">
                          {song.scenes.length} {song.scenes.length === 1 ? 'scene' : 'scenes'}
                        </span>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
