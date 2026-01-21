import { useParams, useNavigate } from 'react-router-dom';
import { albumConfig } from '../data/albumConfig';
import SceneCard from './SceneCard';
import WantsAndNeedsPage from './WantsAndNeedsPage';

export default function SongPage() {
  const { songId } = useParams<{ songId: string }>();
  const navigate = useNavigate();

  // Find the song across all EPs
  let song = null;
  let ep = null;
  
  for (const currentEP of albumConfig.eps) {
    const foundSong = currentEP.songs.find(s => s.id === songId);
    if (foundSong) {
      song = foundSong;
      ep = currentEP;
      break;
    }
  }

  if (!song || !ep) {
    return (
      <div className="min-h-screen bg-terminal-bg text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-400 font-mono">Song not found</p>
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

  const zone = albumConfig.world.zones.find(z => z.id === ep.zoneId);

  return (
    <div className="min-h-screen bg-terminal-bg text-gray-200">
      {/* Song Header */}
      <div className="border-b border-gray-800 bg-terminal-bg/95 backdrop-blur-sm sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-mono uppercase tracking-wider text-gray-200 mb-2">
                {song.title}
              </h1>
              <p className="text-sm font-mono uppercase tracking-widest text-gray-500">
                {ep.title} • {ep.season.toUpperCase()} EP • {zone?.name}
              </p>
            </div>
            <button
              onClick={() => navigate(`/ep/${ep.id}`)}
              className="px-4 py-2 font-mono text-xs uppercase tracking-wider
                       border border-cyan-400/30 bg-[#0a0c0f]/90 backdrop-blur-sm
                       text-cyan-400 hover:bg-[#0a0c0f] hover:border-cyan-400/50
                       transition-all duration-200"
            >
              ← EP
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            <span className={`text-xs font-mono uppercase tracking-widest px-3 py-1 rounded
                            ${song.energyLevel === 'high' ? 'bg-red-900/40 text-red-300 border border-red-700/40' :
                              song.energyLevel === 'medium' ? 'bg-amber-900/40 text-amber-300 border border-amber-700/40' :
                              'bg-blue-900/40 text-blue-300 border border-blue-700/40'}`}>
              {song.energyLevel.toUpperCase()} ENERGY
            </span>
            {song.scenes && song.scenes.length > 0 && (
              <span className="text-xs font-mono uppercase tracking-wide text-gray-400">
                {song.scenes.length} {song.scenes.length === 1 ? 'SCENE' : 'SCENES'}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Scenes Section */}
      {song.scenes && song.scenes.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="font-mono text-xl uppercase tracking-widest text-amber-400 mb-6 text-western-shadow">
            STORYBOARD SCENES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {song.scenes.map((scene) => (
              <SceneCard key={scene.id} scene={scene} />
            ))}
          </div>
        </div>
      )}

      {/* Legacy Storyboard for So High */}
      {songId === 'so-high' && (
        <div className="border-t border-gray-800">
          <WantsAndNeedsPage onBack={() => navigate(`/ep/${ep.id}`)} />
        </div>
      )}
    </div>
  );
}
